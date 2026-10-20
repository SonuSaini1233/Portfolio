import React from 'react';
import { ABOUT_TEXT } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-[#3D3D3D] relative overflow-hidden bg-[#1F1F1F]">
      {/* 60% Dominant: Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] glow-section pointer-events-none blur-[90px]" />

      <div className="w-full px-6 sm:px-12 lg:px-20 2xl:px-28 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEB084]/10 border border-[#DEB084]/30 text-[#DEB084] text-xs font-mono tracking-wider uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
            <span>Personal Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F4F4]">
            About Me
          </h2>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Authentic Personal Story (7 Cols - 30% Secondary Body) */}
          <div className="lg:col-span-7 space-y-5">
            {ABOUT_TEXT.story.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base sm:text-lg text-[#CCCCCC] leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right: Clean Factual Data Table (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#2E2E2E] border border-[#3D3D3D] p-6 space-y-4 shadow-xl shadow-black/40">
            <h3 className="text-xs font-mono uppercase text-[#DEB084] tracking-wider pb-3 border-b border-[#3D3D3D] flex items-center justify-between font-bold">
              <span>Profile Snapshot</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
            </h3>

            <dl className="space-y-3.5 text-xs sm:text-sm">
              {ABOUT_TEXT.facts.map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4 p-2.5 rounded-lg bg-[#242424] border border-[#3D3D3D]">
                  <dt className="text-[#CCCCCC] font-mono text-xs flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
                    <span>{item.label}</span>
                  </dt>
                  <dd className="text-[#F4F4F4] text-right font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>

      </div>
    </section>
  );
}
