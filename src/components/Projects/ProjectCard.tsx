import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/types';
import { VectorSearchVisualizer } from '../3D/VectorSearchVisualizer';
import { BiDashboardVisualizer } from '../3D/BiDashboardVisualizer';
import { BankAnalysisVisualizer } from '../3D/BankAnalysisVisualizer';
import { RouteOptimizationVisualizer } from '../3D/RouteOptimizationVisualizer';
import { TrafficLightVisualizer } from '../3D/TrafficLightVisualizer';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
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
    <div
      className="editorial-card p-6 sm:p-8 cursor-pointer group bg-white/95"
      onClick={() => onOpenModal(project)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left Side: Information & Metrics */}
        <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
          <div>
            {/* Header / Number (Category tag removed per request) */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs sm:text-sm font-semibold text-slate-500">
                // PROJECT {project.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 group-hover:text-slate-700 transition-colors flex items-center gap-2">
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-slate-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-150" />
            </h3>

            {/* Tagline */}
            <p className="text-xs sm:text-sm font-mono text-slate-500 font-normal mt-1">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-sm text-slate-600 mt-3 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Impact Benchmarks in neutral styling */}
          <div className="flex flex-wrap gap-2 sm:gap-2.5 pt-2">
            {project.impactMetrics.map((metric, mIdx) => (
              <div
                key={mIdx}
                className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono flex items-center gap-1.5"
              >
                <span className="font-bold text-slate-900">{metric.value}</span>
                <span className="text-slate-700 font-medium">{metric.label}</span>
              </div>
            ))}
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
            {project.technologies.slice(0, 7).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 7 && (
              <span className="px-2 py-1 text-xs font-mono text-slate-500 font-normal">
                +{project.technologies.length - 7} more
              </span>
            )}
          </div>

          {/* Action links */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(project);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 hover:text-black group-hover:underline cursor-pointer"
            >
              <span>Explore Architecture &amp; Solution</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Visualizer Showcase */}
        <div className="lg:col-span-5 w-full">
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-2xs">
            {renderVisual()}
          </div>
        </div>
      </div>
    </div>
  );
};
