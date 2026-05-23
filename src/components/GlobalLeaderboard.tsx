import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  User, 
  Clock, 
  Search, 
  HelpCircle, 
  Flame, 
  Trophy, 
  Sparkles, 
  AlertCircle,
  TrendingUp,
  Globe,
  Share2,
  CheckCircle2
} from "lucide-react";

export interface LeaderboardEntry {
  id: string;
  name: string;
  topic: string;
  score: number;
  date: string;
  isCurrentUser?: boolean;
}

const DEFAULT_LEADERBOARD: LeaderboardEntry[] = [
  { id: "seed-1", name: "Ringo_Chau_HKUST", topic: "SGE 生成式搜尋與 AARRR 裂變", score: 100, date: "2026-05-20" },
  { id: "seed-2", name: "Stephanie_Law_CUHK", topic: "GA4 多路徑自訂漏斗分析", score: 100, date: "2026-05-21" },
  { id: "seed-3", name: "Marcus_Wong_HKU", topic: "Shopify 獨立站 CVR 轉化優化", score: 95, date: "2026-05-22" },
  { id: "seed-4", name: "Kennis_Poon_CUHK", topic: "Meta Advantage+ 購物廣告歸因", score: 90, date: "2026-05-22" },
  { id: "seed-5", name: "Vincent_Hao_PolyU", topic: "Link Pyramid 連結金字塔模型設計", score: 85, date: "2026-05-22" }
];

interface GlobalLeaderboardProps {
  currentScore: number | null;
  currentTopic: string;
  onResetQuiz?: () => void;
}

