import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  X, 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  Globe, 
  RefreshCw, 
  ArrowRight,
  TrendingUp,
  Award,
  AlertCircle
} from "lucide-react";

interface SearchSource {
  title: string;
  uri: string;
}

const POPULAR_PRESETS = [
  { keyword: "SGE", label: "SGE 生成式搜尋" },
  { keyword: "GEO", label: "GEO 新型搜尋優化" },
  { keyword: "ROAS", label: "ROAS 計算公式" },
  { keyword: "CAC & LTV", label: "CAC 與 LTV 增長" },
  { keyword: "Link Pyramid", label: "連結金字塔模型" },
  { keyword: "dofollow vs nofollow", label: "Dofollow反向連結" },
  { keyword: "ORM", label: "ORM 聲譽管理" },
  { keyword: "AARRR", label: "AARRR 行銷漏斗" }
];

export default function GroundedSearchWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [sources, setSources] = useState<SearchSource[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (targetQuery?: string) => {
    const searchQuery = targetQuery || query;
    if (!searchQuery.trim()) return;

    if (targetQuery) {
      setQuery(targetQuery);
    }

    setIsLoading(true);
    setResult(null);
    setSources([]);
    setError(null);

    try {
      const response = await fetch("/api/gemini/grounded-search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        let errorMsg = "伺服器或是 AI 端響應錯誤，請稍後再試！";
        try {
          const data = await response.json();
          if (data && data.error) {
            errorMsg = data.error;
          }
        } catch (e) {
          // ignore parsing error, stick with default
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data.text);
      setSources(data.sources || []);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "讀取資料失敗，請檢查系統環境變數或重試。");
    } finally {
      setIsLoading(false);
    }
  };

  // Safe and beautiful markdown-like plain text formatter for the explanation text
  const formatExplanations = (text: string) => {
    if (!text) return null;
    
    return text.split("\n").map((line, idx) => {
      const cleanLine = line.trim();
      
      if (!cleanLine) {
        return <div key={idx} className="h-3" />;
      }

      // Check for markdown sub-headers (### or ##)
      if (cleanLine.startsWith("###") || cleanLine.startsWith("##")) {
        const headerText = cleanLine.replace(/^###?\s*/, "").replace(/\*\*/g, "");
        return (
          <h4 key={idx} className="text-sm font-bold text-slate-200 mt-4 mb-2 flex items-center gap-1.5 border-b border-slate-850 pb-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            {headerText}
          </h4>
        );
      }

      // Check for bullet points
      if (cleanLine.startsWith("- ") || cleanLine.startsWith("* ") || cleanLine.startsWith("• ")) {
        const content = cleanLine.substring(2);
        return (
          <li key={idx} className="text-xs text-slate-300 ml-4 list-disc leading-relaxed mb-1.5">
            {renderLineWithBoldText(content)}
          </li>
        );
      }

      // Check for ordered lists (like 1., 2.)
      const numListMatch = cleanLine.match(/^(\d+)\.\s(.*)/);
      if (numListMatch) {
        return (
          <div key={idx} className="text-xs text-slate-300 ml-2 py-1 flex gap-2 items-start leading-relaxed">
            <span className="text-indigo-400 font-mono font-bold">{numListMatch[1]}.</span>
            <span>{renderLineWithBoldText(numListMatch[2])}</span>
          </div>
        );
      }

      // Regular line
      return (
        <p key={idx} className="text-xs text-slate-300 leading-relaxed mb-2">
          {renderLineWithBoldText(cleanLine)}
        </p>
      );
    });
  };

  // Render a single line, parsing bold markdown '**text**' into strong tags
  const renderLineWithBoldText = (text: string) => {
    const parts = text.split(/\*\*([^*]+)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="text-indigo-300 font-semibold">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <motion.button
        id="floating-grounded-search-button"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-3.5 rounded-full shadow-xl shadow-indigo-900/30 font-medium flex items-center gap-2 cursor-pointer border border-white/20 hover:shadow-indigo-500/20 transition-all"
        title="行銷術語 Google AI 聯動檢索"
      >
        <Search className="w-5 h-5 animate-pulse" />
        <span className="text-xs font-bold tracking-wide pr-1 hidden sm:inline">術語 AI 檢索 (Grounded)</span>
      </motion.button>

      {/* Floating Panel Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/80 backdrop-blur-sm flex justify-end">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Main Panel */}
            <motion.div
              id="grounded-search-drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/40">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-pink-500/10 border border-pink-500/25">
                    <Sparkles className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                      行銷術語立體檢索
                      <span className="text-[10px] bg-indigo-500/15 border border-indigo-500/30 px-1.5 py-0.5 rounded text-indigo-400 font-mono">
                        Google Search
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      即時連網獲取 Google SEO / SGE / ORM 最新官方規範
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Main Content scroll area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-slate-800">
                
                {/* Search Bar Input */}
                <div className="bg-slate-950/40 border border-slate-800/80 p-3 rounded-xl space-y-2.5">
                  <div className="relative">
                    <input 
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                      placeholder="輸入縮寫或概念，如：SGE, GEO, ROAS..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 pl-3 pr-10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                    <button 
                      onClick={() => handleSearch()}
                      disabled={isLoading}
                      className="absolute right-2 top-1.5 p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-slate-100 cursor-pointer"
                    >
                      {isLoading ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Popular Presets */}
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 font-semibold uppercase block">熱門術語快捷鍵</span>
                    <div className="flex flex-wrap gap-1.5">
                      {POPULAR_PRESETS.map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSearch(preset.keyword)}
                          disabled={isLoading}
                          className="text-[10px] bg-slate-900 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-800 text-slate-300 hover:text-indigo-300 px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1"
                        >
                          <TrendingUp className="w-2.5 h-2.5 opacity-65" />
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Display Block */}
                <div className="space-y-4">
                  {isLoading && (
                    <div className="space-y-3 py-6">
                      <div className="flex items-center gap-1 text-xs text-indigo-400 animate-pulse font-medium">
                        <Globe className="w-3.5 h-3.5 animate-spin" />
                        正在檢索 Google 搜尋知識庫並校準定義...
                      </div>
                      <div className="h-4 bg-slate-800 rounded w-1/3 animate-pulse" />
                      <div className="h-3 bg-slate-850 rounded w-full animate-pulse" />
                      <div className="h-3 bg-slate-850 rounded w-5/6 animate-pulse" />
                      <div className="h-3 bg-slate-850 rounded w-11/12 animate-pulse" />
                      <div className="h-3 bg-slate-850 rounded w-4/5 animate-pulse" />
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl flex gap-2.5 items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-xs font-bold text-red-400">檢索發生錯誤</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{error}</p>
                      </div>
                    </div>
                  )}

                  {/* Clear visual of the explanations */}
                  {result && !isLoading && !error && (
                    <div className="bg-slate-950/20 border border-slate-850 rounded-xl p-4.5 space-y-3 shadow-inner">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                        <span className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-indigo-400" />
                          AI 智能解答與知識落地
                        </span>
                        <span className="text-[10px] text-slate-500">
                          語言：繁體中文 & 粵語
                        </span>
                      </div>

                      <div className="prose prose-sm prose-invert max-w-none">
                        {formatExplanations(result)}
                      </div>

                      {/* Display Grounding Citation Sources */}
                      {sources.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-slate-800 space-y-2">
                          <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase block">
                            📚 連網核實參考信源 (Grounding References)
                          </span>
                          <div className="grid grid-cols-1 gap-1.5">
                            {sources.map((src, i) => (
                              <a
                                key={i}
                                href={src.uri}
                                target="_blank"
                                referrerPolicy="no-referrer"
                                className="flex items-center justify-between p-2 bg-slate-950/40 hover:bg-indigo-950/20 border border-slate-850 hover:border-indigo-800/40 rounded-lg text-slate-300 hover:text-indigo-300 transition-all text-xs"
                              >
                                <span className="truncate max-w-[85%] font-medium">
                                  {src.title}
                                </span>
                                <ExternalLink className="w-3 h-3 opacity-60" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Empty Slate Initial view */}
                  {!result && !isLoading && !error && (
                    <div className="text-center py-10 space-y-3 border border-dashed border-slate-800/60 rounded-xl bg-slate-950/10">
                      <div className="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-500">
                        <Search className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-300">啟動連網術語百科</h4>
                        <p className="text-[11px] text-slate-500 max-w-xs mx-auto mt-1 leading-relaxed">
                          在這裡，你可以跨出課程限制！直接搜尋任何最新的數字增長策略（例如 SGE / GEO 分數，或是 CPC 投標）。Gemini AI 將即時透過 Google Search 正確且可信地解答你的疑惑。
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom footer guidelines notes */}
              <div className="p-4 border-t border-slate-850 bg-slate-950/60 text-center">
                <span className="text-[10px] text-slate-500 block">
                  🛡️ 數據與定義均由 Google Search Real-time Grounding 提供 | 備戰 GA4 & Meta Spark
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
