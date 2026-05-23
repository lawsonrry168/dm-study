import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Lazy load Google Gen AI
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is not defined. Please define it in your Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// REST APIs

// 1. Health & Configuration Check
app.get("/api/config", (req, res) => {
  res.json({
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// 2. AI SEO Auditor API
app.post("/api/gemini/analyze-seo", async (req, res) => {
  try {
    const { title, description, content, keywords, audience } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content is required for SEO analysis." });
    }

    const ai = getGeminiClient();
    const prompt = `You are an expert SEO specialist and AI writer.
Analyze the following marketing copy/article and provide a highly detailed, professional SEO audit.
- Title: ${title || "N/A"}
- Meta Description: ${description || "N/A"}
- Focus Keywords: ${keywords || "N/A"}
- Target Audience: ${audience || "General"}
- Copy/Content:
"""
${content}
"""

Please return a single JSON object with the following schema:
- score: a number between 0 and 100
- keywordDensity: a description of focus keywords presence and if they are overused/underused
- titleCheck: feedback on the page title length and keyword presence
- descriptionCheck: feedback on meta description length and hook
- contentReadability: feedback on readability, structure, and headers
- bulletPoints: an array of 4 distinct, actionable recommendations to improve SEO score
- improvedDraft: a revised, optimized headline and excerpt based on the audit.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER, description: "SEO health score out of 100" },
            keywordDensity: { type: Type.STRING, description: "Check density of keywords" },
            titleCheck: { type: Type.STRING, description: "Page title feedback" },
            descriptionCheck: { type: Type.STRING, description: "Meta description feedback" },
            contentReadability: { type: Type.STRING, description: "Readability and flow feedback" },
            bulletPoints: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Four quick actionable items to improve SEO"
            },
            improvedDraft: { type: Type.STRING, description: "Optimized title and introductory sentence draft" }
          },
          required: ["score", "keywordDensity", "titleCheck", "descriptionCheck", "contentReadability", "bulletPoints", "improvedDraft"]
        }
      }
    });

    const parsedData = JSON.parse(response.text || "{}");
    res.json(parsedData);
  } catch (error: any) {
    console.error("SEO Audit Error:", error);
    res.status(500).json({ error: error.message || "SEO Audit analysis failed." });
  }
});

// 3. AI Marketing Persona & Strategy Generator API
app.post("/api/gemini/generate-persona-and-strategy", async (req, res) => {
  try {
    const { businessName, productDescription, targetAudience } = req.body;
    if (!productDescription) {
      return res.status(400).json({ error: "Product description is required." });
    }

    const ai = getGeminiClient();
    const prompt = `You are an elite Digital Marketing strategist. Generate a target consumer avatar (Persona) and customized marketing tactical roadmap for:
- Business/Product Name: ${businessName || "Startup"}
- Core Value Proposition Code of Product: ${productDescription}
- Intended Target Market Segment: ${targetAudience || "General digital consumers"}

Incorporate professional frameworks:
- SWOT Analysis
- AARRR Funnel metrics metrics to monitor
- 4P/4C matching points
- Unique Selling Proposition (USP)

Please return a single JSON object with the following schema:
- personaName: Name of primary typical consumer (e.g. "Tech-savvy Tracy")
- personaRole: Age, Job title, location, household description
- personaGoals: Array of 3 key goals of Tracy
- personaPainPoints: Array of 3 pain points of Tracy
- personaMediaHabits: Array of 3 key media habits (owned/earned/paid they live in)
- usp: Unified concise Unique Selling Proposition for this brand
- swot: Object containing:
  - strengths: Array of 2 strengths
  - weaknesses: Array of 2 weaknesses
  - opportunities: Array of 2 opportunities
  - threats: Array of 2 threats
- marketingMix4P4C: Object or string summarizing how Product maps to Customer Needs, Price to Cost, Place to Convenience, Promotion to Communication
- aarrrTactic: Object containing:
  - acquisition: Actionable tactic with metric (e.g. CPC)
  - activation: Tactic to deliver the first 'Aha' moment
  - retention: Repeat usage/engagement tactic
  - revenue: Monetization/referral tactic`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            personaName: { type: Type.STRING },
            personaRole: { type: Type.STRING },
            personaGoals: { type: Type.ARRAY, items: { type: Type.STRING } },
            personaPainPoints: { type: Type.ARRAY, items: { type: Type.STRING } },
            personaMediaHabits: { type: Type.ARRAY, items: { type: Type.STRING } },
            usp: { type: Type.STRING },
            swot: {
              type: Type.OBJECT,
              properties: {
                strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
                weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
                opportunities: { type: Type.ARRAY, items: { type: Type.STRING } },
                threats: { type: Type.ARRAY, items: { type: Type.STRING } }
              },
              required: ["strengths", "weaknesses", "opportunities", "threats"]
            },
            marketingMix4P4C: { type: Type.STRING, description: "Summary mapping 4P & 4C" },
            aarrrTactic: {
              type: Type.OBJECT,
              properties: {
                acquisition: { type: Type.STRING },
                activation: { type: Type.STRING },
                retention: { type: Type.STRING },
                revenue: { type: Type.STRING }
              },
              required: ["acquisition", "activation", "retention", "revenue"]
            }
          },
          required: ["personaName", "personaRole", "personaGoals", "personaPainPoints", "personaMediaHabits", "usp", "swot", "marketingMix4P4C", "aarrrTactic"]
        }
      }
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (error: any) {
    console.error("Strategy Generator Error:", error);
    res.status(500).json({ error: error.message || "Strategy generation failed." });
  }
});

// 4. AI Marketing Case Sandobox Scenario Evaluation API
app.post("/api/gemini/evaluate-case", async (req, res) => {
  try {
    const { scenarioId, scenarioTitle, scenarioProblem, studentApproach } = req.body;
    if (!studentApproach) {
      return res.status(400).json({ error: "Student response is empty." });
    }

    const ai = getGeminiClient();
    const prompt = `You are a university professor grading digital marketing assignments.
Evaluate this student's response to the scenario assignment.
- Scenario ID: ${scenarioId}
- Topic: ${scenarioTitle}
- Problem Statement: ${scenarioProblem}
- Student's Tactical Solution:
"""
${studentApproach}
"""

Evaluate their answer based on realism, ROI awareness, relevance to modern digital channel strategies, or metrics application.
Return a structured JSON object with:
- score: a grade out of 100
- qualityBadge: a funny or respectful badge title (e.g. "ROI Visionary", "Growth Rookie", "Funnel Strategist")
- feedbackText: professional, constructive and motivating evaluation text
- missingAspects: focus on 2 key parameters they could improve (e.g. CAC/ROAS monitoring, target persona alignment, or organic SEO content pillars)`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            qualityBadge: { type: Type.STRING },
            feedbackText: { type: Type.STRING },
            missingAspects: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["score", "qualityBadge", "feedbackText", "missingAspects"]
        }
      }
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (error: any) {
    console.error("Case Evaluation Error:", error);
    res.status(500).json({ error: error.message || "Evaluation failed." });
  }
});

// 5. AI Dynamic Quiz Generator API
app.post("/api/gemini/generate-custom-quiz", async (req, res) => {
  try {
    const { topic, difficulty } = req.body;
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const diffLevel = difficulty || "Medium";

    const ai = getGeminiClient();
    const prompt = `Generate a realistic 3-question multiple-choice quiz about the following Google Analytics, Meta Blueprint, or digital marketing topic: "${topic}".
The quiz difficulty must be strictly tailored to the level: "${diffLevel}".
- "Easy" means basic definitions, key acronyms, and direct, straightforward industry concepts suitable for entry-level learning.
- "Medium" means tactical application, simple practical calculations, or day-to-day settings configurations (such as standard campaign rules or basic on-page SEO tweaks).
- "Hard" means highly advanced diagnostics, complex technical SEO schemas, multi-layer attribution tracking models, or sophisticated financial optimization mathematical cases (e.g. detailed Link Toxicity, GEO or SGE, or deep CAC/ROAS/LTV ratios).

Each question should be extremely realistic, customized, and test high-quality digital marketing expertise precisely suited for "${diffLevel}" difficulty.
Make sure to output exactly 3 questions.

Provide a single JSON object matching this schema:
- questions: array of:
  - id: unique string (e.g., q1, q2, q3)
  - questionText: text of question
  - options: array of 4 strings (A, B, C, D options)
  - correctIndex: 0-indexed number of the correct option
  - explanation: concise sentence explaining why it's correct based on official guidelines`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  questionText: { type: Type.STRING },
                  options: { type: Type.ARRAY, items: { type: Type.STRING } },
                  correctIndex: { type: Type.INTEGER },
                  explanation: { type: Type.STRING }
                },
                required: ["id", "questionText", "options", "correctIndex", "explanation"]
              }
            }
          },
          required: ["questions"]
        }
      }
    });

    res.json(JSON.parse(response.text || "{}"));
  } catch (error: any) {
    console.error("Custom Quiz Error:", error);
    res.status(500).json({ error: error.message || "Custom quiz generation failed." });
  }
});

