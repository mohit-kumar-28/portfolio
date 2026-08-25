import React, { useState } from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { portfolioData } from '../../data/portfolio';
import {
  Code2,
  Server,
  Database,
  Sparkles,
  Layout,
  BarChart3,
  Wrench,
} from 'lucide-react';

const iconLookup: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Server,
  Database,
  Sparkles,
  Layout,
  BarChart3,
  Wrench,
};

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  const totalSkillsCount = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Curated Tech Stack"
          title="Engineered with Core"
          titleAccent="Languages &amp; Frameworks"
          subtitle="A focused, production-proven toolkit spanning software engineering, scalable backend systems, vector databases, machine learning, and data analytics."
        />

        {/* Category Filter Pills (Colored active button, transparent borderless inactive) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer border-none ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
            }`}
          >
            All Skills ({totalSkillsCount})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors cursor-pointer border-none ${
                selectedCategory === cat.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-slate-900/5'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconLookup[category.iconName] || Code2;
            return (
              <div
                key={category.id}
                className="editorial-card p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-slate-900/5 text-emerald-800">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-slate-900">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-500 font-normal">
                        {category.skills.length} core technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/5 text-slate-800"
                      >
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
