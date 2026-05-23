import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell,
  Legend,
  ComposedChart,
  Line,
  ScatterChart,
  Scatter
} from "recharts";
import { 
  Flame, 
  TrendingUp, 
  Compass, 
  Target, 
  LineChart, 
  AlertCircle, 
  CheckCircle,
  HelpCircle,
  Sparkles,
  Award,
  BookOpen
} from "lucide-react";

interface QuizHistoryItem {
  id: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  score: number;
  date: string;
}

// Map any typed topic into a standard Marketing Category
export function classifyTopic(topic: string): string {
  const norm = topic.toLowerCase().trim();
  if (norm.includes("seo") || norm.includes("sge") || norm.includes("geo") || norm.includes("search") || norm.includes("link") || norm.includes("pyramid") || norm.includes("dofollow") || norm.includes("nofollow") || norm.includes("keyword") || norm.includes("rank") || norm.includes("audit")) {
    return "SEO & 搜尋引擎優化";
  }
  if (norm.includes("meta") || norm.includes("fb") || norm.includes("social") || norm.includes("ad") || norm.includes("campaign") || norm.includes("instagram") || norm.includes("tiktok") || norm.includes("pixel") || norm.includes("attribution") || norm.includes("blueprint") || norm.includes("歸因")) {
    return "社群投放 & 廣告歸因";
  }
  if (norm.includes("ga") || norm.includes("funnel") || norm.includes("aarrr") || norm.includes("tracker") || norm.includes("analytics") || norm.includes("指標") || norm.includes("數據") || norm.includes("工具")) {
    return "數據分析 & 漏斗模型";
  }
  if (norm.includes("cro") || norm.includes("cvr") || norm.includes("growth") || norm.includes("optimization") || norm.includes("conversion") || norm.includes("retention") || norm.includes("ltv") || norm.includes("cac") || norm.includes("roas") || norm.includes("公式") || norm.includes("計算")) {
    return "增長黑客 & 財務公式";
  }
  return "品牌聲譽 & 公關傳播";
}

const CATEGORIES = [
  "SEO & 搜尋引擎優化",
  "社群投放 & 廣告歸因",
  "數據分析 & 漏斗模型",
  "增長黑客 & 財務公式",
  "品牌聲譽 & 公關傳播"
];

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

// Initial simulation baseline so user has beautiful visual data even on first test!
const BASELINE_HISTORY: QuizHistoryItem[] = [
  { id: "h-1", topic: "dofollow vs nofollow", difficulty: "Easy", score: 100, date: "2026-05-18" },
  { id: "h-2", topic: "Link Pyramid SEO", difficulty: "Medium", score: 66, date: "2026-05-19" },
  { id: "h-3", topic: "GA4 Funnel Tracking", difficulty: "Medium", score: 100, date: "2026-05-20" },
  { id: "h-4", topic: "ROAS Calculations", difficulty: "Hard", score: 33, date: "2026-05-21" },
  { id: "h-5", topic: "ORM Brand Reputation", difficulty: "Easy", score: 100, date: "2026-05-22" },
  { id: "h-6", topic: "Meta Advantage+ Ads", difficulty: "Hard", score: 66, date: "2026-05-22" }
];

