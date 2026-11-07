'use client';

import React from 'react';
import { toolkitList } from '@/data/studio';

export default function ToolsMarquee() {
  const repeatedTools = [...toolkitList, ...toolkitList, ...toolkitList];

  return (
    <section className="py-16 lg:py-24 border-t border-b border-white/10 bg-[#141412] overflow-hidden">
      <div className="shell mb-10 text-center">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-4 h-px bg-brand-orange" />
          <p className="eyebrow text-brand-orange">(04) THE TOOLKIT</p>
          <span className="w-4 h-px bg-brand-orange" />
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
          Built with the right tools.{' '}
          <span className="serif-accent text-white/90">Driven by creative thinking.</span>
        </h2>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="animate-marquee flex items-center gap-4 py-2">
          {repeatedTools.map((tool, index) => (
            <div
              key={`${tool.name}-${index}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-sm whitespace-nowrap group hover:border-brand-orange/60 hover:bg-white/[0.08] transition-all duration-300 select-none"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange/60 group-hover:bg-brand-orange group-hover:scale-125 transition-all" />
              <span className="font-bold text-white text-base tracking-tight">
                {tool.name}
              </span>
              <span className="text-xs font-mono text-white/40 group-hover:text-white/60 transition-colors">
                / {tool.category}
              </span>
              {tool.badge && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                  {tool.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
