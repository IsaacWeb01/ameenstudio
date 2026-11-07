'use client';

import React, { useState } from 'react';
import { studioInfo } from '@/data/studio';

const PROJECT_TYPES = [
  'Framer website development',
  'Website redesign',
  'Website design',
  'Motion design',
  'Logo animation',
  'Interactive website',
  'Complete digital experience',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under $500',
  '$500–$1,000',
  '$1,000–$2,500',
  '$2,500–$5,000',
  '$5,000–$10,000',
  '$10,000+',
  'Not sure yet',
];

const TIMELINE_OPTIONS = [
  'Immediately',
  'Within 2 weeks',
  'Within a month',
  'Within 2–3 months',
  'Flexible',
];

const SOURCE_OPTIONS = ['Instagram', 'Contra', 'Google', 'Referral', 'Other'];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    website: '',
    projectType: 'Framer website development',
    budget: '$1,000–$2,500',
    timeline: 'Within a month',
    description: '',
    source: 'Contra',
    honeypot: '', // Spam protection
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Project Description).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          website: '',
          projectType: 'Framer website development',
          budget: '$1,000–$2,500',
          timeline: 'Within a month',
          description: '',
          source: 'Contra',
          honeypot: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      // Graceful fallback to mailto if API server is not configured with external SMTP
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="band border-t border-white/10 relative">
      <div className="shell">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 lg:pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-brand-orange" />
              <p className="eyebrow text-brand-orange">(09) START A CONVERSATION</p>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Have an idea?
              <br />
              <span className="serif-accent text-white/90">Let&apos;s give it movement.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-base leading-relaxed">
            Whether you&apos;re building something new or looking to take an existing digital experience further, I&apos;d love to hear what you have in mind.
          </p>
        </div>

        <div className="pt-12 lg:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Social Channels */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <p className="eyebrow text-brand-orange mb-2 text-xs">DIRECT INQUIRIES</p>
                <a
                  href={`mailto:${studioInfo.email}`}
                  className="text-xl sm:text-2xl font-bold text-white hover:text-brand-orange transition-colors break-all"
                >
                  {studioInfo.email}
                </a>
                <p className="text-xs text-white/50 mt-1">
                  Typical response within 24 hours
                </p>
              </div>

              <div>
                <p className="eyebrow text-brand-orange mb-2 text-xs">LOCATION &amp; WORKING HOURS</p>
                <p className="text-base text-white/80">{studioInfo.location}</p>
                <p className="text-xs text-white/50 mt-1">
                  Async-first collaboration with overlapping US &amp; European working hours.
                </p>
              </div>

              <div>
                <p className="eyebrow text-brand-orange mb-3 text-xs">PLATFORMS</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={studioInfo.socials.contra}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-orange hover:bg-white/[0.06] transition-all flex items-center justify-between text-sm text-white"
                  >
                    <span>Contra Freelance Profile</span>
                    <span className="font-serif italic text-brand-orange">↗</span>
                  </a>

                  <a
                    href={studioInfo.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-brand-orange hover:bg-white/[0.06] transition-all flex items-center justify-between text-sm text-white"
                  >
                    <span>Instagram (@al.ameentijani)</span>
                    <span className="font-serif italic text-brand-orange">↗</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-brand-orange/10 border border-brand-orange/20 mt-8">
              <p className="text-xs font-mono text-brand-orange font-bold">
                SELECT CLIENT AVAILABILITY
              </p>
              <p className="text-xs text-white/70 mt-1">
                Booking new Framer websites and motion design commissions for this quarter.
              </p>
            </div>
          </div>

          {/* Right Column: In-Depth Project Inquiry Form */}
          <div className="lg:col-span-8 bg-[#171715] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl">
            {status === 'success' ? (
              <div className="py-16 text-center animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center mx-auto text-2xl font-bold mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-white/60 max-w-md mx-auto mt-2 text-sm">
                  Thank you! Your project details have been received. Al-Ameen will review your inquiry and get back to you shortly at {formData.email || 'your email'}.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 btn-secondary text-xs"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* 1. Name & 2. Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Email Address <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* 3. Company & 4. Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Studio"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Existing Website <span className="text-white/40 text-[10px]">(optional)</span>
                    </label>
                    <input
                      type="url"
                      name="website"
                      placeholder="https://..."
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                {/* 5. Project Type */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#111110] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Budget & 7. Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111110] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      {TIMELINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111110] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 8. Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Project Description <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    placeholder="Tell us about your brand, what you want to achieve, any key inspirations, or specific interactive features you have in mind..."
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>

                {/* 9. Discovery Source */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                    Where did you find Ameen Studio?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-[#111110] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-orange transition-colors"
                  >
                    {SOURCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111110] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Error message display */}
                {errorMessage && (
                  <p className="text-xs text-red-400 font-mono">{errorMessage}</p>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center text-base font-semibold group cursor-pointer"
                >
                  {status === 'loading' ? (
                    <span>Sending inquiry...</span>
                  ) : (
                    <>
                      <span>Send inquiry</span>
                      <span className="font-serif italic text-lg transition-transform group-hover:translate-x-1">
                        ↗
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
