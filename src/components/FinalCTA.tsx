'use client';

import React from 'react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden border-t border-white/10 bg-[#141412]">
      {/* Expressive Background Sun Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-[-20%] -z-10 h-[min(800px,90vw)] w-[120%] max-w-[1200px] -translate-x-1/2 hero-sun opacity-60"
      />

      {/* Decorative Grid Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-15"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="shell text-center relative z-10 flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span className="eyebrow text-xs tracking-[0.14em] text-brand-orange">
            NEXT STEPS
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold tracking-[-0.03em] leading-[1.05] text-white max-w-4xl">
          <span>Let&apos;s make the</span>
          <br />
          <span>internet a little </span>
          <span className="serif-accent text-brand-orange bg-clip-text text-transparent bg-gradient-to-r from-brand-orange via-[#FF8758] to-brand-orange">
            more interesting.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-6 lg:mt-8 max-w-xl text-[clamp(1rem,1.2vw,1.25rem)] text-white/65 leading-relaxed font-normal">
          Great digital experiences don&apos;t happen by accident. Let&apos;s build something worth remembering.
        </p>

        {/* Expressive Animated CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="btn-primary text-base px-8 py-4 group shadow-[0_4px_30px_rgba(240,100,50,0.4)] hover:shadow-[0_8px_40px_rgba(240,100,50,0.6)]"
          >
            <span>Start your project</span>
            <span className="font-serif italic text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

