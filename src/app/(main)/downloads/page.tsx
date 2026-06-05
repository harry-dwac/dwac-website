import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DownloadsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Downloads Center</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access DWAC documents, model clauses, and research materials.
          </p>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-12 bg-navy-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Access Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-navy-800/40 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-white mb-1">Read Online</h3>
                <p className="text-gold-400 font-bold">Free</p>
              </div>
              <div className="bg-navy-800/40 p-4 rounded-lg border border-gold-subtle">
                <h3 className="font-semibold text-white mb-1">Download (PDF)</h3>
                <p className="text-gold-400 font-bold">$5 per document</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Forms & Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Request for Arbitration</h3>
                  <p className="text-gray-400 text-sm mb-3">Application form to initiate arbitration proceedings</p>
                  <a href="mailto:secretary@dwac.net?subject=Request for Arbitration Form" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    Contact us to request →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Arbitrator Declaration</h3>
                  <p className="text-gray-400 text-sm mb-3">Statement of independence and impartiality form</p>
                  <a href="mailto:secretary@dwac.net?subject=Request for Arbitrator Declaration Form" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    Contact us to request →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Membership Application</h3>
                  <p className="text-gray-400 text-sm mb-3">Form to apply for DWAC membership</p>
                  <a href="mailto:secretary@dwac.net?subject=Request for Membership Application" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    Contact us to request →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-800/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Model Arbitration Clauses</h3>
                  <p className="text-gray-400 text-sm mb-3">Standard clauses for contracts and agreements</p>
                  <Link href="/model-clause/" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    View model clauses →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Cases */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Sample Cases</h2>
          <div className="bg-navy-900/50 rounded-xl border border-gold-subtle/50 p-6 mb-6">
            <p className="text-gray-400 text-sm">
              <strong>Note:</strong> All cases below have been anonymized for reference only. DWAC is currently in its founding stage and will begin accepting cases in Q2 2026.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-navy-900/50 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-500 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">User vs. Platform — Account Ban Dispute</h3>
                  <p className="text-gray-400 text-sm mb-3">A user contested permanent account suspension, claiming the platform violated terms of service and demanding restoration and compensation.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-700 px-2 py-1 rounded mr-2">Digital Identity</span>
                    <span className="bg-navy-700 px-2 py-1 rounded">Contract Dispute</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900/50 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-400 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Company vs. AI Service — Smart Contract Dispute</h3>
                  <p className="text-gray-400 text-sm mb-3">A company alleged the AI service provider failed to deliver contracted smart contract functionality, causing economic loss.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-700 px-2 py-1 rounded mr-2">Smart Contract</span>
                    <span className="bg-navy-700 px-2 py-1 rounded">Service Dispute</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-900/50 p-6 rounded-xl border border-gold-subtle/50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-emerald-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Developer vs. Exchange — Digital Asset Dispute</h3>
                  <p className="text-gray-400 text-sm mb-3">A developer alleged the exchange mishandled matters during a system upgrade, resulting in token losses.</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="bg-navy-700 px-2 py-1 rounded mr-2">Digital Assets</span>
                    <span className="bg-navy-700 px-2 py-1 rounded">Property Rights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Publications & Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Digital World Charter — Full Text</h3>
                  <p className="text-gray-400 text-sm mb-3">Founding document establishing digital world dispute resolution principles</p>
                  <a href="mailto:secretary@dwac.net?subject=Request for Digital World Charter" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    Contact us to request →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">DWAC Arbitration Rules — Full Text</h3>
                  <p className="text-gray-400 text-sm mb-3">Complete arbitration rules governing DWAC procedures (67 articles)</p>
                  <a href="mailto:secretary@dwac.net?subject=Request for DWAC Arbitration Rules" className="text-gold-500 text-sm font-medium hover:text-gold-400">
                    Contact us to request →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">DWAC Annual Report</h3>
                  <p className="text-gray-400 text-sm mb-3">Annual report covering DWAC activities, case statistics, and organizational development</p>
                  <span className="text-gray-500 text-sm">Coming soon →</span>
                </div>
              </div>
            </div>

            <div className="bg-navy-800/50 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-800/40 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Digital Law Research Whitepaper</h3>
                  <p className="text-gray-400 text-sm mb-3">Research on digital world legal framework, governance, and dispute resolution</p>
                  <span className="text-gray-500 text-sm">Coming soon →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold-500 to-gold-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help?</h2>
          <p className="text-gold-100 mb-8 max-w-2xl mx-auto">Contact us to request any documents or for inquiries about DWAC resources.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-8 py-3 bg-navy-800 text-white font-semibold rounded-lg hover:bg-navy-900 transition-colors">
              Contact Us
            </Link>
            <a href="mailto:secretary@dwac.net" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gold-600 transition-colors">
              Email: secretary@dwac.net
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
