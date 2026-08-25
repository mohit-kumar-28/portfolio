import React from 'react';
import { portfolioData } from '../../data/portfolio';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-[#faf9f6]/95 backdrop-blur-md pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200/80 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src="/avatar.png"
                alt="Mohit Kumar"
                className="w-8 h-8 rounded-full object-cover border-2 border-emerald-600 shadow-2xs"
              />
              <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
                MOHIT KUMAR
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed font-normal">
              "Building intelligent systems with clean code, scalable data pipelines, and AI."
            </p>

            <p className="text-xs font-mono text-emerald-800 font-medium">
              Birla Institute of Technology, Mesra • CSE '27
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-900 font-semibold uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Top Button (Transparent without borders) */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end">
            <h4 className="text-xs font-mono text-slate-900 font-semibold uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-1.5">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-transparent hover:bg-slate-900/5 text-slate-700 hover:text-slate-900 transition-colors border-none"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-transparent hover:bg-slate-900/5 text-slate-700 hover:text-sky-700 transition-colors border-none"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-700" />
              </a>
              <a
                href={personal.socials.email}
                className="p-2.5 rounded-xl bg-transparent hover:bg-slate-900/5 text-slate-700 hover:text-emerald-700 transition-colors border-none"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-solid-secondary inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono cursor-pointer border-none"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Mohit Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1 text-slate-500 font-normal">
            Clean Organic Editorial Architecture
          </p>
        </div>
      </div>
    </footer>
  );
};
