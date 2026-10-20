import React, { useState } from 'react';
import FeaturedProject from './FeaturedProject';
import OtherProjects from './OtherProjects';
import ProjectModal from './ProjectModal';
import { Layers } from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all' | 'syncfile' | 'paste' | 'cropzora'

  return (
    <section id="projects" className="py-24 border-t border-[#3D3D3D] relative overflow-hidden bg-[#1F1F1F]">
      {/* 60% Dominant: Background Subtle Radial Light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] glow-section pointer-events-none blur-[90px]" />

      <div className="w-full px-6 sm:px-12 lg:px-20 2xl:px-28 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEB084]/10 border border-[#DEB084]/30 text-[#DEB084] text-xs font-mono tracking-wider uppercase mb-3 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
              <Layers className="w-3.5 h-3.5 text-[#DEB084]" />
              <span>Verified Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F4F4]">
              Featured Applications
            </h2>
            <p className="text-sm sm:text-base text-[#CCCCCC] mt-2 max-w-xl">
              Practical web applications built with modern frontend and backend architectures, deployed live with accessible source repositories.
            </p>
          </div>

          {/* 10% Accent Quick Filter Controller */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#2E2E2E] border border-[#3D3D3D]">
            {[
              { id: 'all', label: 'All Projects (3)' },
              { id: 'syncfile', label: 'SyncFile' },
              { id: 'paste', label: 'Paste App' },
              { id: 'cropzora', label: 'Cropzora' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-md shadow-[#DEB084]/25'
                    : 'text-[#CCCCCC] hover:text-[#F4F4F4] hover:bg-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project (SyncFile) */}
        {(filter === 'all' || filter === 'syncfile') && (
          <div className="mb-8">
            <FeaturedProject onOpenModal={setSelectedProject} />
          </div>
        )}

        {/* Other Projects (Paste App & Cropzora) */}
        {(filter === 'all' || filter === 'paste' || filter === 'cropzora') && (
          <div>
            <OtherProjects onOpenModal={setSelectedProject} filter={filter} />
          </div>
        )}

      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
