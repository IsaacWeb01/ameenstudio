'use client';

import React, { useState } from 'react';
import { faqData } from '@/data/faq';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 border-t border-white/10 bg-black relative">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <p className="font-mono text-xs text-brand-orange uppercase tracking-wider mb-2">(04) FAQ</p>
            <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-white">
              Questions before we begin?
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-md font-body">
            Straightforward answers on working models, Framer development, and timelines.
          </p>
        </div>

        <div className="divide-y divide-white/10 pt-4 max-w-4xl mx-auto" id="faq-accordion">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="faq-item py-6 group cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="faq-toggle flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-brand-orange font-bold">
                      {item.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-sans font-bold text-white group-hover:text-brand-orange transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <span
                    className={`faq-icon w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-xs text-white/70 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-brand-orange text-black font-bold' : ''
                    }`}
                  >
                    +
                  </span>
                </div>

                <div className={`accordion-content ${isOpen ? 'is-open' : ''} mt-3 pl-12 pr-4`}>
                  <div className="accordion-inner text-sm text-white/60 font-body leading-relaxed pb-2">
                    {item.answer}
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
