'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { portfolioProjects, Project } from '@/data/portfolio';

const CATEGORIES = ['All', 'SaaS & AI', 'FinTech', 'E-Commerce', 'Brand & Web'];

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'SaaS & AI') {
      return (
        project.category.includes('AI') ||
        project.category.includes('SaaS') ||
        project.industry.includes('Technology')
      );
    }
    if (activeCategory === 'FinTech') {
      return project.category.includes('Finance') || project.category.includes('FinTech');
    }
    if (activeCategory === 'E-Commerce') {
      return (
        project.category.includes('Commerce') ||
        project.category.includes('Skincare') ||
        project.category.includes('Cosmetics')
      );
    }
    if (activeCategory === 'Brand & Web') {
      return (
        project.category.includes('Real Estate') ||
        project.category.includes('Mobility') ||
        project.category.includes('Architecture') ||
        project.category.includes('Energy')
      );
    }
    return true;
  });

  return (
    <section id="work" className="band border-t border-white/10 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 lg:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-brand-orange" />
              <p className="eyebrow text-brand-orange">(01) SELECTED WORK</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Selected projects.
              <br />
              <span className="serif-accent text-white/90">Thoughtfully brought to life.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            A collection of digital experiences built around strong visual direction, purposeful interactions and attention to detail.
          </p>
        </div>

        {/* Filter Bar & View Toggle */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-8">
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-orange text-[#111110] font-semibold shadow-[0_2px_12px_rgba(240,100,50,0.3)]'
                    : 'bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/10 text-xs font-mono text-white/60">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                viewMode === 'grid' ? 'bg-white/15 text-white' : 'hover:text-white'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('editorial')}
              className={`px-3 py-1.5 rounded-full transition-colors ${
                viewMode === 'editorial' ? 'bg-white/15 text-white' : 'hover:text-white'
              }`}
            >
              Index
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Editorial Index / Table View (Snapra-inspired) */}
        {viewMode === 'editorial' && (
          <div className="divide-y divide-white/10 pt-4">
            <div className="hidden lg:grid grid-cols-[80px_minmax(0,1.5fr)_1fr_120px_100px] py-4 text-xs font-mono uppercase text-white/40 tracking-wider">
              <span>No.</span>
              <span>Project / Overview</span>
              <span>Industry / Category</span>
              <span>Platform</span>
              <span className="text-right">Live Link</span>
            </div>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-[80px_minmax(0,1.5fr)_1fr_120px_100px] items-start lg:items-center gap-4 transition-colors hover:bg-white/[0.02]"
              >
                <span className="font-mono text-sm text-brand-orange">{project.number}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/60 mt-1 max-w-lg line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="text-sm text-white/70">
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                    {project.category}
                  </span>
                </div>
                <div className="font-mono text-xs text-white/50 uppercase">
                  {project.platform}
                </div>
                <div className="lg:text-right">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-orange hover:text-[#FF8758] transition-colors"
                  >
                    <span>Visit</span>
                    <span className="font-serif italic text-base">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-[#1B1B19]/70 border border-white/10 overflow-hidden transition-all duration-500 hover:border-brand-orange/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
      {/* Mockup Preview Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#111110]">
        <img
          src={project.image}
          alt={project.previewImageAlt}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-full bg-[#111110]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white/80">
            {project.number} · {project.platform}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-brand-orange text-[#111110] font-bold text-[10px] tracking-wider uppercase">
            {project.year}
          </span>
        </div>

        {/* Hover Overlay with Live Action */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-xs font-mono text-brand-orange font-semibold flex items-center gap-1">
            Launch Live Website <span className="font-serif text-sm">↗</span>
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono uppercase text-brand-orange tracking-wider">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-brand-orange transition-colors duration-300">
            {project.name}
          </h3>

          <p className="mt-2 text-sm text-white/60 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50"
              >
                #{tag}
              </span>
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-mono font-medium text-white/80 group-hover:text-brand-orange transition-colors"
            aria-label={`Visit live site for ${project.name}`}
          >
            <span>Live Site</span>
            <span className="font-serif italic text-base">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
