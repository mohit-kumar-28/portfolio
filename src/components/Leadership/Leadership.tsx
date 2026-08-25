import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { portfolioData } from '../../data/portfolio';
import { Users, Bot, Calendar, CheckCircle2 } from 'lucide-react';

export const Leadership: React.FC = () => {
  const { leadership } = portfolioData;

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    'abhivyakti-society': Users,
    'robotics-society': Bot,
  };

  return (
    <section id="leadership" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Campus Leadership"
          title="Leadership &amp;"
          titleAccent="Student Initiatives"
          subtitle="Directing student society operations, coordinating college administration, and engineering autonomous robotics prototypes at BIT Mesra."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((item) => {
            const Icon = iconMap[item.id] || Users;
            return (
              <div
                key={item.id}
                className="editorial-card p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Role Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-emerald-800 uppercase tracking-wider font-semibold">
                          {item.type}
                        </span>
                        <h3 className="text-xl font-display font-bold text-slate-900">
                          {item.role}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-semibold text-slate-900 mb-2">
                    {item.organization}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills tags */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {item.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {s}
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
