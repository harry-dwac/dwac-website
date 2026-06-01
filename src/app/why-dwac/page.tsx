import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Why Choose DWAC - Digital World Arbitration Centre',
  description: 'Comparing DWAC with leading international arbitration institutions. Discover why we offer faster, more affordable AI-assisted dispute resolution.',
}

export default function WhyDWAC() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Why Choose DWAC?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comparing arbitration institutions to help you make the best choice for your dispute.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">DWAC vs Other Arbitration Institutions</h2>
            <p className="text-xl text-gray-600">
              See how we compare to leading international arbitration institutions.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="p-4 text-left font-semibold">Criteria</th>
                  <th className="p-4 text-center font-semibold bg-gold-500 text-white">DWAC</th>
                  <th className="p-4 text-center font-semibold">ICC</th>
                  <th className="p-4 text-center font-semibold">SIAC</th>
                  <th className="p-4 text-center font-semibold">WIPO</th>
                  <th className="p-4 text-center font-semibold">HKIAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">Online Arbitration</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 100% Online</td>
                  <td className="p-4 text-center text-yellow-600">⚠ Partial</td>
                  <td className="p-4 text-center text-yellow-600">⚠ Partial</td>
                  <td className="p-4 text-center text-red-500">✘ Limited</td>
                  <td className="p-4 text-center text-yellow-600">⚠ Partial</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">Average Duration</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">30-90 days</td>
                  <td className="p-4 text-center">12-18 months</td>
                  <td className="p-4 text-center">6-12 months</td>
                  <td className="p-4 text-center">12-18 months</td>
                  <td className="p-4 text-center">9-15 months</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">Cost Savings</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">50-70% lower</td>
                  <td className="p-4 text-center">High</td>
                  <td className="p-4 text-center">Medium-High</td>
                  <td className="p-4 text-center">High</td>
                  <td className="p-4 text-center">Medium-High</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">AI-Assisted</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">Multilingual Support</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 20+ languages</td>
                  <td className="p-4 text-center text-green-600">✔ Multiple</td>
                  <td className="p-4 text-center text-yellow-600">⚠ Limited</td>
                  <td className="p-4 text-center text-green-600">✔ Multiple</td>
                  <td className="p-4 text-center text-yellow-600">⚠ Limited</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">NY Convention Enforcement</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">Emergency Arbitrator</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ 48h decision</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">Domain Disputes</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ Specialized</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">AI Agent Liability</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ Specialized</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold text-navy-800">24/7 Operation</td>
                  <td className="p-4 text-center bg-gold-50 font-semibold text-green-600">✔ Yes</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                  <td className="p-4 text-center text-red-500">✘ No</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-gray-600 mt-8 text-lg">
            ✅ <strong>DWAC advantages:</strong> 100% online, AI-assisted, faster (30-90 days), 50-70% cost savings, specialized in AI Agent disputes.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">Key Advantages of Choosing DWAC</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Speed</h3>
              <p className="text-gray-600">
                Average resolution in 30-90 days, compared to 12-18 months at traditional institutions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Cost-Effective</h3>
              <p className="text-gray-600">
                Fees are 50-70% lower than ICC, SIAC, or WIPO, thanks to our AI-assisted process.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">AI-Assisted</h3>
              <p className="text-gray-600">
                Our Arbitrator-Agents analyze evidence, draft decisions, and accelerate the process.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Global & Online</h3>
              <p className="text-gray-600">
                100% online process, accessible from anywhere, 24/7. No travel required.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Confidential</h3>
              <p className="text-gray-600">
                All proceedings are confidential, with end-to-end encryption for all documents.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Enforceable</h3>
              <p className="text-gray-600">
                Awards are enforceable under the New York Convention in 170+ countries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl italic mb-6">
            "DWAC resolved our cross-border domain dispute in 45 days, at a fraction of the cost of traditional arbitration. The online process was seamless."
          </blockquote>
          <cite className="text-gold-400 not-italic">— Dr. Yongjun Zhou, Founder of DWAC</cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-800 mb-6">
            Ready to Experience the DWAC Advantage?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            File your dispute online today and get a faster, more affordable resolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-to-apply/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              File a Dispute
            </Link>
            <Link href="/contact/" className="px-8 py-3 border-2 border-gold-500 text-gold-600 rounded font-semibold hover:bg-gold-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