export default function QuizAnalyticsHeatmap() {
  const [history, setHistory] = useState<QuizHistoryItem[]>([]);

  // Load history from localStorage + seed if empty
  useEffect(() => {
    const saved = localStorage.getItem("customQuizHistory");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as QuizHistoryItem[];
        setHistory(parsed);
      } catch (e) {
        setHistory(BASELINE_HISTORY);
      }
    } else {
      setHistory(BASELINE_HISTORY);
      localStorage.setItem("customQuizHistory", JSON.stringify(BASELINE_HISTORY));
    }

    // Listens to global custom quiz completion event or local storage changes
    const handleStorageUpdate = () => {
      const refreshed = localStorage.getItem("customQuizHistory");
      if (refreshed) {
        try {
          setHistory(JSON.parse(refreshed));
        } catch {}
      }
    };

    window.addEventListener("storage", handleStorageUpdate);
    // Custom internal event triggered when same-tab score updates
    window.addEventListener("quizHistoryUpdated", handleStorageUpdate);

    return () => {
      window.removeEventListener("storage", handleStorageUpdate);
      window.removeEventListener("quizHistoryUpdated", handleStorageUpdate);
    };
  }, []);

  // Compute Heatmap averages for (Category, Difficulty)
  const heatmapData: any[] = [];
  
  CATEGORIES.forEach((cat, catIdx) => {
    DIFFICULTIES.forEach((diff, diffIdx) => {
      // Find history items matching cat and diff
      const matches = history.filter(item => {
        const itemCat = classifyTopic(item.topic);
        return itemCat === cat && item.difficulty === diff;
      });

      const avgScore = matches.length > 0
        ? Math.round(matches.reduce((sum, item) => sum + item.score, 0) / matches.length)
        : null;

      heatmapData.push({
        category: cat,
        categoryShort: cat.split(" ")[0], // short label for chart Y-axis
        difficulty: diff,
        score: avgScore,
        count: matches.length,
        x: diffIdx, // X coordinate for Scatter-grid
        y: catIdx  // Y coordinate for Scatter-grid
      });
    });
  });

  // Strength vs Weaknesses logic
  const categorySummary = CATEGORIES.map(cat => {
    const matches = history.filter(item => classifyTopic(item.topic) === cat);
    const avgScore = matches.length > 0
      ? Math.round(matches.reduce((sum, item) => sum + item.score, 0) / matches.length)
      : null;
    return { category: cat, avgScore, count: matches.length };
  });

  const ratedCategories = categorySummary.filter(c => c.avgScore !== null) as Array<{
    category: string;
    avgScore: number;
    count: number;
  }>;

  // Find strongest and weakest
  let strongest = ratedCategories.length > 0 
    ? [...ratedCategories].sort((a, b) => b.avgScore - a.avgScore)[0] 
    : { category: "數據分析 & 漏斗模型", avgScore: 100, count: 1 };
    
  let weakest = ratedCategories.length > 0 
    ? [...ratedCategories].sort((a, b) => a.avgScore - b.avgScore)[0] 
    : { category: "增長黑客 & 財務公式", avgScore: 33, count: 1 };

  // Generate tactical advice based on strongest/weakest category
  const getSuggForCategory = (cat: string, isWeak: boolean) => {
    if (isWeak) {
      if (cat.includes("SEO")) return "您的 SEO 外鏈佈局及爬蟲排位觀念稍弱。建議重複研習「連結金字塔 (Link Pyramid)」模型，注重 Disavow 壞鏈接防禦手段。";
      if (cat.includes("社群")) return "社群廣告及歸因模型偏弱。建議仔細調研多路徑轉換歸因，並學習 Meta Advantage+ 智能預算配給原則避免受眾重疊。";
      if (cat.includes("數據")) return "數據指標理解略顯吃力。建議熟悉 GA4 中自訂探索漏斗、自訂維度設置以及 AARRR 的 Retention 改良策略。";
      if (cat.includes("增長")) return "行銷財務公式與利潤臨界點有所欠缺。在投放前期多鍛煉 ROAS 與 LTV/CAC 比值計算，杜絕盲目投流燒錢。";
      return "品牌公關或 ORM 出現缺口。多練習 Google Autocomplete 聯想詞清洗策略，維持良好的搜索引擎首頁品牌形象。";
    } else {
      if (cat.includes("SEO")) return "精通爬蟲權重分層與 GEO 生成式搜尋優化，對 SGE 新趨勢具有強烈的直覺敏感度。";
      if (cat.includes("社群")) return "對精準人群圈選及品牌種草 (Seeding) 有優秀的全局把控，歸因設置純熟。";
      if (cat.includes("數據")) return "漏斗體系洞察精銳，能快速切片發現運營瓶頸並精算轉換。";
      if (cat.includes("增長")) return "對獲客成本 CAC 與 LTV 生命週期比值具有清晰的財務審計思維，抗壓能力強。";
      return "嫻熟掌控輿情與口碑，擅長利用高權重門戶與 Reddit/小紅書等社媒引流並防守負面聲譽。";
    }
  };

  // Recharts Custom SVG Node representing a Heatmap square cell
  const renderHeatmapNode = (props: any) => {
    const { cx, cy, payload } = props;
    const score = payload.score;
    
    let cellColor = "rgba(30, 41, 59, 0.4)"; // Empty Slate gray
    let borderStyle = "border-slate-800";
    let textDisplay = "--";
    let textColor = "text-slate-500";

    if (score !== null && score !== undefined) {
      textDisplay = `${score}%`;
      if (score >= 80) {
        cellColor = "rgba(16, 185, 129, 0.25)"; // transparent emerald
        textColor = "text-emerald-400";
      } else if (score >= 60) {
        cellColor = "rgba(245, 158, 11, 0.25)"; // transparent amber
        textColor = "text-amber-400";
      } else {
        cellColor = "rgba(244, 63, 94, 0.25)"; // transparent rose
        textColor = "text-rose-400";
      }
    }

    return (
      <g>
        {/* Draw rectangular bounding box */}
        <rect
          x={cx - 32}
          y={cy - 16}
          width={64}
          height={32}
          rx={6}
          fill={cellColor}
          stroke={score !== null ? (score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#f43f5e") : "#334155"}
          strokeWidth={1.5}
          className="transition-all hover:scale-105"
        />
        {/* Render text value */}
        <text
          x={cx}
          y={cy + 4}
          textAnchor="middle"
          className={`text-[10px] font-mono font-bold fill-white`}
        >
          {textDisplay}
        </text>
      </g>
    );
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-lg">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/60 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400">
            <LineChart className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
              學習特徵雷達與弱點熱力圖 (Sub-Topic Heatmap)
              <span className="text-[9px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.5 rounded font-mono font-medium">
                Recharts Real-time
              </span>
            </h3>
            <p className="text-[10px] text-slate-500">
              根據歷史答題成果深度剖析，診斷您的 Google Ads 與 SEO 戰術抗壓實力
            </p>
          </div>
        </div>

        {/* Clear Stats */}
        <div className="text-[10px] text-slate-400 font-medium">
          統計區間：<strong className="text-indigo-400 font-mono">{history.length}</strong> 次專題自訂特訓
        </div>
      </div>

      {/* Grid: Radar / Strengths vs Heat Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Heat Map Visualization Box */}
        <div className="lg:col-span-7 bg-slate-950/40 border border-slate-850 p-4 rounded-xl space-y-3 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-indigo-400 tracking-wider uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              2D 六行三列熱力診斷陣列 (2D Matrix Grid)
            </span>
            <p className="text-[10px] text-slate-500 mt-0.5">
              縱軸：數位行銷核心板塊 | 橫軸：挑戰等級，網格表示各段位模擬考平均合格率
            </p>
          </div>

          <div className="h-56 mt-2 relative">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{ top: 20, right: 30, bottom: 10, left: 100 }}
              >
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="Difficulty"
                  domain={[-0.5, 2.5]}
                  ticks={[0, 1, 2]}
                  tickFormatter={(val) => {
                    if (val === 0) return "🌱 簡單 (Easy)";
                    if (val === 1) return "⚡ 中等 (Medium)";
                    return "🔥 困難 (Hard)";
                  }}
                  tick={{ fill: "#94a3b8", fontSize: 9 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Category"
                  domain={[-0.5, 4.5]}
                  ticks={[0, 1, 2, 3, 4]}
                  tickFormatter={(val) => {
                    const matchedCat = CATEGORIES[val] || "";
                    return matchedCat.split(" ")[0]; // short label e.g. SEO, 社群, 數據
                  }}
                  tick={{ fill: "#94a3b8", fontSize: 9 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: "3 3" }} 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg shadow-xl text-xs space-y-1">
                          <p className="font-bold text-slate-200">{data.category}</p>
                          <p className="text-slate-400 text-[10px]">
                            難度：{data.difficulty === "Easy" ? "🌱 簡單" : data.difficulty === "Medium" ? "⚡ 中等" : "🔥 困難"}
                          </p>
                          <p className="text-indigo-400 font-mono text-[10px]">
                            平均分數：
                            <span className="font-bold text-xs">
                              {data.score !== null ? `${data.score} 分` : "暫無歷史作答"}
                            </span>
                          </p>
                          <p className="text-slate-500 text-[9px]">次數：{data.count} 次特訓歷煉</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter 
                  data={heatmapData} 
                  shape={renderHeatmapNode}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Color Guides Legend */}
          <div className="flex items-center justify-center gap-4 text-[9px] text-slate-400 pt-2 border-t border-slate-900">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-emerald-500/20 border border-emerald-500/60 inline-block" />
              優勢區 (≥80 分)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-amber-500/20 border border-amber-500/60 inline-block" />
              過渡區 (60-79 分)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-rose-500/20 border border-rose-500/60 inline-block" />
              盲點區 (≤59 分)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded bg-slate-800 border border-slate-700 inline-block" />
              未開拓 (無資料)
            </span>
          </div>
        </div>

        {/* Strength & Weakness Breakdown Area */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">
          
          {/* Strength Spotting Card */}
          <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
              <Award className="w-4 h-4 text-emerald-400" />
              優勢專長分析 (Your Strength)
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">
                {strongest.category}
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                {getSuggForCategory(strongest.category, false)}
              </p>
            </div>
          </div>

          {/* Weakness Spotting Card */}
          <div className="p-4 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              劣勢短板防禦 (Your Weakness)
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-200">
                {weakest.category}
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                {getSuggForCategory(weakest.category, true)}
              </p>
            </div>
          </div>

          {/* Advice Guidance */}
          <div className="p-4.5 bg-indigo-950/20 border border-indigo-900/40 rounded-xl space-y-2">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-xs">
              <Compass className="w-4 h-4 text-indigo-400" />
              專屬複習指引 (Growth Recommendation)
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed">
              點擊下方的<strong>熱門預設</strong>或<strong>輸入新領域主題</strong>實施專項考點爆破！
              當您完成任何一次新的自訂測驗並提交後，熱力圖將即時整合演算最新掌握度。
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
