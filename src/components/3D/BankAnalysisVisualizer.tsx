import React, { useState, useEffect } from 'react';

export const BankAnalysisVisualizer: React.FC = () => {
  const [metricCount, setMetricCount] = useState(48200);

  useEffect(() => {
    const timer = setInterval(() => {
      setMetricCount((prev) => (prev >= 50000 ? 50000 : prev + 300));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[260px] bg-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-xs text-slate-800 font-semibold">
            FINANCIAL TRANSACTION PIPELINE
          </span>
        </div>
        <span className="font-mono text-[10px] text-white bg-emerald-700 px-2.5 py-0.5 rounded-full font-semibold shadow-xs">
          50,000+ Records
        </span>
      </div>

      {/* 3 Metric Mini Cards */}
      <div className="grid grid-cols-3 gap-2 my-auto">
        <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
          <div className="text-sm sm:text-base font-bold text-slate-900 font-mono">
            {metricCount.toLocaleString()}+
          </div>
          <div className="text-[10px] text-slate-500 font-mono mt-0.5">Transactions</div>
        </div>
        <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200 text-center">
          <div className="text-sm sm:text-base font-bold text-amber-800 font-mono">
            10+ KPIs
          </div>
          <div className="text-[10px] text-amber-700 font-mono mt-0.5">Executive Dash</div>
        </div>
        <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-200 text-center">
          <div className="text-sm sm:text-base font-bold text-rose-800 font-mono">
            Anomaly Flags
          </div>
          <div className="text-[10px] text-rose-700 font-mono mt-0.5">Fraud Detection</div>
        </div>
      </div>

      {/* SQL & Modeling Bar */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 flex items-center justify-between">
        <span className="truncate text-slate-700">
          SQL: Star Schema &amp; Window Functions
        </span>
        <span className="text-[10px] text-emerald-700 font-semibold ml-2 shrink-0">
          Indexed ✓
        </span>
      </div>
    </div>
  );
};
