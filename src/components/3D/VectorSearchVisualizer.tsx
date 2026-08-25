import React, { useState, useEffect } from 'react';
import { FileText, Cpu, Database, Search, Sparkles } from 'lucide-react';

export const VectorSearchVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipeline = [
    { label: 'Documents', icon: FileText, desc: 'Enterprise PDFs & docs chunked' },
    { label: 'Embeddings', icon: Cpu, desc: 'Sentence Transformers vectorization' },
    { label: 'pgvector DB', icon: Database, desc: 'PostgreSQL HNSW indexed vectors' },
    { label: 'Retrieval', icon: Search, desc: 'Cosine similarity (200–500ms)' },
    { label: 'LLM Response', icon: Sparkles, desc: 'Context-grounded answer + citations' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipeline.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [pipeline.length]);

  return (
    <div className="w-full h-full min-h-[260px] bg-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      {/* Top status bar */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-xs text-slate-800 font-semibold">
            RAG ARCHITECTURE PIPELINE
          </span>
        </div>
        <span className="font-mono text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
          Latency: 200–500ms
        </span>
      </div>

      {/* Visual Pipeline Flow */}
      <div className="py-4 grid grid-cols-5 gap-1 sm:gap-2 items-center">
        {pipeline.map((step, idx) => {
          const Icon = step.icon;
          const isCurrent = idx === activeStep;
          const isPassed = idx <= activeStep;

          return (
            <div key={idx} className="flex flex-col items-center text-center">
              <div
                className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors ${
                  isCurrent
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : isPassed
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-700 mt-2 line-clamp-1">
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Active step explanation log */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2 truncate">
          <span className="text-xs font-mono text-emerald-800 font-bold shrink-0">
            Step 0{activeStep + 1}:
          </span>
          <span className="text-xs text-slate-700 font-normal truncate">
            {pipeline[activeStep].desc}
          </span>
        </div>
        <span className="text-[10px] font-mono font-semibold text-emerald-800 hidden sm:inline-block shrink-0 ml-2">
          ~60% faster retrieval
        </span>
      </div>
    </div>
  );
};
