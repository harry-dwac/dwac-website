import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Arbitrator-Agent Framework ',
  description: 'Defining the boundaries of AI Agent capability and responsibility attribution in digital world arbitration.',
}

export default function Framework() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Arbitrator-Agent Framework</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Defining the boundaries of AI Agent capability and responsibility attribution in digital world arbitration.
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Core Framework</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A three-pillar approach to AI-Human collaboration in arbitration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Capacity Boundary */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Capacity Boundary</h3>
              <p className="text-gray-600 mb-6">
                Clear definition of what an AI Agent can and cannot do autonomously.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Data analysis and pattern recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Document draft preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Evidence categorization and review</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Hearing scheduling coordination</span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Human Accountability */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">⚖️</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Human Accountability</h3>
              <p className="text-gray-600 mb-6">
                Ensuring human arbitrators retain final authority and responsibility.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Final decision authority</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Right to modify AI recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Liability remains with human arbitrator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Professional liability insurance coverage</span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Transparency */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="text-5xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">Transparency</h3>
              <p className="text-gray-600 mb-6">
                Complete audit trail of AI involvement in the arbitration process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">AI usage disclosure in all proceedings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Algorithmic decision explanations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Human Intervention Records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">✔</span>
                  <span className="text-gray-700">Full audit trail preservation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Agent Capabilities & Restrictions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center">
                <span className="text-green-500 mr-2">✓</span> AI Agent Can Do
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Analyze contract terms and identify potential issues</li>
                <li>• Research applicable precedents and regulations</li>
                <li>• Prepare draft awards with reasoning</li>
                <li>• Organize and summarize evidence submissions</li>
                <li>• Generate case management reports</li>
                <li>• Suggest procedural recommendations</li>
                <li>• Calculate suggested cost allocations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-navy-800 mb-4 flex items-center">
                <span className="text-red-500 mr-2">✗</span> AI Agent Cannot Do
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Make binding decisions independently</li>
                <li>• Issue awards without human review</li>
                <li>• Waive party rights or accept jurisdiction</li>
                <li>• Negotiate or settle disputes directly</li>
                <li>• Access sensitive evidence without authorization</li>
                <li>• Replace human arbitrator judgment</li>
                <li>• Modify procedural rules unilaterally</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Chain */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-800 mb-8">Accountability Chain</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">1. AI Recommendation Layer</h3>
              <p className="text-gray-600 mb-4">
                AI Agents provide recommendations and analysis, clearly labeled as AI-generated. 
                Every AI output includes a confidence indicator and explanation of the methodology used.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-gold-500">
                <p className="text-sm text-gray-600 italic">
                  "This analysis is generated by AI. It should be reviewed by a human arbitrator before any decision is made."
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">2. Human Review Layer</h3>
              <p className="text-gray-600 mb-4">
                All AI recommendations must be reviewed and approved by a certified human arbitrator. 
                Any modifications are logged with justification.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Human arbitrator reviews all AI-generated drafts</li>
                <li>• Changes from AI recommendations are documented</li>
                <li>• Final approval rests with human arbitrator only</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-navy-800 mb-4">3. Human Final Decision</h3>
              <p className="text-gray-600 mb-4">
                Final decisions, including awards and procedural orders, are always made by human arbitrators. 
                AI cannot override or influence final decisions without human approval.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-navy-700">
                <p className="text-sm text-gray-600">
                  <strong>Example:</strong> If an AI suggests a certain cost allocation, the human arbitrator reviews the suggestion, may modify it, and issues the final cost order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">
            Ready to Experience AI-Assisted Arbitration?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our Arbitrator-Agents are ready to handle your case with speed, accuracy, and full accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/arbitration/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              Start Arbitration
            </Link>
            <Link href="/arbitrators/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">
              Meet Our Arbitrators
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
