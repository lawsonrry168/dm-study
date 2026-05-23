/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CertificationTrack } from "../types";
import { CERTIFICATION_TRACKS } from "../data";
import { 
  Award, 
  HelpCircle, 
  Clock, 
  BookOpen, 
  Check, 
  X, 
  Trophy, 
  RotateCcw,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface CertificationsTabProps {
  certificationScores: Record<string, number>;
  onPassCertification: (trackId: string, score: number, points: number) => void;
}

export default function CertificationsTab({ certificationScores, onPassCertification }: CertificationsTabProps) {
  const [activeTrack, setActiveTrack] = useState<CertificationTrack | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [testSubmitted, setTestSubmitted] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number | null>(null);

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (testSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleStartExam = (track: CertificationTrack) => {
    setActiveTrack(track);
    setSelectedAnswers({});
    setTestSubmitted(false);
    setCurrentScore(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmitExam = () => {
    if (!activeTrack) return;
    
    // Check if all questions are answered
    const unanswered = activeTrack.questions.filter(q => selectedAnswers[q.id] === undefined);
    if (unanswered.length > 0) {
      alert(`您還有 ${unanswered.length} 題尚未回答，請全部完成再提交試卷！`);
      return;
    }

    // Evaluate
    let correctCount = 0;
    activeTrack.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });

    const finalScore = Math.round((correctCount / activeTrack.questions.length) * 100);
    setCurrentScore(finalScore);
    setTestSubmitted(true);

    // If passed (score >= 75%)
    if (finalScore >= 75) {
      onPassCertification(activeTrack.id, finalScore, 250); // Pass award 250 PTS
    }
  };

  if (activeTrack) {
    const passed = currentScore !== null && currentScore >= 75;
    
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl max-w-4xl mx-auto">
        {/* Exam Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                activeTrack.provider === "Google" 
                  ? "bg-sky-500/10 text-sky-400 border border-sky-500/15" 
                  : activeTrack.provider === "Meta"
                  ? "bg-blue-600/10 text-blue-400 border border-blue-600/15"
                  : activeTrack.provider === "PMI"
                  ? "bg-purple-500/10 text-purple-400 border border-purple-500/15"
                  : activeTrack.provider === "WordPress"
                  ? "bg-orange-500/10 text-orange-400 border border-orange-500/15"
                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
              }`}>
                {activeTrack.provider} 認證
              </span>
              <span className="text-xs text-slate-500">代碼: {activeTrack.code}</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight mt-1.5">{activeTrack.title}</h1>
          </div>
          
          <button
            onClick={() => setActiveTrack(null)}
            className="text-xs text-slate-400 hover:text-white border border-slate-700 bg-slate-800 px-3 py-1.5 rounded-lg transition-colors"
          >
            退出模擬考
          </button>
        </div>

        {/* Syllabus / Content Checklist */}
        {!testSubmitted && (
          <div className="bg-slate-950/40 p-4 border border-slate-800/80 rounded-xl mb-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> 本張考卷考核綱要
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeTrack.syllabus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Score Card Callout */}
        {testSubmitted && currentScore !== null && (
          <div className={`p-6 rounded-xl border mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 ${
            passed 
              ? "bg-emerald-950/15 border-emerald-500/30 text-emerald-300"
              : "bg-rose-950/15 border-rose-500/30 text-rose-300"
          }`}>
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className={`p-3.5 rounded-full ${passed ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                {passed ? <Trophy className="w-8 h-8" /> : <X className="w-8 h-8" />}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">
                  {passed ? "🎉 恭喜！您已通過本次認證模擬！" : "❌ 遺憾未過關，還需繼續沉澱！"}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  得分率：<span className={`font-semibold ${passed ? "text-emerald-400" : "text-rose-400"}`}>{currentScore}%</span> (合格線: 75% 答對3題)
                </p>
                {passed && (
                  <p className="text-xs text-amber-400 mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" /> 已成功積累學分 <b>+250 EXP</b>
                  </p>
                )}
              </div>
            </div>
            
            <button
              onClick={() => {
                setSelectedAnswers({});
                setTestSubmitted(false);
                setCurrentScore(null);
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition-colors text-xs font-semibold rounded-lg flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> 重新挑戰
            </button>
          </div>
        )}

        {/* Questions List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {activeTrack.questions.map((q, qIdx) => {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.correctIndex;
            
            return (
              <div 
                key={q.id} 
                className={`p-5 rounded-xl border transition-all flex flex-col justify-between h-full min-h-[380px] ${
                  testSubmitted 
                    ? isCorrect 
                      ? "border-emerald-500/20 bg-emerald-950/5" 
                      : "border-rose-500/20 bg-rose-950/5"
                    : "border-slate-800/80 bg-slate-950/20 hover:border-slate-700"
                }`}
              >
                <div className="flex flex-col justify-between h-full gap-4 w-full">
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {qIdx + 1}
                      </span>
                      <h3 className="text-xs font-semibold text-slate-100 leading-relaxed whitespace-pre-wrap min-h-[44px]">
                        {q.questionText}
                      </h3>
                    </div>
                    
                    <div className="space-y-2.5">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = userAnswer === oIdx;
                        const isAnswerRight = q.correctIndex === oIdx;
                        
                        let optStyle = "border-slate-800 hover:border-slate-700 text-slate-300";
                        if (isSelected) {
                          optStyle = "border-indigo-600 bg-indigo-500/5 text-indigo-300 font-medium";
                        }
                        
                        if (testSubmitted) {
                          if (isAnswerRight) {
                            optStyle = "border-emerald-500 bg-emerald-500/10 text-emerald-300";
                          } else if (isSelected) {
                            optStyle = "border-rose-500 bg-rose-500/10 text-rose-300";
                          } else {
                            optStyle = "border-slate-850 text-slate-500 cursor-not-allowed opacity-50";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={testSubmitted}
                            onClick={() => handleSelectAnswer(q.id, oIdx)}
                            className={`w-full text-left p-3.5 rounded-lg border text-[11px] transition-all flex items-center justify-between cursor-pointer ${optStyle}`}
                          >
                            <span className="pr-2">{opt}</span>
                            {testSubmitted && isAnswerRight && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
                            {testSubmitted && isSelected && !isAnswerRight && <X className="w-4 h-4 text-rose-400 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Explanation */}
                  {testSubmitted && (
                    <div className={`mt-2 p-3.5 rounded-lg text-[11px] leading-relaxed ${
                      isCorrect ? "bg-emerald-950/20 text-emerald-400" : "bg-rose-950/20 text-rose-400"
                    }`}>
                      <p className="font-semibold">{isCorrect ? "答對了！" : "解析指正："}</p>
                      <p className="text-slate-300 mt-1">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        {!testSubmitted && (
          <div className="mt-8 border-t border-slate-800 pt-6 flex justify-end">
            <button
              onClick={handleSubmitExam}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-600/15 cursor-pointer transition-colors flex items-center gap-1.5"
            >
              送出答案、交卷評分 <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="border border-slate-800 bg-slate-900/60 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
        <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-base font-semibold text-slate-100">大廠行銷認證加速方案</h2>
          <p className="text-slate-400 text-xs mt-0.5">
            我們將官方考核知識高度凝縮。通過一場 75% 正確評估模擬，即可獲取對應證章、並提升學分以向講師解鎖更高大禮。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTIFICATION_TRACKS.map((track) => {
          const score = certificationScores[track.id];
          const hasPassed = score !== undefined && score >= 75;
          
          return (
            <div 
              key={track.id} 
              className={`bg-slate-900 border ${
                hasPassed ? "border-emerald-500/30" : "border-slate-800/85 hover:border-slate-700"
              } rounded-2xl p-5 flex flex-col justify-between transition-all`}
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <span className={`px-2 py-0.5 text-[10px] rounded font-semibold tracking-wider ${
                    track.provider === "Google" 
                      ? "bg-sky-500/10 text-sky-400 border border-sky-500/10" 
                      : track.provider === "Meta"
                      ? "bg-blue-600/10 text-blue-400 border border-blue-600/10"
                      : track.provider === "PMI"
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/10"
                      : track.provider === "WordPress"
                      ? "bg-orange-500/10 text-orange-400 border border-orange-500/15"
                      : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/10"
                  }`}>
                    {track.provider} AUTHORIZED
                  </span>

                  {hasPassed ? (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/15 border border-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      已授證 <Trophy className="w-3 h-3 text-amber-400" />
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">
                      尚未通關
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-100 tracking-tight mt-1 line-clamp-1">{track.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">{track.shortDescription}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {track.syllabus.slice(0, 2).map((s, sIdx) => (
                    <span key={sIdx} className="bg-slate-950 text-slate-400 px-2 py-0.5 rounded text-[10px] border border-slate-800/50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800/70 pt-4 mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {track.examDuration}
                  </span>
                  <span>•</span>
                  <span>{track.questionsCount} 題精選模擬</span>
                </div>

                <button
                  onClick={() => handleStartExam(track)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    hasPassed 
                      ? "bg-emerald-600 hover:bg-emerald-500 text-white" 
                      : "bg-indigo-600 hover:bg-indigo-500 text-white"
                  }`}
                >
                  {hasPassed ? "再次自測" : "考前模擬"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
