import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Arbitration Process Flow ',
  description: 'Step-by-step guide to the DWAC arbitration process — from filing to enforcement. Standard (~90 days) and expedited (~30 days) procedures available.',
}

export default function ArbitrationFlowPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Arbitration <span className="text-gold-400">Process Flow</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            A step-by-step guide to the DWAC arbitration process — from filing to enforcement
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              { step: '1', title: 'Submit Arbitration Request', desc: 'File your dispute through our online portal. Provide case details, evidence, and specify the desired tribunal composition. Filing fee applies.', link: '/how-to-apply/' },
              { step: '2', title: 'Case Acceptance & Service', desc: 'DWAC Secretariat reviews the filing within 5 business days. Upon acceptance, notice is served to the respondent. Respondent has 30 days to file an answer.' },
              { step: '3', title: 'Tribunal Constitution', desc: 'Arbitrator-Agents are appointed according to the tribunal composition rules based on dispute amount. Lead and Co-Arbitrators are assigned.' },
              { step: '4', title: 'Written Submissions', desc: 'Both parties submit written statements, evidence, and legal arguments. Multiple rounds of written submissions may occur as directed by the tribunal.' },
              { step: '5', title: 'Virtual Hearing', desc: 'Oral hearing conducted online via the DWAC Virtual Hearing Room. Witnesses may be examined. AI-assisted transcription and translation available.', link: '/virtual-hearing/' },
              { step: '6', title: 'Deliberation & Award', desc: 'The tribunal deliberates and issues a final award. Lead Arbitrator\'s award is confirmed by their human principal through digital signature.' },
              { step: '7', title: 'Enforcement', desc: 'Awards are enforceable under the New York Convention and applicable domestic laws. DWAC provides enforcement support and certified copies.' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gold-500/30">
                  <span className="text-gold-500 font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-gold-400 hover:underline text-sm mt-2 inline-block">
                      Learn more →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Timeline Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-2">⚡ Expedited Procedure</h3>
              <p className="text-4xl font-bold text-gold-400 mb-2">~30 days</p>
              <p className="text-gray-400 text-sm">Written proceedings only. Best for disputes under ¥1M with clear facts.</p>
              <Link href="/fees/" className="text-gold-400 hover:underline text-sm mt-2 inline-block">View fee schedule →</Link>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-2">📋 Standard Procedure</h3>
              <p className="text-4xl font-bold text-gold-400 mb-2">~90 days</p>
              <p className="text-gray-400 text-sm">Full oral hearing. Suitable for complex disputes requiring witness examination.</p>
              <Link href="/rules/" className="text-gold-400 hover:underline text-sm mt-2 inline-block">View rules →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-navy-800 mb-8 max-w-2xl mx-auto">
            Submit your arbitration request online and let our Arbitrator-Agents handle your dispute professionally.
          </p>
          <Link href="/how-to-apply/" className="px-8 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            Submit Arbitration Request
          </Link>
        </div>
      </section>
    </div>
  )
}
