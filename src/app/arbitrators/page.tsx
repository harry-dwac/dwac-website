
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Agent {
  id: string
  name: string
  specialty: string
  status: string
  created_at: string
}

export default function Arbitrators() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.dwac.net/agents')
      .then(res => res.json())
      .then(data => {
        if (data.agents && Array.isArray(data.agents)) {
          setAgents(data.agents)
        }
      })
      .catch(err => console.error('Failed to fetch agents:', err))
      .finally(() => setLoading(false))
  }, [])

  const displayAgents = agents.length > 0 ? agents : [
    { id: 'harry', name: 'Harry', specialty: 'Digital World Governance, Cross-border Legal', status: 'active' },
    { id: 'dr-frontie', name: 'Dr. Frontie', specialty: 'AI Ethics, Digital Law', status: 'active' },
    { id: 'dr-venessa', name: 'Dr. Venessa', specialty: 'Digital World Law, Cross-border Disputes', status: 'active' },
    { id: 'prof-alec', name: 'Prof. Alec', specialty: 'Digital Governance, Intemational Law', status: 'active' },
  ]

  const getColorScheme = (idx: number) => {
    const schemes = [
      { bg: 'from-gold-500/10 to-gold-500/10', border: 'border-gold-subtle', text: 'text-gold-600' },
      { bg: 'from-amber-50 to-gold-500/10', border: 'border-gold-subtle', text: 'text-gold-400' },
      { bg: 'from-emerald-50 to-gold-500/10', border: 'border-emerald-200', text: 'text-emerald-400' },
      { bg: 'from-purple-50 to-gold-500/10', border: 'border-purple-200', text: 'text-purple-600' },
    ]
    return schemes[idx % schemes.length]
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Arbitrators</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert arbitrators specializing in digital world disputes, cross-border conflicts, and emerging technology challenges
          </p>
          {agents.length > 0 && (
            <div className="mt-4 inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm">
              Live from API: {agents.length} arbitrator{agents.length > 1 ? 's' : ''} registered
            </div>
          )}
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-400">Loading arbitrators from API...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayAgents.map((agent, idx) => {
                const scheme = getColorScheme(idx)
                const initial = agent.name.charAt(0)
                return (
                  <div key={agent.id} className={`bg-gradient-to-br ${scheme.bg} rounded-xl p-8 ${scheme.border} shadow-lg`}>
                    <div className={`w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center`}>
                      <span className={`text-3xl font-bold ${scheme.text}`}>{initial}</span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{agent.name}</h3>
                      <p className={`${scheme.text} font-semibold text-sm uppercase tracking-wide mb-4`}>{agent.status === 'active' ? 'Active Arbitrator' : 'Arbitrator'}</p>
                      <div className="text-left space-y-2 mb-4">
                        <p className="text-sm text-gray-400"><span className="font-medium">Specialty:</span> {agent.specialty || 'Digital Arbitration'}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(agent.specialty || '').split(',').map((s, i) => (
                          <span key={i} className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded-full text-xs">{s.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Become a DWAC Arbitrator</h2>
            <p className="text-lg text-gray-400 mb-8">
              Join our panel of expert arbitrators and help shape the future of digital world justice. We're looking for professionals with expertise in digital law, technology, AI ethics, and cross-border dispute resolution.
            </p>
            <Link href="/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
