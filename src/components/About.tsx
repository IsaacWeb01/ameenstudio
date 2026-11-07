'use client';

import React from 'react';
import { studioInfo } from '@/data/studio';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait with Grayscale Hover */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0C0C0C] group">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="/images/al-ameen.jpg"
                  alt="Al-Ameen Tijani"
                  className="w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              </div>
              <div className="p-6 border-t border-white/10 bg-black flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-bold text-white text-lg">Al-Ameen Tijani</h3>
                  <p className="text-xs font-mono text-brand-orange mt-0.5">Founder · Framer &amp; Motion</p>
                </div>
                <span className="text-xs font-mono text-white/50">Based in Canada</span>
              </div>
            </div>
          </div>

          {/* Minimal Punchy Bio */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs text-brand-orange uppercase tracking-wider">(03) BEHIND THE STUDIO</p>
            <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-white leading-snug">
              Small studio.<br />
              <span className="text-brand-orange">Thoughtful execution.</span>
            </h2>
            <p className="text-white/70 font-body text-base sm:text-lg leading-relaxed">
              I'm an independent Framer developer and motion designer collaborating directly with ambitious startups and modern brands worldwide.
            </p>
            <p className="text-white/50 font-body text-sm leading-relaxed">
              No account managers or delegated layers. Working independently lets me stay close to every interaction, optimize every keyframe, and ensure the finished product performs flawlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-sans font-bold text-white text-sm">Direct Partnership</div>
                <div className="text-xs text-white/40 mt-1">Direct communication with your creator.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-sans font-bold text-white text-sm">Purposeful Motion</div>
                <div className="text-xs text-white/40 mt-1">Animations that clarify and convert.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-sans font-bold text-white text-sm">Clean Precision</div>
                <div className="text-xs text-white/40 mt-1">Framer CMS and fluid responsive builds.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
