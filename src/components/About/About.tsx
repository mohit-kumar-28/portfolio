import React from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { DataFlowArchitecture } from './DataFlowArchitecture';
import { Code2, Database, BrainCircuit, Server, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const corePillars = [
    {
      title: 'Backend Engineering',
      desc: 'Production-ready FastAPI & Flask APIs with Pydantic validation, JWT tokens, and RBAC security.',
      icon: Server,
      tag: 'FastAPI / Python',
    },
    {
      title: 'Data & Vector Systems',
      desc: 'Relational data modeling in PostgreSQL alongside high-dimensional pgvector semantic indexing.',
      icon: Database,
      tag: 'pgvector / SQL',
    },
    {
      title: 'Generative AI & RAG',
      desc: 'Retrieval-Augmented Generation, Sentence Transformers, vector similarity matching, and grounded LLMs.',
      icon: BrainCircuit,
      tag: 'RAG / LLMs',
    },
    {
      title: 'Algorithms & Optimization',
      desc: 'Metaheuristic optimization (ACO, PSO, Genetic Algorithms) and dynamic graph pathfinding.',
      icon: Code2,
      tag: 'Metaheuristics',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Foundations"
          title="Architecting Systems from"
          titleAccent="Data to Intelligence"
          subtitle="Engineering robust software architectures with strong computer science principles at BIT Mesra, delivering scalable backends, vector databases, and heuristic optimization."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Clean Editorial Narrative & 4 Foundation Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">
                  Core Engineering Principles
                </h3>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                I build systems at the intersection of <strong className="text-slate-900 font-semibold">high-scale data</strong>, <strong className="text-slate-900 font-semibold">backend engineering</strong>, and <strong className="text-slate-900 font-semibold">applied machine learning</strong>. My focus is writing clean, verified code that delivers sub-500ms query performance, algorithmic efficiency, and rock-solid system reliability.
              </p>

              {/* Direct Value Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sub-500ms pgvector search</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Production FastAPI backends</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Metaheuristic ACO &amp; PSO routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated BI SQL generation</span>
                </div>
              </div>
            </div>

            {/* 4 Architectural Pillars in Solid Warm-White Editorial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {corePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="editorial-card p-4 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-2 rounded-lg bg-emerald-700 text-white shadow-xs">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 font-medium">
                          {pillar.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 font-display">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Signature Data Flow Architecture Pipeline */}
          <div className="lg:col-span-6">
            <DataFlowArchitecture />
          </div>
        </div>
      </div>
    </section>
  );
};
