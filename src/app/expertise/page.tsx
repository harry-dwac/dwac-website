import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DWAC Expertise - Digital World Arbitration Centre',
  description: 'DWAC specializes in resolving digital world disputes through arbitration, mediation, and online dispute resolution.',
}

export default function ExpertisePage() {
  const expertiseAreas = [
    { title: 'Digital Commerce Disputes', desc: 'Cross-border e-commerce, platform disputes, payment disputes, and consumer protection in digital transactions.', icon: '🛒' },
    { title: 'Intellectual Property', desc: 'Copyright, trademark, patent disputes in the digital environment, including NFTs and digital assets.', icon: '💡' },
    { title: 'Data & Privacy', desc: 'Cross-border data flow disputes, privacy violations, cybersecurity incidents, and compliance issues.', icon: '🔐' },
    { title: 'Smart Contract Disputes', desc: 'Breach, interpretation, and enforcement of smart contracts across blockchain platforms and DeFi protocols.', icon: '📜' },
    { title: 'AI & Algorithm Liability', desc: 'Disputes arising from AI decision-making, algorithmic bias, autonomous agent actions, and AI-generated content.', icon: '🤖' },
    { title: 'Cybersecurity Incidents', desc: 'Data breach liability, ransomware disputes, security standard compliance, and incident response disagreements.', icon: '🛡️' },
    { title: 'Platform Governance', desc: 'Content moderation disputes, account suspension, platform policy enforcement, and digital service agreements.', icon: '🌐' },
    { title: 'Digital Identity', desc: 'Identity theft, digital credential disputes, biometric data conflicts, and identity verification failures.', icon: '👤' },
    { title: 'Cross-Border Digital Trade', desc: 'International digital trade barriers, e-commerce customs, digital tariff disputes, and regulatory conflicts.', icon: '🌍' },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-gold-400 mb-4">Our Expertise</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            DWAC specializes in resolving digital world disputes through arbitration, mediation, and online dispute resolution.
          </p>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {expertiseAreas.map((area, idx) => (
              <div key={idx} className="bg-navy-800 p-6 rounded-lg border border-gold-500/20 hover:border-gold-500/40 transition-colors group">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h3 className="font-serif text-xl text-gold-400 mb-3 group-hover:text-gold-300 transition-colors">{area.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Need Expert Arbitration?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dispute/" className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block">
              File a Dispute
            </Link>
            <Link href="/why-dwac/" className="border border-slate-300 text-slate-700 font-semibold text-sm px-8 py-3 rounded-md hover:border-navy-900 hover:text-navy-900 transition-all inline-block">
              Why Choose DWAC
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}