/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface SectionContent {
  heading: string;
  body: string;
}

export type LessonCategory = "Fundamentals" | "Frameworks" | "SEO" | "Metrics & KPIs" | "AI & Performance";

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  icon: string;
  category: LessonCategory;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  shortSummary: string;
  points: number;
  sections: SectionContent[];
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CertificationTrack {
  id: string;
  title: string;
  provider: "Google" | "Meta" | "PMI" | "SFC" | "WordPress";
  icon: string;
  code: string;
  examDuration: string;
  questionsCount: number;
  shortDescription: string;
  syllabus: string[];
  questions: QuizQuestion[];
}

export interface StudentProgress {
  completedLessons: string[];
  certificationScores: Record<string, number>; // track ID -> high score
  totalPoints: number;
  streak: number;
  unlockedAchievements: string[];
}

export interface SEOAuditResult {
  score: number;
  keywordDensity: string;
  titleCheck: string;
  descriptionCheck: string;
  contentReadability: string;
  bulletPoints: string[];
  improvedDraft: string;
}

export interface StrategyResult {
  personaName: string;
  personaRole: string;
  personaGoals: string[];
  personaPainPoints: string[];
  personaMediaHabits: string[];
  usp: string;
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  marketingMix4P4C: string;
  aarrrTactic: {
    acquisition: string;
    activation: string;
    retention: string;
    revenue: string;
  };
}

export interface CaseStudyEvaluation {
  score: number;
  qualityBadge: string;
  feedbackText: string;
  missingAspects: string[];
}
