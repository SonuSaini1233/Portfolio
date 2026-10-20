import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sentNotice, setSentNotice] = useState(false);
  const [activeTab, setActiveTab] = useState('form'); // 'form' | 'terminal'

  // Terminal state
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'Welcome to Sonu Saini\'s Interactive Developer Shell (v1.0)' },
    { type: 'system', text: 'Type a command or click a quick shortcut below:' },
  ]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#DEB084', '#CFA175', '#E8C5A2', '#FFFFFF'],
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#DEB084', '#CFA175', '#E8C5A2', '#FFFFFF'],
    });
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  const runTerminalCmd = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${cmd}` }];

    if (trimmed === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    }

    if (trimmed === 'help' || trimmed === 'sonu --help') {
      newLogs.push({
        type: 'output',
        text: 'Available commands:\n  sonu --skills     View technical stack\n  sonu --projects   List featured projects\n  sonu --education  Academic background\n  sonu --socials    GitHub, LinkedIn, LeetCode links\n  clear             Clear shell',
      });
    } else if (trimmed === 'skills' || trimmed === 'sonu --skills') {
      newLogs.push({
        type: 'output',
        text: 'Core: C++ (DSA), JavaScript (ES6+), React, Node.js, Express.js\nDatabases: MongoDB, MySQL, Firebase\nTools: Git, GitHub, Postman, VS Code',
      });
    } else if (trimmed === 'projects' || trimmed === 'sonu --projects') {
      newLogs.push({
        type: 'output',
        text: '1. SyncFile (MERN + Firebase) -> Cross-device file streaming\n2. Paste App (React + Vite) -> Modern markdown & snippet manager\n3. Cropzora (AgriTech + API) -> Smart crop monitoring telemetry',
      });
    } else if (trimmed === 'education' || trimmed === 'sonu --education') {
      newLogs.push({
        type: 'output',
        text: 'Degree: Bachelor of Computer Applications (BCA)\nCollege: Jaipur National University (2nd Year, Expected 2028)\nEvents: Smart India Hackathon (SIH 2026)',
      });
    } else if (trimmed === 'socials' || trimmed === 'sonu --socials') {
      newLogs.push({
        type: 'output',
        text: `GitHub:   ${PERSONAL_INFO.github}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nLeetCode: ${PERSONAL_INFO.leetcode}`,
      });
    } else {
      newLogs.push({
        type: 'error',
        text: `Command not found: "${cmd}". Type "help" or click one of the pills below.`,
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <section id="contact" className="py-24 border-t border-[#3D3D3D] relative overflow-hidden bg-[#1F1F1F]">
      {/* 60% Dominant: Atmospheric Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-section pointer-events-none blur-[120px]" />

      <div className="w-full px-6 sm:px-12 lg:px-20 2xl:px-28 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DEB084]/10 border border-[#DEB084]/30 text-[#DEB084] text-xs font-mono tracking-wider uppercase mb-3 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F4F4]">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base text-[#CCCCCC] mt-2 max-w-xl leading-relaxed">
            Interested in software development, backend engineering, and building useful applications. Open to meaningful collaborations, internships, and conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Profiles (5 Cols - 30% Secondary Surfaces) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Spotlight Card */}
            <SpotlightCard
              spotlightColor="rgba(222, 176, 132, 0.16)"
              hoverBorderColor="rgba(222, 176, 132, 0.5)"
              className="p-6 space-y-3 shadow-xl shadow-black/40"
            >
              <span className="text-xs font-mono uppercase text-[#DEB084] tracking-wider font-semibold">
                Direct Email
              </span>
              <p className="text-base sm:text-lg font-medium text-[#F4F4F4] break-all">
                {PERSONAL_INFO.email}
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-md shadow-[#DEB084]/25 transition-all hover:scale-[1.02]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#1F1F1F]" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium text-[#F4F4F4] bg-[#242424] border border-[#3D3D3D] hover:border-[#DEB084]/60 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#DEB084]" />
                      <span className="text-[#DEB084]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#CCCCCC]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </SpotlightCard>

            {/* Profiles (30% Secondary Surface) */}
            <div className="rounded-2xl bg-[#2E2E2E] border border-[#3D3D3D] p-6 space-y-3 shadow-xl shadow-black/40">
              <span className="text-xs font-mono uppercase text-[#CCCCCC] tracking-wider font-semibold">
                Online Profiles
              </span>

              <div className="space-y-2 pt-1">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#3D3D3D] hover:border-[#DEB084]/50 transition-all text-xs text-[#F4F4F4] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#2E2E2E] border border-[#3D3D3D] flex items-center justify-center text-white">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-[#DEB084] transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#3D3D3D] hover:border-[#DEB084]/50 transition-all text-xs text-[#F4F4F4] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#DEB084]/15 border border-[#DEB084]/30 flex items-center justify-center text-[#DEB084]">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-[#DEB084] transition-colors" />
                </a>

                {/* LeetCode */}
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-[#242424] hover:bg-[#2A2A2A] border border-[#3D3D3D] hover:border-[#DEB084]/50 transition-all text-xs text-[#F4F4F4] group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#2E2E2E] border border-[#3D3D3D] flex items-center justify-center text-[#DEB084]">
                      <LeetCodeIcon className="w-4 h-4" />
                    </div>
                    <span>LeetCode</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#CCCCCC] group-hover:text-[#DEB084] transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Working Message Form & Developer Shell Tabs (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#2E2E2E] border border-[#3D3D3D] p-6 sm:p-8 shadow-xl shadow-black/40">
            {/* Header with Tab switcher */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#3D3D3D]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#DEB084]" />
                <h3 className="text-base font-semibold text-[#F4F4F4] tracking-tight">
                  {activeTab === 'form' ? 'Send a Message' : 'Interactive Shell'}
                </h3>
              </div>

              <div className="flex items-center gap-1 bg-[#242424] p-1 rounded-xl border border-[#3D3D3D]">
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    activeTab === 'form'
                      ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-sm'
                      : 'text-[#CCCCCC] hover:text-white'
                  }`}
                >
                  Form
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('terminal')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                    activeTab === 'terminal'
                      ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-sm'
                      : 'text-[#CCCCCC] hover:text-white'
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>Shell CLI</span>
                </button>
              </div>
            </div>

            {/* TAB 1: Working Form */}
            {activeTab === 'form' && (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-[#CCCCCC] mb-1.5">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#242424] border border-[#3D3D3D] focus:border-[#DEB084] focus:outline-none text-xs text-[#F4F4F4] placeholder-[#888888] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-[#CCCCCC] mb-1.5">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#242424] border border-[#3D3D3D] focus:border-[#DEB084] focus:outline-none text-xs text-[#F4F4F4] placeholder-[#888888] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-[#CCCCCC] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share a project idea, question, or note..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#242424] border border-[#3D3D3D] focus:border-[#DEB084] focus:outline-none text-xs text-[#F4F4F4] placeholder-[#888888] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-md shadow-[#DEB084]/25 hover:shadow-[#DEB084]/45 transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <Send className="w-3.5 h-3.5 text-[#1F1F1F]" />
                  <span>Send via Email Client</span>
                </button>

                {sentNotice && (
                  <div className="p-3 rounded-lg bg-[#DEB084]/15 border border-[#DEB084]/35 text-xs text-[#DEB084] mt-2 font-medium">
                    Email client opened with prefilled message directed to {PERSONAL_INFO.email}.
                  </div>
                )}
              </form>
            )}

            {/* TAB 2: Interactive Developer Terminal */}
            {activeTab === 'terminal' && (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#1F1F1F] border border-[#3D3D3D] h-56 overflow-y-auto space-y-2">
                  {terminalLogs.map((log, i) => (
                    <div key={i} className="leading-relaxed">
                      {log.type === 'system' && (
                        <p className="text-[#999999]">{log.text}</p>
                      )}
                      {log.type === 'user' && (
                        <p className="text-[#DEB084] font-bold">{log.text}</p>
                      )}
                      {log.type === 'output' && (
                        <pre className="text-[#F4F4F4] whitespace-pre-wrap">{log.text}</pre>
                      )}
                      {log.type === 'error' && (
                        <p className="text-rose-400">{log.text}</p>
                      )}
                    </div>
                  ))}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (terminalInput.trim()) runTerminalCmd(terminalInput);
                  }}
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#1F1F1F] border border-[#3D3D3D]"
                >
                  <span className="text-[#DEB084] font-bold pl-2">$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => setTerminalInput(e.target.value)}
                    placeholder="Try 'help', 'skills', 'projects'..."
                    className="flex-1 bg-transparent text-xs text-[#F4F4F4] focus:outline-none placeholder-[#888888]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-lg bg-[#2E2E2E] hover:bg-[#3D3D3D] text-white text-[11px] transition-colors border border-[#3D3D3D]"
                  >
                    Run
                  </button>
                </form>

                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px]">
                  <span className="text-[#999999] text-[10px]">Shortcuts:</span>
                  {['skills', 'projects', 'education', 'socials', 'clear'].map((cmd) => (
                    <button
                      key={cmd}
                      type="button"
                      onClick={() => runTerminalCmd(cmd)}
                      className="px-2 py-0.5 rounded bg-[#242424] hover:bg-[#DEB084]/20 text-[#CCCCCC] hover:text-[#DEB084] border border-[#3D3D3D] transition-colors"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
