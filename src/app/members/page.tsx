'use client'

import Link from 'next/link'
import { useState } from 'react'
import { individualMembers } from '@/data/profiles'

const institutionalMembers = [
  { name: 'National University of Singapore', type: 'University', country: 'Singapore' },
  { name: 'King & Spalding LLP', type: 'Law Firm', country: 'United States' },
  { name: 'Shanghai International Arbitration Center', type: 'Chamber of Commerce', country: 'China' },
  { name: 'University of Cambridge', type: 'University', country: 'United Kingdom' },
  { name: 'Freshfields Bruckhaus Deringer', type: 'Law Firm', country: 'Germany' },
  { name: 'China Arbitration Association', type: 'NGO', country: 'China' },
]

const typeColors: Record<string, string> = {
  University: 'bg-blue-50 text-blue-700',
  'Law Firm': 'bg-purple-50 text-purple-700',
  'Chamber of Commerce': 'bg-gold-500/10 text-gold-700',
  NGO: 'bg-emerald-50 text-emerald-700',
}

const memberTypes = ['All', 'University', 'Law Firm', 'Chamber of Commerce', 'NGO']

export default function MembersPage() {
  const [tab, setTab] = useState<'individual' | 'institutional'>('individual')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')

  const filteredMembers = individualMembers.filter(m =>
    !searchQuery ||
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
    m.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredInstitutional = institutionalMembers.filter(m =>
    (selectedType === 'All' || m.type === selectedType) &&
    (!searchQuery || m.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Directory</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">Members Directory</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our growing global community of arbitration professionals and institutional partners committed to digital world dispute resolution.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-950 py-12 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">{individualMembers.length}+</p>
              <p className="text-sm text-slate-400 mt-1">Individual Members</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">{institutionalMembers.length}</p>
              <p className="text-sm text-slate-400 mt-1">Institutional Members</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">{new Set([...individualMembers.map(m=>m.location.split(', ').pop()!), ...institutionalMembers.map(m=>m.country)]).size}</p>
              <p className="text-sm text-slate-400 mt-1">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setTab('individual')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                tab === 'individual'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
              }`}
            >
              Individual Members
            </button>
            <button
              onClick={() => setTab('institutional')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                tab === 'institutional'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
              }`}
            >
              Institutional Members
            </button>
          </div>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={tab === 'individual' ? 'Search by name, expertise, location...' : 'Search by institution name...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors"
              />
            </div>
            {tab === 'institutional' && (
              <div className="flex gap-2 flex-wrap">
                {memberTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                      selectedType === type
                        ? 'bg-navy-900 text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Individual Members */}
          {tab === 'individual' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredMembers.map((member) => (
                <Link
                  key={member.slug}
                  href={`/profile/${member.slug}/`}
                  className="block bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl p-6"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${member.avatarColor} border border-slate-100 flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xl font-bold text-gold-400">{member.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-xs text-gold-600 font-medium mb-2">{member.specializations.slice(0,2).join(' · ')}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">{member.shortBio}</p>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span>📍 {member.location.split(', ').pop()}</span>
                        <span>·</span>
                        <span>💼 {member.cases}+ cases</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Institutional Members */}
          {tab === 'institutional' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredInstitutional.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-bold text-slate-900 mb-1 truncate">{member.name}</h3>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[member.type]} mb-2`}>
                      {member.type}
                    </span>
                    <p className="text-xs text-slate-400">{member.country}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-center text-sm text-gray-400 mt-8">
            Click on any member to view their full profile, qualifications, and experience.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Join Us</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Become a Member</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 leading-relaxed">
            Join a global community of arbitration professionals shaping the future of digital world dispute resolution.
          </p>
          <Link
            href="/membership/"
            className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
          >
            Apply for Membership
          </Link>
        </div>
      </section>
    </div>
  )
}
