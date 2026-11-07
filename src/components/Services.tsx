'use client';

import React, { useState } from 'react';
import { servicesData } from '@/data/services';

export default function Services() {
  const [activeServiceId, setActiveServiceId] = useState<string>(servicesData[0].id);

  return (
    <section id="services" className="py-24 bg-white text-black relative">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
          <div>
            <p className="font-mono text-xs text-brand-orange uppercase tracking-wider mb-2">(02) CAPABILITIES</p>
            <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-black">
              Thoughtful design.<br />
              <span className="text-brand-orange">Motion with purpose.</span>
            </h2>
          </div>
          <p className="text-sm text-black/60 max-w-md font-body">
            We bring visual design, Framer development, and bespoke motion together to make modern brands unforgettable.
          </p>
        </div>

        <div className="divide-y divide-black/10 pt-4" id="services-accordion">
          {servicesData.map((service) => {
            const isExpanded = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className="service-item py-8 group cursor-pointer"
                onClick={() => setActiveServiceId(isExpanded ? '' : service.id)}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-bold text-black group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <span
                    className={`service-icon w-8 h-8 rounded-full border border-black/15 flex items-center justify-center text-black group-hover:border-brand-orange group-hover:text-brand-orange transition-transform duration-300 ${
                      isExpanded ? 'rotate-45 bg-black text-white' : ''
                    }`}
                  >
                    +
                  </span>
                </div>

                <div className={`accordion-content ${isExpanded ? 'is-open' : ''} mt-4`}>
                  <div className="accordion-inner pt-2 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <p className="lg:col-span-6 text-sm text-black/70 font-body leading-relaxed">
                      {service.description}
                    </p>
                    <div className="lg:col-span-6 flex flex-wrap gap-2">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono text-black/80 hover:bg-brand-orange hover:text-white transition-colors"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
