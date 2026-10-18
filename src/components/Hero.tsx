import React, { useState } from 'react';
import { Download, Sparkles, CheckCircle2, ChevronRight, Scissors, Terminal, Volume2, Film } from 'lucide-react';
import { InteractiveHeroCanvas } from './InteractiveHeroCanvas';
import { DOWNLOAD_CONFIG } from '../constants/download';

interface HeroProps {
  onOpenDownload: (platform?: 'windows' | 'linux', tier?: 'pro' | 'free') => void;
  onExploreDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onExploreDemo }) => {
  const [activePreviewTab, setActivePreviewTab] = useState<'concept' | 'workspace'>('concept');
  const [activeStoryCard, setActiveStoryCard] = useState<number>(1);

  return (
    <section className="relative min-h-[94vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial-gradient">
      {/* 3D Interactive Canvas Backdrop */}
      <InteractiveHeroCanvas />

      {/* Atmospheric lighting layers: Electric Lime and Lavender glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4FF54]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#A78BFA]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Impact Typography matching Screenshot 1 */}
          <div className="lg:col-span-6 space-y-6 text-left relative z-20">
            
            {/* Eyebrow matching image: • YOUR FOOTAGE. A NEW DIMENSION. */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-slate-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#D4FF54] animate-pulse" />
              <span className="text-[#D4FF54] font-semibold">YOUR FOOTAGE. A NEW DIMENSION.</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">DESKTOP CLIPPER</span>
            </div>

            {/* Headline matching screenshot 1: "Long video. Short clips. Big energy." */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] text-balance">
              Long video.<br />
              Short clips.<br />
              <span className="font-serif italic font-normal text-[#D4FF54] tracking-normal inline-block pt-1">
                Big energy.
              </span>
            </h1>

            {/* Subheadline matching screenshot 1 */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-xl font-normal">
              Find the moments worth watching.<br className="hidden sm:inline" />
              Turn them into clips worth sharing.
            </p>

            {/* Multi-Platform Auto-Publish Indicator (TikTok, YouTube Shorts, Facebook Reels — NO Instagram) */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151821] border border-white/10 text-xs text-slate-300 shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF54] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF54]"></span>
              </span>
              <span className="font-semibold text-white">Auto-Publish:</span>
              <div className="flex items-center gap-2">
                {/* TikTok */}
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#00f2fe] bg-black/60 px-2 py-0.5 rounded border border-[#00f2fe]/30 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.69 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.33-6.33V9.08a8.16 8.16 0 0 0 4.92 1.62v-3.5a4.85 4.85 0 0 1-1-.51z"/>
                  </svg>
                  TikTok
                </span>
                {/* YouTube Shorts */}
                <span className="flex items-center gap-1 font-mono text-[11px] text-red-400 bg-black/60 px-2 py-0.5 rounded border border-red-500/30 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Shorts
                </span>
                {/* Facebook Reels */}
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#1877F2] bg-black/60 px-2 py-0.5 rounded border border-[#1877F2]/30 hover:scale-105 transition-transform">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook Reels
                </span>
              </div>
            </div>

            {/* Primary & Secondary Download CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary Windows CTA styled like the screenshot button "Let's make a clip →" */}
              <button
                onClick={() => onOpenDownload('windows', 'pro')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-[#0F1115] bg-[#D4FF54] hover:bg-[#C4F03F] active:scale-[0.98] transition-all shadow-xl shadow-[#D4FF54]/25 cursor-pointer overflow-hidden"
              >
                <Download className="w-5 h-5 text-[#0F1115] shrink-0" />
                <div className="text-left flex flex-col leading-tight">
                  <span className="font-black">Download for Windows</span>
                  <span className="text-[11px] font-mono text-[#0F1115] opacity-80">64-bit .exe · {DOWNLOAD_CONFIG.windows.size}</span>
                </div>
              </button>

              {/* Secondary Linux CTA */}
              <button
                onClick={() => onOpenDownload('linux', 'pro')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full font-semibold text-base text-slate-200 bg-[#161922] hover:bg-[#1E222D] border border-white/10 hover:border-[#D4FF54]/40 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-[#D4FF54]" />
                <div className="text-left flex flex-col leading-tight">
                  <span>Download for Linux</span>
                  <span className="text-[11px] font-mono text-slate-400">.AppImage · {DOWNLOAD_CONFIG.linux.size}</span>
                </div>
              </button>
            </div>

            {/* Trust checklist matching Screenshot 1 */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF54]" />
                <span>No watermark</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF54]" />
                <span>Fully editable timeline</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4FF54]" />
                <span>Built on OpenShorts</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span>Free Edition &amp; $129 Pro PayPal unlock</span>
              </span>
            </div>

          </div>

          {/* Right Column: Visual Composition directly inspired by Screenshot 1 & Screenshot 2 */}
          <div className="lg:col-span-6 relative z-10">
            
            {/* View Mode Toggle: Concept Preview vs Live Workspace */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#D4FF54]" />
                <span>THE CREATIVE POSSIBILITIES</span>
              </div>
              
              <div className="flex items-center gap-1 bg-[#13151A] p-1 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setActivePreviewTab('concept')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    activePreviewTab === 'concept'
                      ? 'bg-[#D4FF54] text-[#0F1115] font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Concept Preview
                </button>
                <button
                  onClick={() => setActivePreviewTab('workspace')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    activePreviewTab === 'workspace'
                      ? 'bg-[#D4FF54] text-[#0F1115] font-bold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Desktop Workspace
                </button>
              </div>
            </div>

            {/* TAB 1: CONCEPT PREVIEW (Exact match to Screenshot 1) */}
            {activePreviewTab === 'concept' && (
              <div className="relative w-full rounded-3xl bg-[#13151A]/95 border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl overflow-hidden min-h-[460px] flex flex-col justify-between">
                
                {/* Floating Waveform Pill on left */}
                <div className="absolute top-1/2 left-3 sm:left-4 -translate-y-1/2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0F1115]/90 border border-white/10 shadow-2xl backdrop-blur-md">
                  <span className="text-[#A78BFA] text-xs font-mono">|||</span>
                  <div className="flex items-center gap-1 h-6">
                    {[16, 24, 12, 28, 20, 32, 18, 24].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${h}px` }}
                        className="w-1 bg-[#A78BFA] rounded-full animate-pulse"
                      />
                    ))}
                  </div>
                </div>

                {/* Main 3D Card Stack */}
                <div className="relative mx-auto w-full max-w-[310px] aspect-[9/14] flex items-center justify-center my-2">
                  
                  {/* Background Card 1 (Purple card tilted left) */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2D2240] to-[#15121F] border border-[#A78BFA]/30 -rotate-6 translate-x-[-28px] opacity-60 scale-95 flex flex-col justify-between p-4 shadow-xl">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>PODCAST → SHORT</span>
                      <span>00:16</span>
                    </div>
                    <div className="text-center font-serif italic text-lg text-slate-300">
                      Wait for the twist.
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">9:16</div>
                  </div>

                  {/* Background Card 3 (Bronze card tilted right) */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2E2822] to-[#171410] border border-amber-500/20 rotate-6 translate-x-[28px] opacity-60 scale-95 flex flex-col justify-between p-4 shadow-xl">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>STREAM → STORY</span>
                      <span>00:36</span>
                    </div>
                    <div className="text-center font-serif italic text-lg text-slate-300">
                      Every single feel.
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">9:16</div>
                  </div>

                  {/* Center Foreground Card: Electric Lime Card matching screenshot 1 */}
                  <div className="relative z-10 w-full h-full rounded-2xl bg-gradient-to-b from-[#E2FFA0] via-[#D4FF54] to-[#C0F538] text-[#0F1115] p-5 shadow-2xl flex flex-col justify-between border border-white/40">
                    
                    {/* Card Top Row */}
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider text-[#1F260D]">
                      <span className="flex items-center gap-1">
                        <Scissors className="w-3.5 h-3.5" />
                        STREAM → HIGHLIGHT
                      </span>
                      <span>00:28</span>
                    </div>

                    {/* Card Center 3D Geometry */}
                    <div className="relative my-auto flex flex-col items-center justify-center py-2">
                      {/* Stylized Torus / Prism */}
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-4 border-[#3D5200]/30 animate-spin" style={{ animationDuration: '15s' }} />
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2D3E00]/20 to-transparent flex items-center justify-center backdrop-blur-xs">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-[#9FB84A] shadow-lg" />
                        </div>
                      </div>

                      <div className="text-center mt-3">
                        <span className="text-[10px] font-mono tracking-widest text-[#3B4C0A] uppercase block font-bold">
                          TURN THE ORDINARY INTO
                        </span>
                        <h4 className="font-serif italic text-2xl font-black text-[#0F1115] leading-tight">
                          Perfectly unplanned.
                        </h4>
                        <p className="text-[11px] text-[#2C3807] font-medium mt-1">
                          Keep the reaction. Land the punchline.
                        </p>
                      </div>
                    </div>

                    {/* Card Bottom Progress Bar with Scissors */}
                    <div className="pt-2 border-t border-[#1F260D]/15 flex items-center justify-between text-[11px] font-mono">
                      <span>9:16</span>
                      <div className="flex-1 mx-3 h-1 bg-[#1F260D]/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-[#0F1115] rounded-full" />
                      </div>
                      <Scissors className="w-3.5 h-3.5 text-[#0F1115]" />
                    </div>

                  </div>

                </div>

                {/* Floating Bottom Right Badge: Context-aware sound */}
                <div className="absolute bottom-16 right-4 sm:right-6 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0F1115]/95 border border-white/10 shadow-2xl backdrop-blur-md">
                  <div className="w-5 h-5 rounded-full bg-[#D4FF54] flex items-center justify-center text-[#0F1115]">
                    <Volume2 className="w-3 h-3" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-slate-400 uppercase block">THE FINISHING TOUCH</span>
                    <span className="text-xs font-bold text-white">Context-aware sound</span>
                  </div>
                </div>

                {/* Bottom Story Tabs from Screenshot 1 */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setActiveStoryCard(0)}
                      className={`transition-colors cursor-pointer ${activeStoryCard === 0 ? 'text-white font-bold' : 'hover:text-white'}`}
                    >
                      01 The story
                    </button>
                    <button
                      onClick={() => setActiveStoryCard(1)}
                      className={`transition-colors cursor-pointer relative pb-1 ${activeStoryCard === 1 ? 'text-white font-bold' : 'hover:text-white'}`}
                    >
                      02 The reaction
                      {activeStoryCard === 1 && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4FF54] rounded-full" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveStoryCard(2)}
                      className={`transition-colors cursor-pointer ${activeStoryCard === 2 ? 'text-white font-bold' : 'hover:text-white'}`}
                    >
                      03 The feeling
                    </button>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-slate-500">
                    <span>←</span>
                    <span>||</span>
                    <span>→</span>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: LIVE DESKTOP WORKSPACE (Exact match to Screenshot 2) */}
            {activePreviewTab === 'workspace' && (
              <div className="relative w-full rounded-3xl bg-[#0F1115] border border-white/10 shadow-2xl p-4 sm:p-6 backdrop-blur-xl overflow-hidden min-h-[460px] flex flex-col justify-between">
                
                {/* Desktop App Top Nav */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs text-slate-400">
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-white font-bold">Home</span>
                    <span>&gt;</span>
                    <span className="text-white font-semibold">Workspace</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-[#A78BFA] animate-ping" />
                    <span className="text-slate-300 font-mono">5 jobs running</span>
                  </div>
                </div>

                {/* Project File Info */}
                <div className="py-2 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#D4FF54] font-bold block">GAMING / 9:16</span>
                    <h4 className="text-xs sm:text-sm font-mono font-medium text-slate-200 truncate max-w-[260px] sm:max-w-md">
                      2900890013-220476955-c18baac1-6517.mp4
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400">18:16 · 1920 × 1080 · 5 highlights</span>
                  </div>
                  <button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4FF54]/40 text-xs text-slate-200 font-mono flex items-center gap-1.5 cursor-pointer">
                    <Scissors className="w-3.5 h-3.5 text-[#D4FF54]" />
                    <span>Manual cut</span>
                  </button>
                </div>

                {/* Lavender Spectral Audio Waveform (Matching Screenshot 2) */}
                <div className="bg-[#141720] rounded-xl p-3 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono flex items-center gap-1.5">
                      <span className="text-[#A78BFA] font-bold">|||</span>
                      Video energy
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">Audio intensity · selected moments</span>
                  </div>

                  {/* Waveform track with purple highlighted segments */}
                  <div className="h-10 bg-[#0C0E13] rounded-lg p-2 flex items-center justify-between gap-1 relative overflow-hidden">
                    {/* Purple highlight segment overlays */}
                    <div className="absolute left-[25%] width-[18%] inset-y-1 bg-[#A78BFA]/20 border-x border-[#A78BFA]/50 rounded pointer-events-none" />
                    <div className="absolute left-[65%] width-[15%] inset-y-1 bg-[#A78BFA]/20 border-x border-[#A78BFA]/50 rounded pointer-events-none" />

                    {Array.from({ length: 42 }).map((_, i) => {
                      const heights = [10, 15, 30, 45, 80, 95, 40, 20, 60, 85, 90, 75, 50, 25, 40, 70, 95, 60, 30, 45, 80, 90, 60, 40, 75, 90, 35, 20, 50, 85, 95, 70, 40, 60, 80, 90, 50, 30, 45, 60, 40, 25];
                      const h = heights[i % heights.length];
                      const isHighlighted = (i >= 10 && i <= 18) || (i >= 26 && i <= 33);
                      return (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-full rounded-full transition-all ${
                            isHighlighted ? 'bg-[#A78BFA]' : 'bg-slate-700/60'
                          }`}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>00:00</span>
                    <span>18:16</span>
                  </div>
                </div>

                {/* Selected Moments Cards (Matching Screenshot 2: 01, 02, 03) */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white font-mono">Selected moments</span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Ready
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Card 01 */}
                    <div className="bg-[#141720] rounded-xl p-3 border border-[#D4FF54]/30 flex flex-col justify-between min-h-[95px]">
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-black/40 w-fit">01</span>
                      <div className="text-center py-1">
                        <Film className="w-5 h-5 text-[#A78BFA] mx-auto mb-1" />
                        <span className="text-[10px] font-mono text-slate-300 block">Rendering segment 2/4</span>
                      </div>
                    </div>

                    {/* Card 02 */}
                    <div className="bg-[#141720] rounded-xl p-3 border border-white/5 flex flex-col justify-between min-h-[95px]">
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-black/40 w-fit">02</span>
                      <div className="text-center py-1">
                        <Film className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                        <span className="text-[10px] font-mono text-slate-400 block">Waiting to render</span>
                      </div>
                    </div>

                    {/* Card 03 */}
                    <div className="bg-[#141720] rounded-xl p-3 border border-white/5 flex flex-col justify-between min-h-[95px]">
                      <span className="text-[10px] font-mono text-slate-400 px-1.5 py-0.5 rounded bg-black/40 w-fit">03</span>
                      <div className="text-center py-1">
                        <Film className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                        <span className="text-[10px] font-mono text-slate-400 block">Waiting to render</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
