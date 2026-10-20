import React from 'react';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import SplineScene from './SplineScene';
import { 
  ReactIcon, NodeIcon, ExpressIcon, CppIcon, MongoIcon, MysqlIcon 
} from './TechIcons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const coreTech = [
    { name: 'C++', icon: <CppIcon className="w-4 h-4" /> },
    { name: 'React', icon: <ReactIcon className="w-4 h-4" /> },
    { name: 'Node.js', icon: <NodeIcon className="w-4 h-4" /> },
    { name: 'Express', icon: <ExpressIcon className="w-4 h-4 text-white" /> },
    { name: 'MongoDB', icon: <MongoIcon className="w-4 h-4" /> },
    { name: 'MySQL', icon: <MysqlIcon className="w-4 h-4" /> },
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[680px] flex items-center overflow-hidden bg-[#1F1F1F]"
    >
      {/* 1. Full-Screen Interactive 3D Spline Robot Canvas (Shifted Right) */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto overflow-hidden">
        <div className="w-full h-full transform translate-x-0 sm:translate-x-[8%] md:translate-x-[14%] lg:translate-x-[20%] xl:translate-x-[26%] transition-transform duration-500">
          <SplineScene sceneUrl={PERSONAL_INFO.splineScene} />
        </div>
      </div>

      {/* 2. 60% Dominant Charcoal Vignette Masks */}
      <div className="absolute inset-0 z-15 bg-gradient-to-r from-[#1F1F1F] via-[#1F1F1F]/90 md:via-[#1F1F1F]/40 to-transparent pointer-events-none w-full h-full" />
      <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#1F1F1F] via-transparent to-[#1F1F1F]/40 pointer-events-none w-full h-full" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] glow-hero pointer-events-none blur-[100px]" />

      {/* 3. Floating Interactive Tech Badges & Photo-Style Flourish (Right Side) */}
      <div className="absolute inset-0 pointer-events-none z-20 w-full px-6 sm:px-12 lg:px-20 2xl:px-28 overflow-hidden">
        
        {/* Artistic 'Code Learn Grow' badge inspired by photo reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="hidden xl:flex flex-col items-center absolute top-28 right-24 pointer-events-auto"
        >
          <div className="px-5 py-3 rounded-2xl bg-[#2E2E2E]/80 border border-[#DEB084]/40 backdrop-blur-xl shadow-xl shadow-black/50 text-right">
            <span className="font-serif italic text-lg sm:text-xl text-[#DEB084] tracking-wide block leading-tight font-semibold">
              Code <br />
              Learn <br />
              Grow
            </span>
            <div className="w-12 h-1 bg-[#DEB084] rounded-full mt-1.5 ml-auto opacity-70" />
          </div>
        </motion.div>

        {/* Floating C++ / DSA Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hidden xl:flex absolute bottom-44 right-20 items-center gap-3 p-3.5 rounded-2xl bg-[#2E2E2E]/90 border border-[#3D3D3D] backdrop-blur-xl shadow-2xl shadow-black/60 animate-float pointer-events-auto hover:border-[#DEB084]/60 hover:scale-105 transition-all group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#1F1F1F] border border-[#3D3D3D] flex items-center justify-center p-2 shadow-inner group-hover:border-[#DEB084]/50 transition-colors">
            <CppIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#DEB084] shadow-[0_0_8px_#DEB084]" />
              <p className="text-xs font-bold text-[#F4F4F4]">C++ Problem Solving</p>
            </div>
            <p className="text-[10px] font-mono text-[#CCCCCC] mt-0.5">Algorithms &middot; LeetCode Active</p>
          </div>
        </motion.div>

        {/* Floating Full-Stack MERN Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="hidden lg:flex absolute bottom-16 right-36 items-center gap-3.5 p-3.5 rounded-2xl bg-[#2E2E2E]/90 border border-[#3D3D3D] backdrop-blur-xl shadow-2xl shadow-black/60 animate-float-delayed pointer-events-auto hover:border-[#DEB084]/60 hover:scale-105 transition-all group cursor-pointer"
        >
          <div className="flex -space-x-2 overflow-hidden py-0.5">
            <div className="w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#3D3D3D] flex items-center justify-center p-1.5 shadow-md">
              <ReactIcon className="w-5 h-5" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#3D3D3D] flex items-center justify-center p-1.5 shadow-md">
              <NodeIcon className="w-5 h-5" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1F1F1F] border border-[#3D3D3D] flex items-center justify-center p-1.5 shadow-md">
              <MongoIcon className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
              <p className="text-xs font-bold text-[#F4F4F4]">MERN Full-Stack</p>
            </div>
            <p className="text-[10px] font-mono text-[#CCCCCC] mt-0.5">SyncFile &middot; Paste App &middot; REST APIs</p>
          </div>
        </motion.div>
      </div>

      {/* 4. Overlaid Full-Width Content Container */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-20 2xl:px-28 pointer-events-none flex flex-col justify-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl flex flex-col items-start text-left"
        >
          {/* Subtle Greeting (Matching Photo) */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-[#F4F4F4] mb-2 sm:mb-3 drop-shadow"
          >
            Hello, I'm
          </motion.p>

          {/* Headline matching photo: 'Sonu' (White) + 'Saini' (Warm Caramel Accent #DEB084) */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#F4F4F4] leading-[1.04] mb-4 sm:mb-5 drop-shadow-lg"
          >
            Sonu{' '}
            <span className="text-[#DEB084] drop-shadow-[0_2px_12px_rgba(222,176,132,0.3)]">
              Saini
            </span>
          </motion.h1>

          {/* Subtitle matching photo: BCA Student | Developer | Problem Solver */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl lg:text-2xl text-[#F4F4F4] font-semibold leading-relaxed mb-3 drop-shadow"
          >
            BCA Student | Developer | Problem Solver
          </motion.p>

          {/* Bio copy matching photo */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-[#CCCCCC] leading-relaxed mb-8 max-w-xl font-normal drop-shadow"
          >
            I build web experiences, solve real problems and keep learning every day. Welcome to my portfolio!
          </motion.p>

          {/* Action Buttons matching photo: [View My Work] (#DEB084) & [Contact Me] (Charcoal pill) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pointer-events-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-lg shadow-[#DEB084]/25 hover:shadow-[#DEB084]/45 transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>View My Work</span>
              <ArrowDownRight className="w-4 h-4 text-[#1F1F1F]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#F4F4F4] bg-[#2E2E2E] border border-[#3D3D3D] hover:border-[#DEB084]/70 hover:bg-[#383838] backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4 text-[#DEB084]" />
            </a>
          </motion.div>

          {/* Core Tech Stack Badges */}
          <motion.div variants={itemVariants} className="mt-9 pointer-events-auto">
            <p className="text-[11px] font-mono uppercase tracking-wider text-[#9E9E9E] mb-2.5 flex items-center gap-2">
              <span>Core Tech Stack</span>
              <span className="h-px w-12 bg-[#3D3D3D]" />
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {coreTech.map((tech) => (
                <a
                  key={tech.name}
                  href="#skills"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#2E2E2E]/80 border border-[#3D3D3D] hover:border-[#DEB084]/60 text-[#CCCCCC] hover:text-[#F4F4F4] text-xs font-mono transition-all hover:scale-105 hover:bg-[#383838] backdrop-blur-md shadow-sm"
                >
                  <span className="w-4 h-4 flex items-center justify-center">{tech.icon}</span>
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Interactive Hint */}
          <motion.div variants={itemVariants} className="mt-6 pt-4 border-t border-[#3D3D3D] flex items-center gap-2 text-xs font-mono text-[#9E9E9E]">
            <span className="w-2 h-2 rounded-full bg-[#DEB084] inline-block animate-pulse" />
            <span>Move your cursor anywhere to direct the 3D robotic companion</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
