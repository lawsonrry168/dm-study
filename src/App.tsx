/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import LessonsTab from "./components/LessonsTab";
import CertificationsTab from "./components/CertificationsTab";
import GroundedSearchWidget from "./components/GroundedSearchWidget";
import GlobalLeaderboard from "./components/GlobalLeaderboard";
import QuizAnalyticsHeatmap from "./components/QuizAnalyticsHeatmap";
import { 
  BookOpen, 
  TrendingUp, 
  Award, 
  Search, 
  Brain, 
  GraduationCap, 
  Flame, 
  Trophy, 
  Sparkles, 
  Lock, 
  RefreshCw, 
  Sliders, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ThumbsUp, 
  HelpCircle, 
  Briefcase,
  Layers,
  ChevronRight,
  Plus,
  Compass,
  ArrowRight
} from "lucide-react";
import { SEOAuditResult, StrategyResult, CaseStudyEvaluation, QuizQuestion } from "./types";
import { SCENARIO_CASES } from "./data";

export default function App() {
  // Global Student Profile States
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem("completedLessons");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [certificationScores, setCertificationScores] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem("certificationScores");
    return saved ? JSON.parse(saved) : {};
  });

  const [totalPoints, setTotalPoints] = useState<number>(() => {
    const saved = localStorage.getItem("totalPoints");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem("streak");
    return saved ? parseInt(saved, 10) : 1;
  });

  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>(() => {
    const saved = localStorage.getItem("unlockedAchievements");
    return saved ? JSON.parse(saved) : ["數位行銷新星 🌟"];
  });

  // UI Navigation Tabs
  const [activeTab, setActiveTab] = useState<"lessons" | "certifications" | "seo" | "marketing" | "cases" | "custom-quiz">("lessons");

  // Server API Configurations Status
  const [hasApiKey, setHasApiKey] = useState<boolean>(true);
  const [checkingConfig, setCheckingConfig] = useState<boolean>(true);

  // SEO Tool States
  const [seoForm, setSeoForm] = useState({
    title: "",
    description: "",
    content: "在這個全民AI的時代，如何利用最新的數位工具提升品牌的曝光率？首先，網頁架構與內容行銷是自然搜尋優化的重中之重。我們需要針對目標客群撰寫優質內容，並佈局精準的長尾搜尋字，進而帶動高轉換。同時應注重用戶體驗，簡化註冊或購買流程，利用再行銷技術追蹤潛網訪客，提昇全通路投報率，爭取最高的 ROAS 成效。",
    keywords: "AI工具, 數位行銷, 長尾搜尋字, ROAS",
    audience: "尋求品牌轉型的企業主與電商行銷經理"
  });
  const [seoResult, setSeoResult] = useState<SEOAuditResult | null>(null);
  const [seoLoading, setSeoLoading] = useState<boolean>(false);
  const [seoError, setSeoError] = useState<string | null>(null);

  // AI Persona & Marketing Strategy States
  const [strategyForm, setStrategyForm] = useState({
    businessName: "EcoAroma 綠意香氣",
    productDescription: "手工天然香氛大豆蠟燭，主打環保、無毒香精、可循環燃燒，瓶身為回收酒瓶再製，並加入植物性蠟精油，有助於舒緩工作壓力與夜間助眠。隨單附贈可種植物之種子紙卡。",
    targetAudience: "22-38歲工作壓力大的城市高階白領女性，追求永續環保與居家生活細節儀式感"
  });
  const [strategyResult, setStrategyResult] = useState<StrategyResult | null>(null);
  const [strategyLoading, setStrategyLoading] = useState<boolean>(false);
  const [strategyError, setStrategyError] = useState<string | null>(null);

  // Scenario Evaluation / Case Grading States
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);
  const [studentApproach, setStudentApproach] = useState<string>("");
  const [caseEvaluation, setCaseEvaluation] = useState<CaseStudyEvaluation | null>(null);
  const [caseLoading, setCaseLoading] = useState<boolean>(false);
  const [caseError, setCaseError] = useState<string | null>(null);

  // Custom Topic Quiz Generator States
  const [customTopic, setCustomTopic] = useState<string>("GA4 漏斗探索與事件追蹤");
  const [quizDifficulty, setQuizDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");
  const [quizMode, setQuizMode] = useState<"test" | "flashcard">("test");
  const [revealedCards, setRevealedCards] = useState<Record<string, boolean>>({});
  const [generatedQuestions, setGeneratedQuestions] = useState<QuizQuestion[]>([]);
  const [quizLoading, setQuizLoading] = useState<boolean>(false);
  const [quizError, setQuizError] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);

  // Persist States to LocalStorage
  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem("certificationScores", JSON.stringify(certificationScores));
  }, [certificationScores]);

  useEffect(() => {
    localStorage.setItem("totalPoints", totalPoints.toString());
  }, [totalPoints]);

  useEffect(() => {
    localStorage.setItem("streak", streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("unlockedAchievements", JSON.stringify(unlockedAchievements));
  }, [unlockedAchievements]);

  // Check backend server config on startup
  useEffect(() => {
    fetch("/api/config")
      .then(r => r.json())
      .then(data => {
        setHasApiKey(data.hasApiKey);
        setCheckingConfig(false);
      })
      .catch(() => {
        setCheckingConfig(false);
      });
  }, []);

  // Event Handlers for Lessons & Exams
  const handleCompleteLesson = (lessonId: string, pointsAdded: number) => {
    if (!completedLessons.includes(lessonId)) {
      const updated = [...completedLessons, lessonId];
      setCompletedLessons(updated);
      setTotalPoints(p => p + pointsAdded);
      setStreak(s => s + 1);

      // Level Achievement checking
      const newAchievements = [...unlockedAchievements];
      if (updated.length === 1 && !newAchievements.includes("初試啼聲 ⚡")) {
        newAchievements.push("初試啼聲 ⚡");
      }
      if (updated.length === 3 && !newAchievements.includes("漏斗策略大師 📈")) {
        newAchievements.push("漏斗策略大師 📈");
      }
      if (updated.length === 6 && !newAchievements.includes("全方位數碼專家 👑")) {
        newAchievements.push("全方位數碼專家 👑");
      }
      setUnlockedAchievements(newAchievements);
    }
  };

  const handlePassCertification = (trackId: string, score: number, pointsAdded: number) => {
    const previousScore = certificationScores[trackId] || 0;
    if (score > previousScore) {
      setCertificationScores(prev => ({ ...prev, [trackId]: score }));
      
      // Only reward points if they haven't passed before
      if (previousScore < 75) {
        setTotalPoints(p => p + pointsAdded);
        
        let label = "認證通關勳章 🎖️";
        if (trackId === "track-ga4") label = "GA4 分析科學家 📊";
        if (trackId === "track-meta") label = "Meta 特約行銷專家 📣";
        
        if (!unlockedAchievements.includes(label)) {
          setUnlockedAchievements(prev => [...prev, label]);
        }
      }
    }
  };

  // Reset progress for students
  const handleResetProgress = () => {
    if (confirm("您確定要重設所有學習進度嗎？所有學分、EXP 及已解鎖認證都將歸零。")) {
      setCompletedLessons([]);
      setCertificationScores({});
      setTotalPoints(0);
      setStreak(1);
      setUnlockedAchievements(["數位行銷新星 🌟"]);
      
      setSeoResult(null);
      setStrategyResult(null);
      setCaseEvaluation(null);
      setGeneratedQuestions([]);
      setQuizAnswers({});
      setQuizSubmitted(false);
      setQuizScore(null);
    }
  };

  // AI SEO Analyzer API Caller
  const handleAnalyzeSEO = async () => {
    if (!seoForm.content.trim()) {
      alert("請輸入要進行優化評估的行銷文案內容！");
      return;
    }
    setSeoLoading(true);
    setSeoError(null);
    setSeoResult(null);

    try {
      const response = await fetch("/api/gemini/analyze-seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(seoForm)
      });
      const data = await response.json();
      if (response.ok) {
        setSeoResult(data);
        // reward points for doing hands-on SEO audit
        setTotalPoints(p => p + 30);
        if (!unlockedAchievements.includes("SEO 優化實習生 🔍")) {
          setUnlockedAchievements(prev => [...prev, "SEO 優化實習生 🔍"]);
        }
      } else {
        setSeoError(data.error || "SEO 評估服務忙碌中，請稍候重試。");
      }
    } catch {
      setSeoError("連線至分析伺服器失敗，請確認伺服器已正常執行運作。");
    } finally {
      setSeoLoading(false);
    }
  };

  // AI Marketing Strategy & Persona Generator Caller
  const handleGenerateStrategy = async () => {
    if (!strategyForm.productDescription.trim()) {
      alert("請輸入該新創產品的核心定位與理念描述！");
      return;
    }
    setStrategyLoading(true);
    setStrategyError(null);
    setStrategyResult(null);

    try {
      const response = await fetch("/api/gemini/generate-persona-and-strategy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(strategyForm)
      });
      const data = await response.json();
      if (response.ok) {
        setStrategyResult(data);
        // Reward student
        setTotalPoints(p => p + 40);
        if (!unlockedAchievements.includes("受眾畫像工程師 🧠")) {
          setUnlockedAchievements(prev => [...prev, "受眾畫像工程師 🧠"]);
        }
      } else {
        setStrategyError(data.error || "行銷決策庫調配忙碌中，請稍後。");
      }
    } catch {
      setStrategyError("API 呼叫通信錯誤，請檢查伺服器連線狀態。");
    } finally {
      setStrategyLoading(false);
    }
  };

  // AI Scenario Case Studies Grading Caller
  const handleEvaluateCase = async () => {
    if (!studentApproach.trim()) {
      alert("請在作答區撰寫您的數位行銷戰略方案！");
      return;
    }
    setCaseLoading(true);
    setCaseError(null);
    setCaseEvaluation(null);

    const activeCase = SCENARIO_CASES[selectedCaseIdx];

    try {
      const response = await fetch("/api/gemini/evaluate-case", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scenarioId: activeCase.id,
          scenarioTitle: activeCase.title,
          scenarioProblem: activeCase.problem,
          studentApproach
        })
      });
      const data = await response.json();
      if (response.ok) {
        setCaseEvaluation(data);
        // Grant student points proportional to score
        const pointsAwarded = Math.round(data.score * 1.5);
        setTotalPoints(p => p + pointsAwarded);
        
        const badgeLabel = `教授授勳: ${data.qualityBadge} 🎓`;
        if (!unlockedAchievements.includes(badgeLabel)) {
          setUnlockedAchievements(prev => [...prev, badgeLabel]);
        }
      } else {
        setCaseError(data.error || "案例評等模組回應逾時。");
      }
    } catch {
      setCaseError("案例評審發送失敗，請確認您的網路與 API 配置。");
    } finally {
      setCaseLoading(false);
    }
  };

  const handleResetAllQuizStates = () => {
    setCustomTopic("GA4 漏斗探索與事件追蹤");
    setQuizDifficulty("Medium");
    setQuizMode("test");
    setRevealedCards({});
    setGeneratedQuestions([]);
    setQuizLoading(false);
    setQuizError(null);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(null);
  };

  // AI Dynamic Custom Quiz Generator Caller
  const handleGenerateCustomQuiz = async () => {
    if (!customTopic.trim()) {
      alert("請輸入您想要專項特訓的數位行銷主題！");
      return;
    }
    setQuizLoading(true);
    setQuizError(null);
    setGeneratedQuestions([]);
    setQuizAnswers({});
    setRevealedCards({});
    setQuizSubmitted(false);
    setQuizScore(null);

    try {
      const response = await fetch("/api/gemini/generate-custom-quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          topic: customTopic,
          difficulty: quizDifficulty
        })
      });
      const data = await response.json();
      if (response.ok && data.questions) {
        setGeneratedQuestions(data.questions);
      } else {
        setQuizError(data.error || "自動出題機故障，請重新嘗試。");
      }
    } catch {
      setQuizError("無法連線至 AI 題庫生成器。");
    } finally {
      setQuizLoading(false);
    }
  };

  const handleSelectQuizAnswer = (qId: string, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitCustomQuiz = () => {
    if (generatedQuestions.length === 0) return;
    
    const unanswered = generatedQuestions.filter(q => quizAnswers[q.id] === undefined);
    if (unanswered.length > 0) {
      alert(`尚有 ${unanswered.length} 題未作答，請完成後再行提交！`);
      return;
    }

    let correctCount = 0;
    generatedQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / generatedQuestions.length) * 100);
    setQuizScore(score);
    setQuizSubmitted(true);

    // Save to historical customQuizHistory
    try {
      const savedHistory = localStorage.getItem("customQuizHistory");
      const parsedHistory = savedHistory ? JSON.parse(savedHistory) : [];
      const newHistoryItem = {
        id: "q-" + Date.now(),
        topic: customTopic,
        difficulty: quizDifficulty,
        score: score,
        date: new Date().toISOString().split("T")[0]
      };
      const updatedHistory = [newHistoryItem, ...parsedHistory];
      localStorage.setItem("customQuizHistory", JSON.stringify(updatedHistory));
      
      // Dispatch custom window event so heatmap updates instantly
      window.dispatchEvent(new Event("quizHistoryUpdated"));
    } catch (e) {
      console.error("Failed to save custom quiz history", e);
    }

    // reward points
    if (score >= 60) {
      const pts = score * 1;
      setTotalPoints(p => p + pts);
      if (!unlockedAchievements.includes("主題答題尖兵 🎯")) {
        setUnlockedAchievements(prev => [...prev, "主題答題尖兵 🎯"]);
      }
    }
  };

  // Safe percentage helper for Progress
  const lessonsCompletionPercent = Math.round((completedLessons.length / 6) * 100);
  const totalCertsCount = Object.keys(certificationScores).filter(k => certificationScores[k] >= 75).length;

  return (
    <div id="learning-hub-root" className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* Top Professional Header */}
      <header className="border-b border-slate-800 bg-slate-900/40 backdrop-blur sticky top-0 z-40 px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl shadow-lg shadow-indigo-600/10">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-slate-100 tracking-tight">DM & AI 學生實訓基地</h1>
                <span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-indigo-500/15">
                  AI-Powered V2.0
                </span>
              </div>
              <p className="text-xs text-slate-400">專為 Digital Marketing & AI 學員打造的體感式互動成長沙盒</p>
            </div>
          </div>

          {/* Student Profile Ribbon */}
          <div className="flex items-center flex-wrap gap-3 bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-2.5 shadow-md">
            <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3.5">
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-500">連續登入</div>
                <div className="text-xs font-bold text-amber-400">{streak} 天</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 border-r border-slate-800 pr-3.5 pl-0.5">
              <Trophy className="w-4 h-4 text-indigo-400" />
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-500">累積學分</div>
                <div className="text-xs font-bold text-slate-100">{totalPoints} EXP</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 pr-0.5 pl-0.5">
              <Award className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-[10px] uppercase font-semibold text-slate-500">合格證書</div>
                <div className="text-xs font-bold text-emerald-400">{totalCertsCount} / 2 張</div>
              </div>
            </div>

            <button
              onClick={handleResetProgress}
              title="重設學習歷史"
              className="p-1.5 hover:bg-slate-800 rounded text-slate-500 hover:text-rose-400 transition-colors ml-2 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* API Key Missing Alert Callout (Handled gracefully via env config check) */}
      {!checkingConfig && !hasApiKey && (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 pt-5">
          <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4 flex gap-3 text-amber-300 text-xs">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">⚠️ 系統偵測到未配置 GEMINI_API_KEY 金鑰</p>
              <p className="mt-0.5 opacity-80">
                本學習系統已預載高擬真离線學習模組。為啟用強大的 AI SEO 診斷、AI 痛點人物畫像生成及論文等級案例評分功能，請於 AI Studio 右側的<b>金鑰設定面板 (Secrets)</b> 中加入您的 <code>GEMINI_API_KEY</code> 口令。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Hand: Student Progress Bento (3 cols) */}
        <aside className="lg:col-span-3 space-y-5">
          
          {/* Progress Indicators */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <Sliders className="w-3.5 h-3.5 text-indigo-400" /> 學習實踐进度
            </h3>
            
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1">
                  <span>基礎理論課堂解鎖</span>
                  <span className="font-semibold text-slate-100">{completedLessons.length} / 6</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${lessonsCompletionPercent}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-medium mb-1">
                  <span>行業名廠雙認證通關</span>
                  <span className="font-semibold text-slate-100">{totalCertsCount} / 2</span>
                </div>
                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${(totalCertsCount / 2) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Unlocked Achievements Badges */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 學員榮譽勳章
              </h3>
              <span className="text-[10px] bg-slate-850 px-2 py-0.5 rounded text-slate-400 font-mono">
                {unlockedAchievements.length} 個
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {unlockedAchievements.map((badge, idx) => (
                <span 
                  key={idx} 
                  className="bg-slate-950 text-slate-200 text-[11px] px-2.5 py-1 rounded-lg border border-indigo-950/70 shadow-sm flex items-center gap-1 hover:border-slate-700 transition-colors"
                >
                  <span className="text-xs">✔️</span> {badge}
                </span>
              ))}
              {unlockedAchievements.length === 1 && (
                <p className="text-[10px] text-slate-500 italic mt-1">累積 EXP、完成理論學習與 SEO/AI 進階實作，解鎖限量精緻勳章！</p>
              )}
            </div>
          </div>

          {/* Practice Fast Reference Box */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 text-xs space-y-3 shadow-sm bg-gradient-to-br from-slate-900 to-indigo-950/20">
            <h4 className="font-semibold text-slate-200 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-indigo-400" /> 行業學習指引
            </h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              本學堂參照 <b>Google Analytics (GA4)</b> 與 <b>Meta Blueprint</b> 官方最新考核題型，融入 <b>AARRR 增長模型、4P/4C 行銷、SWOT 策略</b> 等。
            </p>
            <div className="pt-1 select-none pointer-events-none">
              <div className="border border-indigo-500/20 bg-indigo-500/5 p-2 rounded text-[10px] text-indigo-300">
                ⭐ 講師提示：完成右側實戰案例挑戰，您可自行將成果發布或提供做為課堂作業。
              </div>
            </div>
          </div>

        </aside>

        {/* Right Hand: Action Sandboxes (9 cols) */}
        <section className="lg:col-span-9 flex flex-col space-y-6">
          
          {/* Main Action Tabs Controller */}
          <nav className="flex flex-wrap items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800/80 m-0">
            <button
              onClick={() => setActiveTab("lessons")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "lessons" 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" /> 理論課堂
            </button>

            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "certifications" 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Award className="w-3.5 h-3.5" /> 認證模擬考
            </button>

            <button
              onClick={() => setActiveTab("seo")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "seo" 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Search className="w-3.5 h-3.5" /> SEO AI 審稿機
            </button>

            <button
              onClick={() => setActiveTab("marketing")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "marketing" 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Brain className="w-3.5 h-3.5" /> AI 行銷沙盒
            </button>

            <button
              onClick={() => setActiveTab("cases")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "cases" 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" /> 實務案例挑戰
            </button>

            <button
              onClick={() => setActiveTab("custom-quiz")}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === "custom-quiz" 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/10" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> 自訂 AI 命題
            </button>
          </nav>

          {/* Dynamic Tab Panels View */}
          
          {/* TAB 1: Lessons */}
          {activeTab === "lessons" && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" /> 行業核心理論研修
                </h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  系統化梳理 AARRR 增長漏斗、4P/4C 與 PESTEL、數位 KPI 指標等必學理念。每堂課末包含一題知識挑戰，正確答對即可點亮對應學分與新 EXP！
                </p>
              </div>
              
              <LessonsTab 
                completedLessons={completedLessons}
                onCompleteLesson={handleCompleteLesson}
              />
            </div>
          )}

          {/* TAB 2: Certifications */}
          {activeTab === "certifications" && (
            <div className="space-y-4">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400" /> Google & Meta 名廠資格自測
                </h2>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  提前備戰 Google Analytics 4 官方認證與 Meta Certified Digital Marketing 精緻模擬。合格可向同儕展現高素養實力。
                </p>
              </div>

              <CertificationsTab 
                certificationScores={certificationScores}
                onPassCertification={handlePassCertification}
              />
            </div>
          )}

          {/* TAB 3: SEO Auditor */}
          {activeTab === "seo" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Search className="w-5 h-5 text-indigo-400" /> SEO 自然搜尋 AI 批閱審視系統
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  扮演 SEO 顧問！輸入您的網頁預計標題、Meta 描述、主推主題關鍵字與整段行銷推廣文章，Gemini AI 將即時分析關鍵字密度，提出長尾字建議並優化產出。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Form Elements */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">網頁標題 Title</label>
                      <input 
                        type="text" 
                        value={seoForm.title} 
                        onChange={(e) => setSeoForm({ ...seoForm, title: e.target.value })}
                        placeholder="例：AI工具引領數位行銷新時代"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2.5 text-xs text-slate-100 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">目標關鍵字 Focus Keywords</label>
                      <input 
                        type="text" 
                        value={seoForm.keywords} 
                        onChange={(e) => setSeoForm({ ...seoForm, keywords: e.target.value })}
                        placeholder="例：AI工具, 數位行銷, ROAS"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2.5 text-xs text-slate-100 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Meta 描述 Description (關鍵字 hook)</label>
                    <input 
                      type="text" 
                      value={seoForm.description} 
                      onChange={(e) => setSeoForm({ ...seoForm, description: e.target.value })}
                      placeholder="例：本文教你如何結合最新 AI 工具提升自然搜尋排名，引爆高 ROAS。"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2.5 text-xs text-slate-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">目標受眾 Persona Description</label>
                    <input 
                      type="text" 
                      value={seoForm.audience} 
                      onChange={(e) => setSeoForm({ ...seoForm, audience: e.target.value })}
                      placeholder="例：尋求網店轉型的企業主"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2.5 text-xs text-slate-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">行銷推廣文章 Copywriting content (至少 50 字)</label>
                    <textarea 
                      rows={6}
                      value={seoForm.content} 
                      onChange={(e) => setSeoForm({ ...seoForm, content: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-3 text-xs text-slate-100 outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    onClick={handleAnalyzeSEO}
                    disabled={seoLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-semibold text-xs py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {seoLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> AI 分析診斷中，預計 5-8 秒...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> 啟動 AI SEO 批改診斷 (+30 EXP)
                      </>
                    )}
                  </button>
                </div>

                {/* Response Visualizers */}
                <div className="bg-slate-950 border border-slate-805 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
                  
                  {seoLoading && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center z-10 space-y-3">
                      <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full animate-bounce">
                        <Search className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-semibold text-slate-200">正在檢查關鍵字權重、代碼與可讀性</h4>
                      <p className="text-[11px] text-slate-400 max-w-xs italic leading-relaxed">
                        「行銷最本質是傳遞價值，而 SEO 則負責確保這份價值不因技術隔閡被 Google 埋沒。」
                      </p>
                    </div>
                  )}

                  {!seoLoading && !seoResult && !seoError && (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <Sliders className="w-8 h-8 text-slate-700 mb-3" />
                      <h3 className="text-xs font-semibold text-slate-400">尚無分析存檔</h3>
                      <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                        在左邊填入文章或直接使用內建預設的範例文章，立即調用 Gemini 專家引擎。
                      </p>
                    </div>
                  )}

                  {seoError && (
                    <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-lg text-rose-300 text-xs">
                      <p className="font-semibold">⚠️ 錯誤提示</p>
                      <p className="mt-1 opacity-80">{seoError}</p>
                    </div>
                  )}

                  {seoResult && (
                    <div className="space-y-4">
                      
                      {/* SEO Score Indicator */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">健康診斷得分</div>
                          <div className="text-2xl font-black text-slate-100 tracking-tight mt-0.5">
                            <span className={seoResult.score >= 80 ? "text-emerald-400" : seoResult.score >= 60 ? "text-amber-400" : "text-rose-400"}>
                              {seoResult.score}
                            </span>
                            <span className="text-xs text-slate-500 font-normal"> / 100</span>
                          </div>
                        </div>
                        <div className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/15 text-[10px] px-2 py-1 rounded font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> 已審閱
                        </div>
                      </div>

                      {/* Detailed Checkpoint Items */}
                      <div className="space-y-3.5 text-xs leading-relaxed">
                        <div>
                          <h5 className="font-semibold text-slate-300 flex items-center gap-1 text-[11px]">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> 關鍵字密度 (Density Checks)
                          </h5>
                          <p className="text-slate-400 text-[11px] mt-0.5">{seoResult.keywordDensity}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-slate-300 flex items-center gap-1 text-[11px]">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> 網頁標題診斷 (Title Check)
                          </h5>
                          <p className="text-slate-400 text-[11px] mt-0.5">{seoResult.titleCheck}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-slate-300 flex items-center gap-1 text-[11px]">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> 描述優化點 (Description Check)
                          </h5>
                          <p className="text-slate-400 text-[11px] mt-0.5">{seoResult.descriptionCheck}</p>
                        </div>

                        <div>
                          <h5 className="font-semibold text-slate-300 flex items-center gap-1 text-[11px]">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" /> 文章可讀性 (Copy Readability)
                          </h5>
                          <p className="text-slate-400 text-[11px] mt-0.5">{seoResult.contentReadability}</p>
                        </div>
                      </div>

                      {/* Recommendations Bullets */}
                      <div className="border-t border-slate-800 pt-3 mt-4">
                        <h5 className="font-semibold text-slate-300 text-xs mb-2">💡 關鍵優化清單：</h5>
                        <ul className="space-y-1.5">
                          {seoResult.bulletPoints.map((bullet, idx) => (
                            <li key={idx} className="text-[11px] text-slate-400 flex items-start gap-1.5">
                              <span className="text-indigo-400 shrink-0 select-none">✦</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Improved Headline Excerpt */}
                      {seoResult.improvedDraft && (
                        <div className="bg-indigo-950/20 border border-indigo-900/30 p-3.5 rounded-lg mt-4">
                          <h6 className="text-[10px] uppercase tracking-wider text-indigo-300 font-semibold mb-1">AI 建議優化後的 Title 與導讀草稿：</h6>
                          <p className="text-[11px] text-slate-300 leading-relaxed italic">"{seoResult.improvedDraft}"</p>
                        </div>
                      )}

                    </div>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* TAB 4: Marketing Brain */}
          {activeTab === "marketing" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-indigo-400" /> AI 行銷沙盒與 AARRR 戰略腦
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  只要輸入預計包裝或企劃的品牌屬性、核心價值觀描述，Gemini 即可一鍵推演具代表性的受眾畫像、提煉 USP 賣點，並構建 SWOT 矩陣與 AARRR 自訂獲客漏斗！
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Inputs Info */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">新創品牌/產品名稱 Business Name</label>
                    <input 
                      type="text" 
                      value={strategyForm.businessName} 
                      onChange={(e) => setStrategyForm({ ...strategyForm, businessName: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2.5 text-xs text-slate-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">目標客群粗略設定 Target Demographics</label>
                    <input 
                      type="text" 
                      value={strategyForm.targetAudience} 
                      onChange={(e) => setStrategyForm({ ...strategyForm, targetAudience: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-2.5 text-xs text-slate-100 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">核心價值觀/產品與服務痛點描述 Description</label>
                    <textarea 
                      rows={5}
                      value={strategyForm.productDescription} 
                      onChange={(e) => setStrategyForm({ ...strategyForm, productDescription: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-3 text-xs text-slate-100 outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    onClick={handleGenerateStrategy}
                    disabled={strategyLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-semibold text-xs py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {strategyLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> 正在推演 SWOT 與 AARRR 模型...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4" /> 部署 AI 商業邏輯並分析 (+40 EXP)
                      </>
                    )}
                  </button>
                </div>

                {/* Outputs Panel */}
                <div className="bg-slate-950 border border-slate-805 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[350px]">
                  
                  {strategyLoading && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center z-10 space-y-3">
                      <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full animate-spin">
                        <RefreshCw className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-semibold text-slate-200">正在生成 SWOT 模型與 4P/4C 行銷架構</h4>
                      <p className="text-[11px] text-slate-400 max-w-xs italic leading-relaxed">
                        「行銷漏斗不是靜止的，唯有深刻理解目標用戶的眼淚與渴望，產品才能完成通關。」
                      </p>
                    </div>
                  )}

                  {!strategyLoading && !strategyResult && !strategyError && (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <Award className="w-8 h-8 text-slate-700 mb-3" />
                      <h3 className="text-xs font-semibold text-slate-400">尚無行銷兵盤推演</h3>
                      <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                        完善左側產品亮點並提交，看 AI 幫您產出專業級別的商業競品 SWOT 分析與經典學派漏斗！
                      </p>
                    </div>
                  )}

                  {strategyError && (
                    <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-lg text-rose-300 text-xs">
                      <p className="font-semibold">⚠️ 遭遇瓶頸</p>
                      <p className="mt-1 opacity-80">{strategyError}</p>
                    </div>
                  )}

                  {strategyResult && (
                    <div className="space-y-5 text-xs max-h-[500px] overflow-y-auto pr-1">
                      
                      {/* Sub tab avatar */}
                      <div className="bg-indigo-950/20 border border-indigo-900/30 rounded-xl p-4">
                        <div className="flex items-center gap-1.5 mb-2 text-indigo-300 font-semibold">
                          <Compass className="w-4 h-4 shrink-0" />
                          <span>🎯 精選典型受眾 Persona: {strategyResult.personaName}</span>
                        </div>
                        <ul className="space-y-1 text-slate-300 text-[11px]">
                          <li>• <b>角色特徵：</b>{strategyResult.personaRole}</li>
                          <li>• <b>核心痛點：</b>{strategyResult.personaPainPoints.join(" / ")}</li>
                          <li>• <b>關鍵習慣：</b>{strategyResult.personaMediaHabits.join(" -> ")}</li>
                        </ul>
                      </div>

                      {/* SWOT Matrix Grid */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">⚡ SWOT 競爭優勢矩陣</h4>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                            <span className="font-bold text-emerald-400">優勢 (S)</span>
                            <p className="text-slate-400 mt-1">{strategyResult.swot.strengths.join(", ")}</p>
                          </div>
                          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                            <span className="font-bold text-rose-400">劣勢 (W)</span>
                            <p className="text-slate-400 mt-1">{strategyResult.swot.weaknesses.join(", ")}</p>
                          </div>
                          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                            <span className="font-bold text-sky-400">機會 (O)</span>
                            <p className="text-slate-400 mt-1">{strategyResult.swot.opportunities.join(", ")}</p>
                          </div>
                          <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                            <span className="font-bold text-amber-400">威脅 (T)</span>
                            <p className="text-slate-400 mt-1">{strategyResult.swot.threats.join(", ")}</p>
                          </div>
                        </div>
                      </div>

                      {/* Value Prop & Mix */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-1">🔗 品牌獨特銷售主張 (USP)</h4>
                        <p className="text-[11px] text-slate-300 leading-relaxed font-semibold italic bg-slate-900 p-2.5 rounded border border-slate-850">
                          "{strategyResult.usp}"
                        </p>
                      </div>

                      {/* 4P4C Mapping Summary */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-1">📐 傳統4P與大數據4C複合戰略</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-900/60 p-2.5 rounded">
                          {strategyResult.marketingMix4P4C}
                        </p>
                      </div>

                      {/* AARRR tactical funnel details */}
                      <div>
                        <h4 className="text-[11px] font-bold uppercase text-slate-400 mb-2">📈 基於 AARRR 增長漏斗的落地戰術線路</h4>
                        <div className="space-y-2 text-[11px]">
                          <div className="flex gap-2">
                            <span className="bg-slate-900 text-slate-300 border border-slate-800 px-1.5 py-0.5 rounded font-mono select-none h-fit shrink-0">1.獲客</span>
                            <p className="text-slate-400 leading-relaxed">{strategyResult.aarrrTactic.acquisition}</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="bg-slate-900 text-slate-300 border border-slate-800 px-1.5 py-0.5 rounded font-mono select-none h-fit shrink-0">2.活躍</span>
                            <p className="text-slate-400 leading-relaxed">{strategyResult.aarrrTactic.activation}</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="bg-slate-900 text-slate-300 border border-slate-800 px-1.5 py-0.5 rounded font-mono select-none h-fit shrink-0">3.留存</span>
                            <p className="text-slate-400 leading-relaxed">{strategyResult.aarrrTactic.retention}</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="bg-slate-900 text-slate-300 border border-slate-800 px-1.5 py-0.5 rounded font-mono select-none h-fit shrink-0">4.變現</span>
                            <p className="text-slate-400 leading-relaxed">{strategyResult.aarrrTactic.revenue}</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* TAB 5: Cases Sandbox */}
          {activeTab === "cases" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <div>
                <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-400" /> 行銷戰棋案例沙盒 (與 AI 教授互動評級)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  挑選真實商業或數位課堂上的棘手行銷死局。請在作答區大膽獻策，寫出您的應對思維與預算配比。
                  AI 教授將會依照可行性、ROAS 掌握、SEO 長尾詞合理度等進行權威審閱，為您評估打分與頒發專屬成就勳章！
                </p>
              </div>

              {/* Case Picker Tab Buttons */}
              <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
                {SCENARIO_CASES.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSelectedCaseIdx(idx);
                      setStudentApproach("");
                      setCaseEvaluation(null);
                      setCaseError(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                      selectedCaseIdx === idx
                        ? "bg-indigo-600/10 text-indigo-300 border border-indigo-500/30"
                        : "bg-slate-900 border border-slate-850 text-slate-400 hover:text-slate-300"
                    }`}
                  >
                    案例 {idx + 1}：{item.title}
                  </button>
                ))}
              </div>

              {/* Challenge Body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Selected Case Description & Input */}
                <div className="space-y-4">
                  <div className="bg-slate-950/40 border border-slate-800/80 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] bg-indigo-500/10 text-indigo-300 px-2 py-0.5 rounded font-mono select-none">
                        #{SCENARIO_CASES[selectedCaseIdx].tag}
                      </span>
                      <span className="text-[10px] text-amber-400 font-semibold">
                        難度: {SCENARIO_CASES[selectedCaseIdx].difficulty}
                      </span>
                    </div>
                    <p className="text-slate-100 text-xs leading-relaxed font-medium whitespace-pre-wrap">
                      {SCENARIO_CASES[selectedCaseIdx].problem}
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                      您的應對方案 (作答撰寫區) - Your Marketing Solution
                    </label>
                    <textarea 
                      rows={7}
                      value={studentApproach} 
                      onChange={(e) => setStudentApproach(e.target.value)}
                      placeholder="例：我會將月預算進行 7:3 拆分。70% (21,000元) 分配在「效能行銷」上，專攻 Facebook Advantage+ 智能多焦代投，搭配 50% 首購免運以達成首月轉換，降低 CAC 獲客負擔，迅速收回資金。其餘 30% 做為 Inbound 的 Owned content 文章長尾詞架構，降低未來付費 CPC CPC..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg p-3 text-xs text-slate-100 outline-none resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    onClick={handleEvaluateCase}
                    disabled={caseLoading}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-semibold text-xs py-3 rounded-xl transition-all shadow-lg shadow-indigo-600/10 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {caseLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> AI 教授正在細讀批閱，請靜候 6-8 秒...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> 送交 AI 教授研判與評等 (最高可得 +150 EXP)
                      </>
                    )}
                  </button>
                </div>

                {/* Grade Evaluation Output */}
                <div className="bg-slate-950 border border-slate-805 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[350px]">
                  
                  {caseLoading && (
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center z-10 space-y-3">
                      <div className="p-3 bg-amber-500/10 text-amber-400 rounded-full animate-bounce">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-semibold text-slate-200">正在審查您的 ROI、漏斗深度與邏輯流暢度</h4>
                      <p className="text-[11px] text-slate-400 max-w-xs italic leading-relaxed">
                        「好策略如同精密的工程圖，除了追求創意外，底層財務控制與受眾黏度才是過關關鍵。」
                      </p>
                    </div>
                  )}

                  {!caseLoading && !caseEvaluation && !caseError && (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <Trophy className="w-8 h-8 text-slate-700 mb-3" />
                      <h3 className="text-xs font-semibold text-slate-400">尚未提交評測</h3>
                      <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                        完成您的作答解法並點選提交。AI 將依據實務邏輯，給您大學教授等級的客觀量化回饋與優化切入點。
                      </p>
                    </div>
                  )}

                  {caseError && (
                    <div className="bg-rose-950/20 border border-rose-500/30 p-4 rounded-lg text-rose-300 text-xs">
                      <p className="font-semibold">⚠️ 遭遇瓶頸</p>
                      <p className="mt-1 opacity-80">{caseError}</p>
                    </div>
                  )}

                  {caseEvaluation && (
                    <div className="space-y-4">
                      
                      {/* Grade Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div>
                          <div className="text-[10px] text-slate-500 uppercase font-semibold">教授總體評級 (Grade)</div>
                          <div className="text-2xl font-black text-slate-100 mt-0.5 tracking-tight">
                            <span className={caseEvaluation.score >= 80 ? "text-emerald-400" : caseEvaluation.score >= 60 ? "text-amber-400" : "text-rose-400"}>
                              {caseEvaluation.score}
                            </span>
                            <span className="text-xs text-slate-500 font-normal"> / 100 分</span>
                          </div>
                        </div>

                        {/* Badge awarded */}
                        <div className="bg-amber-500/10 text-amber-400 border border-amber-500/15 text-[10px] px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                          <Trophy className="w-3.5 h-3.5" /> 榮譽頭銜：{caseEvaluation.qualityBadge}
                        </div>
                      </div>

                      {/* Prof Feedback detail */}
                      <div className="space-y-3 text-xs leading-relaxed">
                        <div>
                          <h5 className="font-semibold text-slate-300 flex items-center gap-1.5 text-[11px]">
                            <span className="px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px]">評語摘要</span>
                          </h5>
                          <p className="text-slate-400 text-[11px] mt-1.5 bg-slate-900 p-3 rounded border border-slate-850">
                            "{caseEvaluation.feedbackText}"
                          </p>
                        </div>

                        {/* Deficiencies aspect */}
                        <div className="pt-2">
                          <h5 className="font-semibold text-slate-300 flex items-center gap-1.5 text-[11px] mb-2 text-rose-400">
                            🚨 還可以更深入優化的維度（缺失面）：
                          </h5>
                          <ul className="space-y-2">
                            {caseEvaluation.missingAspects.map((miss, idx) => (
                              <li key={idx} className="text-[11px] text-slate-400 flex items-start gap-1.5 bg-slate-900/60 p-2.5 rounded border border-slate-850">
                                <span className="text-rose-400 shrink-0 select-none">❌</span>
                                <span>{miss}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Score level visual points */}
                      <div className="border-t border-slate-800 pt-3 mt-4 flex items-center justify-between text-[11px] text-slate-500">
                        <span>合格線為 60 分</span>
                        <span className="text-amber-400 font-medium">已成功獲取 EXP 學分 +{Math.round(caseEvaluation.score * 1.5)}</span>
                      </div>

                    </div>
                  )}

                </div>

              </div>

            </div>
          )}

          {/* TAB 6: Custom Topic Quiz Generator */}
          {activeTab === "custom-quiz" && (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-400" /> AI 專題智能自訂出題機
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    想要自主訓練偏門、冷門或最新的數位行銷知識？輸入任何特定的主題（例如「網紅營收分潤 CPL 轉換」、「GA4 自訂漏斗階段」等），讓 Gemini 即時針對該題材生成全新 3 題單選模擬考，附贈詳盡考點解析！
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm("確定要重設此分頁的所有狀態與作答紀錄嗎？（這將會清除您當前生成的題目、選擇與翻卡狀態）")) {
                      handleResetAllQuizStates();
                    }
                  }}
                  className="bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-300 text-[10px] font-bold px-3 py-2 rounded-lg transition-all border border-slate-700/80 cursor-pointer shrink-0 inline-flex items-center gap-1.5 self-start"
                >
                  🔄 重設所有狀態 (Reset All)
                </button>
              </div>

              <div className="space-y-4">
                
                {/* Topic Input Bar */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 flex flex-col gap-2">
                    <input 
                      type="text"
                      value={customTopic}
                      onChange={(e) => setCustomTopic(e.target.value)}
                      placeholder="例如：Meta Advantage+ 購物廣告或 AARRR 傳播機制優化"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-xl p-3 text-xs text-slate-100 outline-none"
                    />

                    {/* Difficulty Selection Segmented Control */}
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">選擇挑戰難度 (Difficulty):</span>
                      <div className="flex bg-slate-950 p-1 rounded-lg border border-slate-850">
                        {(["Easy", "Medium", "Hard"] as const).map((level) => {
                          const isActive = quizDifficulty === level;
                          let activeStyle = "";
                          if (isActive) {
                            if (level === "Easy") activeStyle = "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20";
                            else if (level === "Medium") activeStyle = "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20";
                            else activeStyle = "bg-rose-500/15 text-rose-400 border border-rose-500/20";
                          } else {
                            activeStyle = "text-slate-500 hover:text-slate-300 border border-transparent";
                          }
                          return (
                            <button
                              key={level}
                              type="button"
                              onClick={() => setQuizDifficulty(level)}
                              className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer ${activeStyle}`}
                            >
                              {level === "Easy" && "🌱 易 (Easy)"}
                              {level === "Medium" && "⚡ 中 (Medium)"}
                              {level === "Hard" && "🔥 難 (Hard)"}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleGenerateCustomQuiz}
                    disabled={quizLoading}
                    className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white font-semibold text-xs px-6 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shrink-0 sm:self-start h-[46px]"
                  >
                    {quizLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" /> AI 出題中，預計 4 秒...
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" /> 產生 3 題專屬卷
                      </>
                    )}
                  </button>
                </div>

                {/* Grid layout for questions */}
                {quizLoading && (
                  <div className="bg-slate-950/40 p-12 border border-slate-800/80 rounded-xl text-center space-y-3">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full w-fit mx-auto animate-pulse">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <h3 className="text-xs font-semibold text-slate-200">正在組織客製數位考點與選項</h3>
                    <p className="text-[11px] text-slate-500 max-w-sm mx-auto italic leading-relaxed">
                      「命題引擎正在細讀官方指引，確保出題思路與大綱精準契合...」
                    </p>
                  </div>
                )}

                {!quizLoading && generatedQuestions.length > 0 && (
                  <div className="space-y-6">
                    {/* RENDERING MODE: TEST MODE */}
                    {quizMode === "test" ? (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                          {generatedQuestions.map((q, qIdx) => {
                            const userAnswer = quizAnswers[q.id];
                            const isCorrect = userAnswer === q.correctIndex;
                            
                            return (
                              <div 
                                key={q.id} 
                                className={`p-5 rounded-xl border flex flex-col justify-between h-full min-h-[440px] transition-all duration-300 ${
                                  quizSubmitted 
                                    ? isCorrect 
                                      ? "border-emerald-500/20 bg-emerald-950/5" 
                                      : "border-rose-500/20 bg-rose-950/5"
                                    : "border-slate-800 bg-slate-950/20"
                                }`}
                              >
                                <div className="flex gap-3 h-full flex-col justify-between">
                                  <div>
                                    <div className="flex items-center gap-1.5 mb-2.5">
                                      <span className="w-5 h-5 rounded-full bg-slate-800 justify-center items-center flex font-mono text-[10px] text-slate-400 shrink-0">
                                        {qIdx + 1}
                                      </span>
                                      <span className="text-[9px] text-slate-500 uppercase font-mono tracking-wider">Question {qIdx + 1}</span>
                                    </div>
                                    <h4 className="text-xs font-semibold text-slate-100 leading-relaxed min-h-[44px]">{q.questionText}</h4>
                                    
                                    <div className="grid grid-cols-1 gap-2 text-xs mt-3.5">
                                      {q.options.map((opt, oIdx) => {
                                        const isSelected = userAnswer === oIdx;
                                        const isRightOpt = q.correctIndex === oIdx;
                                        let buttonStyle = "border-slate-800 text-slate-400 hover:border-slate-700 bg-slate-900/40";
                                        
                                        if (isSelected) {
                                          buttonStyle = "border-indigo-600 bg-indigo-500/5 text-indigo-300";
                                        }
                                        
                                        if (quizSubmitted) {
                                          if (isRightOpt) {
                                            buttonStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                                          } else if (isSelected) {
                                            buttonStyle = "border-rose-500 bg-rose-500/10 text-rose-300";
                                          } else {
                                            buttonStyle = "border-slate-850 text-slate-650 opacity-40 cursor-not-allowed";
                                          }
                                        }

                                        return (
                                          <button
                                            key={oIdx}
                                            disabled={quizSubmitted}
                                            onClick={() => handleSelectQuizAnswer(q.id, oIdx)}
                                            className={`text-left p-2.5 rounded-lg border text-[11px] leading-snug transition-all cursor-pointer ${buttonStyle}`}
                                          >
                                            {opt}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {quizSubmitted && (
                                    <div className={`p-3 rounded-lg text-[10px] leading-relaxed mt-4 ${isCorrect ? "bg-emerald-950/15 text-emerald-400" : "bg-rose-950/15 text-rose-400"}`}>
                                      <span className="font-semibold">{isCorrect ? "回答正確！" : "錯誤剖析："}</span>
                                      <span className="block max-h-[120px] overflow-y-auto pr-1 leading-normal">{q.explanation}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {!quizSubmitted && (
                          <div className="flex justify-end pt-2">
                            <button
                              onClick={handleSubmitCustomQuiz}
                              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
                            >
                              送出專題卷交卷
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* RENDERING MODE: FLASHCARD MODE */
                      <div className="space-y-6">
                        <div className="text-[11px] text-slate-500 flex items-center gap-1.5 bg-indigo-950/10 border border-indigo-900/40 p-3 rounded-xl">
                          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
                          <span>閃卡模式已全面升級為<strong>零像素版面抖動 (Zero-Shifts) 網格架構</strong>。考點、選項及詳解隨時在底盤完整渲染，並以半透明覆蓋遮罩防透光。點擊任何卡片即可精準淡入解鎖，免除高度跳動困擾！</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
                          {generatedQuestions.map((q, qIdx) => {
                            const isRevealed = !!revealedCards[q.id];
                            
                            return (
                              <div 
                                key={q.id} 
                                onClick={() => {
                                  if (!isRevealed) {
                                    setRevealedCards(prev => ({ ...prev, [q.id]: true }));
                                  }
                                }}
                                className={`p-5 rounded-xl border transition-all duration-300 select-none flex flex-col justify-between h-full min-h-[380px] relative group ${
                                  isRevealed 
                                    ? "border-indigo-500/40 bg-indigo-950/10 shadow-lg shadow-indigo-950/20" 
                                    : "border-slate-800 bg-slate-950/20 hover:border-indigo-500/40 hover:bg-indigo-950/5 cursor-pointer"
                                }`}
                              >
                                <div className="flex gap-3 h-full flex-col justify-between">
                                  <div>
                                    <div className="flex justify-between items-start gap-3 mb-3">
                                      <span className={`w-5 h-5 rounded-full justify-center items-center flex font-mono text-[10px] shrink-0 transition-colors ${
                                        isRevealed ? "bg-indigo-600 text-white" : "bg-slate-850 text-slate-500"
                                      }`}>
                                        {qIdx + 1}
                                      </span>
                                      <span className={`text-[9px] px-2 py-0.5 rounded font-bold shrink-0 transition-all ${
                                        isRevealed ? "bg-indigo-500/20 text-indigo-400" : "bg-slate-800 text-slate-500 animate-pulse"
                                      }`}>
                                        {isRevealed ? "已解鎖 Revealed" : "未解鎖 Hidden"}
                                      </span>
                                    </div>
                                    
                                    <h4 className="text-xs font-semibold text-slate-100 leading-relaxed line-clamp-4 min-h-[48px] mb-2">{q.questionText}</h4>
                                  </div>

                                  {/* RELATIVE HEIGHT STABILIZER CONTAINER */}
                                  <div className="relative mt-2 flex-1 flex flex-col justify-end min-h-[220px]">
                                    {/* The Options & Explanation Area - Under the overlay cover, always layout-rendered to hold exact dimensions */}
                                    <div className={`space-y-3.5 transition-all duration-300 w-full ${!isRevealed ? "blur-[5px] opacity-10 select-none pointer-events-none filter" : "opacity-100"}`}>
                                      {/* Options */}
                                      <div className="grid grid-cols-1 gap-2 text-xs">
                                        {q.options.map((opt, oIdx) => {
                                          const isRightOpt = q.correctIndex === oIdx;
                                          return (
                                            <div
                                              key={oIdx}
                                              className={`p-2.5 rounded-lg border text-[11px] leading-snug transition-all ${
                                                isRightOpt 
                                                  ? "border-emerald-500 bg-emerald-500/10 text-emerald-300 font-semibold"
                                                  : "border-slate-850 bg-slate-900/10 text-slate-550 opacity-60"
                                              }`}
                                            >
                                              <span className="mr-1.5">{isRightOpt ? "✅" : "◦"}</span>
                                              {opt}
                                            </div>
                                          );
                                        })}
                                      </div>

                                      {/* Explanation */}
                                      <div className="p-2.5 bg-emerald-950/15 text-emerald-400 rounded-lg text-[10px] leading-relaxed border border-emerald-950/20">
                                        <span className="font-semibold flex items-center gap-1 mb-1">
                                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                          考點解析 | Google 官方指引核心：
                                        </span>
                                        <span className="block max-h-[140px] overflow-y-auto pr-1 leading-normal">{q.explanation}</span>
                                      </div>

                                      <div className="flex justify-end pt-1">
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setRevealedCards(prev => ({ ...prev, [q.id]: false }));
                                          }}
                                          className="text-[9px] text-slate-500 hover:text-slate-350 underline cursor-pointer"
                                        >
                                          收回蓋牌
                                        </button>
                                      </div>
                                    </div>

                                    {/* INTERACTIVE TAP-TO-REVEAL GLOWING OVERLAY COVER */}
                                    {!isRevealed && (
                                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/30 border border-dashed border-slate-800/80 rounded-xl px-4 py-8 text-center cursor-pointer group-hover:bg-slate-950/50 group-hover:border-indigo-500/20 transition-all duration-300">
                                        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-full mb-3 group-hover:scale-105 transition-transform">
                                          <Brain className="w-5 h-5 animate-pulse" />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-300 group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                                          💡 點擊卡片任何處翻牌
                                        </span>
                                        <span className="text-[9px] text-slate-650 mt-1 max-w-[190px] leading-normal">
                                          解鎖標準答案、正確選項高亮及 AI 面試考點解析
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex justify-end pt-2">
                          <button
                            type="button"
                            onClick={() => setRevealedCards({})}
                            className="bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-200 font-semibold text-xs px-6 py-2.5 rounded-xl cursor-pointer transition-all border border-slate-700 flex items-center gap-1.5"
                          >
                            🔄 重置所有閃卡卡片 (Reset All Cards)
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* Marketing Analytics Heatmap Section */}
              <div className="pt-4 border-t border-slate-800">
                <QuizAnalyticsHeatmap />
              </div>

              {/* Global Leaderboard Section */}
              <div className="pt-4 border-t border-slate-800">
                <GlobalLeaderboard currentScore={quizScore} currentTopic={`${customTopic} [${quizDifficulty === 'Easy' ? 'Easy🌱' : quizDifficulty === 'Medium' ? 'Medium⚡' : 'Hard🔥'}]`} />
              </div>

            </div>
          )}

        </section>

      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-slate-850 bg-slate-950 py-5 mt-auto text-center px-4">
        <p className="text-[10px] text-slate-500 leading-relaxed max-w-xl mx-auto">
          本系統專為數碼行銷暨人工智慧學生實踐考照所設計。教材對齊 Google Analytics 與 Meta 官方白皮書與常例方針，
          沙盒使用 Gemini 3.5 API 連線支援，學生方案成果之資料皆保留於裝置之 localStorage 緩存中。
        </p>
      </footer>

      {(activeTab === "lessons" || activeTab === "certifications") && (
        <GroundedSearchWidget />
      )}

    </div>
  );
}
