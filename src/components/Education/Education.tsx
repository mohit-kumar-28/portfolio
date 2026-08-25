import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { portfolioData } from '../../data/portfolio';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, School, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  const stageIcons = {
    'Class 10': School,
    'Class 12': School,
    'Graduation': GraduationCap,
  };

  return (
    <section id="education" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Pathway"
          title="Complete Education"
          titleAccent="Journey &amp; Credentials"
          subtitle="A consistent track record of academic distinction and rigorous computer science engineering training from foundational schooling to B.Tech at BIT Mesra."
        />

        {/* Visual Timeline Conduit: 10th → 12th → B.Tech */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="editorial-card p-4 sm:p-5 flex items-center justify-between bg-white/95">
            <div className="flex items-center gap-2 text-center">
              <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 font-mono font-bold text-xs flex items-center justify-center border border-slate-200">
                10th
              </span>
              <span className="text-xs font-mono font-semibold text-slate-700 hidden sm:inline-block">
                Surendranath (92.33%)
              </span>
            </div>

            <div className="flex-1 mx-3 h-0.5 bg-slate-200 rounded-full" />

            <div className="flex items-center gap-2 text-center">
              <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 font-mono font-bold text-xs flex items-center justify-center border border-slate-200">
                12th
              </span>
              <span className="text-xs font-mono font-semibold text-slate-700 hidden sm:inline-block">
                DAV Bariatu (81.00%)
              </span>
            </div>

            <div className="flex-1 mx-3 h-0.5 bg-slate-400 rounded-full" />

            <div className="flex items-center gap-2 text-center">
              <span className="w-8 h-8 rounded-full bg-slate-900 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                B.Tech
              </span>
              <span className="text-xs font-mono font-bold text-slate-900 hidden sm:inline-block">
                BIT Mesra (2027)
              </span>
            </div>
          </div>
        </div>

        {/* Education Stage Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item) => {
            const Icon = stageIcons[item.stage] || GraduationCap;
            const isBTech = item.isProminent;

            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 space-y-5 transition-all bg-white/95 ${
                  isBTech
                    ? 'editorial-card-prominent'
                    : 'editorial-card'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-800">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {item.stage}
                        </span>
                        {isBTech && (
                          <span className="text-[10px] font-mono font-semibold text-slate-800 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-slate-500" />
                            Primary Degree
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">
                        {item.institution}
                      </h3>
                      <p className="text-sm font-mono text-slate-700 font-semibold mt-0.5">
                        {item.degreeOrExam} •{' '}
                        <span className="text-slate-900 font-bold">{item.scoreOrField}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end text-xs font-mono text-slate-500 gap-1">
                    <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-slate-800 uppercase tracking-wider">
                      Academic Highlights &amp; Achievements
                    </h4>
                    <div className="space-y-1.5">
                      {item.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Coursework Badges (For B.Tech) */}
                {item.relevantCoursework && (
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <h4 className="text-xs font-mono font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      Key Computer Science Coursework
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {item.relevantCoursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-800 border border-slate-200"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
