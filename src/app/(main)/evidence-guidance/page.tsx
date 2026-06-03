import Link from 'next/link'

export default function EvidenceGuidance() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Evidence Guidelines</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Submitting digital evidence to DWAC</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">Types of Digital Evidence</h2>
          
          <div className="space-y-6 mb-12">
            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">Smart Contract Code</h3>
              <p className="text-gray-400">Submit the complete smart contract code, including all functions, modifiers, and related contracts. Include the contract address and blockchain network information.</p>
            </div>

            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">Transaction Records</h3>
              <p className="text-gray-400">Provide blockchain transaction hashes, wallet addresses, timestamps, and any related transaction data. Include gas consumption and status indicators.</p>
            </div>

            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">Communication Records</h3>
              <p className="text-gray-400">Submit emails, chat logs, message histories, and other communications related to the dispute. Include timestamps and participant information.</p>
            </div>

            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">Platform Records</h3>
              <p className="text-gray-400">Include screenshots, account activity logs, service agreements, terms of service, and any platform-related documentation.</p>
            </div>

            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">AI Agent Interactions</h3>
              <p className="text-gray-400">Document AI agent behaviors, decision logs, prompt histories, and any autonomous actions taken by AI systems involved in the dispute.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">Submission Requirements</h2>
          <div className="bg-gold-500/[0.06] border border-gold-subtle rounded-xl p-6">
            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>All evidence must be submitted in electronic format</li>
              <li>Include metadata preservation where possible</li>
              <li>Provide English translations for non-English documents</li>
              <li>Organize evidence with clear labeling and numbering</li>
              <li>Include a summary of evidence and its relevance to each claim</li>
              <li>Certify the authenticity of submitted documents</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Evidence?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us for guidance on submitting evidence for your case.</p>
          <Link href="/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
