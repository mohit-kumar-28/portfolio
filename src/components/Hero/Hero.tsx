import React from 'react';
import { Mail, ArrowRight, Code2, Database, BrainCircuit, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-start text-left space-y-6">
          
          {/* Avatar + Status Pill (Transparent without borders) */}
          <div className="flex items-center gap-3">
            <img
              src="/avatar.png"
              alt="Mohit Kumar"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-emerald-600 shadow-md ring-4 ring-emerald-500/10"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-900">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-mono font-medium">
                BIT Mesra CSE '27 • Open for Engineering Roles
              </span>
            </div>
          </div>

          {/* Large Bold Editorial Title */}
          <div className="w-full space-y-2">
            <p className="text-sm sm:text-base font-mono text-emerald-800 tracking-wider font-semibold uppercase">
              Hello, I am
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-slate-900 leading-[0.95] select-none">
              MOHIT KUMAR
            </h1>
          </div>

          {/* Clean Role Subtitle */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700">
              Software Developer · Data Engineer · AI/ML
            </span>
          </div>

          {/* Generous whitespace & clear narrative */}
          <p className="text-base sm:text-xl text-slate-700 max-w-3xl leading-relaxed font-normal pt-1">
            Computer Science undergraduate at{' '}
            <strong className="text-slate-900 font-semibold">
              Birla Institute of Technology, Mesra
            </strong>
            . Specializing in high-throughput backend APIs with FastAPI &amp; PostgreSQL, sub-500ms pgvector vector search pipelines, and heuristic graph pathfinding algorithms.
          </p>

          {/* Tech Badges (Transparent without white boxes or hard borders) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/5 text-slate-700 text-xs font-mono font-medium">
              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
              FastAPI &amp; Python
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/5 text-slate-700 text-xs font-mono font-medium">
              <Database className="w-3.5 h-3.5 text-sky-700" />
              PostgreSQL &amp; pgvector
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/5 text-slate-700 text-xs font-mono font-medium">
              <BrainCircuit className="w-3.5 h-3.5 text-emerald-700" />
              RAG &amp; Sentence Transformers
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/5 text-slate-700 text-xs font-mono font-medium">
              <Code2 className="w-3.5 h-3.5 text-amber-700" />
              ACO / PSO / Genetic Algorithms
            </span>
          </div>

          {/* Solid Colored & Transparent Buttons (No white boxes, no borders) */}
          <div className="pt-4 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="btn-solid-primary inline-flex items-center justify-center gap-2 px-6 py-3 text-sm cursor-pointer"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-solid-secondary inline-flex items-center justify-center gap-2 px-5 py-3 text-sm cursor-pointer hover:text-emerald-800"
            >
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Contact Mohit</span>
            </a>

            {/* Social Links (Transparent without borders) */}
            <div className="flex items-center gap-1 sm:ml-2">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-transparent hover:bg-slate-900/5 text-slate-700 hover:text-slate-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-transparent hover:bg-slate-900/5 text-slate-700 hover:text-sky-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Stats Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="editorial-card p-5 group flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="mt-2">
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5 font-normal">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
