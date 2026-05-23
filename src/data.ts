/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, CertificationTrack } from "./types";

export const DIGITAL_MARKETING_LESSONS: Lesson[] = [
  {
    id: "lesson-aarrr",
    title: "AARRR 增長漏斗模型 (AARRR Funnel Model)",
    duration: "10 mins",
    icon: "TrendingUp",
    category: "Frameworks",
    difficulty: "Beginner",
    shortSummary: "掌握 AARRR 漏斗的五個核心生命週期階段，打造數據驅動的增長引擎。",
    points: 100,
    sections: [
      {
        heading: "1. 什麼是 AARRR 模型？",
        body: "AARRR 理論是由 Dave McClure 提出的增長駭客架構，描繪了用戶與產品互動的完整生命週期。它分為五個關鍵階段：Acquisition（獲客）、Activation（活躍）、Retention（留存）、Revenue（收益）及 Referral（傳播）。透過分析漏斗各階段的流失率，行銷人員可找出系統瓶頸進行優化。"
      },
      {
        heading: "2. 五大階段深度解析",
        body: "• Acquisition (獲客): 如何讓用戶發現你？著重指標如單次點擊成本(CPC)、曝光數(Impressions)與點擊率(CTR)。\n• Activation (活躍): 用戶第一次體驗是否感知到核心價值 (Aha! Moment)？如註冊完成率與初次使用時長。\n• Retention (留存): 用戶是否會重覆回來？這是衡量產品健康度與契合度(LTV)最重要的核心。\n• Revenue (收益): 如何賺錢？用戶付費購買或點擊廣告的轉化率CPA與平均訂單價值。\n• Referral (傳播): 用戶是否願意推薦他人？透過推薦碼(Referral Code)與推薦帶來的自然新增長。"
      },
      {
        heading: "3. 重點提示與實戰思維",
        body: "別陷入「虛榮指標」(Vanity Metrics)陷阱。光看總曝光或總下載量毫無意義，如若留存低落，代表漏斗下方破洞。應關注轉換效益、ROI及真正驅動價值的核心行為。"
      }
    ]
  },
  {
    id: "lesson-marketing-mix",
    title: "4P 與 4C 行銷組合 (Classic vs Modern Marketing Mix)",
    duration: "15 mins",
    icon: "Grid",
    category: "Frameworks",
    difficulty: "Beginner",
    shortSummary: "比較企業導向的舊 4P 框架與客戶體驗導向的現代化 4C 核心模型。",
    points: 120,
    sections: [
      {
        heading: "1. 企業導向的傳統 4P",
        body: "傳統 4P 理論是行銷的基石，主要從生產者與企業眼光進行資源配置：\n• 產品 (Product): 規格、品質、包裝與售後維護等核心價值。\n• 價格 (Price): 訂單定價與促銷折扣，考量成本與定價利潤空間。\n• 通路 (Place): 經銷鏈、倉儲與實體或線上銷售點。\n• 促銷 (Promotion): 廣告、公共關係、實體推銷與社群曝光。"
      },
      {
        heading: "2. 客戶體驗導向的現代 4C",
        body: "隨消費者主權抬頭，4P 轉化為對應的客戶感受 4C 架構：\n• 顧客需求 (Customer Needs - 對應Product): 專注解決顧客核心痛點與渴望，而非一味宣傳自有規格。\n• 成本 (Cost - 對應Price): 消費者獲得產品的總付出，包括心理負擔、時間花費與金錢成本。\n• 便利性 (Convenience - 對應Place): 購買過程的無障礙程度，如行動支付、一鍵下單與超商取貨。\n• 溝通 (Communication - 對應Promotion): 摒棄傳統單向推播式廣告，強調對等、雙向傾聽與社群維護。"
      },
      {
        heading: "3. 4P 與 4C 的整合思維",
        body: "成功的 Digital Marketing 必須將 4P 的實體配置與 4C 的心智感受高度疊合。例如，當通路(Place)改用電商時，行銷人員要檢視顧客在網頁下單是否足夠便利(Convenience)而使感知成本(Cost)符合預期。"
      }
    ]
  },
  {
    id: "lesson-metrics",
    title: "關鍵數位廣告指標與 ROAS 邏輯 (Ad Metrics & ROAS Logic)",
    duration: "15 mins",
    icon: "Calculator",
    category: "Metrics & KPIs",
    difficulty: "Intermediate",
    shortSummary: "深度研究 CTR, CPC, CVR, CPA 指標，掌握 ROAS 計算公式與行銷預算配比。",
    points: 150,
    sections: [
      {
        heading: "1. 廣告漏斗指標全解",
        body: "• CTR (Click-Through Rate, 點擊率): 點擊次數 / 曝光次數 * 100%。反映廣告素材與文案是否吸引人。\n• CPC (Cost Per Click, 每次點擊成本): 廣告總成本 / 點擊次數。評估流量獲取單個受眾的平均單價。\n• CVR (Conversion Rate, 轉換率): 轉換次數 / 點擊次數 * 100%。判定您的網站/落地頁 (Landing Page) 是否流暢並具備高說服力。\n• CPA (Cost Per Action, 單次行動成本): 廣告總成本 / 轉換次數。意即取得一個真實付費用戶或註冊表單所需付出的真實廣告成本。"
      },
      {
        heading: "2. 終極比率: ROAS 反推與公式",
        body: "ROAS (Return on Ad Spend, 廣告投資報酬率) 為評估廣告成效的標準核心公式：\nROAS = (廣告帶來的營業額 / 廣告成本) * 100%\n例如支出 1,000 元帶來 5,000 元營收，則 ROAS 為 500%。這代表你投下每 1 元廣告費，能獲取 5 元的回報。其重要性在於可以藉由此率引導預算資源分派、精準判決停損或加碼時機。"
      },
      {
        heading: "3. 指標之間的連鎖反應",
        body: "各項指標是環環相扣的。CTR 提升通常會獲得廣告平台(例如 Google, Meta) 評分優勢，進而壓低 CPC；而 CVR 越高，也能在點擊單價不變的情況下帶動 CPA 直接下降。反之高轉換也直接帶動更高 ROAS，此為數字優化的連鎖脈絡。"
      }
    ]
  },
  {
    id: "lesson-management",
    title: "OKR、KPI 與顧客終身價值 (CLV)",
    duration: "12 mins",
    icon: "BarChart",
    category: "Metrics & KPIs",
    difficulty: "Intermediate",
    shortSummary: "解析營運核心指標架構。比較 OKR 與 KPI。並學習計算 CLV, CAC 理論。",
    points: 130,
    sections: [
      {
        heading: "1. OKR 與 KPI 的本質差異",
        body: "• KPI (Key Performance Indicator / 關鍵績效指標): 由上而下的命令，注重在達成既定的商務常規指標與目標，追求短期穩定性與回報。\n• OKR (Objectives and Key Results / 目標與關鍵結果): 重視集體討論的同儕共識、野心勃勃的激勵挑戰。O 設定宏偉願景，KRs 則提供量化檢驗標準以隨時對齊，重點在於追求超越與創新。"
      },
      {
        heading: "2. 顧客價值財務指標: CLV & CAC",
        body: "• CAC (Customer Acquisition Cost / 客戶獲取成本): 獲得單一付費用戶所投入的市場推廣、人力與廣告總費用。\n• PF (Purchase Frequency / 購買頻率): 在特定期間內，單一顧客的平均消費次數。\n• CLV (Customer Lifetime Value / 顧客終身價值): 顧客於一生中預期為企業貢獻的總價值：\nCLV = (消費頻率 * 平均客單價 * 客戶生命週期長度) * 毛利率\n健康數位模式必須滿足: CLV > 3 * CAC。"
      },
      {
        heading: "3. 財富利潤率的黃金定義",
        body: "行銷人員在管理預算時必須懂得配合財務管理指標：\n• YoY (Year-over-Year, 年增率): 與去年同期比較，消除季節效應。\n• GP (Gross Profit Margin, 毛利率): 衡量基本利潤扣除直接銷售成本後的比例。\n• ROI (Return on Investment, 投資報酬率): 淨收益 / 總投入成本。更全面涵蓋了營運成本與固定資產折舊等，不同於 ROAS 只算廣告花費。"
      }
    ]
  },
  {
    id: "lesson-seo",
    title: "SEO 與數碼分銷渠道 Owned, Earned, Paid",
    duration: "15 mins",
    icon: "Search",
    category: "SEO",
    difficulty: "Advanced",
    shortSummary: "SEO 自然優化思維，探討長尾搜尋詞配置、再行銷與 OEP 數位執行渠道。",
    points: 140,
    sections: [
      {
        heading: "1. 搜尋引擎優化 (SEO) 心智圖與長尾策略",
        body: "SEO 旨在提升網站於 Google 的「自然搜尋流量」。分為:\n• On-page SEO: 包括高品質原創內容、優化 H1/H2 標簽、編寫合乎長度(50-60字) 的 Title 和 Meta Description 等。\n• Off-page SEO: 以建立高品質外部反向連結 (Backlinks) 建立權威度。\n• 長尾關鍵字策略 (Long Tail Strategy): 優先鎖定那些字數較多、搜尋量較低但意圖極度精準、競爭度底且轉換率高的精確關鍵詞組。"
      },
      {
        heading: "2. 數位媒體執行渠道 (OEP 三維概念)",
        body: "• 自有媒體 (Owned Media): 品牌完全控制的資產。例如官方網站、部落格(Blog)以累積入境行銷(Inbound)實力、以及發送精準細分群體的 Email 行銷。\n• 付費媒體 (Paid Media): 購買廣告曝光。如 Google 多媒體廣告聯播網 (GDN) 適合大面積宣傳；YouTube 串流廣告 (In-stream) 與導流廣告；以及網網紅合作、付費社交廣告等。\n• 獲得媒體 (Earned Media): 透過口碑、真實用戶自發分享、公關媒體報導所得的自然流量與評價。"
      },
      {
        heading: "3. 重點技術：再行銷 (Remarketing)",
        body: "透過在網站埋設 Cookie 追蹤程式碼，當用戶離站後在其他瀏覽通路（例如 GDN、Social Media）向其展示個人化、極具誘因的廣告。再行銷可以極佳地喚醒舊造訪者，大幅提高整體 CVR，是漏斗後期不可或缺的利器。"
      }
    ]
  },
  {
    id: "lesson-pestle-swot",
    title: "USP, SWOT 與 PESTLE 宏觀分析",
    duration: "10 mins",
    icon: "Briefcase",
    category: "Frameworks",
    difficulty: "Intermediate",
    shortSummary: "透過 PESTLE 架構研判外部威脅環境，提煉 SWOT 矩陣並歸納出 USP 產品主張。",
    points: 110,
    sections: [
      {
        heading: "1. 宏觀分析：PESTLE 構面",
        body: "企業制定行銷常規策略時，需透析六大環境構面：\n• Political (政治) / Economic (經濟): 政策、貿易稅制、利息、失業率與匯率，決定消費力與進口限制。\n• Social (社會): 人類文化趨勢、人口分布、高齡化或永續意識變遷。\n• Technological (科技): 5G, AGI 工具或演算法成熟度。\n• Legal (法律) / Environmental (環境): 勞基法規、專利侵權、减碳標準與氣候變化政策。"
      },
      {
        heading: "2. 現時提煉：SWOT 矩陣分析",
        body: "將外部環境與企業自身狀況匯整為：\n- S (Strengths / 優勢): 自有技術、強大品牌力、獨家供应链。\n- W (Weaknesses / 劣勢): 資本額少、行銷經驗不足、知名度不夠。\n- O (Opportunities / 機會): 政策補貼、新興藍海市場起飛。\n- T (Threats / 威脅): 競品低價競爭、原料價格急升。"
      },
      {
        heading: "3. 獨特銷售主張 (USP)",
        body: "USP (Unique Selling Proposition) 代表你的品牌核心：為什麼客戶要買你的，而不是競爭對手的？它必須同時滿足三大指標：獨特性（競爭對手沒有）、吸引力（強烈回應顧客痛點）、價值承諾（企業能穩定兌現的利益）。"
      }
    ]
  },
  {
    id: "lesson-google-ads-display-yt",
    title: "Google Ads 多媒體與 YouTube 影片廣告實戰 (Google Ads GDN & YouTube Ads)",
    duration: "15 mins",
    icon: "Tv",
    category: "AI & Performance",
    difficulty: "Intermediate",
    shortSummary: "掌握 Google 廣告多媒體自適應 RDA 機制、四大定向決策、TrueView 影音計費與轉化思維。",
    points: 150,
    sections: [
      {
        heading: "1. Google Ads Display (GDN) 與多媒體廣告格式",
        body: "Google Display Network (GDN) 觸及全球 90% 以上的網路使用者。其中最重要的廣告格式包括：\n• 靜態多媒體廣告 (Static Display Ads): 支援 JPG、GIF、HTML5 等標準格式尺寸，能精確掌控視覺呈現。\n• 自適應多媒體廣告 (Responsive Display Ad, RDA): 行銷人員只需上傳 15 張圖片、5 個標題、5 個描述與 5 個標誌，由 Google 的 AI 根據不同版位大小、網頁背景、行動端或桌面端，自動拼裝成最佳展示組合，極大降低維護成本並擴大高權重覆蓋率。"
      },
      {
        heading: "2. 多網定向精準投放矩陣 (Targeting Strategy)",
        body: "廣告定向（Targeting）是多媒體廣告的靈魂，主要分為四大決策維度：\n• Who (誰/受眾): 人口統計、興趣相似 (Affinity Segments - 挖掘長期生活形態)、在學/在職意向 (In-Market - 具備即時購買意圖)、再行銷 (Remarketing) 以及客戶比對 (Customer Match - 上載去隱私加密郵箱，引導自動補位召回 VIP)。\n• What (什麼/內容): 透過關鍵字 (Keywords)、主題 (Topics) 以及指定刊登位置 (Placements - 如指定特定 YouTube 頻道或知名網域網站)。\n• Where (哪裡/地域): 國家/地區、特定商圈、特定半徑地理圍欄。\n• How/When (何時/何地/裝置): 投放時間段、裝置比例控制、競拍控制與頻次上限。"
      },
      {
        heading: "3. YouTube 影片廣告格式與轉化思維",
        body: "YouTube 廣告顛覆了傳統講求知名度但無法轉換的電視貼片廣告，分為：\n• TrueView 可跳過影音廣告 (Skippable In-Stream): 支援播放 5 秒後可跳過，其計費機制非常友善——僅在使用者觀看滿 30 秒（或不滿 30 秒但完整播畢），或與影片進行互動（如點擊 Banner）時，才需要支付費用 (CPV/點擊計費)！\n• 不可跳過影音廣告 (Bumper Ads): 限時 6 秒以內強行播放，最適合快速轟炸建立極致品牌印象。\n• 現代轉化影片 vs 傳統品牌影片: 傳統品牌宣傳（如創辦人致詞、公司大樓簡介）很難驅動直接轉化；現代高效轉換影片則著重產品演示、引導註冊/免運試用、或是遊戲試玩演示。配合 Video Action Campaigns & Google Shopping，能引導用戶一邊看一邊一鍵撳入去購買！"
      }
    ]
  },
  {
    id: "lesson-advanced-seo",
    title: "高階 Technical SEO 與 Core Web Vitals 專家指南 (Technical SEO & Core Web Vitals)",
    duration: "15 mins",
    icon: "Search",
    category: "SEO",
    difficulty: "Advanced",
    shortSummary: "解析 Technical SEO 核心框架。學習 Core Web Vitals 2026 最新指標，包含 LCP, INP, CLS 標準。",
    points: 160,
    sections: [
      {
        heading: "1. Technical SEO 與爬蟲指引",
        body: "Technical SEO (技術型 SEO) 是所有網頁自然排名的硬體地基。如果網站架構不良，再好的行銷內容也無法被 Google 收錄：\n• Sitemap & Robots.txt: 提供清晰的網站地圖與搜尋引擎爬蟲 (Googlebot) 接觸指南，明確宣告哪些機密路徑不應抓取。\n• 安全性 & SSL/HTTPS: Google 自 2014 年起正式將安全網址 (HTTPS) 視作核心排名因素。\n• Mobile-First Indexing: Google 依據行動裝置（流動端）載入的內容去評估網頁權重，而非網頁的桌面視圖。\n• 301 vs 302 Redirect 和 Canonical Tag: 301 屬於「永久轉址」，能將 100% 的 SEO 權重轉移至新頁面；而 302 是「暫時轉址」不做權重轉移。Canonical Tag (標準網址標籤) 則能告訴 Google 爬蟲「即使網址帶有 UTM 追蹤參數，哪個版本才是原始網頁」，有效解決重覆頁面 (Duplicate Content) 的評分稀釋！"
      },
      {
        heading: "2. Core Web Vitals (網站核心指標) 最新標準",
        body: "Core Web Vitals 是 Google 量化評鑑使用者網頁體驗 (Page Experience UX) 的金標準：\n• LCP (Largest Contentful Paint, 最大內容繪製時間): 網頁上最大塊的視覺元素（如主 Banner 或首圖）載入時間，黃金標準必須小於 2.5 秒，反映載入速度。\n• INP (Interaction to Next Paint, 互動至下次繪製時間): 這項指標在 2024 年正式取代了舊有的 FID (First Input Delay)，用來衡量使用者完成點擊、輸入、點擊按鈕後，網頁給出下一次像素繪製反饋的真實延遲時間。黃金標準必須小於 200 毫秒，反映互動順暢度！\n• CLS (Cumulative Layout Shift, 累積版面配置轉移): 網頁在載入過程中，元素有沒有因為延遲載入（如突然插進的廣告或未指定尺寸的圖片）而產生突兀的跳動位移。黃金標準必須小於 0.1，反映視覺穩定性。"
      },
      {
        heading: "3. E-E-A-T 與高品質外部連結",
        body: "Google 如何在海量 AI 自動生成的文字中，鑑定出真正可靠、高品質的網頁？主要依賴：\n• E-E-A-T (Experience 經驗、Expertise 專業、Authoritativeness 權威度、Trust 信任度): 網站和作者必須有實質、客觀的主題深度，並得到其他權威機構認可，其中 Trust 是核心靈魂！\n• Do-Follow vs No-Follow 反向連結: 來自外部高權重網域指向你網站的 Backlink 就像一票「民主支持票」。Do-Follow 會向你網站傳遞權重 (Link Juice) 指示，而 No-Follow 則跟 Google 聲明只做連結、不背書傳權，最適合用在留言區的外鏈防止黑帽 SEO 發垃圾連結。"
      }
    ]
  },
  {
    id: "lesson-personal-branding",
    title: "個人品牌 101 與創作者經濟增長戰略 (Personal Branding 101 & Creator Strategy)",
    duration: "12 mins",
    icon: "UserCheck",
    category: "Frameworks",
    difficulty: "Beginner",
    shortSummary: "解析個人品牌 The Persona Prism 七步框架，學習 Rule of 100 增長密碼與 LTV 變現途徑。",
    points: 130,
    sections: [
      {
        heading: "1. 什麼是個人品牌？The Persona Prism 7 步框架",
        body: "在數位爆發的年代，『個人品牌』是普通人最厲害的增長槓桿。我們可以使用 Persona Prism 7 步驟系統框架：\n• Step 1: 自我評估 (Self-Assessment) - 深入挖掘我的底層優勢、專長與真正熱愛的事物。\n• Step 2: 市場調研 (Market Research) - 確立目標客群是誰？是否有與眾不同的競爭對手生態？\n• Step 3: 定義獨特價值主張 (UVP) - 用一句話說明白你能為目標使用者帶來什麼獨一無二的利益。\n• Step 4: 規劃核心內容主題 (Content Themes) - 鎖定 2 到 3 個擅長的內容範疇聚焦發表，不宜過度分散。\n• Step 5: 撰寫品牌故事 (Brand Story) - 運用故事公式展現脆弱點、挫折與英雄歷程，拉近讀者信任距離。\n• Step 6: 確立發佈平台生態 (Platforms) - 根據客群特性與資源，挑選合適的社群平台。\n• Step 7: 持續監測與迭代調優 (Monitoring) - 追蹤點擊流量反饋與受眾互動率，調整後續風格。"
      },
      {
        heading: "2. 平台的選擇偏好與 Rule of 100 增長密碼",
        body: "平台特徵主要分為四種類型，行銷人員需依照目的選型：\n• 信任型 (Trust-based / 如 Podcast、YouTube、Substack 電子報): 雖然獲取流量較慢，但能建立極高的主權與深度信任。\n• 發現型 (Discovery / 如 TikTok、Instagram Reels、Threads): 靠演算法將短內容推送給完全不認識你的陌生人，適合高速引流擴圈。\n• 搜尋型 (Search-based / 如 WordPress 網誌、SEO): 依靠使用者主動鍵入關鍵字搜尋召回，流量可存續數年。\n• 私域空間 (Private Space / 如 WhatsApp 廣播、電子信箱): 不受外部演算法降權或封號威脅，是直接與忠實粉絲高價值對話的安全港灣。\n• Rule of 100 鐵律: 不管你在哪裡發佈內容，承諾在前 100 天內、或者在前 100 個發佈中，雷打不動、高度聚焦且不計回報地持續輸出。這是打破早期流量起飛瓶頸、逼出自我潛力的黃金心智！"
      },
      {
        heading: "3. 商業變現模型與 LTV/CAC 調合",
        body: "個人品牌變現千萬不要只靠極其微薄的平台播放點擊分成。更優秀的商業變現模型：\n• 行銷分銷 CPS (Affiliate): 幫優質品牌推銷、拿取 15% 以上佣金，零庫存壓力。\n• 諮詢與高客單顧問 (Premium Consultation): 售賣自己的個人時間與專業諮詢，毛利極高。\n• 數位虛擬產品 (Digital Products): 如線上預錄課程、電子書、訂閱會員，一次製作，無限重覆分發，毛利高達 95%！配合 AARRR 模型與電子郵件行銷，能實現獲客成本趨近於零、終身價值極大化的創作者良性巨輪。"
      }
    ]
  },
  {
    id: "lesson-generative-ai",
    title: "生成式 AI (GenAI) 與 Prompt 五步法實戰 (GenAI & Prompt Engineering in Marketing)",
    duration: "15 mins",
    icon: "Cpu",
    category: "AI & Performance",
    difficulty: "Beginner",
    shortSummary: "精通 RGC Prompt 五步法極速撰寫行銷文案，發揮 Gemini Gems 專屬助理、Python 執行限制與 Deep Research 新局。",
    points: 150,
    sections: [
      {
        heading: "1. 數位行銷革命：RGC Prompting 五步法",
        body: "傳統數位行銷文案撰寫往往耗費大量時間與人力成本，借助生成式 AI (GenAI)，你可以大幅提升產能。為了避免 AI 給出敷衍或同質化的軟體生硬回答，必須使用「RGC (Role, Goal, Constraint) Prompt 五步法」設計完整提示詞結構：\n• 1. Role (角色): 明確賦予 AI 一個具備專業背景與語氣的身份（例如：你是一位有 10 年經驗的香港數位廣告策略師，風格幽默接地氣）。\n• 2. Result (結果): 告訴 AI 你需要她產出什麼具體成果（例如：一份 200 字內的聖誕節限時限量香氛蠟燭 Instagram 推廣廣告文案）。\n• 3. Goal (目標): 解釋這個結果背後的動機與目的（例如：吸引中環白領青年白領預購，提升網店註冊與轉換率）。\n• 4. Context (背景): 提供真實、獨特的背景、痛點、優勢和商業資訊（例如：產品是 100% 機動調和、手工製作，相比起大廠產品質量更好但小眾，主打減壓舒目）。\n• 5. Constraint (限制): 加上硬性限制，約束輸出範疇（例如：嚴禁超出行業規範，字數限制在 150 字內，中英夾雜，並加上對應 emojis，語氣溫馨不硬推銷）。\n使用五步法能保證 AI 完全摸透上下文，產出優質有黏性的推廣作品，而非流於表面的 AI Slop。"
      },
      {
        heading: "2. 創作者資料庫：Gemini Gem 自訂專屬助理與檔案限制",
        body: "Gemini Gems 是 Google 推出的強大 AI 客製化工作空間（等同於個人助理或專案 Knowledge Base）。你可以為同一個專案或客戶上傳與儲存多份核心參考資料（支持 PDF、DOCX、PPTX、Excel、Text 及帶有 OCR 識别的圖片）。在日常行銷工作中，這使得 AI 能長期記得該品牌主調或 Property Management 物業通告、過去廣告案例或產品 USP，在同一個 Gem 裡持續追問絕不亂估或忘記上下文。但請牢記其技術規格限制：\n• 上載限制：不論是 Free 還是 Plus 計劃，單個 Gem 可上載文件上限最多為 10 份，同時點按上載也有每日 10 份的限制。\n• 容量限制 (API 專案): 單個專案透過 Files API 儲存的檔案總量上限為 20 GB。\n• 單一文件上限：一般 PDF 或 Word 文件最大支援達 512 MB；Excel (CSV) 大小上限約 50 MB；圖片大小上限為 20 MB。\n• Token 限制：針對文字內容，其單一文件上限最高約為 1,000,000 (1 million) tokens。完全領先其他大模型之 Context window！"
      },
      {
        heading: "3. 突破 LLM 的天生限制與 Deep Research 新局",
        body: "高階行銷人員必須認清大型語言模型 (LLMs) 的底層本質與相應限制：\n• pre-training (預訓練) & RLHF (人類反饋強化學習): LLM 本質是一本百科全書，基於過去公開文本預測下一個字 (Next-token Prediction)，並透過 RLHF 進行安全對齊，使其回答自然流暢。它的答案天生具備一定的「隨機性 & 心算估計性」，它不擅長高難度的複雜數學計算（計數容易「靠估」）。\n• LLM 都需要計數機 (Python!): 所以當我們面臨處理複雜數據分析、廣告每期 ROAS、客戶 LTV、CAC 或租金毛利計算時，必須主動叫 Gemini 啟用 Python 程式碼編譯執行功能 (use Python!)，透過編程計算出精準絕對答案，防止幻覺！\n• 搜尋型 Gemini Deep Research: 普通 AI 像一位腦袋裝滿歷史知識但不連網的老師，回答快速但可能資料過時；而 Deep Research (生成式搜尋革命) 則像一位會立刻幫你開啟瀏覽器上網耙梳、跨多個資料源深度分析並整理出完整策略報告的助理編制，適合長線競品對手分析和深入行業趨勢洞察。"
      }
    ]
  },
  {
    id: "lesson-copywriting-competition",
    title: "高階文案 REACH 與 5 級競爭力 (Advanced Copywriting REACH & 5 Levels of Competition)",
    duration: "15 mins",
    icon: "Award",
    category: "Frameworks",
    difficulty: "Advanced",
    shortSummary: "掌握 Dr. Bernie Wong 的 REACH 文案架構、5 階行業競爭體系與 Alex Osterwalder 價值主張設計，從小白蛻變為大師。",
    points: 150,
    sections: [
      {
        heading: "1. Dr. Bernie Wong 提出的 REACH 文案爆發矩陣",
        body: "高價值內容和文案不是枯燥硬塞硬賣，而是能與受眾心理高度共鳴。Dr. Bernie Wong 指出，成功的數位行銷內容往往具備 REACH 這五大特質：\n• R - Reversal (雙重顛覆/反常理): 破除讀者思維定勢，用反直覺的觀點或驚喜反轉（Hook）在 3 秒內鎖死眼球（例如：『為什麼你越努力寫高深文章，顧客越覺得你業餘？』）。\n• E - Emotional (情感連接): 文案必須傳遞情緒價值。買產品不只是買其功能，更買下伴隨的安全感、對成功的渴望、或者擺脫焦慮的暢快（例如：Tempo 不賣紙巾，賣『關鍵時伴住你』的堅韌情感觸動）。\n• A - Authenticity (真誠與真實): 不要使用假大空的 AI 萬能模板，應多用真實、帶有細節與具體痛點的案例研究、第一人稱創業真情實證，建立無可取代的信任度。\n• C - Conciseness (極簡精煉): 現代讀者耐性極低。多用短句、列表，將核心好處字詞提煉至極簡，去掉累贅的空話。\n• H - Humour (幽默與自嘲): 用笑話、哏圖 (meme) 或是幽默風趣、拉近距離的態度去講故事，消除受眾對廣告的防禦心理。"
      },
      {
        heading: "2. 行業競爭的 5 個層級 (5 Levels of Competition)",
        body: "當產品投放到市場，創作者或品牌主必須清晰知道自己正面臨市場成熟度的哪一個層級，從而部署截然不同的行銷打法：\n• Lv 1 - 藍海期（Blue Ocean / 獨行者） ──[市場狀況]：你是唯一的開口拯救者，無競爭 ──[策略]：主打承諾 (Commitment)，簡單直言功能即可。\n• Lv 2 - 競爭萌芽（Competitors Appear） ──[市場狀況]：對手陸續出現，受眾開始比較 ──[策略]：更宏大的承諾 (Bigger Commitment)，宣示更高的規格與效能。\n• Lv 3 - 紅海激烈（Intense Red Ocean） ──[市場狀況]：市場極度擁擠 ──[策略]：提煉並瘋狂打擊獨特銷售主張 (USP)，向用戶講透『為什麼選我，而不選他』。\n• Lv 4 - 萬眾喧囂（USP Proliferation） ──[市場狀況]：群雄混戰，第三方比價或評價平台林立 ──[策略]：『我比其他人更好』(I am better than others)，深度拆解各家長短做對比分析。\n• Lv 5 - 終極死海（Ultimate Red Ocean） ──[市場狀況]：消費者已被傳統硬廣告與誇張承諾轟炸到麻木不仁，零信任度 ──[策略]：直接揚棄單純賣產品規格，主打「情緒共鳴與感官感動」(Emotional & Sensational Approach)，這也是高客單與個人品牌起跑的核心戰場！"
      },
      {
        heading: "3. Alex Osterwalder 的價值主張設計 (Value Proposition Design)",
        body: "不論你寫再好的文案，若產品不符合市場需求，一切都是空談。Alex Osterwalder 的價值主張畫布 (Value Proposition Canvas) 專治「自嗨型」產品：\n• 顧客檔案 (Customer Profile): 深入拆解目標用戶的日常任務（Jobs-to-be-done）、阻礙他們完成的痛苦與挫折（Pains）、以及渴望得到的好處與爽點（Gains）。\n• 價值地圖 (Value Map): 盤點你的產品與服務（Products & Services）、它們如何減輕顧客的痛苦（Pain Relievers）、如何創造顧客的預期利益（Gain Creators）。\n• 當價值地圖的三大要素與顧客檔案高度吻合、精準相交時，這就達成了極具商務含金量的 Product-Market Fit (PMF / 產品市場契合)，這時文案只需如實反映此契合度，便能自動達成高轉化率！"
      }
    ]
  },
  {
    id: "lesson-fb-baiting-solomo",
    title: "社群避坑指南：FB 互動誘餌與 SO-LO-MO 實戰 (Social Baiting Prevention & SO-LO-MO Strategy)",
    duration: "12 mins",
    icon: "CheckCircle",
    category: "AI & Performance",
    difficulty: "Intermediate",
    shortSummary: "解析 Facebook 互動誘餌演算法懲罰、CJM 客戶旅程地圖關鍵骨架，與整合 Social-Local-Mobile 的 OMO 滑動獲客。",
    points: 130,
    sections: [
      {
        heading: "1. 徹底擊碎「互動誘餌」：Facebook 演算法的降權天條",
        body: "傳統「小白」行銷常見的嚴重錯誤之一，就是用粗暴無聊的抽獎或騙讚術語污染用戶動態牆。Facebook 嚴厲打擊「互動誘餌」 (Engagement Baiting)：\n• 互動誘餌 5 大雷區：\n  - 1. Tag Baiting (標籤誘餌): 誘騙用戶 Tag 朋友（例如：『Tag 佢，要佢請你食飯！』）。\n  - 2. Comment Baiting (留言誘餌): 騙取機械式重覆留言（例如：『留言「+1」攞 PDF 指南！』）。\n  - 3. Vote Baiting (投票誘餌): 利用 Reactions 投票。\n  - 4. React Baiting (心情誘餌): 騙用戶點按 Like/Love 等符號。\n  - 5. Share Baiting (分享誘餌): 強制不分享就無法獲得抽獎資格。\n• 演算法嚴厲懲罰：一旦被 Google 或 Meta 的 AI 行為深度神經網絡判決為誘餌行為，整篇 Post 的自然觸及率將被攔腰截斷，嚴重者整頁 (Page-level) 均會被降低權重！因此『真誠講故事、回歸本色與內容品質』 (Authenticity) 才是 2026 行業專家的唯一合規正路。"
      },
      {
        heading: "2. CJM 客戶旅程地圖 (Customer Journey Map) 的正確打開方式",
        body: "行銷人畫的客戶旅程地圖如果只是走走過場，那無非是自我感動的玩具。一份合格、具備實操戰術意義的 CJM 必須包含以下六大核心維度：\n• 1. Persona (人物誌): 基於真實調研或數據反饋提煉出來的典型目標受眾形象。\n• 2. Scenario (情境與目標): 使用者面臨什麼樣的生活情境？他的終極任務與解決動機是什麼？\n• 3. Customer's Actions, Thoughts & Emotions (行為、想法與情緒波折): 清楚勾勒使用者在每個環節的體驗、心中 OS、以及情緒波動（用波動曲線畫出痛點 Pains 跌宕）。\n• 4. Touchpoints (接觸點): 使用者與你品牌直接交互的特定節點（例如：點擊廣告、註冊帳戶、收到發票）。\n• 5. Channels (管道介質): 這些交互在什麼硬體或載體上發生？（如：手機 App、實體櫃檯、信箱）。\n• 6. Other Personnel Influence (他人與同儕影響): 在旅程中，有沒有朋友、家人、或主管的意見參與，或者跨部門的內部支持系統會左右他的購買決策？"
      },
      {
        heading: "3. OMO 的完美融合：SO-LO-MO (Social-Local-Mobile) 戰略",
         body: "SO-LO-MO 是整合「社交 (Social)」、「在地化 (Local)」與「行動端 (Mobile)」的跨渠道打法，更是將實體經濟與數位化完美鏈接 (OMO) 的利器：\n• 1. Social (社交屬性): 建立社群關係、分享與 co-creation 裂變（如 MTR 的 Madame Tussauds 的 AR 互動，或者 OpenRice 用戶熱烈的自發食記及 APM 線上領取實體優惠券分享）。\n• 2. Local (本地位置定位): 抓取微小瞬間。運用地緣圍欄 (Geo-fencing) 或藍牙信標 (Bluetooth Beacons) 技術，當受眾經過特定商圈或物業時，向其手機廣播推送附近商戶限時優惠券。\n• 3. Mobile (行動便捷度): 一切體驗必須為手機單端極致優化，如一鍵完成 Apple Pay/Android Pay，高度依賴 LBS（地理位置定位系統）和 Push Notifications，實現即時、雙向、高轉化的情境推廣。"
      }
    ]
  }
];

