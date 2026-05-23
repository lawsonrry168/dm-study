/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Lesson, LessonCategory } from "../types";
import { DIGITAL_MARKETING_LESSONS } from "../data";
import { 
  BookOpen, 
  Clock, 
  Award, 
  Check, 
  ChevronRight, 
  ArrowLeft,
  Flame,
  CheckCircle2,
  Lock,
  ArrowRight
} from "lucide-react";

interface LessonsTabProps {
  completedLessons: string[];
  onCompleteLesson: (lessonId: string, points: number) => void;
}

export default function LessonsTab({ completedLessons, onCompleteLesson }: LessonsTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<LessonCategory | "All">("All");
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizError, setQuizError] = useState<string | null>(null);

  const categories: (LessonCategory | "All")[] = [
    "All",
    "Fundamentals",
    "Frameworks",
    "SEO",
    "Metrics & KPIs",
    "AI & Performance"
  ];

  // Map icons to names to prevent dynamic string importing issues with Lucide
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case "Frameworks":
        return <Award className="w-4 h-4 text-emerald-500" />;
      case "Metrics & KPIs":
        return <Award className="w-4 h-4 text-purple-500" />;
      case "SEO":
        return <Award className="w-4 h-4 text-indigo-500" />;
      default:
        return <BookOpen className="w-4 h-4 text-sky-500" />;
    }
  };

  const filteredLessons = DIGITAL_MARKETING_LESSONS.filter(
    (lesson) => selectedCategory === "All" || lesson.category === selectedCategory
  );

  // Generate a mock quick session review question for active lesson to enforce checkpoint rules
  const getCheckpointQuestion = (lessonId: string) => {
    switch (lessonId) {
      case "lesson-aarrr":
        return {
          question: `當我哋要分析點解啲用戶 click (點擊)完下載之後就完全冇晒動靜流失晒（跌客），我哋應該着重優化 AARRR (Acquisition, Activation, Retention, Revenue, Referral) 框架入面邊個階段？\nWhen we analyze why users drop off immediately after clicking download (churn), which specific stage in the AARRR (Acquisition, Activation, Retention, Revenue, Referral) Funnel Model should we focus on optimizing?\n\n【漏斗節點分析 / AARRR Stage Check】:\n📥 Acquisition  (獲客) ──> [點擊下載] (已完成)\n⚡ Activation   (活躍) ──> [用戶成效未激活？] ──> ❓ 呢關可能卡住咗！\n🛡️ Retention    (留存) ──> [用戶不重覆回來]\n💰 Revenue      (收益) ──> [用戶付費充值]`,
          options: [
            "Acquisition (獲客 / 廣告吸客) - 加大新戶曝光預算\nAcquisition - Increase awareness spend for new prospect acquisitions.",
            "Activation (活躍 / 新客激活) - 優化新戶登入流程，等佢哋最快感受到產品核心價值 (Aha! Moment 驚喜時刻)\nActivation - Streamline onboarding so users experience the core product value (Aha! Moment) fast.",
            "Referral (傳播 / 口碑傳送) - 給舊用戶更多回饋機制\nReferral - Reward existing user segments with code bonuses.",
            "Revenue (收益 / 營收轉化) - 調降產品訂閱費用\nRevenue - Slash product subscription plans."
          ],
          correct: 1,
          explanation: "正確答案！用戶下載完冇動靜代表未被「激活 (Activated)」。我哋要關注 Activation (活躍)，搵出佢 onboarding 登入流程邊度卡住，引導佢發掘 Aha! Moment 產品優點，先至能解決流失問題！"
        };
      case "lesson-marketing-mix":
        return {
          question: `喺由傳統企業主導嘅 4P (Product, Price, Place, Promotion) 演變去現代客群導向嘅 4C (Customer Needs, Cost, Convenience, Communication) 行銷組合入面，『商品 / 產品 (Product)』呢個維度被對照轉化為關注咩核心心智？\nWhen evolving from the classic 1960s brand-centric 4P to the customer-centric 4C (Customer Needs, Cost, Convenience, Communication) marketing mix, what does the 'Product (產品)' node transform into?`,
          options: [
            "顧客成本 (Cost) - 衡量用家買嘢要俾幾多金錢時間代價\nCost - Measuring total mental and monetary customer expenditures.",
            "便利性 (Convenience) - 交易物流管道嘅順暢度\nConvenience - The fluidity of checkout and delivery channels.",
            "雙向溝通 (Communication) - 唔用單向廣告而係同客群社交對話\nCommunication - Two-way social dialogues instead of pushed broadcast ads.",
            "顧客需求與解決方案 (Customer Needs & Solutions) - 專注解決顧客核心痛點與渴望\nCustomer Needs & Solutions - Focusing on addressing the core pain points and desires of the user."
          ],
          correct: 3,
          explanation: "正確答案！在 4C 架構下，產品 (Product) 變成對應 顧客需求與解決方案 (Customer Needs & Solutions)。我哋一味宣傳「件貨規格幾勁」，都不如直接表明「呢件產品點樣幫用家解決痛點」嚟得高效！"
        };
      case "lesson-metrics":
        return {
          question: `如果公司喺中環投放嘅香氛蠟燭網上廣告獲得咗 $12,000 港元嘅總營業額，而花費嘅廣告費為 $3,000 港元，呢次行銷推廣嘅 ROAS (Return on Ad Spend / 廣告投資報酬率) 應該係幾多？\nIf your online campaign targets Central offices and nets HKD 12,000 in total sales with an ad spend of HKD 3,000, what is the ROAS (Return on Ad Spend) achieved?\n\n【ROAS 反算矩陣 / Ad Spend ROI Chart】:\n┌──────────────────────────────────────────────┐\n│ Net Revenue (總營業額) : HKD $12,000         │ 📊 ROAS = (Sales / Cost) * 100%\n│ Ad Cost (廣告成本)      : HKD $3,050          │  e.g. ($12,000 / $3,000) * 100% = ❓\n└──────────────────────────────────────────────┘`,
          options: [
            "400% (投下每 1 元產生 4 元營收回報)\n400% (Nets HKD 4 of revenue return on every HKD 1 spend.)",
            "100% (啱啱好損益兩平)\n100% (Perfect breakeven metric.)",
            "250% (偏高成本的常規營運)\n250% (Standard operation margins with relative high acquisition thresholds.)",
            "500% (極佳爆發力成效)\n500% (Superior performance with extreme high scalability.)"
          ],
          correct: 0,
          explanation: "正確答案！ROAS 計算公式：ROAS = (廣告帶來嘅代銷營業額 / 廣告成本) * 100% = ($12,000 / $3,000) * 100% = 400%。即係你投 1 蚊廣告，能帶返 4 蚊營業額，成效相當理想！"
        };
      case "lesson-management":
        return {
          question: `喺數碼產品估值同留存分析入面，行銷主管通常要求一個健康良性嘅長線營運其 CLV (Customer Lifetime Value / 顧客終身價值，或作 LTV) 同 CAC (Customer Acquisition Cost / 客戶獲取成本) 應滿足何種關係？\nIn digital growth audit and cohort analytics, what is the gold-standard financial ratio between CLV (Customer Lifetime Value) and CAC (Customer Acquisition Cost)?\n\n【財務比例安全尺 / Profitability Standard Scale】:\n  LTV / CAC < 1.0  ──> ❌ 燒錢找死 (Bleeding cash rapid)\n  LTV / CAC = 1 ~ 2 ──> ⚠️ 勉強吊鹽水 (Barely surviving)\n  LTV / CAC >= 3.0  ──>   黃金健康指標 (Gold safe-margin!)`,
          options: [
            "LTV 需小於 CAC 否則沒錢找代理商\nLTV should be lower than CAC, otherwise lack cash for marketing agencies.",
            "LTV (顧客終生成本價值) 應大於 3 * CAC (客戶獲取成本)，以保障足夠嘅毛利空間與生存週期\nLTV (CLV) must be greater than three times CAC (LTV > 3 * CAC) to guarantee sustainable profit margins.",
            "LTV 必須剛好等於 100% 嘅 YoY (Year-over-Year / 年增率)\nLTV must equal exactly 100% of YoY revenue growth rate.",
            "CLV 同 CAC 毫無關聯，不需要在意\nCLV has zero programmatic correlation with CAC metrics."
          ],
          correct: 1,
          explanation: "正確答案！一間健康嘅數位公司，其黃金比例必須係 CLV (LTV) > 3 * CAC。如果比值小過 3，代表你要麼廣告獲客太貴，要麼客戶好快流出、根本冇回購 (PF - Purchase Frequency 極低)，生意好難做出盈利！"
        };
      case "lesson-seo":
        return {
          question: `下列關於 SEO (Search Engine Optimization / 搜尋引擎優化) 常用嘅「長尾關鍵字策略 (Long Tail Keyword Strategy)」敘述，邊個先至係啱？\nRegarding SEO (Search Engine Optimization), which statement about Long Tail Keyword Strategy is correct?\n\n【詞組意圖與流量分佈 / Search Intent Distribution】:\n[ Short Tail ] "香水"  ──>  流量極大 📈 / 意圖極模糊 ❓ / 競爭爆棚 ❌\n                         VS\n[ Long Tail ] "銅鑼灣天然防敏大豆香水" ──> 流量小 📉 / 意圖極精準 🎯 / 容易排第一 ✨`,
          options: [
            "專門挑選字字最短、搜尋量全網最高、競爭最白熱化嘅單字做排名，方便全港曝光\nTarget single shortest terms with maximum traffic volume and absolute white-hot competition.",
            "鎖定搜尋量雖然偏低，但客戶購買意圖極度明確、字數較多、容易被攻克且轉換率極高嘅精確字組\nFocus on phrase keywords with lower search volumes, but highly precise purchase intent, less competition, and higher CVR (Conversion Rate)!",
            "淨係靠投遞 Paid Ads (付費搜尋廣告)，完全唔使寫部落格內容\nPurely rely on Paid Ads searches and entirely bypass blog content generation.",
            "專門用嚟欺騙 Google 爬蟲，喺完全冇內容嘅網頁狂塞重複文字\nTrick Google index scrapers by stuffing raw keywords repetitive times on empty webpages."
          ],
          correct: 1,
          explanation: "正確答案！長尾字策略是 SEO 的基妙重點。雖然大字很難排到第一，但「銅鑼灣天然防敏大豆香薰」容易做起排名，點進來的客戶又是帶着明確購買需求，因此轉換率 (CVR) 常能高出大字數倍！"
        };
      case "lesson-google-ads-display-yt":
        return {
          question: `你正在投遞 YouTube TrueView 影片廣告推廣一項「會計自動化 Web 系統」。如果觀眾在第 15 秒按了「Skip 廣告」跳走，你本次需要付給 Google 多少每次觀看成本 (CPV)？\nYou run video campaigns. If a user clicks 'Skip' at the 15th second of your TrueView skippable ad, how much CPV are you charged?`,
          options: [
            "必須付全額廣告曝光費\nMust pay full exposure prices.",
            "不需付任何費用 (HK$0)，因為 TrueView Skippable Ads 的計費安全線是觀看滿 30 秒（不滿 30 秒則需播畢），或產生點擊互動才收費！\nZero dollars (HKD 0), as skippable TrueView ads only charge you if the viewer reaches 30s (or finishes if shorter) or interacts!",
            "扣除 $1,000 港元充值額作為跳過罰金\nCharges HKD 1,000 as penalty bills.",
            "要雙倍支付點擊費用\nMust pay double price costs."
          ],
          correct: 1,
          explanation: "沒錯！TrueView Skippable 廣告的黃金大門在於「 30秒安全紅利 」。只要用戶在前 5 到 29 秒按了 Skip 跳過，你不需要付一分錢 CPV！只有看過 30 秒或點按按鈕產生真實與連結互動才會扣款，可有效過濾無意圖流量！"
        };
      case "lesson-advanced-seo":
        return {
          question: `在 Google 2026 最新 Core Web Vitals (網站核心指標) 體系中，哪一個全新指標在 2024 年正式取代了 FID，用以監測全站每一次點擊、打字、按鈕時，重新繪製像素畫面給予使用者回饋的真實反應延遲？\nWhich metric officially replaced FID in Google's Core Web Vitals to quantify site interaction responsiveness?`,
          options: [
            "LCP (最大內容繪製) - Refers to image load speed.",
            "CLS (累積版面配置位移) - Refers to layout shifting stability.",
            "INP (Interaction to Next Paint, 互動至下次繪製時間) - 良好標準必須小於 200 毫秒！\nINP (Interaction to Next Paint) - Gold standard must be less than 200ms!",
            "CARR (回購存留比率) - Refers to financial cohorts."
          ],
          correct: 2,
          explanation: "正確！INP (Interaction to Next Paint) 正式上線接棒了 FID，它是全週期評量「每一次」網頁點擊與事件反饋繪製的延遲，金標準是小於 200 毫秒，用以篩選出因 JavaScript 事件阻礙網頁像素回饋的低劣體驗！"
        };
      case "lesson-personal-branding":
        return {
          question: `個人品牌大師與資深行銷總監極力推崇的「 Rule of 100 (百分之一鐵律)」增長心法，其核心理念在早期最強調什麼？\nWhat is the core spirit of the 'Rule of 100' to withstand early-stage creator depression?`,
          options: [
            "一定要購買 100 項最貴的錄音錄影高端配備\nMust purchase HKD 100,000 worth of video instruments.",
            "承諾在最初的 100 天內、或者前 100 次產出中，雷打不動、高度聚焦且「完全不看任何點讚與數據反饋」持續輸出，以建立初始內容地基與演算法權重！\nCommit to publishing 100 pieces of distinct quality items, completely disregarding vanity likes and stats to form thy initial asset database!",
            "去 100 個熱門大號底下發一模一樣的複製粘貼小卡廣告\nPaste raw coupon codes under 100 popular profiles.",
            "跟至少 100 位明星每天通電話做連線\nKeep phone call contacts with 100 famous stars daily."
          ],
          correct: 1,
          explanation: "Bingo！Rule of 100 的核心就是「專注做，別提早看數據」。在早期沒流量時，天天盯點讚數只會動搖心靈被勸退；雷打不動完成 100 項極佳內容產出，能幫你打磨好技能肌肉並建立演算法抓取的主權！"
        };
      case "lesson-generative-ai":
        return {
          question: `當我哋面臨對廣告回報 (ROAS)、淨資產收益、總租金等需要精密計算嘅金錢項目（如 PESTEL 中嘅 Economy 維度）時，點解行銷主管強烈要求必須在 Prompt 入面注入 “use python” 或者是開啟 Code Execution 生態？\nWhen evaluating financial, ROAS, and rent yield metrics, why must you instruct Gemini to "use python" or run Python scripts?\n\n【AI 計算機制分析 / AI Computation Paradigm Check】:\n  • Standard LLM mode ──> 基於關聯機率預測下一個字 ──> 🧮 容易「靠估」（產生幻覺誤差！）\n  • Code Sandbox mode ──> 啟動編譯 Sandbox 運行代碼 ──> ⚙️ 精準運算、數字百分百可靠！`,
          options: [
            "因為 Python 編程計算能調用程式碼 Sandbox 運算、排除大型語言模型 (LLMs) 基於 RLHF 語意機率預測下一個字詞所產生嘅「心算幻覺與誤差」，確保財務數字百分百精準！\nBecause Python scripting leverage code sandbox execution to completely bypass statistical token predicting, preventing math hallucinations/errors to guarantee absolute precision!",
            "如果不寫 Python，Gemini 會直接將所有廣告預算團隊擅自充值去聯合國\nUnless Python code is initialized, Gemini will automatically donate your budget.",
            "為了使運算回應率稍微變慢，從而可以安全拖延下班時間\nIn order to slow down computation responses to delay office clock-out times.",
            "因為除了 Python 外，其他語言已被全球搜索引擎演算法完全降權與禁用\nBecause other general-purpose programming syntaxes have been banned from searches."
          ],
          correct: 0,
          explanation: "正確答案！大語言模型 (LLMs) 本質上是強大的「語意表達、理解與轉換器」，並非直接精確計算的數理晶片。在處理 ROAS、租金回報等金錢帳目時，它們預測下一個數值有時是憑「估計」機率而容易產生幻覺。叫 AI 「使用 Python 來編程代碼計算 (use Python)」，能保障財務數字百分百精細可靠、不受幻覺左右！"
        };
      case "lesson-copywriting-competition":
        return {
          question: `根據 Dr. Bernie Wong 嘅 REACH 文案架構同「5 級行業競爭力理論 (5 Levels of Competition)」，如果我哋正面對「Lv 5 - 終極死海 (Ultimate Red Ocean)」── 用戶對硬核產品廣告、誇張規格承諾完全麻木、零信任度 ── 團隊應該採取咩行銷文案戰術以突破僵局？\nAccording to Dr. Bernie Wong's REACH architecture and 5 Levels of Competition, how should you craft copy in an Ultimate Red Ocean (Lv 5)?`,
          options: [
            "繼續瘋狂宣佈更大嘅折扣促銷（例如打對折、限時九折），直到顧客被利益打動為止\nKeep shouting even bigger product discounts until shoppers buy by pure price incentive.",
            "避免單純堆砌冰冷產品規格，轉為打擊「情緒共鳴與感官感動」(Emotional & Sensational Approach)，融合 REACH 中嘅 Reversal (顛覆常理) 與 Emotional (情感連結)，真誠與受眾站在一起\nAdopt Dr. Wong's REACH framework to activate Reversal & Emotional resonance (Emotional & Sensational Approach) rather than dry cold item specifications!",
            "轉而使用黑帽 SEO 購買 100 萬個垃圾留言鏈接，強行擠滿各大論壇\nSpam 1 million black-hat backlink websites to force indexation on forums.",
            "完全退出所有數位廣告渠道，轉為在街邊印製 10 萬份傳統小傳單向路人派發\nAbandon digital campaigns completely and print 100,000 offline paper brochures to distribute to pedestrians."
          ],
          correct: 1,
          explanation: "正解！喺 Lv 5 (終極死海) 階段，消費者已經對市面上繁複氾濫嘅「低價狂轟、功能吹捧」疲憊、麻木，且防禦心極高。單純硬塞硬賣毫無成效。這時候文案的核心必須轉移，主打「情緒價值與同感心跳（Emotional & Sensational Approach）」，真誠說出顧客在生活中遭遇的窘迫、以及使用產品時所感知的安寧（像 Tempo 不賣紙屑、賣「關鍵時伴住您」的體貼），才能成功突破死海、與受眾拉起強大紐帶！"
        };
      case "lesson-fb-baiting-solomo":
        return {
          question: `自媒體小編小白在寫 IG 推廣貼文時寫道：「Tag 3 個好朋友，留言寫下『我想要指南』，並分享至限時動態，點讚此文才能參加抽獎噢！」關於這種做法，在現代社群演算法的限制與 OKR 管理指標下，以下哪一項判斷是完全客觀科學的？\nRegarding the copywriting technique 'Tag 3 friends, comment and share details to win the coupon', which of the following is completely correct?`,
          options: [
            "這是最完美的自造流量黑客策略，會被 Facebook/Meta 的演算法列為模範，主動推送給全球 100 萬用戶\nThis is a perfect modern growth-hacking tactic that will be boosted as an exemplary case study to 1M users globally.",
            "這屬於典型的「互動誘餌」 (Engagement Baiting) 雷區。Facebook 演算法（及 AI 語篇深度神經網絡）會直接對這類貼文攔腰降權！甚至導致整頁 (Page-level) 自然觸及率遭到全面懲罰、降為冰點！應該真誠提供價值、回歸真實與品質 (Authenticity)\nThis violates Facebook's policies against Engagement Baiting. The neurological NLP algorithms will directly demote this post and even penalize thy page-level organic reach!",
            "演算法發現後會給你的 Page 充值 $1000 元美金作為獎勵，鼓勵你天天發此類內容\nThe algorithm yields a USD 1000 credit bonus into thy ad balance as an explicit reward to encourage repeat postings.",
            "只要你叫 Gemini 用 Python 代碼寫出一篇一模一樣的誘餌貼文，就不會被降權，因為 Google 與 Meta 是聯姻公司\nIf you utilize Gemini to generate this, the algorithmic flags will bypass the penalty checks because Google owns Meta."
          ],
          correct: 1,
          explanation: "答對了！這就是無數社群新手（小白）極易踩中的致命陷阱 ─「互動誘餌」 (Engagement Baiting)。不論你強迫受眾點按心情、複製黏貼某組字元（Comment baiting）、還是強迫標籤好友，演算法在 2017 年優化後便能輕易偵測並給予暴風式的全頁降權懲罰！作為一名合格、渴望晉身「行業專家」的行銷人，必須擺脫這些劣質營銷手段，用符合 Dr. Bernie Wong REACH 架構的好內容，才能收穫高黏性、長期的忠實粉絲！"
        };
      default:
        return {
          question: `喺行銷戰略架構入面創業者要提煉 USP，咁 USP (Unique Selling Proposition / 獨特銷售主張) 嘅核心本質主要代表咩？\nIn campaign strategy and branding frameworks, what does USP (Unique Selling Proposition) fundamentally stand for?`,
          options: [
            "提供全網最平、劈價最甘嘅折扣\nOffering the lowest prices and running massive price-cut discount wars.",
            "向客戶列出密密麻麻、越繁複越好嘅零件技術清單\nPresenting detailed and complex technical specifications lists to shoppers.",
            "一個同時具備「獨特性」（競爭對手冇）、「吸引力」（強力擊中客群痛點）同「價值承諾」（公司講得出做得到）嘅核心銷售賣點\nA core selling pledge that is simultaneously unique (valuable distinct assets), attractive (hits pain points), and deliverable!",
            "產品或者实体門市喺 Google Map 上面嘅 GPS 座標位置\nThe digital GPS coordinates mapped in web geolocation services."
          ],
          correct: 2,
          explanation: "正確答案！USP (Unique Selling Proposition) 即係獨特銷售主張，是向用戶清晰挑明「點解買我，而唔係買對手」嘅靈魂承諾。它必須同時具備對手沒有、命中痛點、高度兌現這三大要素！"
        };
    }
  };

  const checkpoint = activeLesson ? getCheckpointQuestion(activeLesson.id) : null;

  const handleStartLesson = (lesson: Lesson) => {
    setActiveLesson(lesson);
    setQuizAnswer(null);
    setQuizSubmitted(false);
    setQuizError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizSubmit = () => {
    if (quizAnswer === null) {
      setQuizError("請選擇一個答案以進行驗證！");
      return;
    }
    setQuizSubmitted(true);
    setQuizError(null);
  };

  const handleQuizFinish = () => {
    if (activeLesson && checkpoint && quizAnswer === checkpoint.correct) {
      onCompleteLesson(activeLesson.id, activeLesson.points);
    }
    setActiveLesson(null);
  };

  if (activeLesson && checkpoint) {
    const isCompleted = completedLessons.includes(activeLesson.id);
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
        <button 
          onClick={() => setActiveLesson(null)} 
          className="flex items-center text-slate-400 hover:text-white transition-colors gap-2 mb-6 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> 返回課表
        </button>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="px-2.5 py-1 text-xs rounded-full font-medium bg-indigo-500/15 text-indigo-400 border border-indigo-500/10 mb-2 inline-block">
              {activeLesson.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-100 tracking-tight mt-1">{activeLesson.title}</h1>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/55">
              <Clock className="w-3.5 h-3.5 text-sky-400" /> {activeLesson.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/55">
              <Award className="w-3.5 h-3.5 text-amber-400" /> {activeLesson.points} EXP
            </span>
          </div>
        </div>

        {/* Lesson Sections */}
        <div className="space-y-8 my-8">
          {activeLesson.sections.map((section, idx) => (
            <div key={idx} className="space-y-3 bg-slate-950/40 p-5 rounded-xl border border-slate-800/50">
              <h3 className="text-lg font-medium text-slate-200 flex items-center gap-2">
                <span className="text-indigo-400 font-mono text-sm">[{idx + 1}]</span> {section.heading}
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-wrap">{section.body}</p>
            </div>
          ))}
        </div>

        {/* Checkpoint Section */}
        <div className="border-t-2 border-dashed border-slate-800 pt-8 mt-10">
          <div className="bg-indigo-950/30 border border-indigo-900/40 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
              <h4 className="text-base font-semibold text-indigo-300">課堂知識挑戰：迷你自我評估</h4>
            </div>
            
            <p className="text-slate-200 text-sm font-medium mb-5 whitespace-pre-wrap">{checkpoint.question}</p>
            
            <div className="space-y-3">
              {checkpoint.options.map((option, idx) => {
                const isSelected = quizAnswer === idx;
                const isCorrect = checkpoint.correct === idx;
                let optionStyle = "border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-300";
                
                if (isSelected) {
                   optionStyle = "border-indigo-500 bg-indigo-500/10 text-indigo-300";
                }
                
                if (quizSubmitted) {
                  if (isCorrect) {
                     optionStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                  } else if (isSelected) {
                    optionStyle = "border-rose-500 bg-rose-500/10 text-rose-300";
                  } else {
                    optionStyle = "border-slate-800 text-slate-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={quizSubmitted}
                    onClick={() => {
                      setQuizAnswer(idx);
                      setQuizError(null);
                    }}
                    className={`w-full text-left p-4 rounded-lg border text-sm transition-all flex items-center justify-between whitespace-pre-wrap cursor-pointer ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {quizSubmitted && isCorrect && <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {quizError && (
              <p className="text-rose-400 text-xs mt-3 font-medium">{quizError}</p>
            )}

            {!quizSubmitted ? (
              <button
                onClick={handleQuizSubmit}
                className="mt-6 font-medium text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                提交答案 <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <div className="mt-6 border-t border-slate-800 pt-5">
                <div className="flex items-start gap-3 bg-slate-900/60 p-4 rounded-lg">
                  <div className={`p-1.5 rounded-full shrink-0 ${quizAnswer === checkpoint.correct ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                    {quizAnswer === checkpoint.correct ? <CheckCircle2 className="w-4.5 h-4.5" /> : <Lock className="w-4.5 h-4.5" />}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-slate-200">
                      {quizAnswer === checkpoint.correct ? "回答正確！挑戰成功" : "不夠精準，再思量一下！"}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 whitespace-pre-wrap">{checkpoint.explanation}</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  {quizAnswer === checkpoint.correct ? (
                    <button
                      onClick={handleQuizFinish}
                      className="text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      {isCompleted ? "理解並關閉" : "解鎖學分 + " + activeLesson.points + " EXP"} <Check className="w-4.5 h-4.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setQuizAnswer(null);
                        setQuizSubmitted(false);
                      }}
                      className="text-xs font-semibold border border-slate-700 hover:bg-slate-800 text-slate-200 px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      重新作答
                    </button>
                  )}
                  {isCompleted && quizAnswer !== checkpoint.correct && (
                    <button
                      onClick={() => setActiveLesson(null)}
                      className="text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      跳過並關閉
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                : "bg-slate-800/80 text-slate-400 border border-slate-700/50 hover:bg-slate-800 hover:text-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredLessons.map((lesson) => {
          const isCompleted = completedLessons.includes(lesson.id);
          return (
            <div 
              key={lesson.id} 
              className={`group bg-slate-900 border ${
                isCompleted 
                  ? "border-emerald-500/30 shadow-emerald-900/5 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/10" 
                  : "border-slate-800/80 hover:border-slate-700"
              } rounded-xl p-5 hover:shadow-xl transition-all relative flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`px-2 py-0.5 text-[10px] rounded-full uppercase tracking-wider font-semibold ${
                    lesson.difficulty === "Beginner" 
                      ? "bg-sky-500/10 text-sky-400 border border-sky-500/10"
                      : lesson.difficulty === "Intermediate"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/10"
                      : "bg-rose-500/10 text-rose-400 border border-rose-500/10"
                  }`}>
                    {lesson.difficulty}
                  </span>
                  
                  {isCompleted ? (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/15 border border-emerald-500/10 px-2 py-0.5 rounded-full">
                      已授證 <Check className="w-3 h-3" />
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500 group-hover:text-slate-400 transition-colors">
                      未完成
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-1 mb-2">
                  {lesson.title}
                </h3>
                
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {lesson.shortSummary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-2">
                <div className="flex items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    {renderCategoryIcon(lesson.category)} {lesson.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-0.5">
                    <Clock className="w-3 h-3 text-slate-500" /> {lesson.duration}
                  </span>
                </div>

                <button
                  onClick={() => handleStartLesson(lesson)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1 ${
                    isCompleted
                      ? "bg-slate-800 hover:bg-slate-700 text-slate-300"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white"
                  }`}
                >
                  {isCompleted ? "重新複習" : "開始學習"} <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
