import React, { useState } from 'react';
import { SectionHeader } from '../UI/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { portfolioData } from '../../data/portfolio';
import type { Project } from '../../data/types';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering"
          title="Production"
          titleAccent="Projects &amp; Systems"
          subtitle="Explore end-to-end architectures engineered for semantic retrieval, automated business intelligence, large-scale financial modeling, and heuristic graph pathfinding."
        />

        {/* Projects List without category tag filters */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};
