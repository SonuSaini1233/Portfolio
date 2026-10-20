import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowRight, Laptop, Smartphone, FileCheck, 
  ShieldCheck, RefreshCw, UploadCloud, Copy, Check, Radio 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { ReactIcon, NodeIcon, ExpressIcon, FirebaseIcon } from './TechIcons';
import { PROJECTS } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function FeaturedProject({ onOpenModal }) {
  const syncFile = PROJECTS.find((p) => p.id === 'syncfile');
  const [activeTab, setActiveTab] = useState('demo'); // 'demo' | 'arch' | 'security'
  const [copiedToken, setCopiedToken] = useState(false);
  const [simulatedFiles, setSimulatedFiles] = useState([
    { name: 'lecture_presentation.pdf', size: '14.2 MB', progress: 100, status: 'Ready to Stream' },
    { name: 'lab_dsa_archive.tar.gz', size: '6.8 MB', progress: 100, status: 'Ready to Stream' },
  ]);

  if (!syncFile) return null;

  const handleCopyToken = () => {
    navigator.clipboard.writeText('SYNC-8821');
    setCopiedToken(true);
    setTimeout(() => setCopiedToken(false), 2000);
  };

  const handleSimulateNewFile = () => {
    const newFile = {
      name: `project_build_v${simulatedFiles.length + 1}.zip`,
      size: '9.4 MB',
      progress: 100,
      status: 'Stream Cached',
    };
    setSimulatedFiles([newFile, ...simulatedFiles.slice(0, 2)]);
  };

  return (
    <SpotlightCard
      spotlightColor="rgba(222, 176, 132, 0.18)"
      hoverBorderColor="rgba(222, 176, 132, 0.55)"
      className="p-0 overflow-hidden shadow-2xl shadow-black/60"
    >
      {/* 60% Ambient Background Atmosphere in #DEB084 */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] glow-section pointer-events-none blur-[70px]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
        
        {/* Left: Product Information (5 Cols - 30% Secondary with 10% Accent) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DEB084]/15 border border-[#DEB084]/35 text-[#DEB084] text-xs font-mono tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084] animate-pulse" />
                <span>Flagship Project &middot; MERN Stack</span>
              </span>
              <span className="text-[11px] font-mono text-[#CCCCCC] bg-[#242424] border border-[#3D3D3D] px-2 py-0.5 rounded-full hidden sm:inline">
                Live on Vercel
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4F4F4] group-hover:text-white transition-colors">
              {syncFile.title}
            </h3>
            <p className="text-sm font-medium text-[#DEB084] mt-1 font-mono">
              {syncFile.tagline}
            </p>
            <p className="text-sm text-[#CCCCCC] mt-3 leading-relaxed">
              {syncFile.description}
            </p>
          </div>

          {/* Real Engineering Problem vs Solution Context */}
          <div className="rounded-xl bg-[#242424] border border-[#3D3D3D] p-4 space-y-3 text-xs">
            <div className="border-l-2 border-l-[#9E9E9E] pl-3 py-0.5">
              <span className="font-mono text-[11px] text-[#F4F4F4] uppercase tracking-wider block font-bold">
                The Practical Problem:
              </span>
              <p className="text-[#CCCCCC] mt-1 leading-relaxed">
                University lab machines wipe browser sessions, block personal logins, and disable physical USB pen-drives for security reasons.
              </p>
            </div>
            
            <div className="border-l-2 border-l-[#DEB084] pl-3 py-0.5">
              <span className="font-mono text-[11px] text-[#DEB084] uppercase tracking-wider block font-bold">
                Sonu's Engineering Solution:
              </span>
              <p className="text-[#CCCCCC] mt-1 leading-relaxed">
                A single authenticated user generates a temporary 6-character room token. Any recipient lab browser or mobile device can instantly stream the files via that token without logging in or exposing personal credentials.
              </p>
            </div>
          </div>

          {/* Official Tech Stack Badges */}
          <div>
            <span className="text-[11px] font-mono text-[#9E9E9E] uppercase tracking-wider block mb-2 font-semibold">
              Built With:
            </span>
            <div className="flex flex-wrap gap-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <ReactIcon className="w-3.5 h-3.5" />
                <span>React + Vite</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <NodeIcon className="w-3.5 h-3.5" />
                <span>Node.js</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <ExpressIcon className="w-3.5 h-3.5 text-white" />
                <span>Express REST</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <FirebaseIcon className="w-3.5 h-3.5" />
                <span>Firebase Auth</span>
              </span>
            </div>
          </div>

          {/* Primary Action Buttons (10% Accent CTA + 30% Secondary) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={syncFile.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-lg shadow-[#DEB084]/25 hover:shadow-[#DEB084]/45 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Launch Live App</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#1F1F1F]" />
            </a>

            <a
              href={syncFile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-[#F4F4F4] bg-[#2E2E2E] border border-[#3D3D3D] hover:border-[#DEB084]/60 hover:text-white transition-all hover:bg-[#383838]"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#DEB084]" />
              <span>GitHub Repo</span>
            </a>

            <button
              type="button"
              onClick={() => onOpenModal(syncFile)}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#CCCCCC] hover:text-[#DEB084] pl-2 transition-colors"
            >
              <span>Full Case Study</span>
              <ArrowRight className="w-3 h-3 text-[#DEB084]" />
            </button>
          </div>
        </div>

        {/* Right: High-Fidelity Web App Workspace (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#1F1F1F] border border-[#3D3D3D] p-5 shadow-2xl relative overflow-hidden group-hover:border-[#DEB084]/40 transition-all">
            
            {/* Realistic Browser Window Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-4 border-b border-[#3D3D3D] text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3D3D3D] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3D3D3D] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3D3D3D] inline-block" />
                <div className="ml-2 px-2.5 py-0.5 rounded-md bg-[#2E2E2E] border border-[#3D3D3D] text-[#CCCCCC] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
                  <span>https://sync-file-chi.vercel.app</span>
                </div>
              </div>

              {/* 10% Accent Interactive Showcase Tabs in #DEB084 */}
              <div className="flex items-center gap-1 bg-[#2E2E2E] p-0.5 rounded-xl border border-[#3D3D3D]">
                <button
                  type="button"
                  onClick={() => setActiveTab('demo')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    activeTab === 'demo'
                      ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-sm'
                      : 'text-[#CCCCCC] hover:text-white'
                  }`}
                >
                  Live Console
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('arch')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    activeTab === 'arch'
                      ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-sm'
                      : 'text-[#CCCCCC] hover:text-white'
                  }`}
                >
                  Architecture
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('security')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    activeTab === 'security'
                      ? 'bg-[#DEB084] text-[#1F1F1F] font-bold shadow-sm'
                      : 'text-[#CCCCCC] hover:text-white'
                  }`}
                >
                  Security Flow
                </button>
              </div>
            </div>

            {/* TAB 1: Live Interactive File Transfer Console */}
            {activeTab === 'demo' && (
              <div className="space-y-3.5">
                
                {/* Active Transfer Session Banner */}
                <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#DEB084]/15 border border-[#DEB084]/30 flex items-center justify-center text-[#DEB084]">
                      <Radio className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#F4F4F4]">
                        Active Transfer Room: <span className="font-mono text-[#DEB084]">#SYNC-8821</span>
                      </p>
                      <p className="text-[10px] font-mono text-[#CCCCCC]">
                        Bandwidth: <span className="text-[#DEB084]">32.4 MB/s (Direct P2P Stream)</span>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyToken}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2E2E2E] hover:bg-[#383838] border border-[#3D3D3D] text-[11px] font-mono text-[#DEB084] transition-all"
                  >
                    {copiedToken ? (
                      <>
                        <Check className="w-3 h-3 text-[#DEB084]" />
                        <span className="text-[#DEB084]">Token Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Room Token</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated File List in Queue */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#9E9E9E] px-1">
                    <span>Staged Files in Stream Buffer</span>
                    <button
                      type="button"
                      onClick={handleSimulateNewFile}
                      className="text-[#DEB084] hover:underline flex items-center gap-1"
                    >
                      <UploadCloud className="w-3 h-3" />
                      <span>Simulate Add File</span>
                    </button>
                  </div>

                  {simulatedFiles.map((file, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#2E2E2E]/80 border border-[#3D3D3D] flex items-center justify-between gap-3 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#1F1F1F] border border-[#3D3D3D] flex items-center justify-center text-[#DEB084]">
                          <FileCheck className="w-4 h-4 text-[#DEB084]" />
                        </div>
                        <div>
                          <p className="font-mono text-xs font-medium text-[#F4F4F4]">
                            {file.name}
                          </p>
                          <p className="text-[10px] font-mono text-[#9E9E9E]">
                            {file.size} &middot; <span className="text-[#CCCCCC]">{file.status}</span>
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#DEB084]/15 text-[#DEB084] border border-[#DEB084]/35">
                        100% Ready
                      </span>
                    </div>
                  ))}
                </div>

                {/* Two Device Handshake Visualization */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D] flex items-center gap-3">
                    <Laptop className="w-4 h-4 text-[#DEB084]" />
                    <div className="text-left">
                      <p className="text-xs font-medium text-[#F4F4F4]">Source (Authenticated)</p>
                      <p className="text-[10px] font-mono text-[#CCCCCC]">Firebase Auth Verified</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#242424] border border-[#3D3D3D] flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-[#DEB084]" />
                    <div className="text-left">
                      <p className="text-xs font-medium text-[#F4F4F4]">Target Lab Device</p>
                      <p className="text-[10px] font-mono text-[#DEB084]">Zero Login Required</p>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: System Architecture Flow */}
            {activeTab === 'arch' && (
              <div className="p-4 rounded-xl bg-[#242424] border border-[#3D3D3D] space-y-3 font-mono text-xs">
                <p className="text-[11px] text-[#CCCCCC] leading-relaxed">
                  End-to-end data pipeline from React client upload stream through Express router to cloud persistence:
                </p>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#2E2E2E] border border-[#3D3D3D] flex items-center justify-between">
                    <span className="text-[#DEB084]">1. Web Client (React + Vite)</span>
                    <span className="text-[#9E9E9E] text-[10px]">Chunked Multipart Streams</span>
                  </div>
                  <div className="text-center text-[#9E9E9E] text-[10px]">
                    &darr; Express Router &amp; Session Validator Middleware &uarr;
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#2E2E2E] border border-[#3D3D3D] flex items-center justify-between">
                    <span className="text-[#DEB084]">2. Backend Controller (Node.js)</span>
                    <span className="text-[#9E9E9E] text-[10px]">Room Tokens &amp; TTL Expiration</span>
                  </div>
                  <div className="text-center text-[#9E9E9E] text-[10px]">
                    &darr; Signed Cloud Storage URLs &uarr;
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#2E2E2E] border border-[#3D3D3D] flex items-center justify-between">
                    <span className="text-[#DEB084]">3. Firebase Cloud Vault</span>
                    <span className="text-[#9E9E9E] text-[10px]">Ephemeral Bucket Storage</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Security Flow */}
            {activeTab === 'security' && (
              <div className="p-4 rounded-xl bg-[#242424] border border-[#3D3D3D] space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#DEB084] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#F4F4F4]">Credential-Free Public Recipient:</h5>
                    <p className="text-[#CCCCCC] text-xs leading-relaxed mt-0.5">
                      Recipients in university computer labs never have to enter personal Google or email credentials, eliminating public keylogger exposure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <RefreshCw className="w-4 h-4 text-[#DEB084] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-[#F4F4F4]">Self-Expiring Room Tokens (TTL):</h5>
                    <p className="text-[#CCCCCC] text-xs leading-relaxed mt-0.5">
                      Transfer channels terminate automatically once the file buffer completes or after a set idle period to prevent leftover files on remote servers.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Window Status Line */}
            <div className="mt-4 pt-3 border-t border-[#3D3D3D] flex items-center justify-between text-[11px] font-mono text-[#9E9E9E]">
              <span className="flex items-center gap-1.5 text-[#DEB084]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DEB084]" />
                API Health: 100% OK
              </span>
              <span>Deployment: Vercel Production</span>
            </div>

          </div>
        </div>

      </div>
    </SpotlightCard>
  );
}
