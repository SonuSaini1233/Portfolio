import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const caseStudy = project.caseStudy || {};

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1F1F1F]/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#2E2E2E] border border-[#3D3D3D] rounded-2xl p-6 sm:p-8 text-left max-h-[85vh] overflow-y-auto shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#CCCCCC] hover:text-white bg-[#242424] border border-[#3D3D3D] rounded-lg transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <p className="text-xs font-mono text-[#DEB084] uppercase tracking-wider mb-1 font-semibold">
            {project.tagline}
          </p>
          <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F4F4F4] tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm text-[#CCCCCC] mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 pb-6 border-b border-[#3D3D3D]">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-md shadow-[#DEB084]/25 transition-all"
          >
            <span>Live Application</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#1F1F1F]" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#F4F4F4] bg-[#242424] border border-[#3D3D3D] hover:border-[#DEB084]/60 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#DEB084]" />
            <span>Repository</span>
          </a>
        </div>

        {/* Editorial Body */}
        <div className="space-y-6 pt-6 text-sm">
          
          {/* Problem & Solution with Tasteful Clean Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#242424] border border-[#3D3D3D] border-l-2 border-l-[#888888]">
              <h3 className="text-xs font-mono uppercase text-[#CCCCCC] tracking-wider mb-1.5 font-bold">Problem</h3>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#242424] border border-[#3D3D3D] border-l-2 border-l-[#DEB084]">
              <h3 className="text-xs font-mono uppercase text-[#DEB084] tracking-wider mb-1.5 font-bold">Solution</h3>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Key Engineering Features */}
          {caseStudy.features && (
            <div>
              <h3 className="text-xs font-mono uppercase text-[#F4F4F4] tracking-wider mb-3 font-semibold">
                Architecture &amp; Features
              </h3>
              <ul className="space-y-2">
                {caseStudy.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#CCCCCC] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084] mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Learnings */}
          {caseStudy.learnings && (
            <div className="p-4 rounded-xl bg-[#242424] border border-[#3D3D3D]">
              <h3 className="text-xs font-mono uppercase text-[#DEB084] tracking-wider mb-1.5 font-bold">
                Key Technical Learnings
              </h3>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                {caseStudy.learnings}
              </p>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono uppercase text-[#999999] tracking-wider mb-2">
              Verified Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#F4F4F4]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
