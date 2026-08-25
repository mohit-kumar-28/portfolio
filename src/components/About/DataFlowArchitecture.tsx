import React, { useState, useEffect } from 'react';
import { Database, Cpu, Sparkles, Server, Layers } from 'lucide-react';

interface StageNode {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tech: string[];
  description: string;
  metric: string;
}

const stages: StageNode[] = [
  {
    id: 'data',
    title: 'RAW DATA',
    subtitle: 'Ingestion & Streams',
    icon: Layers,
    tech: ['CSV & PDFs', 'RTSP Video', '50K+ Records', 'Web Logs'],
    description: 'Heterogeneous data ingestion from transactional logs, files, and camera feeds.',
    metric: '50K+ Records',
  },
  {
    id: 'pipeline',
    title: 'PIPELINE',
    subtitle: 'Cleaning & Transformation',
    icon: Server,
    tech: ['FastAPI Async', 'Pandas & NumPy', 'Pydantic Models', 'SQLAlchemy'],
    description: 'Automated normalization, data cleaning, chunk tokenization, and schema validation.',
    metric: 'Async REST APIs',
  },
  {
    id: 'database',
    title: 'DATABASE',
    subtitle: 'Vector & Relational Storage',
    icon: Database,
    tech: ['PostgreSQL', 'pgvector', 'MySQL', 'MongoDB'],
    description: 'High-dimensional vector indexing (IVFFlat/HNSW) & normalized relational schemas.',
    metric: '200–500ms Queries',
  },
  {
    id: 'ai',
    title: 'AI / ML',
    subtitle: 'RAG, NLP & Heuristics',
    icon: Cpu,
    tech: ['Sentence Transformers', 'LangChain', 'ACO / PSO', 'YOLOv11'],
    description: 'Cosine similarity vector matching, LLM generation grounding, and metaheuristic pathfinding.',
    metric: '~60% Retrieval Boost',
  },
  {
    id: 'insights',
    title: 'INSIGHTS',
    subtitle: 'Actionable Intelligence',
    icon: Sparkles,
    tech: ['Interactive Dashboards', 'KPI Scorecards', 'Safety Violation Alerts', 'Route Optimization'],
    description: 'Delivering real-time intelligence, automated SQL dashboards, and instant safety alerts.',
    metric: '60–70% Time Saved',
  },
];

export const DataFlowArchitecture: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const current = stages[activeStage];

  return (
    <div className="editorial-card p-5 sm:p-7 relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-600" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800">
            Signature Data Flow Architecture
          </span>
        </div>
        <span className="text-[11px] font-mono text-emerald-900 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
          DATA → AI PIPELINE
        </span>
      </div>

      {/* Stage Steps Indicator Strip */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-6">
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-2 sm:p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all duration-150 cursor-pointer ${
                isActive
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-xs'
                  : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
              }`}
            >
              <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? 'text-emerald-700' : 'text-slate-600'}`} />
              <span className="text-[9px] sm:text-[11px] font-mono font-medium tracking-tight line-clamp-1">
                {stage.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Conduit Bar */}
      <div className="relative py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden mb-5">
        <div className="flex items-center justify-between relative z-10">
          {stages.map((s, idx) => {
            const isPassed = idx <= activeStage;
            const isCurrent = idx === activeStage;
            return (
              <React.Fragment key={s.id}>
                <div
                  className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-200 ${
                    isCurrent
                      ? 'bg-emerald-700 text-white shadow-xs scale-105'
                      : isPassed
                      ? 'bg-slate-800 text-white'
                      : 'bg-white text-slate-400 border border-slate-300'
                  }`}
                >
                  {idx + 1}
                </div>
                {idx < stages.length - 1 && (
                  <div className="flex-1 mx-1.5 h-1 bg-slate-200 rounded-full relative overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${
                        idx < activeStage
                          ? 'w-full bg-emerald-600'
                          : idx === activeStage
                          ? 'w-full bg-emerald-500'
                          : 'w-0'
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Stage Detail Card */}
      <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-display font-bold text-slate-900">
              {current.title}
            </span>
            <span className="text-xs font-mono text-slate-500">({current.subtitle})</span>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            {current.metric}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5 font-normal">
          {current.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {current.tech.map((t, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
