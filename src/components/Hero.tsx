'use client';

import React from 'react';
import { studioInfo } from '@/data/studio';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-black"
    >
      {/* Playful Glow Backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-brand-orange/20 via-orange-500/10 to-transparent blur-[140px] rounded-full" />

      <div className="shell text-center relative z-10 flex flex-col items-center">
        {/* Playful Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span className="font-mono text-xs text-white/80 uppercase tracking-widest">
            Available for select projects · 2026
          </span>
        </div>

        {/* Bold Minimal Headline - refined scale */}
        <h1 className="text-[clamp(2.25rem,5.2vw,4.5rem)] font-sans font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl">
          Digital experiences<br />
          designed to{' '}
          <span className="text-brand-orange underline decoration-white/20 underline-offset-8">
            move.
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base sm:text-lg text-white/60 font-body leading-relaxed">
          {studioInfo.heroSubheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            <span>Start a project</span>
            <span>↗</span>
          </a>
          <a href="#work" className="btn-secondary w-full sm:w-auto">
            <span>Explore our work</span>
            <span>↓</span>
          </a>
        </div>

        {/* Location Stamp */}
        <div className="mt-14 inline-flex items-center gap-3 text-xs font-mono text-white/40">
          <span>Based in Canada</span>
          <span>·</span>
          <span>Working Worldwide</span>
        </div>
      </div>
    </section>
  );
}
