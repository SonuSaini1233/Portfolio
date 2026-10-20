import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ReactIcon, NodeIcon, ExpressIcon, CppIcon, CIcon, JavaIcon, 
  JavascriptIcon, MongoIcon, MysqlIcon, FirebaseIcon, 
  PostmanIcon, VscodeIcon, GitIcon, IntellijIcon, HtmlIcon, CssIcon 
} from './TechIcons';
import SpotlightCard from './SpotlightCard';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const allTech = [
    {
      name: 'C++',
      category: 'Languages',
      icon: <CppIcon className="w-8 h-8" />,
      status: 'Primary / DSA',
      desc: 'Algorithm design, memory management, pointers, and active LeetCode practice.',
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: <ReactIcon className="w-8 h-8" />,
      status: 'Core UI',
      desc: 'Component architecture, custom hooks, and state management for SyncFile & Paste App.',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: <NodeIcon className="w-8 h-8" />,
      status: 'Server Runtime',
      desc: 'Asynchronous event-driven backend services and API endpoint controllers.',
    },
    {
      name: 'Express.js',
      category: 'Backend',
      icon: <ExpressIcon className="w-8 h-8 text-white" />,
      status: 'REST APIs',
      desc: 'RESTful API routing, middleware integration, and request validation pipelines.',
    },
    {
      name: 'JavaScript',
      category: 'Languages',
      icon: <JavascriptIcon className="w-8 h-8" />,
      status: 'ES6+ Core',
      desc: 'Modern asynchronous JavaScript, DOM manipulation, Promises, and client-server sync.',
    },
    {
      name: 'MongoDB',
      category: 'Databases',
      icon: <MongoIcon className="w-8 h-8" />,
      status: 'NoSQL DB',
      desc: 'Flexible document schemas, aggregation pipelines, and CRUD operations.',
    },
    {
      name: 'MySQL',
      category: 'Databases',
      icon: <MysqlIcon className="w-8 h-8" />,
      status: 'Relational DB',
      desc: 'Structured query design, primary/foreign keys, joins, and relational normalization.',
    },
    {
      name: 'Firebase',
      category: 'Databases',
      icon: <FirebaseIcon className="w-8 h-8" />,
      status: 'Auth & Cloud',
      desc: 'User authentication, security rules, and session state management in SyncFile.',
    },
    {
      name: 'C',
      category: 'Languages',
      icon: <CIcon className="w-8 h-8" />,
      status: 'Foundational',
      desc: 'Low-level memory handling, pointers, structs, and computer systems fundamentals.',
    },
    {
      name: 'Java',
      category: 'Languages',
      icon: <JavaIcon className="w-8 h-8" />,
      status: 'OOP Core',
      desc: 'Object-oriented programming principles, class hierarchies, and JVM fundamentals.',
    },
    {
      name: 'Git & GitHub',
      category: 'Tools',
      icon: <GitIcon className="w-8 h-8" />,
      status: 'Version Control',
      desc: 'Git branch workflows, commits, remote repositories, and project collaboration.',
    },
    {
      name: 'Postman',
      category: 'Tools',
      icon: <PostmanIcon className="w-8 h-8" />,
      status: 'API Testing',
      desc: 'Testing REST API payloads, inspecting responses, headers, and authorization tokens.',
    },
    {
      name: 'VS Code',
      category: 'Tools',
      icon: <VscodeIcon className="w-8 h-8" />,
      status: 'Primary IDE',
      desc: 'Main development environment equipped with C++ and web development extensions.',
    },
    {
      name: 'IntelliJ IDEA',
      category: 'Tools',
      icon: <IntellijIcon className="w-8 h-8" />,
      status: 'Java IDE',
      desc: 'Used for Java learning, object-oriented structuring, and debugging.',
    },
    {
      name: 'HTML5',
      category: 'Frontend',
      icon: <HtmlIcon className="w-8 h-8" />,
      status: 'Semantic Web',
      desc: 'Accessible document structure, landmarks, ARIA attributes, and SEO foundations.',
    },
    {
      name: 'CSS3 / Tailwind',
      category: 'Frontend',
      icon: <CssIcon className="w-8 h-8" />,
      status: 'Responsive UI',
      desc: 'Responsive layouts, CSS grid, flexbox, animations, and modern utility styling.',
    },
  ];

  const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools'];

  const filteredTech = activeCategory === 'All'
    ? allTech
    : allTech.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="py-24 border-t border-[#3D3D3D] relative overflow-hidden bg-[#1F1F1F]">
      
      {/* 60% Dominant: Subtle Accent Background Light */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] glow-section pointer-events-none blur-[120px]" />

      <div className="w-full px-6 sm:px-12 lg:px-20 2xl:px-28 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEB084]/10 border border-[#DEB084]/30 text-[#DEB084] text-xs font-mono tracking-wider uppercase mb-3 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
              <span>Interactive Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F4F4F4]">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm sm:text-base text-[#CCCCCC] mt-2 max-w-xl">
              Completed the MERN stack path; hands-on full-stack development with a strong focus on backend engineering, REST APIs, and C++ algorithmic problem-solving.
            </p>
          </div>

          {/* 10% Accent Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#2E2E2E] border border-[#3D3D3D]">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-md shadow-[#DEB084]/25'
                      : 'text-[#CCCCCC] hover:text-[#F4F4F4] hover:bg-white/[0.05]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Continuous Floating Marquee Track */}
        <div className="relative w-full overflow-hidden py-4 mb-12 rounded-2xl border border-[#3D3D3D] bg-[#2E2E2E]/60 backdrop-blur-sm">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#1F1F1F] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#1F1F1F] to-transparent z-10 pointer-events-none" />

          <div className="flex items-center gap-6 animate-marquee w-max">
            {[...allTech, ...allTech].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#2E2E2E] border border-[#3D3D3D] hover:border-[#DEB084]/60 transition-all hover:scale-105 cursor-pointer shadow-md group"
              >
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#F4F4F4] group-hover:text-[#DEB084] transition-colors leading-none">
                    {tech.name}
                  </p>
                  <p className="text-[10px] font-mono text-[#CCCCCC] mt-1 leading-none">
                    {tech.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Unified 60-30-10 Spotlight Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(222, 176, 132, 0.16)"
                  hoverBorderColor="rgba(222, 176, 132, 0.5)"
                  className="p-5 h-full flex flex-col justify-between group hover:shadow-xl hover:shadow-black/50"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#242424] border border-[#3D3D3D] flex items-center justify-center p-2.5 shadow-inner group-hover:border-[#DEB084]/40 transition-all duration-300">
                        {tech.icon}
                      </div>

                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full border border-[#3D3D3D] bg-[#242424] text-[#DEB084]">
                        {tech.status}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#F4F4F4] tracking-tight group-hover:text-white transition-colors">
                      {tech.name}
                    </h3>

                    <p className="text-xs text-[#CCCCCC] mt-1.5 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#3D3D3D] flex items-center justify-between text-[11px] font-mono text-[#999999]">
                    <span>Category: {tech.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084] opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 3. Learning Roadmap Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-[#2E2E2E] border border-[#3D3D3D] shadow-lg shadow-black/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#DEB084] animate-pulse" />
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#DEB084] font-bold">
                My Learning Roadmap (Currently Exploring)
              </h4>
            </div>
            <p className="text-xs text-[#CCCCCC] leading-relaxed">
              Actively expanding technical horizons into <strong className="text-[#F4F4F4]">TypeScript</strong>, <strong className="text-[#F4F4F4]">Next.js</strong> (SSR &amp; Edge routing), enterprise <strong className="text-[#F4F4F4]">Java Backend patterns</strong>, and fundamental <strong className="text-[#F4F4F4]">AI/ML architectures</strong>.
            </p>
          </div>

          <span className="text-[11px] font-mono text-[#DEB084] bg-[#DEB084]/10 border border-[#DEB084]/30 px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto font-medium">
            Active Study
          </span>
        </div>

      </div>
    </section>
  );
}
