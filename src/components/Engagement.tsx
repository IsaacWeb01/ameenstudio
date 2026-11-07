'use client';

import React from 'react';
import { engagementOptions } from '@/data/engagement';

export default function Engagement() {
  return (
    <section id="options" className="band border-t border-white/10 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 lg:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-brand-orange" />
              <p className="eyebrow text-brand-orange">(07) LET&apos;S BUILD SOMETHING</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Different ideas.
              <br />
              <span className="serif-accent text-white/90">One thoughtful approach.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Tailored engagement models designed to meet your project goals, scope, and digital ambitions.
          </p>
        </div>

        {/* 3 Options Grid */}
        <div className="pt-12 lg:pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagementOptions.map((option) => (
            <div
              key={option.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                option.featured
                  ? 'bg-[#181816] border-brand-orange shadow-[0_8px_32px_rgba(240,100,50,0.18)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/25'
              }`}
            >
              {option.featured && (
                <div className="absolute -top-3.5 left-8 px-3.5 py-1 rounded-full bg-brand-orange text-[#111110] text-[11px] font-mono font-bold uppercase tracking-wider">
                  Most Comprehensive
                </div>
              )}

              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="font-mono text-xs text-brand-orange font-bold uppercase">
                    OPTION ({option.number})
                  </span>
                  <span className="text-xs font-mono text-white/40">Custom Quote</span>
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {option.title}
                </h3>
                <p className="text-xs font-mono text-brand-orange mt-1">
                  {option.subtitle}
                </p>

                <p className="mt-4 text-sm text-white/65 leading-relaxed">
                  {option.description}
                </p>

                {/* Scope list */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="eyebrow text-white/40 text-[11px] mb-4">
                    WHAT&apos;S INCLUDED:
                  </p>
                  <ul className="space-y-2.5">
                    {option.scope.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs text-white/80"
                      >
                        <span className="text-brand-orange mt-0.5 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className={`w-full py-3.5 px-6 rounded-full font-medium text-sm flex items-center justify-between transition-all duration-300 ${
                    option.featured
                      ? 'bg-brand-orange text-[#111110] hover:bg-[#FF8758] shadow-[0_4px_20px_rgba(240,100,50,0.3)]'
                      : 'border border-white/20 bg-white/5 text-white hover:border-brand-orange hover:text-brand-orange'
                  }`}
                >
                  <span>Discuss your project</span>
                  <span className="font-serif italic text-base">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
