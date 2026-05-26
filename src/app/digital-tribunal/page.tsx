import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Tribunal | DWAC - Next-Gen Online Dispute Resolution',
  description: 'Experience AI-powered digital arbitration: from case filing to award issuance, every step is transparent, efficient, and fully digitized.',
};

export default function DigitalTribunalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32 px-4 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
            🔮 Next-Generation Dispute Resolution
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            Digital Tribunal
          </h1>
          <p className="text-xl md:text-2xl text-gold-400 mb-4 font-serif italic">
            &ldquo;Justice delayed is justice denied — no matter the distance&rdquo;
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            DWAC&apos;s Digital Tribunal combines <span className="text-gold-400 font-semibold">AI Agent intelligence</span> with{' '}
            <span className="text-gold-400 font-semibold">human arbitrator expertise</span> to deliver a fully digitized,
            transparent, and efficient arbitration process — from filing to enforcement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dispute" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25">
              Apply for Arbitration
            </a>
            <a href="#process" className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 font-bold py-3.5 px-8 rounded-lg transition-all">
              Explore the Process
            </a>
            <a href="#comparison" className="border border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 py-3.5 px-8 rounded-lg transition-colors">
              Why Digital?
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-gold-500">🔒</span> End-to-End Encrypted
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">⛓️</span> Blockchain-Verifiable
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">🌍</span> Cross-Border Enforcement
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500">⚡</span> AI-Assisted Analysis
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Process — 4 Steps ===== */}
      <section id="process" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Four Steps to Resolution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From case filing to final award, every step is digitized, transparent, and powered by AI assistance.
            </p>
          </div>

          {/* Step connector line */}
          <div className="hidden md:block relative">
            <div className="absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                step: '01',
                title: 'Case Filing',
                subtitle: 'AI-Assisted Submission',
                desc: 'Submit your dispute online. AI automatically classifies the case type, extracts key claims, and generates a preliminary case summary for the tribunal.',
                icon: '📝',
                details: ['Smart form with auto-complete', 'AI classifies dispute category', 'Automatic evidence checklist', 'Real-time filing status tracking'],
              },
              {
                step: '02',
                title: 'Tribunal Formation',
                subtitle: 'Intelligent Arbitrator Matching',
                desc: 'AI recommends the most suitable arbitrators based on case type, jurisdiction, expertise, and language preferences. Parties confirm the panel.',
                icon: '⚖️',
                details: ['AI-powered arbitrator matching', 'Expertise & jurisdiction filters', 'Conflict-of-interest checks', 'Party approval process'],
              },
              {
                step: '03',
                title: 'Virtual Hearing',
                subtitle: 'Secure Digital Courtroom',
                desc: 'Conduct hearings in a secure online room with real-time AI transcription, evidence presentation, and cross-examination — available 24/7 across time zones.',
                icon: '🎥',
                details: ['Real-time AI transcription', 'Digital evidence presentation', 'Cross-examination tools', 'Time-zone friendly scheduling'],
              },
              {
                step: '04',
                title: 'Award Issuance',
                subtitle: 'AI-Drafted, Human-Reviewed',
                desc: 'AI assists in drafting the award based on hearing records and applicable law. The arbitrator reviews, modifies, and issues the final binding award.',
                icon: '📜',
                details: ['AI-assisted award drafting', 'Legal precedent analysis', 'Arbitrator review & approval', 'Digital signature & enforcement'],
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-300 h-full flex flex-col">
                  {/* Step number circle */}
                  <div className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-lg mb-4 mx-auto group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>

                  <div className="text-3xl mb-3 text-center">{item.icon}</div>
                  <h3 className="text-xl font-bold text-navy-900 mb-1 text-center">{item.title}</h3>
                  <p className="text-gold-600 text-sm font-medium mb-3 text-center">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{item.desc}</p>

                  {/* Detail list */}
                  <ul className="space-y-1.5 border-t border-gray-100 pt-4">
                    {item.details.map((d, i) => (
                      <li key={i} className="flex items-start text-xs text-gray-500">
                        <span className="text-gold-500 mr-2 mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Technology Architecture ===== */}
      <section className="py-20 md:py-28 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Infrastructure</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Technology Architecture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Built on a modern, serverless stack — ensuring security, scalability, and global accessibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend & Interface',
                icon: '🖥️',
                color: 'from-blue-500/10 to-blue-600/5',
                items: [
                  { name: 'Next.js 14 (App Router)', desc: 'Modern React framework with SSR' },
                  { name: 'TypeScript', desc: 'Type-safe development' },
                  { name: 'Tailwind CSS', desc: 'Responsive, accessible design' },
                  { name: 'Real-time Dashboard', desc: 'Live case status & notifications' },
                ],
              },
              {
                title: 'Backend & Intelligence',
                icon: '🤖',
                color: 'from-gold-500/10 to-gold-600/5',
                items: [
                  { name: 'Cloudflare Workers', desc: 'Edge computing, sub-50ms latency' },
                  { name: 'Agent API (RESTful)', desc: 'AI Agent registration & communication' },
                  { name: 'D1 Database', desc: 'Structured case & user data' },
                  { name: 'AI Analysis Engine', desc: 'Case classification & precedent search' },
                ],
              },
              {
                title: 'Security & Trust',
                icon: '🔐',
                color: 'from-green-500/10 to-green-600/5',
                items: [
                  { name: 'Blockchain Records', desc: 'Immutable audit trail (optional)' },
                  { name: 'End-to-End Encryption', desc: 'All communications protected' },
                  { name: 'Digital Signatures', desc: 'Legally binding e-signatures' },
                  { name: 'Full Audit Trail', desc: 'Every action logged & traceable' },
                ],
              },
            ].map((col, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${col.color} p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow`}>
                <div className="text-4xl mb-4">{col.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-6">{col.title}</h3>
                <div className="space-y-4">
                  {col.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex items-center text-navy-900 font-semibold text-sm">
                        <span className="text-gold-500 mr-2">✓</span>
                        {item.name}
                      </div>
                      <p className="text-gray-500 text-xs ml-6 mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How AI Assist Works ===== */}
      <section className="py-20 md:py-28 px-4 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-400 font-semibold text-sm uppercase tracking-wider mb-3">AI-Human Collaboration</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              AI Assists. Humans Decide.
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              AI handles the heavy lifting — analysis, drafting, transcription — while human arbitrators make the final decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* AI Column */}
            <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🤖</div>
                <h3 className="text-xl font-bold text-blue-400">AI Agent Handles</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Case classification & routing',
                  'Evidence organization & tagging',
                  'Real-time transcription & translation',
                  'Legal precedent research',
                  'Award draft generation',
                  'Compliance checks',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3 mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Human Column */}
            <div className="bg-navy-800 p-8 rounded-2xl border border-gold-500/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center text-xl">👨‍⚖️</div>
                <h3 className="text-xl font-bold text-gold-400">Human Arbitrator Decides</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Arbitrator panel selection',
                  'Procedural rulings',
                  'Evidence admissibility decisions',
                  'Witness & expert assessment',
                  'Legal interpretation & reasoning',
                  'Final award approval & issuance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-gold-400 mr-3 mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Comparison Table ===== */}
      <section id="comparison" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">The DWAC Advantage</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Why Digital Arbitration?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A side-by-side comparison of traditional arbitration and DWAC&apos;s digital approach.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="p-5 text-left bg-gray-100 text-navy-900 font-bold text-lg">Criteria</th>
                  <th className="p-5 text-left bg-gray-100 text-gray-600 font-semibold text-lg">Traditional</th>
                  <th className="p-5 text-left bg-gold-500 text-navy-900 font-bold text-lg">DWAC Digital ✦</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Duration', '6–18 months', '3–6 months'],
                  ['Cost', '$50,000+', '$10,000–30,000'],
                  ['Transparency', 'Low — limited access to records', 'High — full audit trail'],
                  ['Accessibility', 'Business hours, physical venue', '24/7 online, global'],
                  ['AI Assistance', 'No', 'Yes — analysis, drafting, transcription'],
                  ['Evidence Mgmt', 'Manual document handling', 'AI-tagged digital evidence room'],
                  ['Enforcement', 'Depends on jurisdiction', 'Blockchain-verifiable awards'],
                  ['Language', 'Single language proceedings', 'AI real-time translation'],
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-bold text-navy-900 border-b border-gray-100">{row[0]}</td>
                    <td className="p-4 text-gray-500 border-b border-gray-100">{row[1]}</td>
                    <td className="p-4 text-gold-700 font-semibold border-b border-gray-100 bg-gold-50/50">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Case Studies ===== */}
      <section className="py-20 md:py-28 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">Real-World Impact</div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mb-4">
              Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Anonymized cases demonstrating how digital arbitration delivers faster, fairer outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'Cross-Border E-Commerce',
                title: 'International Supply Chain Dispute',
                duration: '4 months',
                saved: '62% cost reduction',
                summary: 'A manufacturer in Shenzhen and a distributor in Frankfurt resolved a contract fulfillment dispute through DWAC\'s digital tribunal, with AI-assisted document review covering 2,000+ pages of evidence.',
              },
              {
                type: 'Cybersecurity Incident',
                title: 'Data Breach Liability Case',
                duration: '3 months',
                saved: '71% faster resolution',
                summary: 'A cloud service provider and its enterprise client resolved a data breach liability claim with AI-powered forensic evidence analysis and real-time cross-examination across 3 time zones.',
              },
              {
                type: 'Intellectual Property',
                title: 'Digital Copyright Infringement',
                duration: '5 months',
                saved: '55% cost savings',
                summary: 'A content creator and a streaming platform settled a copyright dispute through virtual hearings with AI transcription, avoiding costly international litigation.',
              },
            ].map((c, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-xs font-semibold text-gold-600 uppercase tracking-wider mb-3">{c.type}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-4">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{c.summary}</p>
                <div className="flex gap-4 text-sm">
                  <div className="bg-navy-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⏱ {c.duration}
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                    💰 {c.saved}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Experience Next-Gen Dispute Resolution?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join DWAC and let AI + human expertise resolve your disputes efficiently, transparently, and fairly — from anywhere in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="/dispute" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-4 px-10 rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold-500/25 text-lg">
              Apply for Arbitration
            </a>
            <a href="/contact" className="border-2 border-gray-600 text-gray-300 hover:border-gold-500 hover:text-gold-400 font-bold py-4 px-10 rounded-lg transition-colors text-lg">
              Contact Us
            </a>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: '3–6', label: 'Months Average' },
              { value: '55%+', label: 'Cost Savings' },
              { value: '24/7', label: 'Online Access' },
              { value: '150+', label: 'Jurisdictions' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-gold-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
