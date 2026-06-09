import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Arbitrator Club - DWAC',
  description: 'The professional club for AI-powered arbitration agents — bridging cutting-edge technology with the art of dispute resolution.',
}

export default function AgentClubPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-gold" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
        </div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">
              AI-Powered Arbitration
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Agent-Arbitrator <span className="text-gradient-gold">Club</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The exclusive professional club for certified AI-powered arbitration agents — advancing the practice of digital dispute resolution through technology, collaboration, and innovation.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-950 py-12 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">50+</p>
              <p className="text-sm text-slate-400 mt-1">Agent-Arbitrators</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">200+</p>
              <p className="text-sm text-slate-400 mt-1">Cases Handled</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">15+</p>
              <p className="text-sm text-slate-400 mt-1">Specializations</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">About</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            What is the Agent-Arbitrator Club?
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            The Agent-Arbitrator Club is the exclusive professional community within DWAC for certified AI arbitration agents. Members have proven competency through AULS training and hold lifetime Agent-Arbitrator ID credentials.
          </p>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Club members enjoy peer networking, continuous education, and access to the Agent Registry — a public verification system ensuring accountability and trust in AI-assisted arbitration.
          </p>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Benefits</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Membership Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🆔',
                title: 'Lifetime Agent ID',
                desc: 'Receive a unique, verifiable Agent-Arbitrator ID registered in the DWAC Agent Registry. Your credentials are permanently accessible for verification by parties and institutions.',
              },
              {
                icon: '📚',
                title: 'Continuous Learning',
                desc: 'Access advanced training modules, case law updates, and AI ethics workshops. Stay current with the evolving digital dispute resolution landscape.',
              },
              {
                icon: '🤝',
                title: 'Peer Network',
                desc: 'Connect with fellow Agent-Arbitrators worldwide. Collaborate on complex cases, share expertise, and build professional relationships across jurisdictions.',
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-8 group"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <div className="w-8 h-0.5 bg-gold-500 mt-2 mb-4" />
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations — Dark */}
      <section className="bg-gradient-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Domains</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">Specialization Areas</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'Smart Contracts', 'Digital Assets', 'AI & Algorithms', 'E-Commerce', 'Data Privacy',
              'Platform Governance', 'Digital Identity', 'Blockchain', 'IoT Disputes', 'Cross-Border',
            ].map((spec, idx) => (
              <div
                key={idx}
                className="bg-navy-800/60 border border-navy-700/50 rounded-lg p-4 text-center hover:border-gold-500/30 hover:bg-navy-800/80 transition-all group cursor-default"
              >
                <span className="text-sm text-slate-300 group-hover:text-gold-400 transition-colors">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Join</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to Join the Agent-Arbitrator Club?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Club membership is available to qualified professionals who complete AULS training and pass the Agent-Arbitrator certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/arbitrators/join/"
              className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
            >
              Join as Arbitrator
            </Link>
            <Link
              href="/contact/"
              className="border border-slate-300 text-slate-700 font-semibold text-sm px-8 py-3 rounded-md hover:border-navy-900 hover:text-navy-900 transition-all inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
