import React, { useState, useEffect } from 'react';
import { ArrowUpDown, ArrowLeftRight } from 'lucide-react';

export const TrafficLightVisualizer: React.FC = () => {
  const [activeSignal, setActiveSignal] = useState<'ns' | 'ew'>('ns');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSignal((prev) => (prev === 'ns' ? 'ew' : 'ns'));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[260px] bg-white p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span className="font-mono text-xs text-slate-800 font-semibold">
            ADAPTIVE SIGNAL SCHEDULER (GA &amp; PSO)
          </span>
        </div>
        <span className="font-mono text-[10px] text-white bg-emerald-700 px-2.5 py-0.5 rounded-full font-semibold shadow-xs">
          -25%+ Congestion
        </span>
      </div>

      {/* Intersection Diagram */}
      <div className="grid grid-cols-2 gap-3 my-auto">
        <div
          className={`p-3.5 rounded-xl border text-center transition-colors ${
            activeSignal === 'ns'
              ? 'bg-emerald-700 border-emerald-800 text-white shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-500'
          }`}
        >
          <div className="flex items-center justify-center gap-1 font-mono text-xs font-semibold mb-1">
            <ArrowUpDown className="w-4 h-4" /> North-South
          </div>
          <span className="text-xs font-mono font-bold">
            {activeSignal === 'ns' ? '🟢 GREEN (Priority Queue)' : '🔴 RED (Queued)'}
          </span>
        </div>

        <div
          className={`p-3.5 rounded-xl border text-center transition-colors ${
            activeSignal === 'ew'
              ? 'bg-emerald-700 border-emerald-800 text-white shadow-xs'
              : 'bg-slate-50 border-slate-200 text-slate-500'
          }`}
        >
          <div className="flex items-center justify-center gap-1 font-mono text-xs font-semibold mb-1">
            <ArrowLeftRight className="w-4 h-4" /> East-West
          </div>
          <span className="text-xs font-mono font-bold">
            {activeSignal === 'ew' ? '🟢 GREEN (Adaptive GA)' : '🔴 RED (Queued)'}
          </span>
        </div>
      </div>

      {/* Footer stat */}
      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 flex items-center justify-between">
        <span className="text-slate-700 font-medium">
          Managing 1,000+ Simulated Vehicles
        </span>
        <span className="text-[10px] text-emerald-800 font-semibold">
          Fitness Optimized ✓
        </span>
      </div>
    </div>
  );
};
