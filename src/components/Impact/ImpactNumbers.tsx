import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { portfolioData } from '../../data/portfolio';

export const ImpactNumbers: React.FC = () => {
  const { impactMetrics } = portfolioData;

  return (
    <section id="impact" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Benchmarks"
          title="Engineering"
          titleAccent="Impact &amp; Scale"
          subtitle="Measurable performance gains, data processing throughput, and algorithmic efficiency benchmarks directly backed by my projects and research."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactMetrics.map((item, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 flex flex-col justify-between group bg-white/95"
            >
              <div>
                {/* Category tag in clean neutral styling (no green background) */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 font-normal">
                    {item.sourceProject}
                  </span>
                </div>

                {/* Number Value */}
                <div className="text-3xl sm:text-4xl font-display font-bold text-slate-900">
                  {item.value}
                  {item.suffix && (
                    <span className="text-xl font-mono text-slate-600 ml-1 font-semibold">{item.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-800 font-display">
                  {item.label}
                </h3>

                {/* Sublabel */}
                <p className="mt-1 text-xs text-slate-500 leading-relaxed font-normal">
                  {item.sublabel}
                </p>
              </div>

              {/* Accent footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                Verified Project Metric
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
