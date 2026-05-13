'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (name: string) => setActiveDropdown(name)
  const handleMouseLeave = () => setActiveDropdown(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-navy border-b border-gold-subtle transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-gold-500 rounded-md flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/15 to-transparent" />
              <span className="relative font-serif font-bold text-gold-400 text-sm">D</span>
            </div>
            <Link href="/" className="font-serif text-xl font-bold text-white tracking-[2px] hover:text-gold-400 transition-colors">
              DWAC
            </Link>
            <span className="hidden lg:block text-xs text-gray-500 tracking-wide ml-1">Digital World Arbitration Centre</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            <Link href="/" className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">Home</Link>

            {/* About dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                About
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/about/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">About DWAC</Link>
                  <Link href="/tribunal/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Tribunal</Link>
                  <Link href="/membership-arbitrators/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Members & Arbitrators</Link>
                  <Link href="/charter/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Digital World Charter</Link>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                Services
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/dispute/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">File a Dispute</Link>
                  <Link href="/how-to-apply/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">How to Apply</Link>
                  <Link href="/rules/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Arbitration Rules</Link>
                  <Link href="/fees/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Fees</Link>
                  <Link href="/fee-calculator/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Fee Calculator</Link>
                  <Link href="/evidence-guidance/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Evidence Guidance</Link>
                  <Link href="/model-clause/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Model Clause</Link>
                  <Link href="/expertise/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Expertise</Link>
                  <div className="border-t border-gold-subtle/50 my-1" />
                  <Link href="/virtual-hearing/" className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-navy-800/60 transition-colors">Virtual Hearing Room ↗</Link>
                </div>
              )}
            </div>

            {/* Community dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('community')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                Community
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'community' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/news/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">News & Updates</Link>
                  <Link href="/resources/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Resources</Link>
                  <Link href="/members/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Members Directory</Link>
                  <Link href="/community/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">Forum</Link>
                  <Link href="/club/" className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 hover:bg-navy-800/60 transition-colors">Agent-Arbitrator Club ↗</Link>
                </div>
              )}
            </div>

            <Link href="/faq/" className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">FAQ</Link>

            <Link href="/contact/" className="ml-2 px-4 py-1.5 text-xs font-semibold tracking-wide bg-gradient-gold text-navy-900 rounded hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all">
              CONTACT
            </Link>
          </div>

          {/* Language + Auth + Mobile */}
          <div className="flex items-center gap-2">
            {/* Auth buttons — always visible */}
            <Link href="/login/" className="hidden sm:inline-block px-2.5 py-1 text-xs font-medium rounded text-gray-400 hover:text-gold-400 transition-colors">Sign In</Link>
            <Link href="/register/" className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold rounded border border-gold-500/40 text-gold-400 hover:bg-gold-500/[0.05] transition-all">Register</Link>
            <Link href="/" className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded bg-gold-500/20 text-gold-400">EN</Link>
            <Link href="/zh-cn/" className="hidden sm:inline-block px-2 py-0.5 text-xs font-medium rounded bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors">简</Link>
            <Link href="/zh-tw/" className="hidden sm:inline-block px-2 py-0.5 text-xs font-medium rounded bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors">繁</Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden flex flex-col gap-[5px] p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-400 transition-transform ${mobileOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-400 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-400 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-gold-subtle bg-navy-900/95 backdrop-blur-xl py-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-0.5">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">Home</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">About</div>
              <Link href="/about/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">About DWAC</Link>
              <Link href="/tribunal/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Tribunal</Link>
              <Link href="/membership-arbitrators/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Members & Arbitrators</Link>
              <Link href="/charter/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Digital World Charter</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">Services</div>
              <Link href="/dispute/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">File a Dispute</Link>
              <Link href="/how-to-apply/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">How to Apply</Link>
              <Link href="/rules/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Arbitration Rules</Link>
              <Link href="/fees/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Fees</Link>
              <Link href="/fee-calculator/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Fee Calculator</Link>
              <Link href="/evidence-guidance/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Evidence Guidance</Link>
              <Link href="/model-clause/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Model Clause</Link>
              <Link href="/expertise/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Expertise</Link>
              <Link href="/virtual-hearing/" onClick={() => setMobileOpen(false)} className="text-cyan-400 hover:text-cyan-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">Virtual Hearing Room ↗</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">Community</div>
              <Link href="/news/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">News & Updates</Link>
              <Link href="/resources/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Resources</Link>
              <Link href="/members/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Members Directory</Link>
              <Link href="/community/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">Forum</Link>
              <Link href="/club/" onClick={() => setMobileOpen(false)} className="text-cyan-400 hover:text-cyan-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">Agent-Arbitrator Club ↗</Link>

              <Link href="/faq/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 pt-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">FAQ</Link>

              <div className="border-t border-gold-subtle/30 mt-2 pt-3 px-3 flex gap-3">
                <Link href="/login/" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-medium border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/[0.05]">Sign In</Link>
                <Link href="/register/" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">Register</Link>
              </div>

              <Link href="/contact/" onClick={() => setMobileOpen(false)} className="mt-3 text-center px-4 py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">Contact Us</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
