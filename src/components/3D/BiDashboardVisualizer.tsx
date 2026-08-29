import React, { useState, useEffect } from 'react';

export const BiDashboardVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'Raw Dataset', type: 'CSV / PDF tables parsed' },
    { label: 'AI Query', type: 'Natural Language prompt' },
    { label: 'SQL Generation', type: 'LangChain verified syntax' },
    { label: 'Analysis Engine', type: 'Aggregation & statistical KPIs' },
    { label: 'Dynamic Dashboard', type: 'Streamlit visual charts' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="w-full h-full min-h-[260px] bg-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
          <span className="font-mono text-xs text-slate-800 font-semibold">
            NATURAL LANGUAGE TO SQL &amp; KPIS
          </span>
        </div>
        <span className="font-mono text-[10px] text-white bg-emerald-700 px-2.5 py-0.5 rounded-full font-semibold shadow-xs">
          60–70% Time Saved
        </span>
      </div>

      {/* Interactive Flow */}
      <div className="grid grid-cols-5 gap-1.5 sm:gap-2 my-auto">
        {steps.map((step, idx) => {
          const isCurrent = idx === activeStep;
          const isPassed = idx <= activeStep;
          return (
            <div
              key={idx}
              className={`p-2 sm:p-2.5 rounded-xl border text-center transition-colors ${
                isCurrent
                  ? 'bg-sky-50 border-sky-300 text-sky-900 shadow-xs'
                  : isPassed
                  ? 'bg-emerald-700 border-emerald-800 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-500'
              }`}
            >
              <div className={`text-[10px] font-mono mb-0.5 ${isPassed ? 'text-emerald-200' : 'text-slate-400'}`}>
                0{idx + 1}
              </div>
              <div className="text-[11px] font-display font-medium line-clamp-1">
                {step.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Query Simulation */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 flex items-center justify-between">
        <span className="truncate text-slate-700 font-medium">
          Prompt: "Show top revenue trends by region with YoY growth"
        </span>
        <span className="text-[10px] text-emerald-700 font-semibold ml-2 shrink-0">
          Generated SQL ✓
        </span>
      </div>
    </div>
  );
};
