import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CppIcon, ReactIcon, NodeIcon, ExpressIcon, MongoIcon 
} from './TechIcons';
import { Sparkles, Terminal, Cpu, ArrowRight } from 'lucide-react';

export default function Preloader({ onComplete, duration = 5000 }) {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    {
      code: 'SYS_BOOT',
      title: 'Initializing Core Environment',
      desc: 'Allocating virtual memory & mounting configuration profiles...',
      icon: <Terminal className="w-3.5 h-3.5 text-[#DEB084]" />,
    },
    {
      code: 'STACK_SYNC',
      title: 'Compiling Language & Framework Modules',
      desc: 'Linking C++ DSA runtime, React, and Node.js microservices...',
      icon: <Cpu className="w-3.5 h-3.5 text-[#DEB084]" />,
    },
    {
      code: '3D_SYNAPSE',
      title: 'Pre-warming WebGL & 3D Shaders',
      desc: 'Synchronizing Spline robot kinematics & cursor-tracking nodes...',
      icon: <Sparkles className="w-3.5 h-3.5 text-[#DEB084]" />,
    },
    {
      code: 'PROJECTS_LOAD',
      title: 'Verifying Production Deployments',
      desc: 'SyncFile, Paste App & Cropzora telemetry verified online...',
      icon: <Cpu className="w-3.5 h-3.5 text-[#DEB084]" />,
    },
    {
      code: 'SYSTEM_READY',
      title: 'Welcome to Sonu Saini\'s Portfolio',
      desc: 'BCA Student | Developer | Problem Solver',
      icon: <ArrowRight className="w-3.5 h-3.5 text-[#DEB084]" />,
    },
  ];

  useEffect(() => {
    const startTime = performance.now();
    let frameId;

    const update = (now) => {
      const elapsed = now - startTime;
      const rawPct = Math.min(1, elapsed / duration);
      
      const eased = rawPct < 0.5 
        ? 2 * rawPct * rawPct 
        : 1 - Math.pow(-2 * rawPct + 2, 2) / 2;

      const currentPct = Math.min(100, Math.floor(eased * 100));
      setProgress(currentPct);

      const stepIdx = Math.min(steps.length - 1, Math.floor(rawPct * steps.length));
      setCurrentStepIndex(stepIdx);

      if (rawPct < 1) {
        frameId = requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          onComplete();
        }, 350);
      }
    };

    frameId = requestAnimationFrame(update);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [duration, onComplete, steps.length]);

  const activeStep = steps[currentStepIndex] || steps[0];

  return (
    <motion.div
      key="preloader-overlay"
      initial={{ opacity: 1, y: 0 }}
      exit={{ 
        y: '-100%', 
        opacity: 0.95,
        transition: { 
          duration: 0.85, 
          ease: [0.76, 0, 0.24, 1] 
        } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-10 md:p-14 bg-[#1F1F1F] text-[#F4F4F4] overflow-hidden select-none"
    >
      {/* 60% Dominant: Charcoal Ambient Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3D3D3D 1px, transparent 1px),
            linear-gradient(to bottom, #3D3D3D 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 80%)',
        }}
      />
      
      {/* Central Pulsing #DEB084 Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#DEB084]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2E2E2E] border border-[#3D3D3D] flex items-center justify-center font-bold text-sm tracking-wider text-[#DEB084] shadow-lg shadow-black/50">
            SS
          </div>
          <div>
            <p className="text-xs font-bold text-[#F4F4F4] tracking-wide leading-none">
              SONU SAINI
            </p>
            <p className="text-[10px] font-mono text-[#CCCCCC] mt-1 leading-none">
              SYSTEM BOOT &middot; v2.4.0
            </p>
          </div>
        </div>

        {/* Live Audio Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2E2E2E] border border-[#3D3D3D]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084] animate-ping" />
          <span className="text-[10px] font-mono text-[#DEB084] uppercase tracking-wider">
            Loading Runtime
          </span>
          <div className="flex items-end gap-0.5 ml-2 h-3">
            <span className="w-0.5 bg-[#DEB084] h-full animate-[pulse_0.6s_ease-in-out_infinite]" />
            <span className="w-0.5 bg-[#E8C5A2] h-2 animate-[pulse_0.8s_ease-in-out_0.2s_infinite]" />
            <span className="w-0.5 bg-[#F4F4F4] h-3 animate-[pulse_0.7s_ease-in-out_0.1s_infinite]" />
            <span className="w-0.5 bg-[#DEB084] h-1.5 animate-[pulse_0.9s_ease-in-out_0.3s_infinite]" />
          </div>
        </div>

        {/* Skip Button */}
        <button
          type="button"
          onClick={onComplete}
          className="group flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#2E2E2E] hover:bg-[#383838] border border-[#3D3D3D] hover:border-[#DEB084]/50 text-xs font-mono text-[#CCCCCC] hover:text-white transition-all shadow-md"
        >
          <span>Skip Intro</span>
          <kbd className="hidden md:inline px-1.5 py-0.5 text-[9px] rounded bg-[#1F1F1F] border border-[#3D3D3D] text-[#9E9E9E] group-hover:text-[#DEB084]">
            ESC
          </kbd>
        </button>
      </div>

      {/* Centerpiece: #DEB084 Accent Orbit & Off-White Numbers */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center max-w-xl mx-auto w-full">
        
        {/* Animated Cyber Ring Container */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-8">
          
          {/* Outer Rotating SVG Dash Ring (30% Secondary Neutral) */}
          <svg className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#3D3D3D"
              strokeWidth="1.5"
              strokeDasharray="4 8"
            />
          </svg>

          {/* Reverse Rotating 10% Accent Ring (#DEB084) */}
          <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-[spin_8s_linear_infinite_reverse]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="#DEB084"
              strokeWidth="1.5"
              strokeDasharray="20 40 10 30"
              strokeOpacity="0.75"
            />
          </svg>

          {/* Center Core */}
          <div 
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#2E2E2E] border border-[#DEB084]/40 flex flex-col items-center justify-center relative shadow-2xl transition-all duration-500"
            style={{
              boxShadow: '0 0 35px -5px rgba(222, 176, 132, 0.35)',
            }}
          >
            <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tighter text-[#F4F4F4]">
              {progress.toString().padStart(2, '0')}%
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9E9E] mt-1">
              Optimizing
            </span>

            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#DEB084] rounded-full" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#E8C5A2] rounded-full" />
          </div>
        </div>

        {/* Phase Telemetry Details */}
        <div className="space-y-2 mb-6 min-h-[72px] flex flex-col items-center justify-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase border border-[#DEB084]/35 bg-[#DEB084]/10 text-[#DEB084] font-semibold">
            {activeStep.icon}
            <span>[{activeStep.code}] {activeStep.title}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#CCCCCC] max-w-md mx-auto leading-relaxed transition-opacity duration-200">
            {activeStep.desc}
          </p>
        </div>

        {/* High-Tech Progress Track */}
        <div className="w-full max-w-md space-y-2">
          <div className="relative w-full h-2 rounded-full bg-[#2E2E2E] border border-[#3D3D3D] overflow-hidden p-0.5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#DEB084] to-[#E8C5A2] relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white blur-[2px] shadow-[0_0_10px_#FFFFFF]" />
            </motion.div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-[#9E9E9E]">
            <span>NODE: JNU_IN_2028</span>
            <span className="text-[#DEB084]">MERN + C++ PIPELINE</span>
            <span>60 FPS</span>
          </div>
        </div>

      </div>

      {/* Bottom Subsystems Rack */}
      <div className="relative z-10 pt-4 border-t border-[#3D3D3D] flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2 text-xs font-mono text-[#9E9E9E]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084] animate-pulse" />
          <span>Active Subsystems:</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { name: 'C++', icon: <CppIcon className="w-4 h-4" />, active: progress > 10 },
            { name: 'React', icon: <ReactIcon className="w-4 h-4" />, active: progress > 30 },
            { name: 'Node.js', icon: <NodeIcon className="w-4 h-4" />, active: progress > 50 },
            { name: 'Express', icon: <ExpressIcon className="w-4 h-4 text-white" />, active: progress > 70 },
            { name: 'MongoDB', icon: <MongoIcon className="w-4 h-4" />, active: progress > 85 },
          ].map((tech) => (
            <div
              key={tech.name}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-mono transition-all duration-300 ${
                tech.active
                  ? 'bg-[#2E2E2E] border-[#DEB084]/50 text-[#F4F4F4] scale-105 shadow-md shadow-[#DEB084]/15'
                  : 'bg-[#262626] border-[#3D3D3D] text-[#9E9E9E] opacity-40'
              }`}
            >
              <div className="w-3.5 h-3.5 flex items-center justify-center">
                {tech.icon}
              </div>
              <span className="hidden md:inline">{tech.name}</span>
            </div>
          ))}
        </div>

        <div className="text-[11px] font-mono text-[#CCCCCC] text-right hidden sm:block">
          Duration: <span className="text-[#DEB084] font-semibold">5.0s</span> (Pre-rendering WebGL)
        </div>

      </div>
    </motion.div>
  );
}
