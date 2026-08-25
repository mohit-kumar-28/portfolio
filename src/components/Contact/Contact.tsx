import React, { useState } from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { portfolioData } from '../../data/portfolio';
import { GithubIcon, LinkedinIcon } from '../UI/SocialIcons';
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Connect &amp;"
          titleAccent="Collaborate"
          subtitle="Open for Software Engineering, Data Engineering, Backend Development, and AI/ML opportunities, internships, and research collaborations."
        />

        {/* Direct Contact & Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Email Direct Channel */}
          <div className="editorial-card p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/5 text-emerald-800">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-900 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-medium">
                  DIRECT EMAIL
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                Email Address
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-normal">
                Drop me an email for discussions, placements, or technical inquiries.
              </p>

              <div className="p-3 rounded-xl bg-slate-900/5 font-mono text-sm font-semibold text-slate-900 truncate">
                {personal.email}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`mailto:${personal.email}`}
                className="btn-solid-primary flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs cursor-pointer"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(personal.email, 'email')}
                className="btn-solid-secondary p-2.5 rounded-xl cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-700 font-bold" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-600" />
                )}
              </button>
            </div>
          </div>

          {/* Phone Direct Channel */}
          <div className="editorial-card p-6 sm:p-7 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/5 text-sky-800">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-sky-900 bg-sky-500/10 px-2.5 py-0.5 rounded-full font-medium">
                  PHONE / WHATSAPP
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                Phone Number
              </h3>
              <p className="text-xs text-slate-500 mb-4 font-normal">
                Available for recruiter outreach and quick chats.
              </p>

              <div className="p-3 rounded-xl bg-slate-900/5 font-mono text-sm font-semibold text-slate-900">
                +91 {personal.phone}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`tel:+91${personal.phone}`}
                className="btn-solid-primary flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs cursor-pointer"
              >
                <span>Direct Call</span>
                <Phone className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(personal.phone, 'phone')}
                className="btn-solid-secondary p-2.5 rounded-xl cursor-pointer"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-700 font-bold" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-600" />
                )}
              </button>
            </div>
          </div>

          {/* GitHub Profile Card */}
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/5 text-slate-900">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-700 bg-slate-900/5 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                  GITHUB <ExternalLink className="w-3 h-3" />
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                GitHub @mohit-kumar-28
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Explore open-source repositories, RAG systems, FastAPI microservices, and heuristic pathfinding simulations.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-emerald-700">
              <span>View Repositories</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Profile Card */}
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-900/5 text-sky-700">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-sky-900 bg-sky-500/10 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
                  LINKEDIN <ExternalLink className="w-3 h-3" />
                </span>
              </div>

              <h3 className="text-lg font-display font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Connect for professional updates, engineering discussions, and undergraduate placement opportunities.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-semibold text-sky-700">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Location & Academic Base Footer Card */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Birla Institute of Technology, Mesra — Ranchi, Jharkhand, India</span>
          </div>
          <span className="text-emerald-900 bg-emerald-500/10 px-3 py-1 rounded-full font-medium flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            Active Student &amp; Developer
          </span>
        </div>
      </div>
    </section>
  );
};