export const CERTIFICATION_TRACKS: CertificationTrack[] = [
  {
    id: "track-ga4",
    title: "Google Analytics 4 (GA4) 數據科學家認證模擬考",
    provider: "Google",
    icon: "TrendingUp",
    code: "GA4-DSC-HK2026",
    examDuration: "45 mins",
    questionsCount: 5,
    shortDescription: "涵蓋事件追蹤模型、歸因分析模式、自定義維度、UA 與 GA4 本質差異。繁中英對照及港式粵語精修。",
    syllabus: [
      "GA4 事件數據收集模型 (Event-based Schema Model)",
      "自定義維度與參數定義 (Custom Dimensions & Custom Parameters)",
      "數據驅動歸因模型 (DDA - Data-Driven Attribution)",
      "來源/媒介未設定 (not set) 偵錯排除",
      "跨裝置用戶群組匹配 (User-ID Setup)"
    ],
    questions: [
      {
        id: "ga4-q1",
        questionText: `📊 【GA4 數據模型考核 Data Model Audit】
喺 Google Analytics 4 (GA4) 入面，基本嘅數據收集模型同舊版嘅 UA (Universal Analytics) 有咩最本質上嘅唔同？
In Google Analytics 4 (GA4), how does the core data collection model fundamentally differ from Universal Analytics (UA)?

【數據結構示意圖 / Data Structure Comparison】:
┌───────────────── UA Model ─────────────────┐
│  Session (工作階段) ──> Webpage Views / Hits │
└────────────────────────────────────────────┘
                      VS
┌───────────────── GA4 Model ────────────────┐
│  User ──> Events with Parameters (事件模型) │   <── ⚙️ 彈性更高！
└────────────────────────────────────────────┘`,
        options: [
          "UA 係用 Cookie，GA4 完全放棄咗 Cookie 唔用\nUA relies on cookies, whereas GA4 totally abandons cookie usage.",
          "GA4 全面改用事件模型 (Event-based Model) 嚟記錄所有用戶互動，連 Pageview (網頁瀏覽) 都當作事件加上參數 (Parameters)！\nGA4 transitions to an Event-based Model to record all interactions; even pageviews are tracked as events with specific parameters!",
          "GA4 冇得好似 UA 咁用 BigQuery (雲端數據倉儲) 做原始數據匯出\nGA4 no longer supports raw data exports through BigQuery cloud storage like UA did.",
          "GA4 只可以追蹤 Apple 嘅 iOS 設備，唔支援 Android 或者網頁端\nGA4 is exclusive to Apple iOS tracking and does not support Android or web ecosystems."
        ],
        correctIndex: 1,
        explanation: "正確答案！GA4 棄用了舊 UA 的「工作階段 (Session)」為中心的漏斗，全面改為極為靈活的「事件模型 (Event-based Model)」。喺呢個架構下，用戶每一次網頁捲動 (Scroll)、點擊 (Click)、加購物車 (Add to cart) 都會附帶特定參數，提供無比強大的數據顆粒度！"
      },
      {
        id: "ga4-q2",
        questionText: `⚙️ 【自定義維度設定 Custom Dimension Matrix】
如果老細叫你追蹤官網上面點擊「加入購物車 (Add to Cart)」按鈕嘅時候，嗰件產品嘅「產地 (Country of Origin)」同「折扣率 (Discount Rate)」，你喺 GA4 應該點樣一步步完成設定，先至可以喺報表度睇到呢啲高階分析數據？
Your boss wants to track additional details like the "Country of Origin" and "Discount Rate" when users clicks 'Add to Cart'. How should you implement this custom config in GA4?

【追蹤參數流向 / Tagging Data Flow】:
┌───────────┐      Custom Parameter      ┌────────────────┐      Dimension Register      ┌────────────────┐
│ UI Button │ ────────────────────────> │ Event: cart_in │ ───────────────────────────> │ Custom Report  │
│ (Click)   │    e.g. origin_country    │ (GA4 Backend)  │    Regist Custom Dimension   │ (Data Visible) │
└───────────┘                           └────────────────┘                              └────────────────┘`,
        options: [
          "咩都唔使搞，GA4 自動會幫你分類產地同折扣率並生成欄位\nNo configuration is required; GA4 will auto-classify origins and generate reporting dimensions.",
          "先喺官網 Google Tag Manager (GTM) 埋設帶有對應參數嘅 Event，再去 GA4 後台將呢啲參數註冊做「自定義維度 (Custom Dimension)」！\nFirst deploy events with matching parameters in Google Tag Manager (GTM), then register them as Custom Dimensions in the GA4 admin panel!",
          "起一個 UA 專有嘅 View (視圖) 然後用 Python 代碼重寫後台介面\nCreate a Universal Analytics specific View and rewrite the background dashboard with Python scripts.",
          "將全個 Google Analytics 嘅 SDK 剷除，重新裝過最新版\nCompletely uninstall the Google Analytics Software Development Kit (SDK) and reinstall the latest suite."
        ],
        correctIndex: 1,
        explanation: "正確答案！在 GA4 中發送事件參數 (Parameters) 後，一定要在 「管理 (Admin) -> 自定義定義 (Custom Definitions)」 裡將這些參數註冊為 「自定義維度 (Custom Dimension)」 ，否則收集到的數據將會留存在底層 API 而無法在日常報表中顯示。"
      },
      {
        id: "ga4-q3",
        questionText: `🔗 【歸因決策分析 Attribution Model Evaluation】
你公司做緊跨渠道投放 (Cross-channel Ads)，關於 GA4 預設嘅「數據驅動歸因模型 (DDA - Data-Driven Attribution)」，呢款模型相比起舊時嘅「最終點擊歸因 (Last-Click Attribution)」，點解能有效幫公司搵出邊個管道先至係真正嘅轉換功臣？
Your firm runs cross-channel campaigns. Why does GA4's default Data-Driven Attribution (DDA) model help identify key conversion channels better than old-school Last-Click?

【轉換權重路徑分佈 / Lead Path Conversion Weight Diagram】:
┌──────────────────┐      ┌───┐      ┌──────────────────┐      ┌───┐      ┌──────────────────┐      ┌────────────┐
│ Paid Search (15%)│ ───> │ ✨│ ───> │ Social Feed (45%)│ ───> │ 🛒│ ───> │ Direct Web (40%) │ ───> │ Conversion │
└──────────────────┘      └───┘      └──────────────────┘      └───┘      └──────────────────┘      └────────────┘
(Data-Driven Attribution calculates fractional credits scientifically, unlike Last-Click giving all to Direct!)`,
        options: [
          "因為 DDA 會固執地將 100% 嘅功勞分派俾用戶臨買嘢前點擊嘅最後一個廣告\nBecause DDA dogmatically assigns 100% credit to the final ad clicked before purchasing.",
          "因為 DDA 會完全平分所有功勞，唔理個渠道到底有幾重要，好平均就得\nBecause DDA splits credit evenly, ignoring how crucial each touchpoint actually was.",
          "因為 DDA 會運用 Google 嘅機器學習演算法，分析所有轉換與未轉換旅程，科學評估每個行銷接觸點 (Touchpoints) 出現與否嘅影響力，動態分配轉換權重！\nBecause DDA utilizes Google's machine learning, analyzing converting vs non-converting paths to scientifically assign fractional credit to each advertising touchpoint!",
          "DDA 根本唔可以用喺 Meta 廣告同 KOL 合作所帶嚟嘅流量歸因\nDDA is fundamentally incompatible with Meta ads and influencer traffic attribution."
        ],
        correctIndex: 2,
        explanation: "對啦！數據驅動歸因模型 (DDA) 是利用機器學習，客觀比較不同路徑群組的表現。若某廣告渠道經常出現在高效轉換路徑中，模型就會分配更多「 fractional credit (分數份額) 」給它，有效消除了 Last Click 模型偏袒收尾渠道的偏見！"
      },
      {
        id: "ga4-q4",
        questionText: `⚠️ 【高階數據偵錯 Debugging '(not set)' Values】
你朝早翻開 GA4 報表發現來源/媒介 (Source/Medium) 入面彈出好多「(not set)」嘅幽靈流量，呢個情況對行銷數據分析極之致命。通常咩原因會導致呢個慘劇，同埋點樣去 Fix？
You inspect GA4 and notice a high ratio of "(not set)" in the Source/Medium report. What causes this and how do you resolve it?

【UTM 拼接校對表 / UTM Parameters Checklist】:
┌─────────────────┬──────────────────────────────────────────┬────────────────────────┐
│ Parameter (參數) │ Purpose (用途)                           │ Required? (是否必填？)  │
├─────────────────┼──────────────────────────────────────────┼────────────────────────┤
│ utm_source      │ Identifies advertiser (e.g. google, fb)   │ YES (必須有！)          │
│ utm_medium      │ Identifies advertising format (e.g. cpc) │ YES (必須有！)          │
│ utm_campaign    │ Grouping code (e.g. mega-sale-hk)        │ Suggested (強烈建議)    │
└─────────────────┴──────────────────────────────────────────┴────────────────────────┘`,
        options: [
          "Google 喺香港嘅數據中心伺服器熱得滯燒咗，需要等佢哋冷卻\nGoogle's primary server in HK overheated; we should wait for cooling.",
          "流量缺少咗正確嘅網址 UTM (Urchin Tracking Module) 廣告參數，又或者拼接緊參數嗰陣格式寫錯/漏咗 utm_source，導致 GA4 無法正確解析來源標籤！\nTraffic lack precise UTM ad URL tags, or you broke parameter syntax (like omitting utm_source), preventing GA4 from resolving categories!",
          "用家部手機上網速度慢得滯，上載唔到來源資訊\nUser devices had slow connectivity and failed network uploads of referral properties.",
          "使用者有用 AdBlock，或者喺私人瀏覽模式開啟網頁，導致 Google 直接鎖死佢 \nUsers ran AdBlock browser utility which forced Google's servers to automatically set everything as blank."
        ],
        correctIndex: 1,
        explanation: "無錯！GA4 展示 `(not set)` 代表已經成功接收到了數據封包，但在試圖讀取 Source/Medium 等解析屬性時發現「數據缺失」。在進行外部廣告導流（如電子報、網紅推薦）時，如果沒有正確封裝 UTM 參數，或者串聯寫錯 (例如漏寫了 `?` 或 `&` 拼接)，就會導致解析出錯，全部歸類為 `(not set)`。"
      },
      {
        id: "ga4-q5",
        questionText: `🧠 【跨設備與跨平台追蹤 User-ID Architecture】
公司擁有一網頁端與一 APP 端。同一個老客喺公司網頁同手機應用程式登入並買嘢。點樣先可以將兩個唔同設備端嘅數據「連埋一齊」計成「一個人在旅途上的多次行銷轉化」，而唔會重覆計成多個人？
Your brand runs both a website and a mobile app. The same user logs in and buys things on both platforms. How to stitch these user journeys seamlessly in GA4?

【User-ID 拼接匹配原理 / Identity Stitching Diagram】:
┌───────────────────────── Mobile App (登入) ─────────────────────────┐
│ User_id: HK_99238  ──────>  GA4 Merged User Hub ──────> (1 Merge)     │ <── ✨ 終結重覆計算！
└───────────────────────── Desktop Web (登入) ─────────────────────────┘`,
        options: [
          "咩都唔使改，因為 GA4 識得全自動透過人臉識別或者手機物理定位嚟追蹤所有使用者\nDo nothing, as GA4 auto-tracks global people using physical geolocation and facial recognition.",
          "一定要在用戶登入官網或 App 之後，透過程式碼向 GA4 同步傳送一致、不含有隱私敏感內容嘅「User-ID (用戶身分標識)」，並於後台啟用 Identity 拼接機制！\nOn successful user logins on web or app, programmaticly sync an identical, non-PII User-ID to GA4, and activate Identity Stitching in admin!",
          "只保留一個網店或者一個手機 APP，關閉另一個渠道以免造成數據混亂\nDeactivate either the mobile store or desktop portal to eliminate data inconsistencies.",
          "直接用 Facebook 嘅廣告後台嚟覆蓋 GA4 所有網上報表\nDirectly override and export Facebook advertising tracking statistics over GA4 parameters."
        ],
        correctIndex: 1,
        explanation: "沒錯！User-ID 技術是現今應對第三方 Cookie 限制、進行跨平台跨裝置 (Cross-platform) 用戶畫像合併的核心。當使用者登入後，我們把後台唯一的、去隱私特徵的 User-ID 送至 GA4。GA4 將全自動把他在電腦、手機 App 的點擊、瀏覽、消費行為拼合進同一個完整用戶檔案中，真正求得 LTV 終身價值！"
      }
    ]
  },
  {
    id: "track-meta",
    title: "Meta Blueprint 經典廣告系統專家模擬考",
    provider: "Meta",
    icon: "Briefcase",
    code: "META-BP-EXP2026",
    examDuration: "35 mins",
    questionsCount: 5,
    shortDescription: "從 Meta Pixel 轉換到 CAPI 面試重點，動態版位、競拍機制與 Lookalike 類似受眾操作策略。",
    syllabus: [
      "Meta 像素 (Meta Pixel) 與轉換 API (CAPI - Conversions API)",
      "廣告架構配置：Campaign, Ad Set 与 Ad 屬性",
      "自訂受眾 (Custom Audience) 與 類似受眾 (Lookalike Audience) 種子設定",
      "Advantage+ 購物廣告活動 (ASC) 的智能優化與限制",
      "出價機制與競推扣費演算法 (Vickrey-Clarke-Groves Auction Theory)"
    ],
    questions: [
      {
        id: "meta-q1",
        questionText: `🎯 【像素與 CAPI 重點考核 Conversions API Integration】
喺 Apple 實施 iOS 政策限制 (App Tracking Transparency) 同瀏覽器即將停用第三者 Cookie 之後，行銷人員只係安裝舊版 Meta Pixel 像素常常會漏咗好多轉換單。點解 Meta 官方依家瘋狂催人埋設「轉換 API (CAPI - Conversions API)」呢？
Why is reliance on a browser-side Meta Pixel problematic, and why does Meta advocate for Conversions API (CAPI)?

【混合式伺服器架構 / Hybrid Tracking Framework】:
┌──────────────┐ Browser-side Trigger  ┌─────────────┐
│ Customer Web │ ────────────────────> │ Browser SDK │ (Pixel - Blockable by iOS / Safari)
└──────────────┘                       └─────────────┘
  │
  │ Server-side Secure Trigger (更穩定)
  ▼
┌──────────────┐ Server-to-Server Sync ┌─────────────┐
│ Your Backend │ ────────────────────> │ Meta API    │ (CAPI - Bypasses ad-blockers and iOS blocks!)
└──────────────┘                       └─────────────┘`,
        options: [
          "因為 CAPI 可以完全唔使付廣告費，就能幫你免費增加幾十萬曝光\nBecause deploying CAPI completely circumvents all ad costs, generating massive free organic impressions.",
          "因為舊 Pixel 屬於客戶端瀏覽器層面，好容易俾 iOS 或 AdBlock 阻擋。而 CAPI 係由公司伺服器端 (Server-to-Server) 直接送去 Meta 伺服器，更加穩定安全且不漏單！\nBecause browser-side Pixel is easily blocked by iOS and Adblock. CAPI communicates directly from server-to-server, bypassing browser barriers to ensure unbroken data!",
          "CAPI 係用嚟全自動幫廣告主撰寫 AI 文案，唔係用嚟做數據轉換追蹤嘅\nCAPI is an AI copywriting utility rather than a tracking API framework.",
          "裝咗 CAPI 就唔需要經廣告經理批閱，全自動就能將廣告投放到競爭對手嘅 IG 度\nInstalling CAPI allows automatic hijacking of competitors' Instagram accounts without reviewing guidelines."
        ],
        correctIndex: 1,
        explanation: "答得漂亮！Conversions API (CAPI) 採用安全的「伺服器對伺服器 (Server-to-Server)」數據同步方案。它與傳統前端 Pixel 像素混合打造成「雙軌互補」鏈路。當瀏覽器端的 Cookie 或 Pixel 被廣告阻擋器 (Ad-blockers) 或隱私模組阻隔時，後端的 CAPI 就會將購物、註冊事件補上，確保廣告庫 ROAS 計算不偏差！"
      },
      {
        id: "meta-q2",
        questionText: `📐 【社群廣告層級設定 Campaign Mechanics】
你公司想搞個「中秋節特級優惠月」推廣，預備寫 5 套文案、拍 3 條短片 (Reels)，針對 3 群唔同嘅香港受眾 (e.g. 屯門媽媽、中環白領、外賣吃貨)。為咗令成個廣告架構清晰好管理，你應該點樣喺 Meta 廣告後台佈局呢啲層級？
How should you structure folders, campaigns, and creatives in the Meta Ads Manager hierarchy for an upcoming Mid-Autumn festival promotion?

【Meta 廣告三層結構 / Meta Ad Structure Hierarchy】:
┌───────────────────────── Campaign (活動) ─────────────────────────┐ ──> 🎯 選擇目標 (e.g. Sales) 
│                                                                   │
│  ┌──────────────────── Ad Set A (組合) ────────────────────┐       │ ──> 👥 屯門媽媽 (屯門區, 預算)
│  │ ┌────── Ad 1 (文案A) ──────┐  ┌────── Ad 2 (文案B) ──────┐ │       │ ──> 🎬 Reels 1 跟文案 A, B
│  │ └─────────────────────────┘  └─────────────────────────┘ │       │
│  └──────────────────────────────────────────────────────────┘       │
└───────────────────────────────────────────────────────────────────┘`,
        options: [
          "喺 Campaign (活動層級) 設定受眾，喺 Ad Set (廣告組合) 選擇行銷目標，Ad 層級放預算\nDefine target clusters at Campaign level, branding goals at Ad Set layer, and budget at Ad folder.",
          "喺 Campaign (活動層級) 定義唯一嘅行銷目標 (例如：Sales 銷售)；喺 Ad Set (廣告組合層級) 設定對應 3 群受眾定位與預算配置；最後喺 Ad (廣告層級) 上載文案與影片素材！\nDetermine your exact objective (e.g., Conversion Sales) at Campaign level; specify targeting criteria and budget in the Ad Set; place copy variants and video assets in the Ad level!",
          "唔使搞咁多層，直接喺 Campaign 層級將所有受眾、影片素材、價錢塞入一個表格度就得\nDo not overcomplicate; directly write target tags and video frames in a single input at Campaign level.",
          "在 Ad 層級決定一切，其他兩層可留空不用設定\nExecute all logic inside the Ad level, leaving other upper tiers entirely empty."
        ],
        correctIndex: 1,
        explanation: "對啦！Meta 廣告核心三層架構：1) 廣告活動 (Campaign)：制定唯一的核心目標 (如 Lead、Sales、Traffic)；2) 廣告組合 (Ad Set)：指定具體的受眾群 (Targeting)、廣告版位 (Placements)、時間排期以及出價底線；3) 廣告 (Ad)：上載具體的視覺素材、網址跳轉鏈、Call to Action (CTA) 按鈕以及各種文案，結構非常清晰！"
      },
      {
        id: "meta-q3",
        questionText: `📈 【受眾演算法與相似Lookalike Target Logic】
如果行銷人員想拓展開拓全港「高客單價、高回購次數」嘅類似新客，應該點樣精準操作 Meta 嘅「類似受眾 (LAL - Lookalike Audience)」功能，先能獲得最佳 ROAS？
How to generate a highly precise Lookalike Audience (LAL) in Meta to acquire new prospects with high basket value and retention?

【類似受眾提取模型 / Lookalike Modeling Seed Matrix】:
┌──────────────────────────────────────────────┐
│  High-Value VIPs Seed List (1,000 active customer emails)  │ ──> LAL Engine (AI compares traits: behavior, location)
└──────────────────────────────────────────────┘
                                                  │
                                                  ▼
                         ┌──────────────────────────────────────────────────┐
                         │  Target: 1% LAL in HK (最相似的前 1% 新客 - 7萬人)  │ ──> 精準放量爆單！
                         └──────────────────────────────────────────────────┘`,
        options: [
          "隨便買一份無關人士嘅電話名冊，上載去系統然後做 15% 嘅大範圍放量\nSimply upload a generic phonebook database and scale with a broad 15% ratio match.",
          "先利用官網數據或 CRM 系統，歸納出「累積消費額排名前 10% 嘅 VIP 老顧客」作為 Custom Audience (種子自訂受眾)，再以此種子在香港放大 1% 進行相似度建模！\nIsolate active VIP spenders from web data as a Seed list, register as a Custom Audience, then build 1% similarity model tailored in Hong Kong!",
          "唔使用任何高客單價種子，直接對全香港所有 18-65 歲市民投遞無差別廣告，系統會自動搞掂\nBypass high-value seed assets entirely; target all residents in Hong Kong broadly to let Google automate.",
          "尋找所有在 Facebook 社團裡發布過競爭對手差評嘅酸民進行廣告精準打擊\nGather online lists of user avatars posting negative reviews on competitors to direct aggressive ads."
        ],
        correctIndex: 1,
        explanation: "答得好專業！類似受眾 (LAL) 的核心實踐法則：『垃圾進，垃圾出』。如果你拿一般沒轉換的「點擊過網民」做種子，AI算出來的相似群體就很平庸。唯有利用高內聚力 (如買滿 3 次的 VIP、高終身價值 CLV 客戶) 的精準種子，Meta AI 演算法才能尋找到真金白銀的精準新客群！"
      },
      {
        id: "meta-q4",
        questionText: `🤖 【Advantage+ 購物廣告活動 ASC Strategy】
關於 Meta 近年主推嘅「Advantage+ 購物廣告活動 (ASC - Advantage+ Shopping Campaigns)」，以下邊一個描述最符合其運作邏輯及合適嘅套用時機？
Which description best matches the mechanics and sweet-spot timing for deploying Meta Advantage+ Shopping Campaigns (ASC)?

【ASC 智能自動化整合 / ASC Automated Optimization】:
┌────────────────────────────────────────────────────────────────────────┐
│                        Meta Advantage+ Engine                          │
│  - Automated Budget (CBO)     - Automated Placements (FB, IG, AudNet)  │ ──> 🛍️ 降低爆單門檻！
│  - Dynamic Creative Mix (素材) - Lookalike Overlap (智能類似與核心定向)    │
└────────────────────────────────────────────────────────────────────────┘`,
        options: [
          "它不允許上載任何圖片，只可以用文字向盲人播報語音廣告，省卻視覺開銷\nIt bans all image assets; advertising messages are broadcast exclusively through text-to-speech for visuals.",
          "它高度依賴 Meta 嘅 AI 機器學習，會自動幫你優化預算分配、受眾定向、素材動態輪播與廣告版位。最適合有穩定 Pixel/CAPI 像素累積及有豐富素材嘅電商快速爆單！\nIt relies heavily on machine learning, automating budgets, placements, creatives and bidding targets. Best suited for e-commerce stores with established Pixel data!",
          "它是專門為完全沒有任何官方網址、亦零預算嘅街邊小商販提供免費張貼宣傳單張嘅系統\nIt is a free virtual bulletin board specialized for tiny, budget-free street-side stalls with no web presences.",
          "安裝之後會全自動將所有競品廣告嘅售價強行改寫，讓自家的產品最便宜\nOnce installed, it hijacks and alters competitors' product prices, forcing your products to look cheapest."
        ],
        correctIndex: 1,
        explanation: "答對了！Advantage+ 購物廣告 (ASC) 是 Meta 全力推廣的極簡 AI 智能整合渠道，把過去需要手動拆拆寫寫的版位與預算大幅自動化。但它的痛點在於很需要「老像素 (Mature Pixels)」和「大量高品質廣告素材 (Diverse Creatives)」供 AI 進行 A/B 測試。若商家像素完全沒過數據、素材亦單調，其效果不一定比手動優化好。"
      },
      {
        id: "meta-q5",
        questionText: `⚖️ 【Meta 競拍機制與費用競逐 Auction Bidding Logic】
Meta 係採用 VCG (Vickrey-Clarke-Groves) 這種「次高價拍賣」嘅競價形式。點解了解呢點對在港投放、控制 CPM (Cost Per Mille) 乃至獲得真實 ROAS 有極大幫助？
Meta employs the VCG (Vickrey-Clarke-Groves) bidding system. Why is understanding this vital for managing Hong Kong advertising budgets and stabilizing ROAS?

【VCG 次高價競得機制 / VCG Bidding Pricing Matrix】:
┌─────────────────────────────────┬────────────────────────────────┐
│ Advertiser Bid (廣告主出價額)     │ Actual Charging Price (真實扣費)│
├─────────────────────────────────┼────────────────────────────────┤
│ Host A: $5.00  (最高出價 - 贏得Ad)│ Charge: $3.01 (Host B's bid+$0.01) (次高價 + $0.01) ✨│
│ Host B: $3.00                   │ (無須支付原 5.00，鼓勵大膽出價真實估值！)            │
│ Host C: $1.20                   │                                │
└─────────────────────────────────┴────────────────────────────────┘`,
        options: [
          "因為次高價拍賣代表你只要贏得拍賣，你只需要支付「僅次於你嘅第二名出價」再加些許價錢，因此你大膽報出心目中受眾嘅最高真實估值 (Bid Valor) 反而最划算！\nBecause VCG auction charges you only the 'second-highest bid plus an increment'. Hence bidding your true maximal valuation is your best strategy!",
          "因為你出幾多錢，Meta 就會一分不差扣爆你，唔了解會破產\nBecause Meta will deduct your absolute maximum bid down to the last penny, causing rapid bankruptcy.",
          "了解呢個机制可以幫你在 Meta 廣告中注入虛擬假代幣，欺騙平台扣款\nUnderstanding this system allows injection of counterfeit token data to trick Meta into zero billing.",
          "次高價拍賣只會在感恩節當日或者每晚淩晨一小時生效\nVCG rules only execute during Thanksgiving holiday, staying obsolete throughout regular days."
        ],
        correctIndex: 0,
        explanation: "完全正確！在 Meta (以及 Google) 的廣告競價底層，大比例實踐了次高價 (Second-price sealing/VCG) 拍賣理論。如果你能承受的 CAC (客戶獲取成本) 實際是 $100 元，大膽出價 $100 即可。如果次高競爭者只出了 $50 元，系統最後可能只扣除你 $50.01 元！這樣你不用戰戰兢兢、低報預算而吃不到頂級優質轉化受眾，是高端行銷經理調配出價的必讀課！"
      }
    ]
  },
  {
    id: "track-hk-omni",
    title: "香港本土跨渠道零售與社群電商行銷認證",
    provider: "Meta",
    icon: "Briefcase",
    code: "HK-OMNI-2026",
    examDuration: "40 mins",
    questionsCount: 5,
    shortDescription: "結合港式粵語社群滲透、WhatsApp Business 廣播行銷、實體店(Brick-and-Mortar)與電商(E-commerce) O2O 新戰術。",
    syllabus: [
      "粤語本土化社群文案與港式迷因行銷 (Cantonese Copywriting & Localized Memes)",
      "WhatsApp Business API 廣播系統與範本發送 (WhatsApp API Marketing & BroadCast API)",
      "O2O (Online-to-Offline / Offline-to-Online) 跨渠道歸因與店鋪造訪計量",
      "香港主流支付渠道對 CVR (Conversion Rate) 之核心轉換影響",
      "KOL/KOC 香港網紅口碑推廣與聯名增長分銷模型"
    ],
    questions: [
      {
        id: "hk-omni-q1",
        questionText: `✍️ 【港式粵語本土社群文案 Cantonese Social Penetration】
你公司想喺 Facebook / Instagram 宣傳一款本土手工涼茶膠囊，主打上班族「日常清熱去濕、急救捱夜爆暗瘡」。以下邊一套「廣東話/粵語社群文案」最適合香港中環/鰂魚涌嘅社畜，能夠大幅提升 CTR 並點入官網？
Your firm promotes local herbal tea capsules addressing burnout, fatigue and acne. Which Cantonese copy variant resonates best with HK office white-collars to optimize Click-Through Rate (CTR)?

【本地化語義對抗表 / Localization Linguistic Lift Table】:
┌───────────────────────── Bad: 陸式推播 ─────────────────────────┐
│ “重磅來襲！這款純天然植物萃取熬夜茶能排毒，讓您精神飽滿，趕快搶購吧！” │
└───────────────────────────────────────────────────────────────┘
                                                VS
┌───────────────────────── Good: 港式共鳴 ─────────────────────────┐
│ “日日喺中環 chur 到爆、捱夜開會爆到成面暗瘡？不如試試港產一Click去濕茶...” │
└───────────────────────────────────────────────────────────────┘`,
        options: [
          "「重磅來襲！本公司研發的高純度天然草本配方，能夠助您精神抖擻，今天只要 199 元，快來搶購吧！」\nHigh-purity botanical health assets developed to restore focus; grab yours for just HKD 199 today!",
          "「日日喺中環 Chur 到爆、捱夜開會仲要爆埋成面暗瘡 😭？試吓港產一Click急救去濕茶，唔使用熱水煲，一秒沖洗帶走老泥去水腫。即撳入嚟，首單有免運！」\nChurring all day in Central, pulling all-nighters, and suffering severe breakouts? Try our HK-made capsule; immediate relief with free shipping on 1st orders!",
          "「手工草本涼茶，成分含有甘草、菊花、夏枯草、野菊花，不含有任何糖分，適合每天任何時間點飲用。」\nHerbal formulation containing licorice and chrysanthemum; features sugar-free nutrients suitable for daily consumption.",
          "「不喜歡飲茶的人，我們強烈不建議您購買我們的任何産品，以免浪費您的金錢。」\nIf you hate tea, do not bother buying any of our offerings; spare your cash."
        ],
        correctIndex: 1,
        explanation: "Bingo！香港社群行銷的基調：高節奏、愛宣洩、重共鳴。使用本地打工仔親民字眼如 「Chur 到爆」 (極度忙碌勞累)、 「成面暗瘡」 (滿臉青春痘) 以及港人最愛的網購核心動詞 「撳入嚟」 (點擊連結) ，比起死板、毫無感情的電視廣告式宣傳詞，點擊流量 CTR 能高出 2 到 3 倍！"
      },
      {
        id: "hk-omni-q2",
        questionText: `💬 【WhatsApp Business 廣播引流與防封號 Broadcast API Guard】
香港網民對 LINE 微信覆蓋不高，而 WhatsApp 覆蓋率高達 90% 以上。如果你想透過「WhatsApp Business API」向 5,000 位舊顧客發送「中秋限時 8 折優惠券」，點樣做先可以最大化開封率 (Open Rate) 又不被 WhatsApp 官方認定為垃圾訊息 (Spam) 甚至直接封號？
WhatsApp is dominant in Hong Kong with >90% penetration. How to blast an upcoming Mid-Autumn 20% discount voucher to 5,000 past buyers to secure highest open rates without triggers for spam and system bans?

【WhatsApp 綠勾專業版 vs 個人版區分 / WhatsApp Delivery Architecture】:
┌─────────────────────── WhatsApp Personal (個人) ───────────────────────┐
│ ❌ Blast list manually  ──> Easy spam report ──> Rapid Phone Ban (秒封號)     │
└───────────────────────────────────────────────────────────────────┘
                                                VS
┌─────────────────────── WhatsApp Business API (官方) ──────────────────────┐
│ ✅ Authenticated Template Ads ──> Opt-In Lists ──> Secure Blast (無懼投訴)     │
└───────────────────────────────────────────────────────────────────┘`,
        options: [
          "用自己私人個人 WhatsApp 手機帳號，喺一分鐘內手動拷貝複製並傳送給 5,000 人\nUse your physical personal phone numbers and copy-paste text manually to 5,000 accounts in one minute.",
          "採用官方 WhatsApp Business API 服務，發送必須已經過 Meta 官方審核通過嘅「範本訊息 (Message Template)」，並且只針對曾 Opt-In (同意接收) 的名單發送，加入一鍵 Opt-Out (取消訂閱) 按鈕！\nRun official WhatsApp Business API endpoints; deliver verified Message Templates only to users who explicitly opt-in, featuring simple opt-out links!",
          "在訊息入面寫滿其他競爭對手嘅 WhatsApp 電話號碼，實施借刀殺人計劃，等官方去封鎖佢哋\nFill advertising text strings with competitor support desk numbers to trigger malicious reporting routes.",
          "發送極之誇張、甚至恐嚇性質嘅文字 (例如不買就會遭遇霉運)，逼佢哋一定要打開\nBroadcast high-pressure, threatening copy variations to force rapid customer viewing rates."
        ],
        correctIndex: 1,
         explanation: "沒錯！官方 WhatsApp Business API 收費廣播是香港中大型零售與電商的核心渠道。要不被系統直接「 Ban 號 (封鎖號碼) 」，第一必須使用 Meta 預審的範本 (Templates)，第二最重要是給予客戶便捷的「Opt-Out (取消訂閱 / 撳此停止接收)」按鈕。這樣當客戶不想看時會點“取消訂閱”，而不會點“垃圾訊息檢舉”，手機健康權重才能永續高飛！"
      },
      {
        id: "hk-omni-q3",
        questionText: `🛒 【O2O 門市與線上零售跨渠道歸因 Omnichannel Path Attribution】
你公司喺銅鑼灣崇光百貨 (Sogo Shop) 有間香水實體店，網上亦起咗個 Shopify 店。如果喺網上投遞 Meta 廣告引導人去銅鑼灣實體店買香水，點樣才能最合理解析並科學歸因，向老細說明這筆「網上廣告支出對線下門市 Sogo 帶來了多少真實營業額 (O2O Performance Attribution)」？
You run an offline boutique store in Sogo Causeway Bay alongside a Shopify webshop. How to programmatically attribute offline brick-and-mortar sales to your online Meta ads spend?

【跨渠道轉化拼貼 / Omnichannel Attribution Workflow】:
┌──────────────┐ Ads interaction  ┌─────────────┐
│ Online Meta  │ ───────────────> │ User Screen │ (Gets Dynamic Offline Voucher Code)
└──────────────┘                  └─────────────┘
                                         │
                                         │ Brings phone to Causeway Bay Store
                                         ▼
┌──────────────┐ Scans POS Code   ┌─────────────┐
│ Sogo POS Hub │ ───────────────> │ Upload Offline Event API to Meta CAPI │ (Stitches FB Click Profile!)
└──────────────┘                  └─────────────┘`,
        options: [
          "崇光門市完全唔好做任何記錄，只靠睇當日門口人流多唔多嚟主觀估算廣告成效\nKeep no diagnostic database in Sogo; rely purely on headcounts to gauge advertising ROI.",
          "透過 Meta 廣告促銷，讓顧客取得包含專屬 UTM 的線下實體店 QR Code 優惠券；收銀員掃描 POS (銷售終端系統) 讀取優惠碼結帳，並將 POS 交易時間、電子郵件雜湊 (Hashed email) 透過 Meta 離線事件 API (Offline Events API) 批次上載匹配！\nOffer dynamic QR voucher codes via online ads; read these at physical registers with local POS suites, then programmatically sync hashed transaction emails to Meta Offline Events API!",
          "要求每一位來銅鑼灣門市買嘢嘅客，都要當面當場填寫一份 30 頁紙嘅中英對照詳細問卷調查\nDemand every offline boutique buyer complete an detailed 30-page paper questionnaire before being checked out.",
          "直接把網上 Shopify 電商永久關閉，就不會有數據重合的複雜煩惱了\nPermanently shut down your digital Shopify e-store to eliminate cross-channel matching issues."
        ],
        correctIndex: 1,
        explanation: "答對了！這就是成熟的 O2O (Online-To-Offline) 跨渠道歸因。透過將離線店鋪購買明細 (POS 交易，包含客戶郵箱/電話) 打包並通過 Offline Events API / Offline Conversion upload 同步給 Meta。Meta 就能比對出：是哪幾位曾在過去看過、點過中秋節廣告的網民，在3天內去崇光實體店刷了卡，科學歸算出門市的 Offline ROAS！"
      },
      {
        id: "hk-omni-q4",
        questionText: `💳 【本地電子支付渠道與轉換率關係 CVR Hook】
香港有極其獨特、多樣化嘅支付工具生態 (PayMe, 轉數快 FPS, 八達通 Octopus, 支付寶 HK / 微信, Visa/Mastercard)。如果你的 Shopify 電商網店一開始 CVR (Conversion Rate, 網店轉換率) 得 0.5%，點解加入本地化支付能夠直接大改網店成效？
Hong Kong maintains a highly unique payment system landscape. Why does optimizing payment localizations directly double your e-store CVR metrics?

【各支付渠道轉換磨損示意 / Payment Gate Friction Drops】:
 ────────────────── 💳 Credit Card Input: Requires card details, SMS verification (High Dropouts: 85%)
   ──────────────── 📈 PayMe / FPS Tap-In: One-click app switch (Instant approval - Dropouts: only 15%!)`,
        options: [
          "因為 PayMe 同轉數快 FPS 支付是完全免費的，政府不收你任何稅收跟利潤分成\nBecause native local systems are free government networks subject to 0% transaction taxes.",
          "因為香港人網購極不願意手動輸入 16 位信用卡卡號與等待卡片驗證碼簡訊。加入一鍵換屏 PayMe / 轉數快 FPS 或八達通掃描，能夠大幅縮短結帳步驟，減少結算流失 (Checkout Friction)，直接倍增 CVR！\nBecause HK consumers dislike typing 16-digit credit cards with SMS. One-click PayMe App transition, Octopus barcode scans, and FPS simplify checkouts, slashing basket dropouts!",
          "加入這些支付只會讓海外顧客產生疑惑，導致網站權重下降被駭客入侵\nDeploying localized protocols scares international buyers and risks server backdoors.",
          "香港用戶網購其實只信任美國運通白金大卡，本地電子錢包完全沒有人用\nHK consumers only trust American Express cards; mobile wallets are completely dead."
        ],
        correctIndex: 1,
        explanation: "完全正確！轉換漏斗的關鍵：越少障礙越好。PayMe / 轉數快 (Faster Payment System, FPS) 是香港消費者尤其是年輕、大中型日常品電商最依賴的無磨損支付。若顧客點擊結帳時需要爬下床去找實體信用卡、輸入密碼驗證，40% 的購物車會當場被遺棄。一鍵跳轉手機錢包能直接拉高 CVR 200% 以上！"
      },
      {
        id: "hk-omni-q5",
        questionText: `📣 【港網紅與分銷渠道營運 KOL & Affiliate Pricing】
你公司做緊一款香港本地製造嘅無糖低卡手工啤酒。預備招募一班本地 IG (Instagram) 運動網紅 IG KOL / 微網紅 KOC 寫草根分享。為咗確保「不只買知名度，更要買實績」，你應該點樣向網紅開出最健康、有吸引力又確保自己毛利嘅合作酬勞機制？
You want to run a local sports KOL campaign for low-carb craft beers. To guarantee true transactional ROAS returns rather than only empty branding views, how to structure pricing?

【港幣網紅酬勞矩陣 / Local Influencer Compensation Structure】:
┌─────────────────┬──────────────────────────────────────────┬────────────────────────┐
│ Model (模式)    │ Compensation (回報機制)                   │ Your Risk (公司風險)   │
├─────────────────┼──────────────────────────────────────────┼────────────────────────┤
│ Fixed Fee (一口價)│ Pre-paid HKD 20,000 for 1 post            │ Very High (可能0單！) │
│ Mixed CPA (混合型)│ Base HKD 2,000 + 15% Sale Commission (佣金)│ Balanced & Safe (雙贏) │
└─────────────────┴──────────────────────────────────────────┴────────────────────────┘`,
        options: [
          "不管理網紅是否能導流訂單，一律預先支付高額的一口固定贊助費 (Fixed Placement Fee)\nGuarantee maximal upfront fixed payment vouchers, ignoring subsequent transactional outcomes.",
          "採用「低車馬費底價 + 個人專屬推廣優惠碼 (Promo Code) 業績拆帳 / 15% 分銷返利 CPS (Cost Per Sale)」嘅混合模型，並在後台登錄追蹤，實現雙贏並控制 CAC 預算支出！\nApply a 'low baseline stipend plus custom affiliate Promo Codes for tracking sales attribution, paying 15% CPS (Cost Per Sale) commissions' to directly control CAC!",
          "完全不提供給網紅任何報酬或樣品，靠瘋狂留言恐嚇逼迫網紅幫忙免費作宣傳\nOffer zero compensation or product packages; force free marketing through aggressive spamming.",
          "直接把手工啤酒在店面宣傳為「包治百病，無糖減肥仙藥」，誇大醫療療效吸引大量投訴\nDeceptively market craft beer as weight-loss panaceas on net portals to invite legal warnings."
        ],
        correctIndex: 1,
        explanation: "這就是數位年代的流量分潤機制！香港微網紅、KOC (Key Opinion Consumer) 數量繁多。給予專屬的限時優惠碼 (Promo Code / e.g. RYAN10) 或是 Shopify 分銷連結。網紅因能拿到 15% 折扣返佣 (Affiliate Commission) ，會更賣力去社群分享推動身邊朋友圈下單。對公司來說，廣告費完美變成了「與實績掛鉤的變動成本」，能將獲客成本 CAC 牢牢鎖死在預算安全線內！"
      }
    ]
  },
  {
    id: "track-pmi-agile",
    title: "PMI-ACP 敏捷項目管理與 Scrum Master 本地實戰專業認證",
    provider: "PMI",
    icon: "Briefcase",
    code: "PMI-ACP-HK2026",
    examDuration: "40 mins",
    questionsCount: 5,
    shortDescription: "針對 PMI 敏捷項目管理專業人士 (PMI-ACP) 與 Scrum 框架。涵蓋 DSU 每日站會效率、WIP 限額看板、SP 故事估算和 Scope Creep 預防。廣東話及中英對照精修。",
    syllabus: [
      "每日站立會議 DSU (Daily Stand-Up) 的核心溝通原則",
      "看板中在製品限額 WIP Limit (Work-In-Progress Limit) 的瓶頸排除",
      "迭代回顧會議 Sprint Retrospective (Retro) 持續改進流程",
      "規劃撲克 Planning Poker 與故事點數 SP (Story Points) 估算機制",
      "產品待辦項目 PBI (Product Backlog Item) 的優先級分級與 Scope Creep 控管"
    ],
    questions: [
      {
        id: "pmi-q1",
        questionText: `⏱️ 【每日站會效率考核 Daily Stand-Up (DSU) Communication Rules】
你團隊正在運行敏捷項目管理 APM (Agile Project Management)。喺每日站立會議 DSU (Daily Stand-Up) 之中，有個主力 Developer 滔滔不絕講咗 10 分鐘，深入解釋緊某個 C++ 內存洩露 (Memory Leak) 嘅底層代碼點寫。作為 Scrum Master (SM)，你應該點樣用港式敏捷思維去糾正呢個情況，以確保站會符合 Scrum 效率指南？
Your development team is running APM (Agile Project Management). During the DSU (Daily Stand-Up), a core developer spends 10 minutes deep-diving into C++ low-level memory leak bug fixes. As a Scrum Master (SM), how should you handle this under Agile guidelines?

【每日站會 15 分鐘上限流動圖 / DSU 15-Min Cap Communication Flowchart】:
┌───────────────────────────────── DSU Meeting ────────────────────────────────┐
│  Dev A (1 min) ──> Dev B (1 min) ──> Core Dev (10 mins - Blathering!) ❌      │
│                                                                              │
│  ✨ Correct Move:                                                            │
│  "Let's take this offline!" ──> Move into Post-DSU Parking Lot (1:1 chat) ✅ │
└──────────────────────────────────────────────────────────────────────────────┘`,
        options: [
          "由得佢繼續講，因為技術細節十分重要，全體團隊都應該一齊聽點樣改內存洩露以表現好學\nLet him continue; technical depth is crucial and all teammates should stay to listen.",
          "即時中斷佢，客氣但堅定地講：『呢個問題好深入，但為咗 15 分鐘 DSU 效率，我哋轉頭 \"Parking Lot\"（會後停車場）先 Offline 一對一細傾，等大家交代埋尋日、今日進度先！』\nPolitely interrupt: 'This is a great topic but to respect our 15-min limit, let's park it and discuss offline during Parking Lot, while we finish everyone's updates first!'",
          "當場宣布會議取消，並罰嗰個 Developer 買下午茶請全公司食蛋撻\nCancel the stand-up immediately and penalize the developer by ordering egg tarts for the office.",
          "要求以後每日站立會議改為「坐喺度開三小時」，等每個人都可以詳細報告寫咗幾多行 Code\nDemand all future daily stand-ups be 3-hour seated logs so everyone reads code lines aloud."
        ],
        correctIndex: 1,
        explanation: "正確答案！每日站立會議 DSU (Daily Stand-Up) 的黃金原則是：不超過 15 分鐘，每人僅對齊「尋日做咗乜、今日做乜、有無遇到障礙 (Impediments)」。深入的技術糾錯應移至「會後停車場 (Parking Lot)」進行線下離線 (Offline) 1對1對接，避免浪費其他無關成員的時間。"
      },
      {
        id: "pmi-q2",
        questionText: `📉 【待辦清單與範圍蔓延 Backlog Caretakers & Scope Creep Prevention】
有間中環金融科技 Startup 老細 (Product Owner / PO) 臨近 Release 前兩日，突然好興奮咁衝入嚟衝擊團隊，話想喺產品待辦項目 PBI (Product Backlog Item) 入面夾塞一個「全新 AI 理財對話助理」功能。面臨不合理嘅範圍蔓延 Scope Creep，團隊應該點做先符合敏捷實踐？
A fintech CEO (who acts as PO) wants to shoehorn a complex 'AI Wealth Assistant' into PBIs 2 days before release. Facing aggressive Scope Creep, how should the team respond under Scrum standards?

【範圍蔓延折線圖 / Scope Creep Impact Vector】:
  Capacity Limit (團隊產能上限 📦) : ────────────────────────────────── (80 Story Points)
  Current Sprint Plan (當前迭代計劃) : ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ (78 Story Points)
  PO Added Scope (突發新增需求!) : ➕ ■■■■■■■■■■■■■■■■■■■■ (Excess! 越線崩潰 💥)`,
        options: [
          "老細話曬事，全體團隊唯有即時連續 48 小時通宵加班，將新增功能夾硬逼寫出嚟\nThe boss is absolute; force developers to pull back-to-back 40-hour shifts to deploy.",
          "告知產品負責人 PO (Product Owner) 呢個變更是嚴重的範圍蔓延 Scope Creep。要求佢在下一次迭代規劃 (Sprint Planning) 裡用「故事點數 SP (Story Points)」重新排名，按「ROI 投資回報率」優先安排，或者等量交換目前的 PBI！\nInform PO that this causes severe Scope Creep. Require PO to prioritize this in the next Sprint Planning using Story Points (SP) based on ROI, or swap it out with existing items of equal weight!",
          "直接同老細反面，甚至在 GitHub 原始碼入面注入惡意代碼抗議彈劾\nRebel against the CEO and commit malicious scripts to the GitHub repository to boycott.",
          "全盤接受，但偷偷將其他本來承諾要做好嘅安全加密/轉帳支付功能全部不經測試直接上線\nAccept it silently but bypass all backend security audits and online billing test suites to save time."
        ],
        correctIndex: 1,
        explanation: "答對了！在 Scrum 模型中，產品負責人 PO (Product Owner) 雖然擁有產品待辦項目 PBI (Product Backlog Item) 的優先級定義權，但一旦迭代 (Sprint) 啟動，團隊承諾的範疇是不應被任意更改的。不加限制的「插單」會造成嚴重的範圍蔓延 (Scope Creep)。標準的做法是在 Backlog 後台重新梳理與估點，於未來的迭代依價值順排或採取等量交換 (Scope Swap) 策略。"
      },
      {
        id: "pmi-q3",
        questionText: `🚧 【看板在制品限額 WIP Limit & Bottleneck Identification】
你團隊嘅看板系統 (Kanban System) 出現咗嚴重塞車，以下為看板在制品限額 WIP Limit (Work-In-Progress Limit) 的運作矩陣。根據圖表，你作為敏捷教練 (Agile Coach) 應該點帶領團隊進行「消除瓶頸 (Swarming)」？
Your team's Kanban board is suffering a major workflow jam. Below is the active board showing Work-In-Progress (WIP) states. How should an Agile Coach guide the team to unblock the pipe?

【看板在製品限額矩陣 / Kanban Board WIP Matrix Chart】:
┌───────────────┬────────────────────────┬────────────────────────┐
│ Todo (待辦)   │ In Dev (研發中) [WIP:3]│ Testing (測試中) [WIP:2]│ Done (完成)     │
├───────────────┼────────────────────────┼────────────────────────┤
│ • Task 7      │ 💻 Task 3              │ 🧪 Task 1 (JAM 🧱)      │ 🎉 Task 10     │
│ • Task 8      │ 💻 Task 4              │ 🧪 Task 2 (JAM 🧱)      │ 🎉 Task 11     │
│ • Task 9      │ 💻 Task 5 (Blocked ⚠️)  │                        │                │
└───────────────┴────────────────────────┴────────────────────────┘ (Testing stage has hit WIP max limit 2/2, causing Dev block!)`,
        options: [
          "叫 Developers 唔好理 Testing，繼續寫更多新 Code，把 In Dev 卡片推到 50 張以上\nTell devs to ignore Testing blockages and write more code, push In Dev cards above 50 limit.",
          "實踐「停手邊工作，開始幫手收尾 (Stop Starting, Start Finishing)」原則！安排開發人員暫停寫新功能，一齊協助 QA (Quality Assurance) 來消化 Testing 層的卡片，合力解決限額瓶頸！\nApply 'Stop Starting, Start Finishing' protocols! Direct idle developers to assist QA testers in completing the backlog in the Testing column to unblock the WIP pipeline!",
          "把看板上限 (WIP Limit) 完全改寫成不設封底 (WIP: 9999)，自欺欺人假裝沒有塞車\nRewrite WIP limits to infinite values (9999) on the board to hide congestion issues.",
          "直接解僱所有 QA 測試員，從此不經檢驗直接發佈產品到 App Store 賺錢\nFire all QA specialists to deploy unverified, buggy code directly to consumers."
        ],
        correctIndex: 1,
        explanation: "對啦！敏捷看板的核心思想就是控制在製品限額 WIP Limit (Work-In-Progress Limit)。當 Testing 欄位塞滿了並到達極限 (2/2) 時，下游不通，上游 In Dev 自動會被卡死 (Blocked)。此時開發者不應製造更多半成品 (Inventory Capital waste)，而應該臨時改變兵力 (Swarming/助攻)，協助測試部門解決問題，才能維持健康的吞吐率 (Throughput)！"
      },
      {
        id: "pmi-q4",
        questionText: `🔄 【迭代回顧會議持續改進 Sprint Retrospective (Retro) Focus】
每當一個 2 週嘅迭代結束，團隊都要開「迭代回顧會議 Sprint Retrospective (Retro)」。有初級項目經理抱怨呢個會「浪費時間、次次開會都無實質改變」。你認為怎樣才能真正做一場高標準、符合 CI (Continuous Improvement) 的 Retro？
Your associate PM complains that Retros are an empty waste of time with no action items. How to construct a high-impact Sprint Retrospective that drives real Continuous Improvement (CI)?

【回顧分析象限 / Retrospective Action Grid】:
┌───────────────────────────────────────┬───────────────────────────────────────┐
│  😊 What Went Well (做得好的)          │  ⚠️ What Can Be Improved (可改善的)   │
│  - Automated testing setups (自動測試)   │  - Lack of API docs (缺 API 文檔)     │
├───────────────────────────────────────┼───────────────────────────────────────┤
│  ⚡ Action Items (具體行動行動清單)     │  🛡️ Assignee & Date (負責人及截止日)   │
│  - \"Create Swagger template!\" ✅       │  - Developer Kent, by Monday next ✅  │
└───────────────────────────────────────┴───────────────────────────────────────┘`,
        options: [
          "回顧會主要是用來「捉鬼」並指責表現差的成員，追究寫 Bug 罪魁禍首\nRetros should serve as finger-pointing sessions to identify who introduced bugs.",
          "只吹捧做得好的地方 (What Went Well)，把所有技術障礙和磨損當作不存在\nOnly focus on positive items while completely ignoring operational faults.",
          "不僅盤點優缺點，更必須在會後提煉出「1到2項具體、可量化、有明確負責人 (Assignee) 且可在下個迭代落地的行動方案 (Action Items)」！\nNot only review pros and cons, but distill 1-2 practical, measurable Action Items featuring a clear Assignee and deadline to implement next Sprint!",
          "改寫成老細的單向訓話會，每個人只要抄寫筆記，不用發言\nTurn it into a top-down executive lecturing assembly where engineers sit silently."
        ],
        correctIndex: 2,
        explanation: "Bingo！Scrum Master 或項目經理召開迭代回顧會議 (Sprint Retrospective) 最忌諱「只抱怨，無落實」。一場高水準的 Retro 點睛之筆在於：將痛點轉化為具備「Who, When, What (何人、何時、何事)」的具體行動方針 (Action Items)，並在下一次 Sprint 直接追蹤檢視，才是真正的持續優化 (Continuous Improvement) 精神！"
      },
      {
        id: "pmi-q5",
        questionText: `🃏 【規劃撲克與故事點數SP估算 Planning Poker Estimation】
團隊喺做迭代規劃會議時，進行規劃撲克 (Planning Poker) 估算。針對同一個產品待辦項目 PBI (如「增加 Apple Pay 香港快捷支付機制」)，資深 Architecture 出了 2 故事點數 SP (Story Points)，而剛入職的 Junior Dev 卻給了 13 SP。你應該點樣協調？
During estimation, a Senior architect drafts 2 Story Points (SP) using Planning Poker for an Apple Pay portal task, while a Junior Dev registers 13 SP. How to resolve this difference?

【規劃撲克估值分配 / Planning Poker Divergence Map】:
   [ 🎴 Card 2 ] <──────────────────────── (Divergence 🚨 懸殊) ────────────────────────> [ 🎴 Card 13 ]
   Senior Dev's estimate: Simple wrapper                          Junior Dev's estimate: Hard database sync
   
   ✨ Dynamic Strategy:
   Ask extreme bidders (2 and 13) to explain their rationale ──> Build consensus on true complexity! ✅`,
        options: [
          "直接採用兩者嘅平均數： (2 + 13) / 2 = 7.5 SP，省時間早點放工\nShortcut by taking the mathematical average of 7.5 to finish the meeting early.",
          "盲目聽從資深 Architecture 的意見，逼 Junior Dev 承認自己估錯並改出為 2 SP\nEnforce the Senior architect's 2 SP view directly, forcing the Junior Dev to comply.",
          "邀請這兩位出極端估點 (2 和 13) 嘅成員分享各自嘅理解和背後考慮，釐清隱藏風險（如數據庫同步等），重新對齊認知後再進行第二輪投票！\nInvite both the 2 SP and 13 SP bidders to state their reasoning, uncovering hidden complexities (e.g. database syncs), align assumptions, and run a second voting round!",
          "向兩位發起體能挑戰，誰打乒乓波贏了就採用誰的故事點數估算\nSolve the estimation gap by throwing a ping-pong match; whoever wins gets their points chosen."
        ],
        correctIndex: 2,
        explanation: "答對了！規劃撲克 Planning Poker 的精妙之處絕非為了求取平均數，而是為了解鎖「對認知分歧的對話」。Junior 估 13 可能是考量到舊系統的數據接口改造，而 Senior 估 2 可能是預期可以使用現成的第三方 SDK 套件。雙方交流背景設定、排除知識盲區 (Blindspots) 後，重新開牌才能取得最真實、不自欺欺人的工作複雜度預測。"
      }
    ]
  },
  {
    id: "track-sfc-fintech",
    title: "香港證監會 SFC & 金融管理局 HKMA 本土法規與 FinTech 創新合規認證",
    provider: "SFC",
    icon: "Briefcase",
    code: "SFC-SEC1-FT2026",
    examDuration: "45 mins",
    questionsCount: 5,
    shortDescription: "結合香港證監會 (SFC) 第 1/4/9 類牌照規管、金管局金融科技監管沙盒、客戶身分審查 (KYC)、反洗錢 (AML) 規例及 ESG 科學目標。繁中英對照及港式粵語實戰考核。",
    syllabus: [
      "證監會受規管活動 (SFC Licensed Regulated Activities) 與牌照豁免規定",
      "金管局 FTS (Fintech Regulatory Sandbox) 監管沙盒的應用邊界與豁免條件",
      "客戶身分驗證 KYC (Know Your Customer) 與簡化客戶盡職審查 CDD (Customer Due Diligence) 合規條件",
      "反洗錢及反恐怖分子資金籌集 AML/CFT (Anti-Money Laundering and Counter-Terrorist Financing) 可疑申報機制",
      "去中心化金融 DeFi (Decentralized Finance) 智能合約審計與 ESG/SBTi 綠色資產監管規範"
    ],
    questions: [
      {
        id: "sfc-q1",
        questionText: `🛡️ 【證監會牌照規管與沙盒 SFC Licensed Activities & HKMA Sandbox】
你公司研發咗一款「AI 智能 AI 投顧與動態資產分配平台」，預備向香港散户同專業投資者 (PI - Professional Investor) 自動提供香港股票和海外虛擬貨幣 ETF (Exchange-Traded Funds) 嘅買賣建議及自動落單服務。以下關於證業牌照的說法，邊一個完全符合香港證監會 (SFC) 與金管局 (HKMA) 的現時合規指引？
You developed an automated AI-Advisory wealth robot recommending and auto-executing HK stocks and crypto ETF orders. Which licensing profile aligns with SFC & HKMA digital compliance guidelines?

【香港金融科技沙盒到牌照路徑 / Fintech Testing to Licensing Pathway】:
┌──────────────┐ Launch MVP Test     ┌─────────────┐ Apply SFC Licensed  ┌─────────────┐
│ AI Advise Bot│ ─────────────────> │ HKMA Sandbox│ ──────────────────> │ Type 1,4,9  │ (Full License Launch!)
└──────────────┘                    └─────────────┘                     └─────────────┘
(HKMA Sandbox allows MVP fast testing without full compliance check for pilot bank customers!)`,
        options: [
          "因為是 AI 機械人自動生成建議、非人類運營，所以完全不受《證券及期貨條例》監管，無須申領任何牌照\nSince the software runs automatically on advanced AI with no direct human intervention, it completely escapes SFC compliance audits.",
          "因為涉及證券交易落單、投資諮詢與資產管理，必須分別申領第 1 類（證券交易）、第 4 類（就證券提供意見）及第 9 類（提供資產管理）受規管活動牌照！若公司為認可機構 (AI - Authorized Institution) 可先透過金管局金融科技監管沙盒 FTS (Fintech Regulatory Sandbox) 做有限度沙盒豁免測試！\nSince it executes securities orders, advises on portfolios, and manages assets, it must secure Type 1 (Dealing in Securities), Type 4 (Advising on Securities), and Type 9 (Asset Management) regulated licenses. Registered cells can run pilot trials under the HKMA Fintech Regulatory Sandbox (FTS)!",
          "只需在香港成立一間空殼有限公司，就能全自動合法代理全世界所有金融衍生產品買賣不受任何過問\nSimply forming a limited liability HK shell company automatically clears paths to trade global derivatives without licenses.",
          "向香港郵政局登記，並申領商業登記證 (Business Registration) 就可以同時免牌照代持客戶資金\nOnly register a local Business Registration Certificate with Hongkong Post to lawfully hold client funds."
        ],
        correctIndex: 1,
        explanation: "對啦！在香港，凡是涉及自動投顧程式引導點擊買賣證券、分配資產，皆直面證監會 (SFC) 受規管活動 (Securities and Futures Ordinance Regulated Activities) 範疇：第 1 類交易、第 4 類諮詢、第 9 類資管。若本身是本港註冊/認可銀行等機構，則可以引入金管局 (HKMA) 的「金融科技監管沙盒 (FTS - Fintech Regulatory Sandbox)」進行早期小範圍內測，豁免部分繁複規管要求，快速檢驗產品可行性。"
      },
      {
        id: "sfc-q2",
        questionText: `🔍 【客戶身分審查與反洗錢 KYC Verification & AML Compliance Dynamic】
喺推行「轉數快 FPS (Faster Payment System)」一鍵開戶嘅 FinTech 電商/券商應用中，系統要嚴格執行客戶身分審查 KYC (Know Your Customer) 跟反洗錢與反恐怖分子資金籌集 AML/CFT (Anti-Money Laundering and Counter-Terrorist Financing) 技術對齊。關於「簡化客戶盡職審查 (CDD - Customer Due Diligence)」，邊種受眾可以被豁免深入背景調查？
When creating streamlined checkout/broker accounts using HK FPS, you must configure robust KYC & AML/CFT architectures. Under HK regulatory codes, which category of consumers qualifies for Simplified Customer Due Diligence (CDD)?

【簡化盡職審查 CDD 分層表 / CDD Multi-tier Compliance Table】:
┌─────────────────┬──────────────────────────────────────────┬────────────────────────┐
│ Client Type (客) │ CDD Requirements (盡值審查要求)            │ AML Risk Tier (風險)   │
├─────────────────┼──────────────────────────────────────────┼────────────────────────┤
│ HK Listed Co.   │ Simplified CDD (簡化 CDD - 驗證基本註冊即可) ✅│ Low Risk (低風險)      │
│ High-risk PEP   │ Enhanced CDD (加強 CDD - 追查三代資金來源) ❌│ Very High (極度高危)   │
└─────────────────┴──────────────────────────────────────────┴────────────────────────┘`,
        options: [
          "政治人物 PEP (Politically Exposed Persons) 及其直系家族成員可以完全免除 KYC 審判\nPolitically Exposed Persons (PEPs) are completely exempt from standard KYC identity audits.",
          "任何持現金來香港銅鑼灣實體店要求兌換一千萬虛擬幣的非居民外籍人士\nAny non-resident transient tourist walking offline with $10,000,000 cash for USDT exchanges.",
          "本港認可機構 (AI - Authorized Institution)、香港註冊之上市公司 (HK Listed Companies) 或受規管金融機構！對於一般散戶，必須執行標準/加強身分核實 (Customer Due Diligence)！\nAuthorized Institutions (AI) in HK, HK-listed corporate clients, or other licensed financial institutions. Regular retail individuals must undergo standard/Enhanced CDD!",
          "任何使用 Google 郵箱臨時註冊並拒絕提供真實身分身份證的網路網民\nAny internet visitor using a fake Google email utility who fully declines uploading valid national identities."
        ],
        correctIndex: 2,
        explanation: "正確答案！根據香港《打擊洗錢及恐怖分子資金籌集條例》，只有特定低風險對象才能進行「簡化客戶盡職審查 (SDO / Simplified CDD)」，如香港上市公司、認可持牌銀行、受規管金融部門。而對於一般的散戶開戶，必須採取標準 CDD：比對身分證原本、近期住址證明、動態活體活檢。若遇到政治敏感人物 (PEP - Politically Exposed Persons)，還必須在開戶前報備內閣、執行極度嚴格的「加強客戶盡職審查 (Enhanced CDD)」來追蹤資金原始合法來源！"
      },
      {
        id: "sfc-q3",
        questionText: `⛓️ 【去中心化金融技術 DeFi & Smart Contract Security Audit】
你團隊正計劃將實物資產 RWA (Real World Assets - 譬如香港中環寫字樓物業產權) 進行代幣化 (Tokenization) 發行。去中心化金融 DeFi (Decentralized Finance) 中最核心的安全隱患是「智能合約 Smart Contract」邏輯瑕疵被駭客榨取。團隊應如何向證監會 (SFC) 申報「合規技術審計證明 (Security Assurance proof)」？
Your business tokenizes Real World Assets (RWA) like Central office towers. Under SFC regulatory guidelines, how to prove Smart Contract security to prevent decentralized ledger asset drains?

【分佈式帳本與中心化庫對齊 / Centralized vs Decentralized DLT Register】:
┌─────────────── Central Database (舊式) ───────────────┐
│ Admin changes DB directly ──> Unaudit ledger errors ❌    │
└────────────────────────────────────────────────────────┘
                                   VS
┌───────────── Decentralized Blockchain (DLT) ────────────┐
│ Multi-Validator Nodes ──> Security Audit (智能合約審計) ✅ │
└────────────────────────────────────────────────────────┘`,
        options: [
          "智能合約代碼一旦發行就上鏈，無須任何審計，因為區塊鏈是絕對安全不變的\nOnce smart contracts are compiled and deployed on-chain, audits are obsolete.",
          "聘請至少兩家具備國際資質、認可的「Web3 審計機構」對智能合約進行全面源代碼審判 (Static & Dynamic Security Audit)，修復所有 Reentrancy (重入漏洞) 與 Overflow (溢出) 風險，並公開具備哈希校驗的審計報告 (Audit Report)！\nAppoint at least two certified Web3 software audit firms to deploy static & dynamic source code analysis, patching Reentrancy and Overflow holes, and host verifiable cryptographic Audit Reports!",
          "在 Telegram 頻道內貼出幾張創辦人跟程式設計師的搞笑貼圖，向網民聲稱「代碼已經沒問題了」\nDeploy viral meme stickers in your TG community channel, claiming that code is rock-solid.",
          "用加密代碼將整套合約封鎖，不允許任何人 (包括香港監管機構) 查閱後端程式碼\nFully encrypt contract code and deny access to all compliance nodes and audits."
        ],
        correctIndex: 1,
        explanation: "完全正確！實物資產代幣化 (RWA Tokenization) 是目前香港重點發展的 Fintech 賽道。分佈式帳本技術 DLT (Distributed Ledger Technology) 上智能合約的安全是重中之重。SFC 規定在資產代幣化項目中，發行商必須提供專業認證審核機構的代碼審計證照，以消除開源代碼中的溢出、調用重入等底層資金漏洞，保護投資者資產不受鏈上駭客掠奪。"
      },
      {
        id: "sfc-q4",
        questionText: `🍃 【ESG 綠色金融與可持續標準 Compliance Auditing KPIs】
你公司正為一家港鐵沿線大型物業上市公司規劃發行 1 億美元的「綠色債券 (Green Bond)」。為防止被大眾和國際評級部門指控為「漂綠 (Greenwashing)」，可持續發展行銷經理在編製環境、社會和治理 ESG (Environmental, Social, and Governance) 報告時，應引用邊個國際科學架構以對齊披露？
You are structuring a $100M Green Bond. To prevent global ESG 'Greenwashing' accusations, which reporting standard or framework should your compliance desk deploy to metrics?

【ESG 氣候對齊模型 / Triple-pillar Sustainability Strategy Graph】:
     ┌─ Environmental (環境) : SBTi carbon targets (減碳 path 對齊 1.5度) ✅
     ├─ Social (社會義)      : GRI core employee protections (員工權益與健康) ✅
     └─ Governance (治理)    : SFO anti-bribery & board diversity (反貪與董事會多元化) ✅`,
        options: [
          "只在報告內放入大量綠色森林背景照片與創辦人種植盆栽的合影，宣稱企業非常熱愛大自然\nPrint lots of forest stock photos and team tree-planting photos to prove the corporate loves nature.",
          "引用科學碳目標倡議 SBTi (Science Based Targets initiative) 的 1.5°C 減碳目標路径，並參考全球報告倡議組織 GRI (Global Reporting Initiative) 指標，詳實量化並第三方核查（Scope 1, 2, 3）溫室氣體真實排放數據與綠債資金流向！\nAdopt SBTi 1.5°C science-based decarbonization pathways, reference global GRI indicator structures, and audit Scope 1, 2, and 3 emissions alongside funds allocations!",
          "每年向聯合國支付一筆小額贊助費，直接換取一個免除任何環保審核證書\nPay fine payments to get automated certifications that bypass real ecological reviews.",
          "宣稱公司 100% 紙張完全改用電子 PDF，從而要求豁免所有工廠排放廢氣的數據監測\nDeclare 100% transition to cloud PDFs to ask for exemption from tracking all chemical exhausts."
        ],
        correctIndex: 1,
        explanation: "正確答案！ESG (Environmental, Social, and Governance) 規管在香港聯交所 (HKEX) 面臨極度嚴苛的強制披露要求。為防止「漂綠 (Greenwashing)」醜聞。真正的綠債和 ESG 高水準報告，必須對齊國際認可指標，如：SBTi (科學碳目標倡議) 、TCFD (氣候相關財務信息披露工作組) 、GRI (全球報告倡議組織) 標準，詳盡披露範疇一 (直接排放)、範疇二 (間接電力排放) 與最難的範疇三 (價值鏈上下游排放) 的實質數據，才能獲取國際一線評級機構的信賴。"
      },
      {
        id: "sfc-q5",
        questionText: `🌉 【CBDC 與跨境資金橋機制 Cross-Border Settlement Innovation】
近年香港積極參與多邊央行數字貨幣橋 mBridge (Multiple Central Bank Digital Currency Bridge) 項目。以「央行數位貨幣 CBDC (Central Bank Digital Currency)」取代傳統 SWIFT 跨境代理行匯款，以下邊一個描述最能反映其對港商進行跨國批發交易在成效 (CVR, 結算時間及手續費) 上的革命性提升？
HK participates actively in the mBridge (Multiple CBDC Bridge) project. How does wholesale CBDC bypass legacy SWIFT channels to streamline cross-border trade transactions for HK corporates?

【mBridge 快速通道 vs 舊 SWIFT / mBridge Frictionless Settlement Corridor】:
┌────── SWIFT Corridors ──────┐ Handshakes, intermediary banks, high fees (Time: 3-5 days! Cost: 3-5%) ❌
└──────────────────────────────┘
                       VS
┌────── mBridge Gateway ──────┐ Direct wholesale CBDC token ledger transfer (Time: 2 seconds! Cost: ~0.1%) ✅
└──────────────────────────────┘`,
        options: [
          "mBridge 可以將香港居民的八達通餘額全自動換成美股期權，無須結算\nmBridge merges physical Octopus transport balances to automatic trade US stock options.",
          "它摒棄了傳統 SWIFT 冗長的中轉代理行 (Intermediary Banks) 手動確認環節，實現多國央行節點間「批發型央行數字貨幣 wCBDC (Wholesale CBDC)」的點對點即時清算，將到帳時間從 3 至 5 天縮短成幾秒鐘，手續費減少高達 90%！\nIt eliminates costly intermediary bank handshakes in legacy SWIFT. Peer-to-peer real-time ledgers settle wholesale CBDC tokens (wCBDC) in 2 seconds instead of 3-5 days, slashing fees by 90%!",
          "它只由不法黑市交易所託管，不具備任何國家主權保護，政府會隨時沒收\nIt is run exclusively by blacklist nodes with zero sovereign backing, waiting to be seized.",
          "它是一種專門幫中港游客自動在尖沙咀門市購買名牌包包自動獲取退稅的微信小程式插件\nIt is a simple thermal printer WeChat mini-program plugin automating tourist duty-free luxury VAT refunds."
        ],
        correctIndex: 1,
        explanation: "沒錯！央行數位貨幣 CBDC (Central Bank Digital Currency) 中的 wholesale (批發型 wCBDC) 與 mBridge (多邊央行數字貨幣橋) 是香港目前全球領先的核心金融科技創新。传统的跨境電商或大宗商品清算，資金需要在歐美代理行間像傳球接力一樣「清算、結算」，消耗 3-5 個工作天且耗損高昂手續費。貨幣橋通過 DLT (分佈式帳本) 核心實現本幣即時對付即時交收 (PvP / Payment versus Payment)，速度縮減至數秒，代表了香港未來虛擬資產與實體貿易融合的高端清算底座！"
      }
    ]
  },
  {
    id: "track-wordpress-cms",
    title: "WordPress & Elementor 本地網店架站實戰權威認證",
    provider: "WordPress",
    icon: "Globe",
    code: "WP-CMS-HK2026",
    examDuration: "40 mins",
    questionsCount: 5,
    shortDescription: "從網域註冊、DNS Nameserver 解析綁定，到 Astra 與 Elementor 佈景排版與響應式調校，全方位仿真學術自測。",
    syllabus: [
      "GoDaddy 域名註冊及 Siteground 域名解析綁定 (DNS & Nameserver Settings)",
      "Astra 主題套用與 Elementor 頁面編輯器基本安裝與配置 (Astra & Elementor Setup)",
      "Elementor 網版可視排版、模組拖拽與進階間距控制 (Visual Elementor Grid Control)",
      "網頁響應式設計跨裝置適配調校（桌面、平板、手機）(Responsive Breakpoints Layouts)",
      "首頁與主選單管理配置與部落格 / 網誌發表設定 (Menu Linkages & WordPress Blog Post CMS)"
    ],
    questions: [
      {
        id: "wp-q1",
        questionText: `🌐 【網域解析與主機設定 Domain Mapping & Nameservers】
當你喺 GoDaddy 註冊咗一個網店靚域名 『livelygoods.co』 之後，想將佢同你喺 Siteground 買嘅 Linux Web Hosting (網頁伺服器主機) 綁定連接，你應該點樣去進行 DNS (Domain Name System) 名稱伺服器解析設定？
After registering domain 'livelygoods.co' on GoDaddy, you want to link it with your Linux Web Hosting purchased on Siteground. How do you map the Domain Nameservers?

【解析轉移流程表 / Nameservers Delegation Table】:
  GoDaddy Domain Registry ──> Select [Manage DNS 網域解析] 
                             ──> Click [Change Nameserver 變更名稱伺服器]
                             ──> ❓ Choose custom nameservers & paste:
                                 ns1.us99.siteground.us & ns2.us99.siteground.us`,
        options: [
          "喺 GoDaddy 網頁直接硬編碼 (Hard Coding) 寫一個 HTML 跳轉連結去 Siteground IP 網址\nSimply hardcode an HTML redirect link in GoDaddy pointing to the Siteground IP address.",
          "登入 GoDaddy 嘅「管理網域 (Manage Domain)」，搵到「管理 DNS (Manage DNS)」，Click「變更 (Change)」並選擇「自訂名稱伺服器 (Choose my own name servers)」，然後 Paste 喺 Siteground 獲取嘅 DNS 位址（例如 ns1.us99.siteground.us）！\nSign in to GoDaddy 'Manage Domain', find 'Manage DNS', click 'Change' -> 'Choose my own nameservers', and paste Siteground's NS hosts!",
          "唔使做任何設定，Google 會全自動幫你去全世界網路同步更新這兩邊伺服器\nDo nothing; Google search engine will automatically synchronize the servers worldwide globally.",
          "打電話去香港通訊管理局要求人工電話過戶，一般需要 3 至 5 個工作天\nCall the HK Office of the Communications Authority (OFCA) for physical transfers, taking 3-5 days."
        ],
        correctIndex: 1,
        explanation: "無錯！串接網域最標準嘅做法，就係將域名註冊商 (GoDaddy) 嘅 Name Servers (NS / 名稱伺服器) 指向你實際租用網站空間主機嘅 ISP 供應商 (Siteground)。 咁樣當用戶喺瀏覽器打你個名 livelygoods.co 嗰陣，全球 DNS 網路就知道要返去 Siteground 伺服器去讀取你個 WordPress 網頁檔！"
      },
      {
        id: "wp-q2",
        questionText: `🎨 【佈景主題與開源範本 Astra Starter Templates】
當你第一次登入全新 WordPress 後台，成功安裝並啟用咗最出名嘅 Astra 佈景主題。喺套用 Astra 附帶嘅 「Starter Templates (快速建站開源網版)」 嗰陣，你點解唔應該直接使用 AI 輔助建站，而係揀 Elementor 呢款可視化 CMS 頁面編輯器？
After installing Astra theme, when choosing Starter Templates to import a layout, why should you avoid custom AI builder and instead select Elementor on the top right corner?

【Starter Templates 選型決策 / Layout Builder Selector】:
┌─────────────────  AI Website Builder  ────────────────┐
│ ❌ ZipWP / AI Builder ──> 常見程式碼冗餘、格式難調校    │
└───────────────────────────────────────────────────────┘
                                   VS
┌───────────────── Classic Starter Templates ───────────┐
│ ✅ Elementor Builder ──> 本地行銷界首選、組件完備拖拉   │  <── Select 'Elementor' on Top-Right!
└───────────────────────────────────────────────────────┘`,
        options: [
          "因為 Elementor 係官方規定唯一完全免費、以後世世代代都不收費嘅獨家外掛\nBecause Elementor is officially mandated as the only 100% free plugin from Google.",
          "因為不要盲目使用正在測試嘅 AI Builder (例如 ZipWP)，喺右上角選擇「Elementor」可以用更直覺、標準嘅可視化拖曳組件去控制首頁，極多一線代理商都用佢，格式唔容易走位！\nDo not choose raw AI builders; selecting 'Elementor' in the top-right loads intuitive custom web drag-and-drop components preferred by mainstream HK design agencies!",
          "Elementor 係專門用嚟阻擋 Safari 熱點廣告跟蹤嘅高階密碼防禦盾牌外掛\nElementor is a secure cybersecurity shield plugin protecting Safari from marketing trackers.",
          "套用 Elementor Starter Templates 就會全自動幫你在 Google Maps 上面排到黃金商圈第一位\nImporting Elementor templates automatically ranks your physical storefront first on Google Maps."
        ],
        correctIndex: 1,
        explanation: "正確答案！Astra 的 Starter Templates 建站流程有一點要特別注意：如果盲目點選 AI 建站，常會產生程式碼贅餘。而在右上角選擇主流 Page Builder 『Elementor』 經典模板，則可以加載主流的、已為 WordPress 深度優化的設計排版。Elementor 組件完備，修改欄位、替換主 Banner 圖都十分穩定流暢！"
      },
      {
        id: "wp-q3",
        questionText: `🖱️ 【Elementor 實用操作與版面配置 Editor Workflows】
喺 Elementor 可視化頁面編輯器入面，如果要做一欄網頁新元件（例如一張產品大圖或一段促銷文字），最標準嘅編輯手法同流程係點樣？
In the Elementor visual page builder, what is the standard workflow to add and style a new element (like an image or promo text section)?

【編輯器操作三維度 / Elementor Workflows Grid】:
┌───────────────────────┬──────────────────────────────────┬─────────────────────────────┐
│ Tab 1 : Content (內容) │ Tab 2 : Style (樣式)             │ Tab 3 : Advanced (進階)      │
├───────────────────────┼──────────────────────────────────┼─────────────────────────────┤
│ 📥 Edit image/texts   │ 🎨 Font sizes & text colors      │ 📐 Margins (外距) & Padding  │
│    (輸入內容、放相片)  │    (控制字體字級與主配色、微調)  │    (微調區塊間隙、安全防走樣) │
└───────────────────────┴──────────────────────────────────┴─────────────────────────────┘`,
        options: [
          "直接用 FTP (檔案傳輸協定) 登入 PHP 程式碼目錄，逐行手動編寫 CSS Style 代碼\nDirectly log in to PHP folders via FTP and manual-write CSS stylings for every page elements.",
          "先按中間嘅「+」號新開 Section 區域，然後喺 LHS (左手邊組件欄) Drag & Drop 拖放元件（例如 Image / Heading）放入 Box，並透過對應的 Content (內容)、Style (樣式)、Advanced (進階) 面板去改字體顏色、外距與內距！\nClick '+' to add a section, Drag & Drop components from LHS panel into the container Box, and configure Content, Style, and Advanced (margins/paddings) panels!",
          "每次要修改任何文字都要先剷除整個 Section 重頭套用一次原廠 Astra 開源主題\nEvery text changes require deleting the entire Section and re-importing the Astra theme.",
          "按鍵盤 Ctrl + Alt + Delete 連打，等待網頁自動閃爍重排\nPress Ctrl + Alt + Delete repeatedly and wait for the website to automatically re-adjust layout."
        ],
        correctIndex: 1,
        explanation: "完全正確！Elementor 的靈魂操作在於將組件從 LHS (左手邊) 拖曳放入 Box 中，隨後透過頂部的「三個標籤頁」進行細修：Content 改內容、Style 改色彩/大小、Advanced 改外距 (Margin) 與內距 (Padding) 以防版面擠擁。掌握此核心邏輯，就唔使寫任何一行代碼都能排出版面高級感！"
      },
      {
        id: "wp-q4",
        questionText: `📱 【流動端響應式排版調校 Responsive UX Breakpoints】
唔少網店有 8 成以上嘅客源都係用手機行街買嘢（M-Commerce 趨勢）。喺 Elementor 裡面，你應該點樣去檢視甚至獨立為不同裝置（Desktop / Tablet / Mobile）調校排版、字型大小或者間隙，以確保「手機版唔會變形 / 走樣」？
Since over 80% of HK traffic shop on mobile screens. How do you inspect and adjust responsive typography or paddings in Elementor editor safely?

【響應式專用調試鈕 / Responsive View Switcher】:
┌──────────────────────────────────────────────┐
│  Bottom-Left Toolbar (左下角工具欄)         │
│  ──> Click [Responsive Mode 響應式模式]       │ ⚙️ Icons: 🖥️ Desktop / 📱 Mobile / 🔌 Tablet
│  ──> Toggle UI viewport for custom spacing   │  (獨立更改手機字體、絕不互相污染影響！)
└──────────────────────────────────────────────┘`,
        options: [
          "用多部真手機不停刷新線上版網誌，如果歪咗就返去後台盲猜改 Margin 外距數值\nDeploy and refresh on multiple physical phones and guess-change margin values in the backend.",
          "點擊左下角工具欄嘅「響應式模式 (Responsive Mode)」按鈕，切換至 Mobile (手機) 視圖，當設定欄隔壁出現手機 Icon 時，才獨立修改字體大小 (Typography) 或者是 Section 寬度與 Padding，咁樣就唔會破壞桌面版配置！\nClick the 'Responsive Mode' button in the bottom-left, switch to Mobile viewport, and adjust typography and paddings independently only when the mobile icon is shown beside parameters!",
          "只能夠將全個網店嘅字體改到極細，等手機版剛好能被一行顯示得晒\nForce-resize all global fonts to extra-small sizes so they fit into tiny mobile lines on one row.",
          "喺 WordPress 後台完全阻斷 Safari 同 Chrome iOS 嘅所有瀏覽請求\nTotally block all incoming Safari and iOS Chrome web browser user agents from viewing."
        ],
        correctIndex: 1,
        explanation: "正確答案！Elementor 的響應式工作流是極高階的技巧。只要點按「響應式模式」，在設計面版各個參數（如字體大小、Padding、Flex 排列）旁邊，若出現對應的手機/手機 icon，此時所作的所有修改「僅會適用於手機版」，絕不污染和影響電腦版，做到完美精準適配！"
      },
      {
        id: "wp-q5",
        questionText: `📝 【Homepage 主選單與網誌配置 Blog Page CMS Routing】
當你寫好咗幾篇實用嘅香氛蠟燭網誌，想喺頂部主選單 (Header Menu) 呈現，但發現點擊「網誌 (Blog)」選單嗰陣係一片空白。喺 WordPress 後台，你應該點樣去激活、串接並發布文章頁面 (Posts Page)？
You wrote several blogs, but clicking 'Blog' menu shows an empty template. How do you bind and launch a properly routed Posts Page in WordPress dashboard?

【選單 & Blog 串接鏈路 / Menu & Posts Binding Route】:
  Step 1: Admin ──> Themes ──> Customize (自訂) ──> Homepage Settings (首頁設定)
  Step 2: Set [Posts page 文章頁] to ──> [Sample Page / Blog Page]
  Step 3: Go to Pages (頁面) ──> Quick Edit (快速編輯) 
                             ──> Rename title & Slug to [Blog] ──> Publish & Update Menu!`,
        options: [
          "把網誌文章嘅 HTML 程式碼一字不漏手動貼去「首頁設定」嘅「說明」文字框入面\nCopy-paste raw HTML blogs manually into a simple homepage description input box.",
          "去「外觀」->「自訂」->「首頁設定」，將「文章頁 (Posts Page)」指定為一個已經起好嘅空白頁（例如 Blog），然後去「頁面」對該頁進行「快速編輯」，將標題與代稱(Slug)更改為「Blog」並更新，再確認選單有將此頁加入與發布！\nGo to Appearance -> Customize -> 'Homepage Settings', bind 'Posts Page' to an empty page (e.g. Blog), use 'Quick Edit' in Pages to update Slug/Title to 'Blog', and add/publish it in Menus!",
          "不需要綁定，只需要把所有網誌文章都當作是 WordPress 「外掛 (Plugins)」嚟安裝上架\nDo not bind; simply install blogger posts as individual WordPress plugins.",
          "去 Google Tag Manager (GTM) 另外寫一個 javascript 的彈出視窗把文章秀給用戶看\nUse custom GTM scripts to create a popup that renders simple static articles."
        ],
        correctIndex: 1,
        explanation: "無錯！WordPress 預設有分「靜態首頁」與「網誌文章頁」。如果你想有個專門展示部落格文章的板塊（對 SEO 非常重要），必須先在「首頁設定 -> 文章頁」指定關聯頁，然後利用 Pages 的「快速編輯」工具去修改該頁的標題與代稱 (Slug) 設定，最後再添加到選單內，讀者點擊網誌選單時才會成功拉取到數據庫裡的最新 Posts！"
      }
    ]
  },
  {
    id: "track-google-sem",
    title: "Google Ads (SEM) 搜尋廣告與競價策略專家認證",
    provider: "Google",
    icon: "TrendingUp",
    code: "SEM-PPC-HK2026",
    examDuration: "45 mins",
    questionsCount: 5,
    shortDescription: "涵蓋 PPC 競價矩陣、Keyword 比對模式特性、Quality Score 優化核心（CTR、關聯性、網頁體驗）與防漏排他策略。港式廣東話精準自測。",
    syllabus: [
      "搜尋廣告四大自主支柱：帳務、廣告活動、廣告群組、關鍵字與廣告本體 (SEM 4 Pillars)",
      "關鍵字比對模式優化：廣泛配對、詞組配對與完全配對特徵 (Keyword Match Types)",
      "品質分數 (Quality Score) 鐵三角：預期點擊率、廣告關聯性、到達網頁體驗 (Expected CTR & landing Page UX)",
      "負向關鍵字 (Negative Keywords) 排除策略及投放防漏 (Negative Keyword Filters)",
      "品牌字、通用字、產品特定字、競爭對手字大底布陣 (SEM Campaigns Matrix)"
    ],
    questions: [
      {
        id: "sem-q1",
        questionText: `🎟️ 【完全比對實戰考核 Exact Match Auction Principles】
你正在中環推廣專業開鎖佬服務「Locksmith HK」，並且投放咗完全比對關鍵字 「[Car Maintenance]」。請問下列邊一個「搜尋字詞 (Search Terms)」輸入，完全「不會」觸發我們這組完全比對廣告投放？
You are bid-testing keywords. If you run the Exact-match keyword '[Car Maintenance]', which specific customer Search Term will NOT trigger your ad?

【比對類別安全範疇 / Matching Intent Hierarchy】:
  [Baseball Cap] (Exact 完全比對)  ──>  僅觸發本身、拼錯或語意完全重疊字詞
  \"Baseball Cap\" (Phrase 詞組比對) ──>  前後可以增減字句，但不能打亂核心字組 sequence
   Baseball Cap  (Broad 廣泛比對)  ──>  大撒網！相關、同義、甚至球場等皆會觸發`,
        options: [
          "CAR MAINTENANCE (全大寫變體)\nCAR MAINTENANCE (Case-insensitive capitalization variant).",
          "Car Maintenence (打錯字微小拼寫錯誤變體)\nCar Maintenence (Type misspelling variant).",
          "Where is the cheapest Car Maintenance Shop in Central HK (前後加上大量句子與地理位置字詞)\nWhere is the cheapest Car Maintenance Shop in Central HK (Pre-fixed and post-fixed search query queries).",
          "Car Maintenance (完全一致的基準詞組)\nCar Maintenance (Exact match baseline terms)."
        ],
        correctIndex: 2,
        explanation: "對啦！完全比對使用中括號 『[...]』，代表 Google 只會挑選和關鍵字語意完全重疊、或是拼寫微調/大小寫的查詢觸發廣告。選項 C 中前後增加了大段無關字詞，這屬於「詞組比對 (Phrase Match)」或「廣泛配對 (Broad Match)」的觸發範圍，完全比對 (Exact Match) 是會主動予以屏蔽不召回的！"
      },
      {
        id: "sem-q2",
        questionText: `🎯 【品質分數鐵三角優化 Quality Score Formula】
Google品質分數 (Quality Score / 簡稱 QS) 係決定你搜尋廣告點擊成本 CPC (Cost Per Click) 與廣告排名 (Ad Rank) 比拼嘅核心關鍵。請問以下哪一項是 Google 官方評估 Quality Score (1-10分) 嘅最核心「鐵三角」元素架構？
Google Quality Score is a determining factor for CPC and Ad Rank. What are the core 'Tri-pillar' ingredients Google uses to compute Quality Score?

【Ad Rank 計算矩陣 / Quality-Bid Correlation】:
┌──────────────────────────────────────────────┐
│ 📊 Ad Rank (廣告評級) = Max CPC Bid  x ❓    │ 🎯 提高 QS，可以實現用較平嘅 Bid 壓倒對手！
│                       (出價競拍)     (QS)    │
└──────────────────────────────────────────────┘`,
        options: [
          "公司每日預算總額、創辦人的個人社交媒體粉絲數、網站有沒有使用 SSL 證書\nDaily budget totals, founder's social media follower counts, and site SSL certificate presence.",
          "預期點擊率 (Expected CTR)、廣告關聯性 (Ad Relevance) 以及 到達網頁體驗 (Landing Page Experience)！\nExpected Click-Through Rate (Expected CTR), Ad Relevance, and Landing Page Experience!",
          "廣告點擊次數 (Clicks)、總曝光量 (Impressions) 以及 總充值款項 (Net Payment Credits)",
          "廣告標題有沒有超過 100 個中文字、字體有沒有加粗、背景有沒有放藍色漸變\nWhether text length exceeds 100 characters, bold font indicators, and visual gradient palettes."
        ],
        correctIndex: 1,
        explanation: "完全正確！Google 品質分數 (Quality Score) 核心考核三點：1. 預期點擊率 (Expected CTR) -> 廣告是否討喜有吸引力；2. 廣告關聯性 (Ad Relevance) -> 搜尋詞與廣告文案是否契合；3. 到達網頁體驗 (Landing Page Experience) -> 跳轉去的網頁速度及流動端是否友好。只要優化好呢三點，你的品質分數升到 9-10 分，就可以用對手一半甚至更平的競價 (CPC Bid)，排在 Google 搜尋最燙金的第一位！"
      },
      {
        id: "sem-q3",
        questionText: `🚫 【負向關鍵字防漏策略 Negative Keywords Application】
假設你為「外送美食平台 Foodpanda」在香港投放搜尋廣告，但該分店的配送服務時間嚴格限定為 『朝 9 晚 10 (9:00 AM - 10:00 PM)』 。當用戶在深夜兩點搜尋 「overnight food delivery (通宵外賣)」時，為了防止浪費我們的點擊預算，你應該如何靈活使用「負向關鍵字 (Negative Keywords)」？
You run campaigns for a delivery service delivering from 9am-10pm. To avoid budget waste on late-night searches like 'overnight food delivery', how do you configure Negative Keywords?

【幽靈流量防堵尺 / Search Budget Leakage Protection】:
  User Search Query: \"CWB overnight food delivery 2am\"
  ──> If NO negative filter: Ad fires ──> User clicks ──> Discovers closed ──> Closes tab (Lost money! CPC wasted) ❌
  ──> If Negative Set ["overnight", "24 hour"]: Ad is suppressed! ──> Save budget! ✅`,
        options: [
          "將「overnight」與「24 hour」等無效關鍵字註冊做「負向關鍵字 (Negative Keywords)」！\nSet invalid search keywords like 'overnight' and '24 hour' as Negative Keywords!",
          "把全香港所有通宵營業的競爭對手餐廳電話號碼直接寫在我們廣告標題上\nPrint all competitive all-night restaurant hotline numbers directly on our ad headline copies.",
          "把每日預算 (Daily Budget) 設定為 HK$0，直到晚上兩點過後重新人工開機\nSet our global marketing budget to HKD 0 and manually restart campaigns after 2 AM.",
          "無須理會，因為不打算付款的點擊 Google 會在第一時間雙倍返還這筆費用\nIgnore it; Google will auto-refund invalid contextual clicks later anyway."
        ],
        correctIndex: 0,
        explanation: "沒錯！負向關鍵字 (Negative Keywords) 是 SEM 搜尋行銷的必備技能。當你知道有些搜尋詞組合（例如 overnight、24小時、免費、退款、實習、二手）雖然與你的行業相關，但根本無法帶來轉換和利潤時，第一時間將它們加入排除清單，就能阻斷無效匹配，直接將浪費的 CPC 預算砍掉，大幅提升 ROI！"
      },
      {
        id: "sem-q4",
        questionText: `✍️ 【高轉化廣告文案 Formula & CTR Boosters】
在日常投遞搜尋廣告時，文案就是你的門面。根據大量 A/B Test (分組對比測試) 行銷大數據，哪一種「標題文案公式 (Headline Formulas)」被實證能獲得最高的點擊率 (CTR) 與銷售轉換率 (CVR) 增幅？
According to performance A/B test datasets, which headline copywriting formula achieves the highest CTR and CVR uplift in Google Search?

【文案點擊對決欄 / Headline Copywriting Conversion Duel】:
┌─────────────────  Plain Title (平淡無奇)  ────────────────┐
│ ❌ 「石記教育小學生補習服務 | 專業教授英數」──> CTR: 3.04%   │
└───────────────────────────────────────────────────────────┘
                                   VS
┌───────────────── Value-infused Title (痛點與數據)  ────────┐
│ ✅ 「小朋友英文及數學成績差？網上申請省$1500」 ──> CTR: 7.57%│  <── Formula: Question + Number Benefit!
└───────────────────────────────────────────────────────────┘`,
        options: [
          "儘量使用英文代碼與冷冰冰的規格，比如「英數輔導 Class V2.4.1 Build 2026」\nUse abstract technical codes, for example 'Math tutoring Class V2.4.1 Build 2026'.",
          "利用 Formula 1「提出疑問直擊痛點」(如：小朋友英數成績差？) 結合 Formula 2/3「用數字點出著數/好處」(如：網上申請慳$1500)，甚至用 Objection Handling「處理反對意見」(如：絕不收取額外費用)！\nDeploy Question Formula (hits pain points) + Number Formulas (defines specific bonuses) + Objection Handling (e.g. No Extra Fees)!",
          "在標題裏瘋狂塞滿「點擊這裏」、「快點進來」等重複十幾次的感嘆號垃圾字眼\nStuff raw clickbait terms like 'Click here now!!!' fifteen times repetitive times in your headings.",
          "只放品牌商標名字，不提供任何產品或解決方案描述，讓用戶保持極致神秘感\nPublish sole branded trademark name with zero product text to maintain extreme mystery."
        ],
        correctIndex: 1,
        explanation: "正確答案！最頂尖的廣告文案從不自嗨，而是「直擊痛點與好處（WIIFM - What's in it for me）」。數據表明，使用問句直擊客群痛點並附帶精確的「折扣數字、節省金額、幾分鐘內審核」等具體承諾，能獲得兩倍以上的點擊率 (CTR) 與 23% 的轉換率 (CVR) 本質增長，比空洞的口號強大太多！"
      },
      {
        id: "sem-q5",
        questionText: `⚽ 【高階廣告活動矩陣規劃 Branded vs Competitor Campaign Setup】
在大型國際數碼廣告代理商 (Digital Agencies) 的真實規畫中，為了解決關鍵字「競拍預算互相洗牌與 cannibalization (預選自相殘殺)」的問題，行銷總監通常會部署哪一種「四大支柱」球隊陣型 Campaign 架構？
In professional agency management, how do planners structure Google Ads campaigns into 4 distinct strategy buckets to protect margins and target competitors?

【球隊防線布陣圖 / International PPC Campaign Architecture】:
┌─────────────────────────────────┐
│ ⚽ Striker (前鋒 - 搶客)        │ ───> Competitor Campaign (競爭對手字：奪取敵手流量) 🎯
│ ⚽ Midfielders (中場 - 鋪墊)     │ ───> Product-Specific Campaign (產品精準字：網羅精確意圖) ✨
│ ⚽ Defenders (後衛 - 攔截)       │ ───> Generic Campaign (通用大字：捕捉大量廣泛潛在需求) 💬
│ ⚽ GoalKeeper (守門員 - 護城河)  │ ───> Branded Campaign (品牌字：捍衛自家品牌搜尋第一位) 🛡️
└─────────────────────────────────┘`,
        options: [
          "將成萬個關鍵字全部無序地扔在一個工作預算下，依靠 Google AI 隨機幫你碰運氣\nThrow thousands of keywords unordered into a single campaign and trust random luck algorithms.",
          "將行銷專案結構化拆分為：品牌字 Campaign (守門員護城河)、通用大字 Campaign (後衛攔截)、特定產品字 Campaign (中場導流) 以及 競對字 Campaign (前鋒侵略攻打)！這四者嚴格切分預算！\nStrictly segregate budgets into: Branded Campaign (GoalKeeper), Generic Campaign (Defenders), Product-Specific Campaign (Midfielders), and Competitor Campaign (Striker)!",
          "在一年內僅成立一個只投廣告單張 PDF 的廣告活動，不准有任何其他關鍵字\nEstablish a single static display PDF campaign with zero search keywords permitted.",
          "不投放任何搜尋廣告，將所有預算在銅鑼灣買一塊巨大的實體霓虹燈廣告牌進攻\nBypass all online searches entirely and spend 100% of budget on Causeway Bay offline billboard signs."
        ],
        correctIndex: 1,
        explanation: "完全正確！這是頂級廣告代理商的「黃金架構」。1. 品牌字 (Branded Campaign) 的 CPC 極便宜、點擊率高，是以極低預算保護自家品牌搜尋第一位、不被競爭對手惡意競價購買的「守門員」；2. 競爭對手字 (Competitor Campaign) 則是我們的「前鋒」，用來在買方搜尋競對品牌時，提供我們「更優方案、更平折扣」來搶佔份額。四種類別預算與策略完全不同，如果不拆分，通用字會迅速將所有預算燒乾，導致品牌字無預算保護而被敵方無痛奪取流量！"
      }
    ]
  },
  {
    id: "track-gdn-yt",
    title: "Google Ads (GDN & YouTube) 多媒體與影音廣告專家認證模擬考",
    provider: "Google",
    icon: "Tv",
    code: "GDN-YT-HK2026",
    examDuration: "30 mins",
    questionsCount: 3,
    shortDescription: "解構 GDN 自適應多媒體廣告 (RDA) 的 AI 拼配、四大定向、TrueView 可跳過影音計費機制與轉化導向影片設計。",
    syllabus: [
      "自適應多媒體廣告 (Responsive Display Ads) 自動拼配機制",
      "誰 (Who)、什麼 (What)、哪裡 (Where)、何時 (When) 定向維度",
      "TrueView Skippable Ads 在 YouTube 上的計費條件與 CPV 機制",
      "新派轉化導向視頻 (Performance Video) 與舊派品牌傳播視頻的本質區別"
    ],
    questions: [
      {
        id: "gdn-yt-q1",
        questionText: `🎨 【自適應多媒體廣告 AI 拼配 Responsive Display Ads (RDA)】
你正在為一間精品酒店推廣「香港雙人奢華快閃 Staycation」方案，並使用自適應多媒體廣告 (RDA)。當你上傳多個標題、描述和高畫質圖片後，Google 是如何動態呈現廣告的？
How does Google dynamically assemble and render Responsive Display Ads (RDA) once you upload assets?

【RDA 智慧拼配流向 / RDA Dynamic Composition Table】:
┌───────────────┐ Upload Items     ┌───────────────┐ Dynamic Assembly ┌───────────────┐
│ Images x15    │ ───────────────> │  Google Ads  │ ────────────────> │ Customized Ad │ (Fits any pixel dimension!)
│ Headlines x5  │                  │  AI Engine    │                   │ responsive UX │
└───────────────┘                  └───────────────┘                   └───────────────┘`,
        options: [
          "它會在用戶手機屏上完整重複輪播所有標題 100 遍，不論大小如何\nIt loops all text phrases 100 times regardless of screen layout specifications.",
          "Google 的 AI 演算法會根據個別用戶正在點閱網頁的版位大小、網頁背景色調、流動端還是桌面端，自動從你上傳的素材中抽取最合適的標題、描述與圖片拼裝成最佳的展示組合！\nGoogle's AI automatically picks the best heading, description and image combination to match the user's container, size, layout and screen format!",
          "它完全不受理 JPG 格式，只會將所有圖片強行轉換成 ASCII 符號組成的黑白像素圖\nIt ignores JPG formats and renders everything in plain monochromatic ASCII text.",
          "它會直接駭入客群的 Facebook 帳號，用他們的頭像當作廣告主圖\nIt hijacks clients' private social profile pictures to act as the primary graphic asset."
        ],
        correctIndex: 1,
        explanation: "正確答案！自適應多媒體廣告 (RDA) 的靈魂就在於「動態自適應拼裝」。行銷人員只需提供一組基礎素材（最多15張圖片、5個標題等），Google 的機器學習就會在幾毫秒內匹配每個網頁版位，自動拼出點擊率最高、最襯版面的廣告，大幅免去人工裁切數十個靜態 Banner 的繁瑣規格磨損！"
      },
      {
        id: "gdn-yt-q2",
        questionText: `🎟️ 【YouTube TrueView 計費門檻 Skippable Ads CPV Auditing】
你公司投放了 YouTube TrueView 可跳過插播廣告 (Skippable In-Stream Ads) 宣傳一期「大閘蟹中秋外送冷鏈服務」。如果觀眾點開影片看至第 12 秒時，就按了右下角的「Skip (跳過廣告)」按鈕離去，本次曝光會被 Google 收取多少曝光推廣費用？
How much are you charged if a viewer clicks the 'Skip Ad' button at the 12th second of your skippable TrueView YouTube video campaign?

【TrueView 30秒計費安全機制 / Skippable Threshold Matrix】:
  - Skip < 30s : $0 billed (免費博取高流動量素材曝光！) ✨
  - Watch >= 30s (or completes short video): Charged standard CPV (每次觀看扣款) 💳`,
        options: [
          "照收全額 CPM，因為只要播出了就必須向 Google 繳交全額曝光保護費\nYou are charged full price; any visual exposure is billed fully down to a penny.",
          "完全不收一分錢 (HK$0)！因為 TrueView 影音廣告具有無比佛心的計費門檻：觀眾觀看必須滿足 30 秒（若不足 30 秒則需播畢），或者點按了連結卡片等真實互動，才會向你收取每次觀看費用 (CPV)！\nZero dollars (HKD 0)! TrueView ads earn you free exposure unless the viewer watches for at least 30 seconds (or complete run if shorter), or interacts with your link cards!",
          "Google 會直接扣除您信用卡 $500 港元作為惡意跳過廣告的罰金\nGoogle registers a penalty charge of HKD 500 for unauthorized skips.",
          "系統會強行關閉該觀眾的手機電源，直到他手動點按同意付款後才開機\nThe algorithm forces a device shutdown until the user cooperates with viewing ads."
        ],
        correctIndex: 1,
        explanation: "沒錯！這就是 YouTube TrueView 可跳過影音廣告對於行銷經理最有吸引力的「30秒安全防線」。當觀眾在 5 至 29 秒內按了 Skip，這段曝光對你而言是「完全免費的」！只有觀眾被你的前 5 秒吸住，一直看過了 30 秒大關，或者直接點擊你的官網連結 (真實互動) 時，Google 才會從你的預算中扣除 CPV（每次觀看成本）。這對掌控成效、過濾無意圖客群極之強悍！"
      },
      {
        id: "gdn-yt-q3",
        questionText: `🎯 【新世紀轉化視頻 vs 傳統 brand 影片 Performance Video Tactics】
你正在規劃多媒體與影片廣告，用來推廣「2026 最新無代碼 AI 建網站系統」。若你的終極目標是「要用最低成本獲得最多的註冊名單 (CPL/CPA)」，哪一種劇本設計最符合現代高轉換影片 (Performance Video) 的實戰法則？
To generate leads with the lowest CPL/CPA for an AI site builder, which video copywriting structure wins the converting race?

【轉化導向視頻劇本黃金 5 秒 / Video conversion trigger sequence】:
   0:01 - 0:05 ──> Visual pain / UVP hook (直擊一秒建站動態與痛點) [Skip 前關鍵護送] ✅
   0:06 - 0:25 ──> Feature demonstration & Objection handling (三步簡單上手) 🛡️
   0:26 - end  ──> Dynamic incentive & Strong CTA (\"即撳下方連結開通送 Domain!\") 💸`,
        options: [
          "花 15 分鐘拍公司中環總部的高大上空拍，再由特約著名配音員朗讀「本公司悠久的歷史、以客為尊的崇高初心」\nSpend 15 minutes filming luxury aerial corporate views and reading long history bios.",
          "在前 5 秒內直接解決使用者痛點、展示 AI 一秒生成好網站的動態畫面，在中段列出「免卡開通、三步上手」，結尾大聲做出 CTA：「撳入下面連結，首 100 名免費送域名！」\nAddress pain points in the first 5 seconds, show action screen capture, outline 'card-free sandbox, 3-step setup', and shout the CTA call: 'Click the link below' with dynamic bonuses!",
          "全片不給看網址，強烈要求大家看完片後，去大會堂實體排隊拿取宣傳小手冊\nOmit web links; ask callers to walk physically to town halls to collect brochures.",
          "影片從頭到尾保持黑屏、無任何聲音與畫面，以喚起大家心靈深處對科技的極簡敬畏\nProvide pure dark silence for 2 minutes to inspire minimal technological respect."
        ],
        correctIndex: 1,
        explanation: "答對了！傳統品牌影片講究的是氛圍、鋪墊與抽象共鳴，不太能驅動直接轉化。而「高效轉化影片 (Performance Video)」是為 AARRR 的轉化而生的。它必須在關鍵的「黃金前5秒」抓住眼球（因為5秒後就能 Skip），直接挑明好處 (UVP) 與痛點，展示動態效果，並在全片穿插醒目的 CTA 按鈕與行動誘因，這樣才能大幅拉低獲客成本 (CAC)！"
      }
    ]
  },
  {
    id: "track-advanced-seo",
    title: "Google 高階 Technical SEO 與 Core Web Vitals 認證模擬考",
    provider: "Google",
    icon: "Search",
    code: "SEO-CWV-HK2026",
    examDuration: "35 mins",
    questionsCount: 3,
    shortDescription: "深度檢驗 2026 最新 INP 指標、LCP & CLS 優化、Canonical 解決重複頁面、301轉址以及 E-E-A-T 信任度披露標準。",
    syllabus: [
      "Technical SEO 標準配置與 Mobile-First Indexing 真真面目",
      "Canonical Tag (標準網址標籤) 與 301/302 差別",
      "Core Web Vitals 指標：LCP < 2.5s, CLS < 0.1, 以及 2024 年正式採用的 INP < 200ms",
      "E-E-A-T 權威信任度評估與 Do-Follow 反向連結原理"
    ],
    questions: [
      {
        id: "adv-seo-q1",
        questionText: `⚙️ 【Core Web Vitals 新硬核指標 INP Audit】
自 2024 年起，Google 官方正式使用哪一個全新指標取代了舊有的「FID (First Input Delay)」，用來更全面、科學地評估網頁與受眾在互動過程中的順暢回饋延遲，且其優良標準為多少？
Which metric officially replaced FID in Google's Core Web Vitals to quantify site interactions, and what is its excellence threshold?

【Core Web Vitals 三大金尺 / CWV Standard Thresholds】:
├─ 載入速度 LCP : < 2.5 seconds (首屏圖片載入時間)
├─ 視覺穩定 CLS : < 0.1         (版面延遲彈出防震偏移)
└─ 互動延遲 INP : < 200ms       (取代 FID，全站每一次點擊的重新繪製像素延遲) ⚡`,
        options: [
          "CLS (Cumulative Layout Shift)——累積位移，良好標準必須大於 1.0\nCLS (Cumulative Layout Shift), with a safe threshold of Web Core metric > 1.0.",
          "INP (Interaction to Next Paint / 互動至下次繪製時間)——衡量整段瀏覽旅程中，所有點擊與輸入的像素呈現延遲，優良標準必須小於 200 毫秒 (INP < 200ms)！\nINP (Interaction to Next Paint), quantifying response redraw delay of all user interaction events, with a gold standard of < 200ms!",
          "LCP (Largest Contentful Paint)——最大載入速，優良標準為小於 25 秒\nLCP (Largest Contentful Paint) measuring page loading speed, under 25 seconds.",
          "FPS (Frames Per Second)——幀率，標準是必须剛好等於每秒 1 幀才省電\nFPS (Frames Per Second), qualifying standard is exactly 1 frame per second to save power."
        ],
        correctIndex: 1,
        explanation: "正確答案！互動至下次繪製時間 (INP - Interaction to Next Paint) 在 2024 年正式全面搬上檯面，接棒了舊款 FID。舊 FID 只測使用者「第一次跟網頁敲擊」的延遲，很容易被預載代碼欺騙；而 INP 則全方位監控在整個頁面存續期間，「每一次」點擊選單、按鈕切換或打字時，網頁需要花多久才能渲染出下一個像素畫面。黃金標準是在 200ms 以內！如果網頁 INP 爆表，網域信譽就會大打折扣！"
      },
      {
        id: "adv-seo-q2",
        questionText: `🛡️ 【Canonical Tag 標準網址解決 Duplicate Content】
如果你的 Shopify 網店為了區分 Meta 廣告流量和 Google Ads 流量，產生了多個不同網址（如 livelygoods.co/perfume?utm=fb 和 livelygoods.co/perfume?utm=google），但內容 100% 完全相同。你應該如何在 HTML 頭部配置「Canonical Tag」，以防被 Google 認定為「惡意重覆頁面 (Duplicate Content)」而重創 SEO 自然權重？
How do you protect SEO rankings from Duplicate Content issues when using tracking URLs containing UTM parameters for identical web content?

【標準原創歸集標籤 / Canonical Consolidating Diagram】:
   livelygoods.co/perfume?utm=fb     ──┐
   livelygoods.co/perfume?utm=google ──┼─> [ Canonical Tag ] ──> Google Target: livelygoods.co/perfume
   livelygoods.co/perfume?sort=price ──┘   (將所有重複網址權重完美歸一，防止打分分散！) ✨`,
        options: [
          "不需要任何 Canonical，Google 會自動幫你把完全一樣的頁面全部排第一名\nKeep no tags; Google automatically ranks duplicate pages first together anyway.",
          "在所有這些相同內容頁面的 <head> 裡加載標準網址標籤： <link rel=\"canonical\" href=\"https://livelygoods.co/perfume\" /> ，告訴 Google 爬蟲「認定這才是唯一的原始標準版網址」！\nDefine a unique standard link in head elements: <link rel=\"canonical\" href=\"https://livelygoods.co/perfume\" /> to declare the single standard master page!",
          "對 meta=google 網址使用 302 暫時轉址，強制其跳轉回 Facebook 以博取流量\nDeploy 302 temporary redirection to force Google search visitors to jump into Meta.",
          "手動修改這兩個網頁的內容，讓其中一個頁面全部寫廣東話，另一個頁面全部寫德文 \nManually translate one tracking page entirely into German to bypass standard audits."
        ],
        correctIndex: 1,
        explanation: "答對了！這就是 SEO 專案架構中必不可少的 Canonical Tag。當同一個主題存在多個 URL 特徵（例如：篩選器、分類導向、多平台 UTM），若不使用 Canonical，Google 爬蟲就會把整體 SEO 分數平分、稀釋給這幾個不同網址，甚至判定有「內容抄襲」的欺詐行徑。加上標準 canonical 標籤，就能把所有權重歸攏至主域名，保住核心關鍵字主權！"
      },
      {
        id: "adv-seo-q3",
        questionText: `📈 【Do-Follow vs No-Follow 反向連結 Link Weight Auditing】
在 Off-page SEO 的建立中，你有個中環財經論壇的優質合作方。他願意在文章裡放一個指向你網誌的 Backlink。請問，哪一種連結屬性 (Link Attribute) 才能真正向你的網站傳遞「網域評級權重 (PageRank / Link Juice)」，帶動你網頁快速升上搜尋排名第一位？
Which specific hyperlink attribute passes domain authority (Link Juice) to boost your search prominence?`,
        options: [
          "No-Follow 屬性 (rel=\"nofollow\")，因為這代表了連 Google 都無法干預的無摩擦通道\nNo-follow attribute (rel='nofollow'), introducing unblockable authority juice.",
          "預設的 Do-Follow 屬性 (即標準不加 nofollow 或者是 rel=\"dofollow\" 標籤)，向 Google 主動證實這是一個對你網站信任有力的「民主票背書」！\nStandard Link / Do-follow setup (not adding 'nofollow' or explicitly rel='dofollow'), showing Google active programmatic endorsement of thy site!",
          "No-Referrer 屬性，防範 GTM 讀取任何點擊資訊\nNo-referrer setups, safely shielding GTM from parsing outbound properties.",
          "完全不放任何 HTML 標籤連結文字，只用語音在錄音中叫聽眾去 Google 手動搜尋\nUse zero active hyperlinks; only play audio podcasts to ask listeners to manually inspect words."
        ],
        correctIndex: 1,
        explanation: "bingo！Do-Follow 連結才是傳遞 PageRank / Domain Rating (DA) 權重的核心。如果別人放的是 `rel=\"nofollow\"`（例如 Threads、維基百科、或一般討論區留言板），Google 便不會將彼端的權重 (Trust Value) 轉送給你，僅當作普通點擊處理。在進行外部連結推廣（Link Building）時，必須確認重要合作方提供的是「Do-Follow」權威返鏈，才是真正的收割 SEO 權重之道！"
      }
    ]
  },
  {
    id: "track-personal-brand",
    title: "個人品牌 101 - 創作者經濟與增長策略認證模擬考",
    provider: "Meta",
    icon: "UserCheck",
    code: "PB-101-HK2026",
    examDuration: "25 mins",
    questionsCount: 3,
    shortDescription: "考核 Persona Prism 七步心法、Rule of 100 雷打不動發表法、信任型 vs 發現型平台偏好與雙軌 LTV 變現模型。",
    syllabus: [
      "Persona Prism 七步架構與自我優勢 UVP 定義",
      "Rule of 100 增長心理關卡突破鐵律",
      "四大平台特徵分流（信任型、發現型、搜尋型、私域）",
      "創作者 CPS 分銷與 95% 高毛利數位產品（線上課程/電子書）變現"
    ],
    questions: [
      {
        id: "pb-101-q1",
        questionText: `💎 【Persona Prism 核心七步UVPs Framework】
你正想在副業打造一個「高階 Excel 數據自動化 & 職場效率黑客」的創作者個人品牌。在使用 Persona Prism 7 步驟系統時，哪一個環節最能幫你與在港競爭激烈、同質化嚴重的「文書助理、Office培訓社團」劃清界線，打造出真實的護城河？
In the Persona Prism 7-step system, which pillar establishes your unique defensibility against copycat competitors?`,
        options: [
          "無限制地降價，做全港最平、甚至完全免費的一對一人工代寫試算表服務\nPrice-slashing to zero bills, offering uncharged spreadsheet cleaning manually.",
          "確立獨特定義價值主張 (UVP/Unique Value Proposition)，深度剖析市場調研 (Market Research) 盲點，提煉出「不只教公式，而是幫金融白領每晚提早 2 小時放工回家」的痛點利益！\nFormulating your Unique Value Proposition (UVP) by identifying audience pain points, e.g. 'not just tutoring Excel cells, but helping banks employees leave office 2 hours early'!",
          "每天去別的創作者的貼文底下一字不漏洗版留言，強行要求讀者來看自己\nSpamming outbound comment threads under superior competitors to force visibility.",
          "直接在網站宣稱自己是全世界 Excel 的唯一發明人、藉此蒙騙初學者\nFraudulently declaring yourself as the single original inventor of Excel to trick users."
        ],
        correctIndex: 1,
        explanation: "正確答案！在個人品牌 Persona Prism 框架中，自我評估與市場調研（Step 1 & 2）最終都服務於「提煉 UVP (獨特價值主張 - Step 3)」。如果你跟別人一樣「只教 Excel 基本操作」，你的價值極低、很容易被 AI 取代。商務白領每晚提早 2 小時放工，這句 UVP 精準擊中痛點，你的個人品牌溢價與護城河就會瞬間築起！"
      },
      {
        id: "pb-101-q2",
        questionText: `🎯 【四大平台特徵調配 Discovery vs Trust platform selections】
你正在建立「香港生活風格與咖啡美學」個人品牌。你需要獲得「最快速的一波新陌生粉絲流量 (引流擴圈)」以及「最高內聚、最深度的鐵粉付費轉化 (信任變現)」。你應當如何最懂平台特性、互補挑選這兩個平台？
How to programmatically select platforms to maximize both viral reach (Discovery) and premium conversion sales (Trust)?

【雙軌渠道引流變現漏斗 / Dual-track Audience Funnel】:
┌───────────────────────── Discovery Platform (發現型) ─────────────────────────┐
│ e.g. Reels, Threads, TikTok  ──> 演算法向陌生人狂推 ──> 高速破圈引流 (AARRR)  │
└─────────────────────────────────────────────────────────────────────────────┘
                                       │ (Bring to)
                                       ▼
┌─────────────────────────── Trust Platform (信任型) ──────────────────────────┐
│ e.g. Podcast, Email Newsletter, Private Group ──> 深度交付 ──> LTV 價值最大化 ✅ │
└─────────────────────────────────────────────────────────────────────────────┘`,
        options: [
          "去 Google Search 發布不帶任何 HTML 排版、極難看懂、無圖片的純文字網址\nHost abstract site links displaying only unformatted codes.",
          "選擇 Instagram Reels / Threads 這種具有強大演算法主動派發機制的「發現型 (Discovery) 平台」來快速破圈獲客；再配合 Podcast、Substack 電子郵件等「信任型 (Trust-based) 平台」進行深度知識交付與私域成交！\nSelect active Instagram Reels / Threads as Discovery platforms to capture algorithmic viral flows, paired with Podcast / Substack emails as Trust platforms for monetization conversion!",
          "在 YouTube 底下買假粉和殭屍帳號，自欺欺人假裝流量已經爆滿\nAcquire bot traffic accounts on YouTube platforms to fake fake progress statistics.",
          "把所有內容都只貼在一張實體紙張上，塞在自家信箱裡，不發布到任何數位網路上\nPrint newsletters on physical cardboard and tuck them in your personal physical mailbox."
        ],
        correctIndex: 1,
        explanation: "完全正確！高階個人品牌營運的核心：發現型 + 信任型「雙軌漏斗」聯動。如果只做 Instgram Reels 這種發現型，雖然容易爆幾萬觀看，但觀眾滑過去就忘了你，信任極淺，很難賣出幾千元的諮詢課程；如果只做 Podcast 這種信任型，雖然開聽率與黏性逼人，但平台不幫你推外流，一年可能都沒增加新聽眾。將 Reels 流量 (Discovery) 導流至電子郵件 Substack 或者是私域諮詢群 (Trust)，才是可持續運營的數位大師閉環！"
      },
      {
        id: "pb-101-q3",
        questionText: `🃏 【Rule of 100 創作者雷打不動增長心理】
在個人品牌的早期，高達 90% 的創作者因為在前四週「貼文只有 3 個點讚、0 筆轉單」便心灰意冷退群放棄。以下哪一項最符合「Rule of 100 (百分之一鐵律)」的精髓，能幫人安渡這段死亡谷？
What is the core spirit of the 'Rule of 100' to withstand early stage zero-traction depression?`,
        options: [
          "在前 100 天內承諾雷打不動、高度聚焦地發佈至少 100 個高質量作品，並且在這期間「完全不准看任何點讚與數據反饋」，心無旁鶩地建立內容地基！\nIn the first 100 days, commit to publishing 100 pieces of distinct content, completely disregarding vanity stats (likes, views) to construct a defensive theory asset base!",
          "充值 100 萬港元在 Google Ads，要求全香港的警察與政府部門強制幫你宣傳 \nPre-pay 1,000,000 HKD to Ads, demanding that police force residents to read blogs.",
          "連續抄襲別人的 100 篇原創文章，並全自動在後台用腳本自動改寫\nPlagiarize 100 original posts and rewrite them directly using scraping algorithms.",
          "在前 100 分鐘內如果沒有 100 人轉發，就徹底將原官方網站全面註銷從此不碰行銷\nIf you fail to earn 100 organic shares in 100 minutes, delete our global database."
        ],
        correctIndex: 0,
        explanation: "答對了！這就是無數大博主、卓越顧問私下堅守的『Rule of 100 (百分之一鐵律)』。在任何小有名氣的起飛期之前，都有一個極長、極冷酷的「無聲沙盒期」。在這期間，盯著點讚數 (Vanity Metrics) 只會摧毀你的心態。雷打不動完成 100 個高質量產出（不論是100篇文章、100個 Reels、還是前100天日更），不僅能訓練好你的「內容肌肉、寫作語感、排版美學」，更能在 Google 和社交演算法堆積出無懈可擊的初始帳號權重，這才是真正的慢即是快！"
      }
    ]
  },
  {
    id: "track-generative-ai",
    title: "生成式 AI (GenAI) 數位行銷與 Prompt 五步法專家認證模擬考",
    provider: "Google",
    icon: "Cpu",
    code: "AI-MKT-HK2026",
    examDuration: "25 mins",
    questionsCount: 3,
    shortDescription: "考核 RGC Prompt 五步法、Gemini Gems 客製上傳極限與 20GB/1M Token 限制、LLM 數學「靠估」缺陷（Python 支援）以及 Deep Research 革命性策略。",
    syllabus: [
      "RGC Prompting 五步法 (Role, Result, Goal, Context, Constraint) 深度骨架",
      "Gemini Gem 檔案儲存客製上限與 20GB 專案 Files API 容量極限",
      "LLM 心算「靠估」缺陷與 instruct-to-use Python 解決方案",
      "Gemini Deep Research (連網搜索) 相比普通模式在行銷趨勢洞察上的優劣"
    ],
    questions: [
      {
        id: "ai-mkt-q1",
        questionText: `⚡ 【RGC Prompting 五步法實戰運用 Prompt Engineering Audit】
你現在是一名中環精品健身房的 Social Media Manager，老闆要求你在 15 分鐘內用 AI 生成一份下周聖誕快閃「雙人同行 20% Off 年卡促銷」的 Instagram 廣告文案文。根據文案大綱與剛學的五步法，哪一種 Prompt 設計能最精準、高質量地讓 AI 寫出有溫度且不硬推銷（中英粵夾雜、帶emojis）的優質文案？
Which Prompt structure utilizes the RGC prompting golden framework to get the highest quality Instagram post copy?`,
        options: [
          "「同我寫一則中環健身房聖誕節年卡減價 20% 嘅 Instagram 廣告推文，越快越好。」\n'Write an Instagram sales copy for central gym 20% discount, as fast as possible.'",
          "「你係一位熟知香港白領OT痛點同人性嘅 10 年資深數位廣告策略師 (Role)。請為我們健身房寫一份 150 字內的聖誕限時『雙人同行年卡20% Off』精緻 IG 文案，目標係打動想擺脫亞健康但驚人逼、想搵伴一齊堅持嘅青年白領註冊諮詢 (Result & Goal)。背景資訊：我們提供寬敞中環景觀、不硬銷不綑綁 (Context)。請用溫厚、具感召力且接地氣嘅粵語夾雜英文 (Constraint)，並加上適度 emojis！」\n'Act as a 10-year veteran copywriter (Role). Draft a 150-word IG copy for our gym's dual-run 20% Christmas promo, targeting busy bankers to sign up (Result & Goal). Our backdrop: spacious views, zero pushy subscriptions (Context). Use warm, authentic Cantonese with English keywords and emojis (Constraint)!'",
          "「用 Python 編寫一個能夠全自動上傳 Instagram 圖片並隨機生成一萬個詞語的伺服器代碼，要求立即運行。」\n'Write Python scripts to auto-upload random images to Instagram pages with zero human text reviews.'",
          "「什麼都不要說，請幫我將『Hello World』複製 100 遍並加上 100 個讚。」\n'Duplicate Hello World 100 times under standard markdown constraints with zero formatting edits.'"
        ],
        correctIndex: 1,
        explanation: "正確答案！第二個選項完美地融合了「RGC (Role, Goal, Constraint) Prompt 五步法」：1. 角色 (Role) - 10年資深策略師；2. 結果 (Result) - 150字內 IG 文案；3. 目標 (Goal) - 吸引追求健康、需要結伴的中環金融青年；4. 背景 (Context) - 中環優景、不硬銷防騷擾；5. 限制 (Constraint) - 接地氣中英粵語、150字內、 emojis。這樣一來，Gemini 就能徹底融入香港本地生活場景，寫出真正能驅動轉化的溫暖文案！"
      },
      {
        id: "ai-mkt-q2",
        questionText: `💾 【Gemini Gem 自訂助理技術參數規格 GEMS Capacity Evaluation】
如果你打算把公司一整套大約 450 MB 完備的「2026 美妝品牌中英文公關文字調性指南 (PR Type & Brand Guideline)」上傳到一個名為「PR Tone Custom Gem」中，以供團隊日常調研、分析與自動草擬報表。根據 Gemini Gem 的官方規格與限制，下列哪一項對文件規格與專案上傳極限的判斷是完全科學正確的？
According to official specification constraints, which of the following file and storage configurations fits the Gemini Gem platform parameter requirements?`,
        options: [
          "一般 PDF/Word 檔案大小上限為 10MB，所以 450MB 的品牌指南根本無法上傳到 Gem \nPDF file size limit is 10MB; hence a 450MB brand guide can never be uploaded to Gems.",
          "Gemini Gem 對檔案上載有非常科學的限制：一般件（PDF/Word）單檔上限高達 512 MB（這代表 450 MB 公關指南可完美上傳！），單個 Gem 最多可儲存載入 10 份文件，且每個文件 Token 限制可達約 1,000,000 (1M) 字詞！\nGemini Gem supports standard files (PDF/Word) up to 512 MB each (meaning 450MB guide fits perfectly!), permits a maximum of 10 files per custom Gem assistant, and accommodates up to roughly 1M tokens per uploaded document!",
          "每個人一輩子只可以上傳 1 份文件，而且大小必須小於 100KB\nUsers are strictly constrained to 1 single document file in their entire lifetime which must be under 100KB.",
          "必須將所有 PDF 完全轉移為 Excel 形式上傳，否則 Token 窗口會直接縮到 0\nYou must convert all PDF databases to CSV grids, otherwise the available Context window shrinks to zero."
        ],
        correctIndex: 1,
        explanation: "答對了！Gemini Gems 的長文本窗口（Single file 容受超高 Token，每份文件容許約 1,000,000 tokens）以及單個 PDF/Word 文件上限達 512 MB，正是其作為行銷顧問儲存品牌公關指南、產品全書的最佳底蘊。主導公關與内容分發極之高效！"
      },
      {
        id: "ai-mkt-q3",
        questionText: `🧠 【LLM 先天心算估計限制與 python 策略 LLM Sandbox Auditing】
你正在為客戶分析第一季的多媒體廣告回報。你需要計算以下這個 PESTEL 多維轉換指標：「一個含有 10 個核心單位的物業，每月總租金收入為 $206,750 港元，若每年扣除 5.35% 的維護營運磨耗，求平均每個單位每年的淨租金收益是多少？」在普通模式下，為何你應在 Prompt 中敲入 “use python” 或呼叫 Code Execution 來讓 Gemini 解答？
Why should you instruct Gemini to 'use python' or execute code sandboxes to calculate financial and statistical metrics?`,
        options: [
          "因為 LLMs 本質並非直接精密計算的數學計算機，它們基於 RLHF 與機率預測下一個字，心算複雜加減乘除時容易「靠估」（產生幻覺）。叫 AI 使用 Python 程式碼，能利用編程 Sandbox 算得絕對精細正確的數值！\nBecause LLMs operate on statistical token predicting and are prone to guessing complex math (hallucinations). Instructing them to employ Python enforces standard coding execution to yield absolute precision!",
          "因為如果不使用 Python，Google 會隨機從你的信用卡扣除 5.35% 作為利息微調\nUnless Python code is initialized, Google levies an automatic 5.35% penalty fee from thy credit card.",
          "因為 Python 代碼跑起來比 LLM 的運行速度慢大約 1000 萬倍，可以用來安全地消磨上班摸魚時間\nBecause Python execution is infinitely slower, allowing users to safely consume slack hours at work.",
          "因為除了 Python 之外，其他所有的程式語言（如 JavaScript）均已被聯合國安理會全球封禁\nBecause all other computer languages have been restricted worldwide by safety international laws."
        ],
        correctIndex: 0,
        explanation: "完全正確！這是一個無數人忽略的「AI 終極常識」。無論是 GPT 還是 Gemini，大型語言模型 (LLMs) 在本質上都是強大的「語言分析、意圖理解、語篇生成與語意轉化工具」，而非高階微積分或精確算術晶片（它們做算術有時是憑概率「猜測」下一個數字，很容易出現差值）。在分析行銷廣告回報 (ROAS)、淨資產收益、總租金等金錢账目時，我們必須命令 AI 「使用 Python 來編程求值 (use Python)」，這才是保障數據百分百無懈可擊的最佳做法！"
      }
    ]
  }
];

