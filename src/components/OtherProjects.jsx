import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowRight, StickyNote, CloudSun, Leaf, Check, 
  Copy, CheckCircle2, AlertCircle, Droplets, Wind 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { ReactIcon, JavascriptIcon } from './TechIcons';
import { PROJECTS } from '../data/portfolioData';
import SpotlightCard from './SpotlightCard';

export default function OtherProjects({ onOpenModal, filter = 'all' }) {
  const pasteApp = PROJECTS.find((p) => p.id === 'paste-app');
  const cropzora = PROJECTS.find((p) => p.id === 'cropzora');

  const showPaste = (filter === 'all' || filter === 'paste') && Boolean(pasteApp);
  const showCrop = (filter === 'all' || filter === 'cropzora') && Boolean(cropzora);

  // Paste App Interactive State
  const [activeNoteKey, setActiveNoteKey] = useState('memoize');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const pasteNotes = {
    memoize: {
      title: 'memoize.ts',
      tag: 'TypeScript · Algorithms',
      content: `// Generic memoization cache for pure computations\nfunction memoize<T extends (...args: any[]) => any>(fn: T): T {\n  const cache = new Map<string, ReturnType<T>>();\n  return ((...args: any[]) => {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key)!;\n    const res = fn(...args);\n    cache.set(key, res);\n    return res;\n  }) as T;\n}`,
      stats: '12 lines · 348 chars',
    },
    syncArch: {
      title: 'sync_architecture.md',
      tag: 'System Design · Backend',
      content: `# SyncFile Data Flow\n1. Sender authenticates with Firebase Auth\n2. Express router generates temporary 6-char room token\n3. File buffer streams through multipart chunks\n4. Public receiver connects using token and downloads directly\n// Zero permanent storage after TTL expiration`,
      stats: '6 lines · 295 chars',
    },
    binarySearch: {
      title: 'binary_search.cpp',
      tag: 'C++ · DSA Logic',
      content: `int binarySearch(const vector<int>& nums, int target) {\n  int left = 0, right = nums.size() - 1;\n  while (left <= right) {\n    int mid = left + (right - left) / 2;\n    if (nums[mid] == target) return mid;\n    nums[mid] < target ? left = mid + 1 : right = mid - 1;\n  }\n  return -1;\n}`,
      stats: '9 lines · 264 chars',
    },
  };

  const handleCopyPasteContent = () => {
    navigator.clipboard.writeText(pasteNotes[activeNoteKey].content);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Cropzora Interactive State
  const [activeCropSample, setActiveCropSample] = useState('tomato');

  const cropSamples = {
    tomato: {
      crop: 'Tomato Foliage',
      status: 'Healthy · No Pathogen Detected',
      confidence: '98.4%',
      advisory: 'Chlorophyll levels optimal. Maintain standard 48hr drip irrigation schedule.',
      isHealthy: true,
    },
    wheat: {
      crop: 'Wheat Leaf Specimen',
      status: 'Mild Nitrogen Chlorosis',
      confidence: '93.7%',
      advisory: 'Slight yellowing detected along leaf margins. Apply recommended bio-fertilizer.',
      isHealthy: false,
    },
  };

  return (
    <div className={`grid ${filter === 'all' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-3xl mx-auto'} gap-8 items-stretch`}>
      
      {/* 1. Paste App (Charcoal + Off-White + #DEB084) */}
      {showPaste && (
        <SpotlightCard
          spotlightColor="rgba(222, 176, 132, 0.16)"
          hoverBorderColor="rgba(222, 176, 132, 0.55)"
          className="p-6 sm:p-8 flex flex-col justify-between group shadow-xl shadow-black/40"
        >
          <div className="relative z-10 space-y-5">
            {/* Header Status */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DEB084]/15 border border-[#DEB084]/35 text-[#DEB084] text-xs font-mono font-semibold">
                <StickyNote className="w-3.5 h-3.5" />
                <span>Productivity &middot; Notes Utility</span>
              </div>
              <span className="text-xs font-mono text-[#CCCCCC] bg-[#242424] border border-[#3D3D3D] px-2 py-0.5 rounded-full">
                Live on Vercel
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#F4F4F4] group-hover:text-white tracking-tight transition-colors">
                {pasteApp.title}
              </h3>
              <p className="text-xs font-mono text-[#DEB084] mt-0.5">
                {pasteApp.tagline}
              </p>
              <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 leading-relaxed">
                {pasteApp.description}
              </p>
            </div>

            {/* Problem & Solution Mini Callout */}
            <div className="rounded-xl bg-[#242424] border border-[#3D3D3D] p-3.5 text-xs text-[#CCCCCC] leading-relaxed">
              <p>
                <strong className="text-[#DEB084] font-mono">Problem Solved:</strong> Zero-friction scratchpad to quickly store, copy, and search code snippets and Markdown notes with local client storage.
              </p>
            </div>

            {/* Realistic Interactive Snippet Manager Preview */}
            <div className="rounded-xl bg-[#1F1F1F] border border-[#3D3D3D] p-3.5 space-y-2.5 shadow-inner">
              
              {/* Note Switcher Tabs */}
              <div className="flex items-center justify-between pb-2 border-b border-[#3D3D3D] gap-2 overflow-x-auto text-[11px] font-mono">
                <div className="flex items-center gap-1">
                  {Object.keys(pasteNotes).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActiveNoteKey(key)}
                      className={`px-2 py-1 rounded-md transition-all ${
                        activeNoteKey === key
                          ? 'bg-[#2E2E2E] text-[#DEB084] font-bold border border-[#DEB084]/40'
                          : 'text-[#9E9E9E] hover:text-[#CCCCCC]'
                      }`}
                    >
                      {pasteNotes[key].title}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleCopyPasteContent}
                  className="flex items-center gap-1 text-[10px] text-[#CCCCCC] hover:text-[#DEB084] transition-colors whitespace-nowrap pl-1"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3 h-3 text-[#DEB084]" />
                      <span className="text-[#DEB084]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>

              {/* Active Code / Note Display */}
              <div className="p-3 rounded-lg bg-[#242424] border border-[#3D3D3D] font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] text-[#9E9E9E] pb-1.5 mb-1.5 border-b border-[#3D3D3D]">
                  <span className="text-[#DEB084]">{pasteNotes[activeNoteKey].tag}</span>
                  <span>{pasteNotes[activeNoteKey].stats}</span>
                </div>
                <pre className="text-[11px] text-[#F4F4F4] overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-32">
                  {pasteNotes[activeNoteKey].content}
                </pre>
              </div>

            </div>

            {/* Official Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <ReactIcon className="w-3.5 h-3.5" />
                <span>React</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <JavascriptIcon className="w-3.5 h-3.5" />
                <span>JavaScript ES6+</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                Vite &middot; Local Storage
              </span>
            </div>
          </div>

          {/* Footer CTAs (10% Accent CTA in #DEB084) */}
          <div className="relative z-10 pt-6 mt-6 border-t border-[#3D3D3D] flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenModal(pasteApp)}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#CCCCCC] hover:text-[#DEB084] transition-colors"
            >
              <span>Architecture notes</span>
              <ArrowRight className="w-3 h-3 text-[#DEB084]" />
            </button>

            <div className="flex items-center gap-2">
              <a
                href={pasteApp.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-md shadow-[#DEB084]/25 transition-all hover:scale-[1.02]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3 h-3 text-[#1F1F1F]" />
              </a>

              <a
                href={pasteApp.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#CCCCCC] hover:text-white bg-[#242424] border border-[#3D3D3D] hover:border-[#DEB084]/50 transition-colors"
                aria-label="Paste App Repository"
              >
                <GithubIcon className="w-4 h-4 text-[#DEB084]" />
              </a>
            </div>
          </div>
        </SpotlightCard>
      )}

      {/* 2. Cropzora (Charcoal + Off-White + #DEB084) */}
      {showCrop && (
        <SpotlightCard
          spotlightColor="rgba(222, 176, 132, 0.16)"
          hoverBorderColor="rgba(222, 176, 132, 0.55)"
          className="p-6 sm:p-8 flex flex-col justify-between group shadow-xl shadow-black/40"
        >
          <div className="relative z-10 space-y-5">
            {/* Header Status */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#DEB084]/15 border border-[#DEB084]/35 text-[#DEB084] text-xs font-mono font-semibold">
                <Leaf className="w-3.5 h-3.5" />
                <span>AgriTech &middot; Telemetry &amp; Health</span>
              </div>
              <span className="text-xs font-mono text-[#CCCCCC] bg-[#242424] border border-[#3D3D3D] px-2 py-0.5 rounded-full">
                Live on Vercel
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#F4F4F4] group-hover:text-white tracking-tight transition-colors">
                {cropzora.title}
              </h3>
              <p className="text-xs font-mono text-[#DEB084] mt-0.5">
                {cropzora.tagline}
              </p>
              <p className="text-xs sm:text-sm text-[#CCCCCC] mt-2 leading-relaxed">
                {cropzora.description}
              </p>
            </div>

            {/* Problem & Solution Mini Callout */}
            <div className="rounded-xl bg-[#242424] border border-[#3D3D3D] p-3.5 text-xs text-[#CCCCCC] leading-relaxed">
              <p>
                <strong className="text-[#DEB084] font-mono">Problem Solved:</strong> Immediate access to accurate local meteorological forecast combined with visual disease detection to prevent crop loss.
              </p>
            </div>

            {/* Realistic AgriTech Telemetry & Leaf Inspector Preview */}
            <div className="rounded-xl bg-[#1F1F1F] border border-[#3D3D3D] p-3.5 space-y-2.5 shadow-inner">
              
              {/* Telemetry Weather Bar */}
              <div className="p-2.5 rounded-lg bg-[#242424] border border-[#3D3D3D] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#F4F4F4]">
                  <CloudSun className="w-4 h-4 text-[#DEB084]" />
                  <span>Jaipur &middot; 28&deg;C Sunny</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#CCCCCC]">
                  <span className="flex items-center gap-1 text-[#DEB084]">
                    <Droplets className="w-3 h-3" /> 62%
                  </span>
                  <span className="flex items-center gap-1 text-[#CCCCCC]">
                    <Wind className="w-3 h-3" /> 11 km/h
                  </span>
                </div>
              </div>

              {/* Sample Switcher Tabs */}
              <div className="flex items-center justify-between text-[11px] font-mono pt-1 text-[#9E9E9E]">
                <span>Simulate Leaf Inspection:</span>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveCropSample('tomato')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeCropSample === 'tomato'
                        ? 'bg-[#2E2E2E] text-[#DEB084] border border-[#DEB084]/40 font-bold'
                        : 'text-[#9E9E9E] hover:text-white'
                    }`}
                  >
                    Tomato
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCropSample('wheat')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      activeCropSample === 'wheat'
                        ? 'bg-[#2E2E2E] text-[#DEB084] border border-[#DEB084]/40 font-bold'
                        : 'text-[#9E9E9E] hover:text-white'
                    }`}
                  >
                    Wheat
                  </button>
                </div>
              </div>

              {/* Simulated Diagnostic Output */}
              <div className="p-3 rounded-lg bg-[#242424] border border-[#3D3D3D] space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#F4F4F4] font-bold flex items-center gap-1.5">
                    {cropSamples[activeCropSample].isHealthy ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#DEB084]" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-[#DEB084]" />
                    )}
                    {cropSamples[activeCropSample].crop}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#DEB084]/15 text-[#DEB084] border border-[#DEB084]/30 font-semibold">
                    {cropSamples[activeCropSample].confidence} Confidence
                  </span>
                </div>
                <p className="text-[11px] text-[#CCCCCC] leading-relaxed">
                  {cropSamples[activeCropSample].advisory}
                </p>
              </div>

            </div>

            {/* Official Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <ReactIcon className="w-3.5 h-3.5" />
                <span>React</span>
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                <JavascriptIcon className="w-3.5 h-3.5" />
                <span>JavaScript</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-[#242424] border border-[#3D3D3D] text-xs font-mono text-[#CCCCCC]">
                Weather REST API &middot; Leaf Diagnostic
              </span>
            </div>
          </div>

          {/* Footer CTAs (10% Accent CTA in #DEB084) */}
          <div className="relative z-10 pt-6 mt-6 border-t border-[#3D3D3D] flex items-center justify-between">
            <button
              type="button"
              onClick={() => onOpenModal(cropzora)}
              className="inline-flex items-center gap-1 text-xs font-medium text-[#CCCCCC] hover:text-[#DEB084] transition-colors"
            >
              <span>Architecture notes</span>
              <ArrowRight className="w-3 h-3 text-[#DEB084]" />
            </button>

            <div className="flex items-center gap-2">
              <a
                href={cropzora.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-[#1F1F1F] bg-[#DEB084] hover:bg-[#CFA175] shadow-md shadow-[#DEB084]/25 transition-all hover:scale-[1.02]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3 h-3 text-[#1F1F1F]" />
              </a>

              <a
                href={cropzora.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-[#CCCCCC] hover:text-white bg-[#242424] border border-[#3D3D3D] hover:border-[#DEB084]/50 transition-colors"
                aria-label="Cropzora Repository"
              >
                <GithubIcon className="w-4 h-4 text-[#DEB084]" />
              </a>
            </div>
          </div>
        </SpotlightCard>
      )}

    </div>
  );
}