export default function GlobalLeaderboard({ currentScore, currentTopic, onResetQuiz }: GlobalLeaderboardProps) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [nickname, setNickname] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  // Load and sync from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("customQuizHighScores");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as LeaderboardEntry[];
        // Sort and select top entries
        const sorted = parsed.sort((a, b) => b.score - a.score || b.date.localeCompare(a.date));
        setLeaderboard(sorted);
      } catch (e) {
        setLeaderboard(DEFAULT_LEADERBOARD);
      }
    } else {
      setLeaderboard(DEFAULT_LEADERBOARD);
      localStorage.setItem("customQuizHighScores", JSON.stringify(DEFAULT_LEADERBOARD));
    }
  }, []);

  // Submit current score to global leaderboard list
  const handleSubmitScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim() || currentScore === null) return;

    const newEntry: LeaderboardEntry = {
      id: "user-" + Date.now(),
      name: nickname.trim(),
      topic: currentTopic || "自訂數字行銷策略",
      score: currentScore,
      date: new Date().toISOString().split("T")[0],
      isCurrentUser: true
    };

    const updated = [...leaderboard, newEntry];
    // Sort descending by score, resolve ties by date
    const sorted = updated.sort((a, b) => b.score - a.score || b.date.localeCompare(a.date));

    setLeaderboard(sorted);
    localStorage.setItem("customQuizHighScores", JSON.stringify(sorted));
    setIsSubmitted(true);
    setNickname("");
  };

  const filteredLeaderboard = leaderboard.filter(entry => 
    entry.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    entry.topic.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Take top 5 entries
  const top5Entries = filteredLeaderboard.slice(0, 5);

  const getRankBadge = (rankIdx: number) => {
    switch (rankIdx) {
      case 0:
        return (
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center shadow shadow-amber-500/30 text-slate-950 font-bold font-mono text-xs">
            1
          </div>
        );
      case 1:
        return (
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-center shadow shadow-slate-400/30 text-slate-950 font-bold font-mono text-xs">
            2
          </div>
        );
      case 2:
        return (
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-700 to-amber-800 flex items-center justify-center shadow shadow-amber-800/30 text-white font-bold font-mono text-xs">
            3
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold font-mono text-xs">
            {rankIdx + 1}
          </div>
        );
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 space-y-5 shadow-lg">
      
      {/* Quiz Submission Form inside the tab if score is active and not submitted yet */}
      <AnimatePresence>
        {currentScore !== null && !isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4.5 bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-pink-950/20 border border-indigo-800/30 rounded-xl space-y-3 shadow-inner"
          >
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400 animate-bounce" />
              <div>
                <h4 className="text-xs font-bold text-slate-100">
                  登錄考能！將成績登錄至全學員排行榜
                </h4>
                <p className="text-[11px] text-slate-400">
                  本次得分為 <strong className="text-amber-400 text-xs font-mono font-bold">{currentScore} 分</strong>。輸入暱稱即可登錄您的名次。
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmitScore} className="flex gap-2">
              <input
                type="text"
                required
                maxLength={25}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="輸入你的暱稱，例如: 實習生_Andy"
                className="flex-1 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg px-3 py-1.5 text-xs text-slate-100 outline-none"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-[11px] font-bold px-4 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                上榜紀錄
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submitted toast feedback */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="p-3 bg-emerald-950/20 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs flex items-center gap-2 justify-between"
          >
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              成績已成功登載到本地 Global Leaderboard 中！
            </span>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-[10px] underline hover:text-emerald-300 text-emerald-500"
            >
              好，我知道了
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Leaderboard Header with Statistics */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-500">
            <Trophy className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-slate-100 flex items-center gap-1.5">
              全球學員榮譽榜 (Global Leaderboard)
              <span className="text-[9px] bg-amber-500/10 text-amber-500 border border-amber-500/20 px-1.5 py-0.5 rounded font-mono font-medium">
                Top 5
              </span>
            </h3>
            <p className="text-[10px] text-slate-500">
              即時統計所有學員客製自訂主題模擬考的歷史最優戰績
            </p>
          </div>
        </div>

        {/* Search tool for names/topics */}
        <div className="relative">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="搜尋學員、主題..."
            className="bg-slate-950 border border-slate-850 px-2.5 py-1 text-[10px] text-slate-300 rounded-md outline-none w-full sm:w-44 focus:border-indigo-600 pl-7 placeholder-slate-600"
          />
          <Search className="w-3 h-3 text-slate-600 absolute left-2.5 top-2.5" />
        </div>
      </div>

      {/* Leaderboard Entries List */}
      <div className="space-y-2">
        {top5Entries.map((entry, idx) => {
          const isUser = entry.isCurrentUser;
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                isUser 
                  ? "bg-indigo-950/20 border-indigo-500/40 shadow-indigo-500/5 shadow-md"
                  : "bg-slate-950/40 border-slate-850 hover:border-slate-800"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Ranking Badge */}
                {getRankBadge(idx)}

                {/* Nickname and Topic */}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-bold truncate ${isUser ? "text-indigo-300" : "text-slate-200"}`}>
                      {entry.name}
                    </span>
                    {isUser && (
                      <span className="text-[8px] bg-indigo-600/20 text-indigo-400 font-mono px-1 border border-indigo-600/30 rounded">
                        YOU
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-slate-400 truncate mt-0.5 max-w-[200px] sm:max-w-xs">
                    主題: {entry.topic}
                  </p>
                </div>
              </div>

              {/* Score and Date */}
              <div className="text-right shrink-0">
                <div className="text-xs font-mono font-bold text-slate-100">
                  <span className="text-[10px] text-slate-500 font-normal pr-1">Score:</span>
                  <span className={entry.score >= 90 ? "text-emerald-400" : "text-amber-400"}>
                    {entry.score}
                  </span>
                </div>
                <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500 mt-0.5">
                  <Clock className="w-2.5 h-2.5" />
                  {entry.date}
                </div>
              </div>
            </motion.div>
          );
        })}

        {top5Entries.length === 0 && (
          <div className="text-center py-6 text-[11px] text-slate-500">
            沒有找到符合條件的成績紀錄，趕緊出題嘗試一下吧！
          </div>
        )}
      </div>

      {/* Reset scores / help details footer */}
      <div className="pt-2 flex items-center justify-between border-t border-slate-850 text-[9px] text-slate-500">
        <span className="flex items-center gap-1">
          <Globe className="w-3 h-3 text-indigo-400/80" />
          當前統計：{leaderboard.length} 名實習生參與
        </span>
        <button
          onClick={() => {
            if (confirm("確定要重設全球排行榜的所有紀錄嗎？（這將會回復至預設數據）")) {
              localStorage.removeItem("customQuizHighScores");
              setLeaderboard(DEFAULT_LEADERBOARD);
              setIsSubmitted(false);
            }
          }}
          className="text-slate-600 hover:text-slate-400 hover:underline transition-colors"
        >
          重置榜單
        </button>
      </div>

    </div>
  );
}
