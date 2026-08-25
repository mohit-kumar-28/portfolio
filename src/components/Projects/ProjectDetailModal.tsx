import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../../data/types';
import { GithubIcon } from '../UI/SocialIcons';
import { VectorSearchVisualizer } from '../3D/VectorSearchVisualizer';
import { BiDashboardVisualizer } from '../3D/BiDashboardVisualizer';
import { BankAnalysisVisualizer } from '../3D/BankAnalysisVisualizer';
import { RouteOptimizationVisualizer } from '../3D/RouteOptimizationVisualizer';
import { TrafficLightVisualizer } from '../3D/TrafficLightVisualizer';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderVisual = () => {
    switch (project.visualType) {
      case 'rag-pipeline':
        return <VectorSearchVisualizer />;
      case 'bi-dashboard':
        return <BiDashboardVisualizer />;
      case 'bank-analysis':
        return <BankAnalysisVisualizer />;
      case 'route-optimizer':
        return <RouteOptimizationVisualizer />;
      case 'traffic-light':
        return <TrafficLightVisualizer />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/30 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8 space-y-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header without category tag */}
        <div className="space-y-2.5 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200">
              Project {project.number}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900">
            {project.title}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium font-mono">
            {project.tagline}
          </p>
        </div>

        {/* Interactive Architecture Visualizer Component */}
        <div className="w-full border border-slate-200 rounded-xl overflow-hidden">{renderVisual()}</div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-sm font-mono font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              The Problem
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-sm font-mono font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-slate-900" />
              The Engineered Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Verified Technical Features */}
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-slate-700" />
            Verified Technical Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.verifiedFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Pipeline Steps */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-slate-700" />
              System Architecture &amp; Data Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.architecture.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-semibold text-slate-500">
                    STAGE 0{sIdx + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact & Contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-sm font-mono font-semibold text-slate-900 uppercase tracking-wider">
              Verified Impact Benchmarks
            </h3>
            <div className="space-y-2">
              {project.impactMetrics.map((m, idx) => (
                <div key={idx} className="flex items-baseline gap-2">
                  <span className="text-lg font-display font-bold text-slate-900">
                    {m.value}
                  </span>
                  <span className="text-xs text-slate-700 font-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-sm font-mono font-semibold text-slate-900 uppercase tracking-wider">
              My Core Contributions
            </h3>
            <ul className="space-y-1.5">
              {project.contribution.map((c, idx) => (
                <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Badges */}
        <div className="space-y-2 pt-2 border-t border-slate-200">
          <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
            Technologies &amp; Frameworks
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-800 border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions (Solid slate-900 / white buttons) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid-secondary inline-flex items-center gap-2 px-4 py-2 text-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid-primary inline-flex items-center gap-2 px-4 py-2 text-xs"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
