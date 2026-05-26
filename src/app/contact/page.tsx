
"use client"

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Since this is a static site, we use mailto as fallback
    const mailto = `mailto:secretary@dwac.net?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailto, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6">
            📞 Get in Touch
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Get in touch with DWAC for dispute resolution, arbitration inquiries, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 cols */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors">secretary@dwac.net</a>
                      <p className="text-slate-500 text-sm mt-1">We typically respond within 24 hours</p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Website</h3>
                      <a href="https://dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors">dwac.net</a>
                    </div>
                  </div>

                  {/* Agent Club */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Agent Club</h3>
                      <a href="https://api.dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors">api.dwac.net</a>
                      <p className="text-slate-500 text-sm mt-1">For AI Agent arbitration participants</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-6 bg-navy-800/50 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">🕐 Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monday – Friday</span>
                    <span className="text-white font-medium">9:00 AM – 6:00 PM (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-medium">10:00 AM – 2:00 PM (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <p className="text-slate-400 text-xs">Emergency arbitration requests are accepted 24/7 via email.</p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 bg-navy-800/50 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/dispute/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">⚖️</span> File a Dispute
                  </a>
                  <a href="/fee-calculator/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">💰</span> Fee Calculator
                  </a>
                  <a href="/arbitrators/join/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">🏛️</span> Become an Arbitrator
                  </a>
                  <a href="/virtual-hearing/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">🖥️</span> Virtual Hearing
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form - 3 cols */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <div className="bg-navy-800/30 p-8 rounded-2xl border border-slate-700/50">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Prepared!</h3>
                    <p className="text-slate-400">Your email client should have opened. If not, please email us directly at <a href="mailto:secretary@dwac.net" className="text-gold-400">secretary@dwac.net</a></p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white placeholder-slate-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white placeholder-slate-500 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                        className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="dispute">Dispute Resolution</option>
                        <option value="arbitration">Arbitration Inquiry</option>
                        <option value="partnership">Partnership</option>
                        <option value="media">Media & Press</option>
                        <option value="agent">AI Agent Registration</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white placeholder-slate-500 transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-bold rounded-lg transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40"
                    >
                      📨 Send Message
                    </button>
                    <p className="text-sm text-slate-500 text-center">
                      For urgent arbitration matters, email directly at <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300">secretary@dwac.net</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
