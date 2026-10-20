import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#3D3D3D] bg-[#1F1F1F] py-12 text-xs text-[#999999]">
      <div className="w-full px-6 sm:px-12 lg:px-20 2xl:px-28">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
            <div>
              <p className="text-[#F4F4F4] font-medium">Sonu Saini</p>
              <p className="text-[11px] font-mono text-[#CCCCCC] mt-0.5">
                BCA Student | Developer | Problem Solver
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#DEB084] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#DEB084] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#DEB084] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#DEB084] transition-colors">Projects</a>
            <a href="#journey" className="hover:text-[#DEB084] transition-colors">Journey</a>
            <a href="#contact" className="hover:text-[#F4F4F4] transition-colors">Contact</a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#2E2E2E] border border-[#3D3D3D] text-[#CCCCCC] hover:text-[#DEB084] hover:border-[#DEB084]/50 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
