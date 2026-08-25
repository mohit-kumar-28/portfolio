import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { portfolioData } from '../../data/portfolio';
import { BrainCircuit, DatabaseZap, Server, LineChart } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BrainCircuit: BrainCircuit,
  DatabaseZap: DatabaseZap,
  ServerCrash: Server,
  LineChart: LineChart,
};

export const WhatIBuild: React.FC = () => {
  const { specializations } = portfolioData;

  return (
    <section id="specializations" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Specializations"
          title="What I"
          titleAccent="Build &amp; Architect"
          subtitle="Delivering production-grade architectures across applied machine learning, scalable backend infrastructure, vector databases, and high-performance algorithms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specializations.map((spec, idx) => {
            const Icon = iconMap[spec.iconName] || BrainCircuit;

            return (
              <div
                key={spec.id}
                className="editorial-card p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-700 font-semibold mt-1 mb-3.5">
                    {spec.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {spec.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {spec.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
