import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { SafetyVisionVisualizer } from '../3D/SafetyVisionVisualizer';
import { portfolioData } from '../../data/portfolio';
import { Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work Experience"
          title="Industry"
          titleAccent="Experience &amp; Engineering"
          subtitle="Applying computer vision deep learning pipelines and real-time event analytics to mission-critical industrial shop floor safety environments."
        />

        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Role Details & Verified Highlights */}
              <div className="lg:col-span-6 space-y-6">
                <div className="editorial-card p-6 sm:p-8">
                  {/* Company & Role Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-mono text-emerald-800 font-semibold uppercase tracking-wider">
                        {exp.type}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                        {exp.company}
                      </h3>
                      <p className="text-sm font-mono text-emerald-700 font-semibold">
                        {exp.role}
                      </p>
                    </div>

                    <div className="flex flex-col items-end text-xs font-mono text-slate-500 gap-1">
                      <span className="flex items-center gap-1 text-emerald-800 font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 mt-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {/* Verified Responsibilities from CV */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="text-xs font-mono font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Key Responsibilities &amp; Deliverables
                    </h4>
                    <div className="space-y-2">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Live Safety Vision Visualizer */}
              <div className="lg:col-span-6">
                <SafetyVisionVisualizer />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