export const SCENARIO_CASES = [
  {
    id: "case-1",
    title: "新創電商預算分配難題 (HK Startup Budget Allocation Dilemma)",
    difficulty: "Intermediate",
    tag: "Budget & ROAS",
    problem: `一家香港新創手作香氛蠟燭精品網店剛上市，首季每月的數位行銷預算僅有相對桔据的 $30,000 港元。目前兩位創辦人正面臨一個經典的兩難選擇：

【預算大戰 / Marketing Budget Allocation Wars】:
┌───────────────── Branding (品牌心智) ─────────────────┐
│ • 50% Budget ($15,000)                               │ ──> 🎥 拍精緻形象、微電影廣告、講初心故事
└───────────────────────────────────────────────────────┘
                                  VS
┌──────────────── Performance (效能轉化) ────────────────┐
│ • 50% Budget ($15,000)                               │ ──> 🎯 IG Reels 直接導流、送首購免運、再行銷追蹤
└───────────────────────────────────────────────────────┘

一方面，首席行銷官 (CMO) 認為應該全力投遞影片、進行「品牌心智行銷」(Branding) 來建立本土文青信任度與溢價空間；另一邊，營運總監 (COO) 則堅持「數字行銷必須每天看進帳」，要求全數砸入 Advantage+ 購物廣告活動直接導流促銷、利用 performance metrics 驅動首月業績。

請以數位行銷高階顧問的身分，為該 brand 規劃一個合理的預算配置分佈，並用廣東話思維夾雜中英專業術語 (如 CAC (Customer Acquisition Cost), LTV (Lifetime Value), ROAS (Return on Ad Spend)), 給予具體的落地解決方案與依據。`
  },
  {
    id: "case-2",
    title: "SEO 與 Owned Media 拯救高昂廣告競價 (Inbound SEO Search vs High CPC Battles)",
    difficulty: "Advanced",
    tag: "SEO Strategy",
    problem: `某間開辦「一對一高階中環商務英語」嘅線上課程品牌，長期依賴投遞 Meta 轉換廣告與 Google 關鍵字廣告 (Search Ads)。但因為香港商務培訓、成人教育行業競爭極其白熱化：

【競價磨損數據 / Advertising Auction Friction Details】:
├─ 每次點擊成本 CPC (Cost Per Click) : 已狂飆至 $180 港元 / Click!
├─ 綜合轉換率 CVR (Conversion Rate)  : 網站僅有大約 1%
└─ 真實獲客成本 CAC (Customer Acquisition Cost) : 
   $180 / 1% = $18,000 港元 (大於客戶首筆課程訂單價值，長期入不敷出！)

目前他們除了官方首頁外，網頁完全沒有任何其他學術文章或博客內容。

請你為此課程品牌，撰寫一份拯救高昂廣告競拍、融合 On-page/Off-page SEO 與「長尾關鍵字策略」，利用「自有媒體 (Owned Media)」部落格內容與 Remarketing (再行銷) 互組的入境行銷 (Inbound Marketing) 自主閉環長線作戰計劃書。`
  },
  {
    id: "case-3",
    title: "一時好心聖誕快閃營運與 SEO 反向連結毒性危機 (O2O Pop-up Store Operations & Off-page SEO Link Toxicity Audits)",
    difficulty: "Advanced",
    tag: "O2O & Off-page SEO",
    problem: `【真實案例分享 CASE-027 / CASE-030】: 
本案源於香港一間 B2B 禮品設計公司的老闆「長氣哥」，他試圖打造自家 B2C 創意保溫杯品牌，並決策在聖誕節檔期於全港著名的「死場」之一 ── 尖沙咀首都廣場 開辦為期 23 天的實體快閃店 (Pop-up Store)。然而在線下營運與線上外部連結優化上，他面臨了嚴峻的雙重打擊：

【O2O 線下實體營運重創細節 / O2O Terminal Operations Friction】:
├─ 銷售受挫：因長氣哥對本地人習慣缺乏考量，快閃店「只收信用卡，不設找贖，不收現金」，結果白白流失了高達 34% 的現金買家！
├─ 人手混亂：商場突然在 12 月中旬通告將開放時間延長至 23:00。深夜收工的安全顧慮導致兼職員工臨時退出，排班極度困難。
└─ 櫃位簡陋：矮櫃沒有配鎖，貴重保溫杯及現金只能放紙箱，用垃圾膠板暫封，極大耗損每日點數行政時間。

【SEO 線上外部連結失衡指標 / SEO Link Toxicity Warnings】:
該品牌後續因盲目聽信外部不專業 IT 外包公司，為課程/保溫杯網站灌錄了上千條垃圾連結，導致在 SEMrush 的審核工具中測出了驚人的「Link Toxicity Score (反向連結毒性分數) 偏高」警告。團隊籠罩在可能被 Google 演算法垃圾檔案降權的驚恐中，但他們又無法取得這些垃圾網站的登入控制權。

請問，作為高階數位行銷兼 O2O 整合渠道負責人：
1. 【線下 O2O 修正】：在有限的 23 天快閃店租約、人手與防盗限制下，你如何改善排班與現金容錯率以收復 34% 營業額失地？
2. 【線上 SEO 保防】：面對 Link Toxicity 偏高警報，你如何調用 Google Disavow Tool (拒絕連結工具) 進行申報？如何依據 dofollow、nofollow 比率及 Link Pyramid 模型 (分 Tier 1, 2, 3 層導流)，向管理層全面科普 Google John Mueller 針對「Toxic Links 毋須過度恐慌」的最新防守型權威 SEO 架構？`
  },
  {
    id: "case-4",
    title: "2026 GEO 生成式搜尋新局與品牌聯想詞清洗 (2026 GEO AI SGE Optimizations & Autocomplete reputation rescue)",
    difficulty: "Advanced",
    tag: "SGE & GEO & ORM",
    problem: `【真實案例分享 CASE-043】: 
某家為香港政商兩界政要名流度身定製奢華首飾的品牌「細龍生」，由于高調行事，在香港本地網絡上（尤其是連登討論區 LIHKG 及香港討論區 Discuss）引來了不少 Haters (反對者、酸民)。長久下來，竟然觸發了 Google Search Autocomplete 的自動完成關聯詞污染：
當用戶輸入 「[細龍生品牌名稱]」 時，下拉選單竟然赫然出現 「垃圾」、「騙局」 等毀滅品牌聲譽的附帶下拉聯想詞。

同時，跨入 2026 年，以 Google AI Overviews、Search Generative Experience (SGE) 與 Perplexity 為首的「生成式搜尋引擎」開始吞噬過半的傳統自然點擊。國際專家 Andrew Holland 提醒：「在 AI 時代，單純堆砌關鍵字發佈內容的传统 SEO 模式正在崩潰，品牌必须改為追求 AI Visibility (AI可見度) 與來自 Authority Sources (權威第三方信源) 的 Citations (引用次數)。」

請你為細龍生制定一項 ORM (線上聲譽管理) 與 GEO 融合的閉環突圍計劃書：
1. 【下拉詞淨化 (Autocomplete Cleaning)】：你如何巧妙利用中英文高權重論壇 (Seeding / 論壇種草與手動發帖)，配合 Contextual Link (上下文錨文本關聯連結) 指向、以及編寫百度百科/中文百科條目，在不直接與 Haters 對罵的前提下，讓 Google 算法自動重新判定並洗去負面聯想下拉詞？
2. 【GEO 與 AI 引用布局 (LLM Citation Strategy)】：在主流生成式大模型 (如 GPT-4o, Gemini 1.5, Claude 3.5) 的訓練數據中，如何通過布局 listicles (清單推薦文)、三方權威媒體、Reddit 和 Reddit 引用，來確保用戶在 AI 提問例如「中環有咩低調奢華定製首飾品牌」時，AI Overviews 能精準、高權重地 Citation 引薦細龍生的品牌？`
  }
];
