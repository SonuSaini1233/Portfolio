import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Trophy
} from 'lucide-react';
import { LeetCodeIcon } from './Icons';
import { JOURNEY_ENTRIES, PERSONAL_INFO } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function EducationSection() {
  const containerRef = useRef(null);
  const [filter, setFilter] = useState('All'); // 'All' | 'Education' | 'Hackathons' | 'Workshops'
  const [activeStep, setActiveStep] = useState(0);

  // Scroll Progress Tracker for the timeline vertical beam
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 30%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const categories = ['All', 'Education', 'Hackathons', 'Workshops'];

  const filteredEntries = filter === 'All' 
    ? JOURNEY_ENTRIES 
    : JOURNEY_ENTRIES.filter(e => e.category === filter || (filter === 'Workshops' && (e.category === 'Workshops' || e.category === 'Competitions' || e.category === 'Athletics')));

  return (
    <section 
      id="journey" 
      ref={containerRef}
      className="py-24 sm:py-32 border-t border-[#3D3D3D] relative overflow-hidden bg-[#1F1F1F]"
    >
      {/* 60% Dominant: Background Subtle Radial Warm Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] glow-section pointer-events-none blur-[120px]" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] glow-section pointer-events-none blur-[100px]" />

      <div className="w-full px-6 sm:px-12 lg:px-20 2xl:px-28 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DEB084]/10 border border-[#DEB084]/30 text-[#DEB084] text-xs font-mono tracking-wider uppercase mb-3.5 font-semibold shadow-sm shadow-[#DEB084]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084] animate-ping" />
              <GraduationCap className="w-4 h-4 text-[#DEB084]" />
              <span>Scroll-Based Milestone Journey</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#F4F4F4]">
              Academic &amp; Experiential Journey
            </h2>
            <p className="text-sm sm:text-base text-[#CCCCCC] mt-3 leading-relaxed">
              From school foundations in PCM to undergraduate computer applications at Jaipur National University, hackathon sprints, and algorithmic training.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#2E2E2E] border border-[#3D3D3D] shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-md shadow-[#DEB084]/20'
                    : 'text-[#CCCCCC] hover:text-[#F4F4F4] hover:bg-white/[0.05]'
                }`}
              >
                {cat === 'All' ? 'All Milestones (6)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Grid: Scroll-Timeline (8 Cols) + LeetCode Spotlight (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT 8 COLS: Scroll-Driven Interactive Timeline */}
          <div className="lg:col-span-8 relative pl-6 sm:pl-10">
            
            {/* Background Static Line */}
            <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[2px] bg-[#3D3D3D]" />

            {/* Dynamic Scroll-Linked Luminous Line Beam in #DEB084 */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-[11px] sm:left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#DEB084] via-[#DEB084] to-[#F4F4F4] shadow-[0_0_12px_#DEB084]"
            />

            {/* Milestone Cards Stack */}
            <div className="space-y-8 sm:space-y-10">
              {filteredEntries.map((entry, idx) => {
                const isSchool = entry.id === 'school';
                const isBca = entry.id === 'bca';

                return (
                  <motion.div
                    key={entry.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    onViewportEnter={() => setActiveStep(idx)}
                    className="relative group"
                  >
                    {/* Glowing Milestone Node on Timeline */}
                    <div 
                      className={`absolute -left-[30px] sm:-left-[38px] top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        activeStep >= idx 
                          ? 'border-[#DEB084] bg-[#DEB084] shadow-[0_0_14px_#DEB084]' 
                          : 'border-[#3D3D3D] bg-[#2E2E2E]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${activeStep >= idx ? 'bg-[#1F1F1F]' : 'bg-[#9E9E9E]'}`} />
                    </div>

                    {/* Milestone Card Surface (60% Charcoal #2E2E2E + #DEB084 Accent Highlights) */}
                    <div 
                      className={`p-6 sm:p-7 rounded-2xl bg-[#2E2E2E] border transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 ${
                        isSchool 
                          ? 'border-[#DEB084]/60 bg-gradient-to-br from-[#2E2E2E] to-[#262420]' 
                          : isBca 
                          ? 'border-[#DEB084]/40' 
                          : 'border-[#3D3D3D] hover:border-[#DEB084]/40'
                      }`}
                    >
                      {/* Top Meta Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#242424] border border-[#3D3D3D] text-[#DEB084]">
                            <Calendar className="w-3 h-3 text-[#DEB084]" />
                            <span>{entry.period}</span>
                          </span>

                          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#DEB084]/15 border border-[#DEB084]/30 text-[#DEB084] font-medium">
                            {entry.badge}
                          </span>
                        </div>

                        {/* Special Distinction Pill for Bhagwati School & BCA */}
                        {entry.grade && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#DEB084] text-[#1F1F1F] text-xs font-mono font-bold shadow-sm shadow-[#DEB084]/30">
                            <Trophy className="w-3.5 h-3.5" />
                            <span>{entry.grade}</span>
                          </div>
                        )}
                      </div>

                      {/* Main Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#F4F4F4] tracking-tight group-hover:text-white transition-colors">
                        {entry.title}
                      </h3>

                      {/* Subtitle / Department */}
                      <p className="text-xs sm:text-sm font-mono text-[#DEB084] font-semibold mt-1 mb-3">
                        {entry.subtitle}
                      </p>

                      {/* Comprehensive Narrative */}
                      <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                        {entry.description}
                      </p>

                      {/* Highlights Pill */}
                      {entry.highlight && (
                        <div className="mt-4 pt-4 border-t border-[#3D3D3D] flex items-center justify-between text-xs font-mono text-[#9E9E9E]">
                          <span className="flex items-center gap-1.5 text-[#F4F4F4]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#DEB084]" />
                            <span>{entry.highlight}</span>
                          </span>
                          <span className="text-[10px] text-[#9E9E9E] uppercase tracking-wider">
                            Verified Milestone
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT 4 COLS: Problem Solving & LeetCode Spotlight (Sticky Card) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            <SpotlightCard
              spotlightColor="rgba(222, 176, 132, 0.20)"
              hoverBorderColor="rgba(222, 176, 132, 0.7)"
              className="p-7 space-y-5 shadow-2xl shadow-black/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DEB084]/15 border border-[#DEB084]/30 text-[#DEB084] text-xs font-mono tracking-wider uppercase font-semibold">
                    <LeetCodeIcon className="w-3.5 h-3.5 text-[#DEB084]" />
                    <span>Problem Solving</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#DEB084] flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#DEB084] animate-ping" />
                    Active Practice
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#F4F4F4] tracking-tight">
                    Data Structures &amp; Algorithms
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 leading-relaxed">
                    Continuously practicing algorithmic problem solving in C++ on LeetCode to build robust logical intuition, memory efficiency, and optimal time complexities.
                  </p>
                </div>

                {/* Key Metric Snapshot Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D]">
                    <span className="text-[10px] text-[#9E9E9E] block uppercase tracking-wider mb-1">Language</span>
                    <span className="text-[#DEB084] font-bold text-sm">C++</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D]">
                    <span className="text-[10px] text-[#9E9E9E] block uppercase tracking-wider mb-1">Focus Area</span>
                    <span className="text-[#F4F4F4] font-bold text-sm">DSA &amp; Logic</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D]">
                    <span className="text-[10px] text-[#9E9E9E] block uppercase tracking-wider mb-1">Platform</span>
                    <span className="text-[#F4F4F4] font-bold text-sm">LeetCode</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D]">
                    <span className="text-[10px] text-[#9E9E9E] block uppercase tracking-wider mb-1">Handle</span>
                    <span className="text-[#DEB084] font-bold truncate block text-sm">sonusaini123</span>
                  </div>
                </div>
              </div>

              {/* Direct LeetCode CTA */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between w-full px-5 py-3 rounded-xl text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-lg shadow-[#DEB084]/20 transition-all group"
              >
                <div className="flex items-center gap-2">
                  <LeetCodeIcon className="w-4 h-4 text-[#1F1F1F] group-hover:scale-110 transition-transform" />
                  <span>View Sonu's Profile on LeetCode</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </SpotlightCard>

            {/* School Distinction Snapshot Callout */}
            <div className="p-6 rounded-2xl bg-[#2E2E2E] border border-[#DEB084]/30 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#DEB084] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#DEB084]" />
                <span>Foundational Score</span>
              </div>
              <p className="text-sm text-[#F4F4F4] font-bold">
                Bhagwati Senior Secondary School
              </p>
              <p className="text-xs text-[#CCCCCC] leading-relaxed">
                Physics, Chemistry &amp; Mathematics (PCM) achieved with <strong className="text-[#DEB084]">89%</strong> (2023 - 2025).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}