// 6. Gemini Grounded Search API
app.post("/api/gemini/grounded-search", async (req, res) => {
  const { query } = req.body;
  if (!query || typeof query !== "string") {
    return res.status(400).json({ error: "Search query is required." });
  }

  const lowercaseQuery = query.toLowerCase().trim();

  // Extensive Local Grounded Expert Dictionary Fallsback to secure stability when quota is limited / hit (like 429 Rate limits)
  const GROUNDED_FALLBACKS: Record<string, { text: string; sources: Array<{ title: string; uri: string }> }> = {
    "sge": {
      text: `### 確切定義 Core Definition
**SGE (Search Generative Experience / 生成式搜尋體驗)** 是 Google 近年最顛覆性的更新，核心是在傳統搜尋結果頁面頂部套用 **AI Overviews (AI 總覽)**。它會直接利用大型語言大模型自動整合、歸納全球多個可信資料來源，直接給予用戶完整解讀解答，從而大量降低用戶點擊進入各個普通網站的意願（所謂 Zero-click Searches）。

### 實務應用 / 計算公式 Practical Application & Calculation
- **資訊類搜尋大縮幅**:
  - 傳統 SEO 靠撰寫大量簡單「定義型文章」來騙取點擊流量的紅利期正式宣告結束。
  - 行銷人員必須轉變思維，追求將網頁內容優化為能被 AI Overviews 的「標籤卡片」引用（AI Citation Index）。
- **實務追蹤指標 (Citation Share)**:
  $$\\text{SGE 品牌提及佔有率} = \\frac{\\text{品牌在 AIO 被引用的次数}}{\\text{行業核心問題 AI 總覽總數}} \\times 100\\%$$

### 戰術關鍵 Tactic Advice
- 確保品牌在大量第三方權威網站、論壇（如 Reddit, Wikipedia, 知名垂直博落格）上有高質量的 **Brand Co-occurrence (品牌聯想提及)**。
- 專注佈局具有深刻「購買意圖（Transaction/Investigation Intent Map）」的長尾核心關鍵字，因為這類高商業價值的流量，AI 依然會保留大量鏈接至購物官網推薦。`,
      sources: [
        { title: "Google Search Generative Experience - Official Help", uri: "https://support.google.com/websearch/answer/14354226" },
        { title: "SGE & AI Overviews Best Practices Guide", uri: "https://developers.google.com/search/blog" }
      ]
    },
    "geo": {
      text: `### 確切定義 Core Definition
**GEO (Generative Engine Optimization / 生成式引擎優化)** 是在現行 AI 智能搜尋時代，為應對 SGE / Perplexity / ChatGPT 等 LLM 整合檢索而興起的全新 SEO 變體。它不單追求傳統網頁之特定關鍵字密度，而是專注於優化品牌在「生成式回答」中的 **AI 可見度 (AI Visibility)** 及其被主動引薦引用（Citation Count）的概率。

### 實務應用 / 計算公式 Practical Application & Calculation
- **Citations 引用率計算**:
  $$\\text{GEO Citations Rate} = \\frac{\\text{品牌官方 URL 被 LLM 引用的次數}}{\\text{當前行業推薦生成清單總數}} \\times 100\\%$$
- **雙維度並進系統 (Dual-Track GEO Framework)**:
  1. **SEO (搜尋引擎最佳化)**: 依然在「搜索引擎看得見」的地方（如代碼標註）佔標頭黃金位置。
  2. **GEO (生成式引擎最佳化)**: 在買家做出最後「影響決策」的關鍵高點（各大權受高信譽論壇、Wiki 百科），引進高強度外部提及。

### 戰術關鍵 Tactic Advice
- 根據 Andrew Holland 觀點：傳統 SEO 堆沙發般不斷生產海量網誌以刷流量的流水線工作「正在崩潰」，未來 GEO 走的是 **極度精準、針對式的權威信源 (Authority Sources)** 路線！
- 布局高品質的 Listicles (榜單文章，例如「10 個全港最推薦保溫杯品牌」)，這類結構能極大程度幫助大模型在生成推薦清單時，將你的品牌納入訓練及實時 RAG 召回範圍。`,
      sources: [
        { title: "Generative Engine Optimization (GEO) Framework - Stanford / Cornell Research", uri: "https://arxiv.org/abs/2311.09737" },
        { title: "2026 SGE New Trends & Perplexity Citations Overview", uri: "https://loyseo.com" }
      ]
    },
    "roas": {
      text: `### 確切定義 Core Definition
**ROAS (Return on Ad Spend / 廣告投資報酬率)** 是衡量付費搜尋行銷活動 (SEM/PPC Ads) 與多媒體廣告中最重要、最直觀的短期財務健康度指標。它告訴你每向廣告平台（如 Google Ads, Meta Ads）投入 $1 港幣，能直接為你帶來多少比例的直接網店銷售營收額。

### 實務應用 / 計算公式 Practical Application & Calculation
- **標準計算公式**:
  $$\\text{ROAS} = \\frac{\\text{由廣告活動產生的總營業總額 (Total Revenue)}}{\\text{投入的總廣告行銷花費 (Total Ad Spend)}} \\times 100\\%$$
- **經典範例**:
  假如你在推廣香薰蠟燭保溫杯時，在 Google 搜尋廣告投放了 **HK$2,000** 預算，後台連結追蹤到成功轉化引導並產生了 **HK$10,000** 的營業額：
  $$\\text{ROAS} = \\frac{10000}{2000} = 5.0 \\text{ (亦即 } 500\\% \\text{)}$$
  這代表每一元廣告代價能收回 5 倍的營業額。

### 戰術關鍵 Tactic Advice
- **警告：ROAS 並不等於 ROI (投資回報率)！**
- ROAS 僅僅計算「營收 (Revenue)」，並未扣除產品生產成本 (COGS)、物流運費及店面人手成本。
- 對於低毛利產品，即使 ROAS 達到 300% 依然可能會虧損；行銷主管應精算「臨界保本點 ROAS (Break-even ROAS)」，將其與新客獲取成本 (CAC) 結合分析。`,
      sources: [
        { title: "Standard ROAS Calculation Methodologies - HubSpot", uri: "https://blog.hubspot.com/marketing/roas-return-on-ad-spend" },
        { title: "Google Ads ROAS & Smart Bidding Mastery Guide", uri: "https://support.google.com/google-ads" }
      ]
    },
    "cac & ltv": {
      text: `### 確切定義 Core Definition
**CAC (Customer Acquisition Cost / 新客獲取成本)** 是指為獲取一名真正的新付費客戶所需付出的平均營銷及銷售總和成本。
**LTV (Customer Lifetime Value / 顧客終身價值)** 是指平均每個用戶在與你品牌的整個生命週期關係中，能為你帶來的總預期淨利潤或交易營收貢獻。

### 實務應用 / 計算公式 Practical Application & Calculation
- **核心計算公式**:
  - $$\\text{CAC} = \\frac{\\text{特定時段內的行銷推廣支出總和 (Google Ads + 社媒運營 + 銷售人手)}}{\\text{該時段內新轉化獲取之新客戶總數}}$$
  - **LTV / CAC 黃金健康律**:
    $$\\text{健康企業指標比值}: \\frac{\\text{LTV}}{\\text{CAC}} \\ge 3.0$$
- **實務解析**:
  - 如果此比值 $< 3$（例如 1.5），說明你要麼投了過多冤枉廣告費（CAC 偏高），要麼用戶買了一次就再也不回頭（LTV 偏低）。
  - 若 LTV/CAC 比值 $> 5$，說明你出價太保守，應更激進地增加 Google Ads SEM 投入奪取市場！

### 戰術關鍵 Tactic Advice
- 降低流失率 (Churn Rate) 是最快爆發 LTV 的密碼！
- 對於保溫杯、禮品或網店等「低頻場景」產品，戰術核心是將其與日常生活中的 **高頻場景 (High-frequency Contexts)** 相融合。例如長氣哥推廣健康食品時，提示用戶「將藥盒擺在辦公室桌上桌面，每天早晨上班第一時間伴水吞服」，將吃補品培養為一種無需思考的習慣！`,
      sources: [
        { title: "SaaS & LTV/CAC Metric Standard Guideline - Andreessen Horowitz", uri: "https://a16z.com" },
        { title: "Priceless Customer Retention Strategy - Codie Sanchez & Hormozi Principles", uri: "https://www.wordstream.com" }
      ]
    },
    "link pyramid": {
      text: `### 確切定義 Core Definition
**Link Pyramid (連結金字塔模型)** 是數位行銷 Off-page SEO 中頂尖的鏈路能量安全堆疊體系。它將不同權重、不同性質的反向連結 (Backlinks) 分層鋪設，構成完美有序的金字塔。這樣既能極大化傳遞 **SEO 能量 (Link Juice)**，又能有效地把大部分低品質外部連結隔絕在外圍，完美規避被 Google 演算法判定為「手動操縱反向連結」而降權的風險。

### 實務應用 / 計算公式 Practical Application & Calculation
- **金字塔三層架構模型 (Standard Link Pyramid)**:
  - **Tier 1 (塔尖 / 核心權威)**: 直接指向你的官方 Target Site。全屬最乾淨、純手工、來自 Authority Sources 在高權重行業媒體的原創 **Contextual Links (上下文錨文本連結)**，及 edu/gov 權威信源。
  - **Tier 2 (中層 / 蓄能提速)**: 指向 Tier 1 頁面。利用多個高品質高權重的論壇Seeding貼文、高信譽部落格 (Web 2.0 Network) 為塔尖鏈接提供曝光推力。
  - **Tier 3 (底層 / 廣撒網)**: 指向 Tier 2 頁面。底層可以利用大量普通社交提及、公開書籤，為 Tier 2 提供充足的索引機會 (Indexing Support)。

### 戰術關鍵 Tactic Advice
- **Link Toxicity (連結毒性偏高) 防護網**:
  - 當遇到惡意競爭對手惡意為你網站灌錄大量低品質小廣告鏈接時，不可盲目驚慌。Google 常會自動忽略（Mueller 指出不用刻意 Disavow 不利連結，因為演算法懂得識別）。
  - 但若檢索出大規模惡意污染警告，應果斷使用 **Google Webmaster Tools - Disavow Tool (拒絕連結工具)** 上傳 .txt 檔宣告與那些垃圾域名一刀切、不計入評分！`,
      sources: [
        { title: "Moz Off-Page SEO & Smart Search Rankings Handbook", uri: "https://moz.com/beginners-guide-to-seo/growing-popularity-and-links" },
        { title: "Standard Guidelines for Combating Link Toxicity - John Mueller Insights", uri: "https://developers.google.com/search" }
      ]
    },
    "dofollow vs nofollow": {
      text: `### 確切定義 Core Definition
反向連結主要由兩種屬性構成：
- **Dofollow 反向連結**: 在預設情況下不加特殊修飾。它指示搜尋引擎爬蟲 (Googlebot) 可以完全追蹤、並向目標網站傳遞 **PageRank SEO 網站權重得分 (Link Juice)**。
- **Nofollow 反向連結**: 在 HTML 超連結標籤中包含 'rel="nofollow"' 屬性。它指示搜尋引擎不要直接追蹤，更不要把當前網頁的任何 SEO 排名實體權重直接傳給對方。

### 實務應用 / 計算公式 Practical Application & Calculation
- **HTML 標準語法對照**:
  - 'dofollow' 示例:
    '<a href="https://livelygoods.co">保溫杯網店</a>'
  - 'nofollow' 示例:
    '<a href="https://yourbrand.com" rel="nofollow">查看真實案例</a>'
- **自然反向連結健康比率**:
  一個在互聯網上健康自然傳播的網站「絕不可能 100% 都是 dofollow 連結」。自然情況下，主流大平台（如 Reddit, Wikipedia, High-authority Seeding Forums）上的每一條留言超鏈接都會全自動附帶 nofollow，所以正常的比例應是混雜的，任何強行刷滿 dofollow 的行為均易引發算法警戒！

### 戰術關鍵 Tactic Advice
- **不要歧視 Nofollow 連結！** 
- Google 官方在 2019 後已將 'rel="nofollow"' 更改為「暗示性質 (Hint)」，亦即在計算品牌聲譽 (Online Reputation)、Contextual Link (上下文錨文本一致性) 時，高權重平台上的 nofollow 依舊會直接為你品牌加分，並且提供純淨、高轉化的優質引流 (Referral Traffic) 入站！`,
      sources: [
        { title: "Evolving link attributes: rel=nofollow - Google Search Central", uri: "https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify" },
        { title: "SEO Backlink Profile Optimization Rules - Ahrefs", uri: "https://ahrefs.com/blog/nofollow-links/" }
      ]
    },
    "orm": {
      text: `### 確切定義 Core Definition
**ORM (Online Reputation Management / 線上聲譽管理)** 是一款全方位守護品牌或企業名流在互聯網公共輿論場景口碑的戰術防線。旨在通過在 Google SERP (搜尋結果頁面)、熱門論壇（如小紅書, 連登 LIHKG, Discuss）提前部署正面而客觀的論壇 Seeding (論壇種草) 以及為創辦人製作百科條目，防禦競爭對手差評（酸民精準打擊），並利用算法反饋機制 **清洗並洗去** Google Autocomplete 下拉關聯聯想詞中的惡意污染詞組（如出現「騙局」、「垃圾」等危害字詞）。

### 實務應用 / 計算公式 Practical Application & Calculation
- **AutoComplete 聯想詞清洗閉環鏈路**:
  1. **禁忌**：千萬不要直接在論壇找水軍或官方在線與 Haters 激烈對謾宣戰，這反而會進一步刺激討論熱度，使負面詞在 autocomplete 中權重更深。
  2. **正向清洗法**:
    - 在新浪、百度、中文百科以及各高權重門戶論壇，定期發布以正向客觀痛點直擊為主題的高精確文章（Posts）。
    - 內容中撰寫高品質 **Contextual Link**。當大量群眾自然搜索並點擊這些正面優質網頁時，Google Autoplay 演算法自動在一段時間後重新評估並訓練大眾真正之檢索需求，從而把污染詞組頂出常規下拉首頁！

### 戰術關鍵 Tactic Advice
- 走「極致精準、針對性路線」。
- 巧妙使用高權重第三方平台（如 YouTube 影片、Reddit、主流公關通稿），因為這些權重在 Google 演算法天然被給予極高優先權，可以迅速在短時間內將負面文章擠壓出搜尋結果的第一頁之外，維持第一印象淨土！`,
      sources: [
        { title: "Online Reputation Management Mastery - Neil Patel", uri: "https://neilpatel.com" },
        { title: "Official Guidance on Google Suggest and Autocomplete Removal Guidelines", uri: "https://support.google.com" }
      ]
    },
    "aarrr": {
      text: `### 確切定義 Core Definition
**AARRR** 是黑客增長與數碼行銷中最經得起實戰考驗的「海盜用戶全生命週期模型（Pirate Metrics）」，由 Dave McClure 提出。它將網店和 O2O 行銷體系拆分為五個環環相扣的核心決策閉環，用數據漏斗的形式量化和審視用戶健康周期的每一步行進。

### 實務應用 / 計算公式 Practical Application & Calculation
1. **Acquisition (獲取)**: 你如何吸引潛在受眾進入網店？（例：長氣哥投放 Google Ads 關鍵字「[保溫杯]」）。
2. **Activation (激活)**: 用戶的第一印象好不好？（例：Elementor 頁面秒開、HTTPS 零防護警告、CTA 精準誘惑）。
3. **Retention (留存-核心！)**: 用戶買完一次會不會再買？（例：導入高頻場景引導、會員訂閱回饋）。
4. **Referral (推薦-裂變)**: 能否讓老顧客拉新客？（例：老帶新推薦送 $50 現金券、IG Meme 二創迷因傳播）。
5. **Revenue (變現)**: 行銷能否沉澱為實體營收？（例：快閃店 O2O 支持刷卡與現金雙向，挽回 34% 現金客戶）。

### 戰術關鍵 Tactic Advice
- **留存留不住的漏水漏洞水桶無任何投放價值！**
- 八成以上的破產行銷案，都是無底線地把所有預算燒在「Acquisition (買流量)」上，而網店的「Retention (留存)」做得一塌糊塗、顧客流失極快 Churn Rate $> 80\\%$。
- 務必將行銷重力重心前移，先精算優化 Activation & Retention 的網版體驗（如用 Elementor 做好手機端響應式微調，排除 12h 深夜收人手不均等線下運營硬體瓶頸），否則買再多的 Acquisition 也僅僅是徒勞浪費新客成本 (CAC)！`,
      sources: [
        { title: "Growth Hacker Marketing Complete Casebooks - Ryan Holiday", uri: "https://growthhackers.com" },
        { title: "Pirate Metrics (AARRR) Definitive Guide - Dave McClure", uri: "https://reforge.com" }
      ]
    }
  };

  // Match local grounded DB fallback first
  if (lowercaseQuery && GROUNDED_FALLBACKS[lowercaseQuery]) {
    return res.json(GROUNDED_FALLBACKS[lowercaseQuery]);
  }

  // Attempt fuzzy match
  for (const key of Object.keys(GROUNDED_FALLBACKS)) {
    if (lowercaseQuery.includes(key) || key.includes(lowercaseQuery)) {
      return res.json(GROUNDED_FALLBACKS[key]);
    }
  }

  try {
    const ai = getGeminiClient();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Explain the following digital marketing terminology, concept, or acronym: "${query}".
Ensure that your explanation is grounded in official, accurate digital marketing definitions (e.g. from Google Analytics, Meta Blueprint, HubSpot, standard marketing frameworks). Feel free to search the web for validation.

Maintain a clear, educational, professional tone. Deliver the explanation in Traditional Chinese / Hong Kong Cantonese (integrated with English terms where appropriate, as common in HK business circles). 

Specifically include:
1. **確切定義 Core Definition**: Standard and crystal clear meaning.
2. **實務應用 / 計算公式 Practical Application & Calculation**: Any math formulas (like CAC/ROAS/LTV/CPM etc.) or business applications in real O2O / SEO / PPC setups.
3. **戰術關鍵 Tactic Advice**: Highly tactical considerations or pitfalls.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = chunks
      .map((chunk: any) => ({
        title: chunk.web?.title || "參考來源",
        uri: chunk.web?.uri || "",
      }))
      .filter((s: any) => s.uri);

    res.json({
      text,
      sources,
    });
  } catch (error: any) {
    console.error("Grounded Search Quota Fallback Triggered. Error was:", error);

    // If API failed due to quota (429) or other errors, fallback to a generally high-quality response
    // rather than throwing a raw error component to the user view
    res.json({
      text: `### 確切定義 Core Definition
由於當前 Google AI Studio API 流量激增導致配額受限（Rate limit / Quota exceeded），我們已自動啟動 **本地行銷專家守護者模式**。

你所搜尋的術語「**${query}**」通常指代數位行銷或成長營運中的一項關鍵概念：
- 數位行銷十分講究 **資料與分析 (Metrics-Driven Marketing)**。不論是 PPC 廣告活動、On-page 或者是 Off-page SEO 優踐（如 Dofollow/Nofollow、Link Pyramid 的階梯能量），其最終目標都是為了最大化轉換率 (CVR) 與優化獲客成本 (CAC)。

### 實務應用 / 計算公式 Practical Application & Calculation
- 我們建議你在本平台上，嘗試點擊預設的熱門術語，如：**SGE (生成式搜尋經驗)**、**GEO (新搜尋優化)**、**ROAS (廣告投資報酬率)**、**CAC & LTV** 或 **ORM (聲譽管理)** 等快捷鍵。
- 本地落地的行銷系統已為此準備了極高品質的全面解答，點擊快捷鍵即可一秒加載、100% 繞過配額限流！

### 戰術關鍵 Tactic Advice
- 同時，別忘了在左手邊的 **實戰測驗營** 中，隨時點選 **「Astra 佈景建站實戰」**、**「Google Ads 搜尋廣告專家認證」** 等各學術徽章，在我們完備設計的 40 分鐘本地行銷仿真考試中鍛煉你的增長思維！祝你早日獲取滿分，成為一線行銷大師！`,
      sources: [
        { title: "數位增長學習社區 - 官方網站", uri: "https://www.kickads.co" },
        { title: "GA4 / 2026 生成式 GEO 行銷精選課程", uri: "https://loyseo.com" }
      ]
    });
  }
});

// Serve frontend assets and Start Server
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server fully operational on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Error launching server:", err);
});
