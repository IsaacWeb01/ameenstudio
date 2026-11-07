'use client';

import React, { useState } from 'react';
import { processStages } from '@/data/process';

export default function ProcessTimeline() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="process" className="band border-t border-white/10 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 lg:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-brand-orange" />
              <p className="eyebrow text-brand-orange">(06) HOW WE WORK</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              From first idea
              <br />
              <span className="serif-accent text-white/90">to final interaction.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Every great digital experience starts with a clear direction. Here&apos;s how we take a project from concept to launch.
          </p>
        </div>

        {/* Desktop Process Stages (Grid Timeline) */}
        <div className="pt-12 lg:pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processStages.map((stage, idx) => (
            <div
              key={stage.id}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                activeStage === idx
                  ? 'bg-[#1B1B19] border-brand-orange/60 shadow-[0_4px_24px_rgba(240,100,50,0.15)]'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20'
              }`}
              onMouseEnter={() => setActiveStage(idx)}
            >
              <div>
                {/* Stage Indicator & Step */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="font-mono text-sm font-bold text-brand-orange">
                    STAGE {stage.number}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange/40 group-hover:bg-brand-orange" />
                </div>

                {/* Stage Title */}
                <h3 className="text-2xl font-bold text-white mt-6">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-white/65 leading-relaxed">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[11px] font-mono uppercase text-white/40 mb-3 tracking-wider">
                  Key Steps:
                </p>
                <ul className="space-y-2">
                  {stage.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-white/80 font-mono"
                    >
                      <span className="text-brand-orange text-xs">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
