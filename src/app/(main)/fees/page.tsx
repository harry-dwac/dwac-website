
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fee Schedule ',
  description: 'DWAC\'s transparent fee schedule for digital arbitration services. No hidden costs.',
}

import Link from 'next/link'

export default function Fees() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Fee Schedule</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC arbitration fees �?50% of CIETAC rates
          </p>
        </div>
      </section>

      {/* Fee Overview */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Fee Structure</h2>
            <p className="text-gray-300 leading-relaxed">
              DWAC fees are set at 50% of the China International Economic and Trade Arbitration Commission (CIETAC) rates, making professional arbitration accessible for digital world disputes. All fees are quoted in Chinese Yuan (RMB/&yen;).
            </p>
          </div>
        </div>
      </section>

      {/* Filing Fee Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Filing Fee (Registration Fee)</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 overflow-hidden mb-8">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-navy-800/30">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Dispute Amount (RMB)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Filing Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&le; &yen;50 000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;1,000</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&yen;50,001 &mdash; &yen;200 000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;2 500</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&yen;200,001 &mdash; &yen;500 000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;5 000</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&yen;500,001 &mdash; &yen;1 000 000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;10 000</td>
                </tr>
                <tr className="hover:bg-navy-800/30">
                  <td className="px-6 py-4 text-sm text-gray-300">&gt; &yen;1 000 000</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-300 font-medium">&yen;15 000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Arbitrator Remuneration */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Arbitrator Remuneration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-4">Sole Arbitrator / Presiding Arbitrator</h3>
              <div className="text-3xl font-bold text-gold-600 mb-2">2% &mdash; 5%</div>
              <p className="text-gray-400 text-sm">of the dispute amount</p>
            </div>
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-4">Three-Member Tribunal</h3>
              <div className="text-3xl font-bold text-gold-600 mb-2">5% &mdash; 10%</div>
              <p className="text-gray-400 text-sm">of the dispute amount</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center">
            Note: Arbitrator remuneration is calculated based on the actual dispute amount and complexity.
          </p>
        </div>
      </section>

      {/* Administrative Fee */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Administrative Fee</h2>
          <div className="bg-navy-800/20 rounded-xl border border-gold-subtle/50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Standard Procedure</h3>
                <div className="text-4xl font-bold text-gold-600">&yen;3 000</div>
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-2">Simplified Procedure</h3>
                <div className="text-4xl font-bold text-gold-600">&yen;1 500</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Installment Payment Schedule</h2>
          <div className="bg-gold-500/[0.06] rounded-xl border border-gold-subtle p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">20% Upon Submission</h3>
                  <p className="text-gray-400 text-sm">Payable when submitting the arbitration application and supporting materials.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">40% Upon Hearing Notice</h3>
                  <p className="text-gray-400 text-sm">Payable upon receiving the hearing/mediation notice.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">40% Before Award Delivery</h3>
                  <p className="text-gray-400 text-sm">Remaining balance payable before the award is delivered.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mediation Discount */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Mediation Success Discount</h2>
          <div className="bg-emerald-500/[0.06]0/[0.06] border border-emerald-200 p-8 rounded-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-4">Special Rate</div>
              <p className="text-xl text-gray-300 mb-4">If mediation succeeds</p>
              <p className="text-gray-400">
                Upon delivery of the mediation settlement, no further fees will be charged.<br />
                The 60% already paid constitutes the full fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Reduction */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Fee Reduction Policy</h2>
          <div className="bg-navy-800/30 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-6">
              DWAC offers fee reduction for parties from developing countries and small/micro enterprises. Applicants may submit a fee reduction application with supporting documentation.
            </p>
            <h3 className="font-semibold text-white mb-4">Eligibility:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Parties from developing countries as classified by the United Nations
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Small and micro enterprises (SMEs) with annual revenue below threshold
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Other circumstances warranting fee reduction as determined by DWAC
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Allocation */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cost Allocation</h2>
          <div className="bg-navy-800/20 p-8 rounded-xl border border-gold-subtle/50">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>General Rule:</strong> The losing party shall bear the costs of the arbitration and compensate the prevailing party for reasonable expenses incurred in connection with the proceedings.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Exception:</strong> The tribunal may allocate costs differently if it determines that such allocation is appropriate under the circumstances of the case.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Payment Methods</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            DWAC supports multiple payment channels for your convenience. All payments are processed securely.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WeChat Pay */}
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors cursor-pointer group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <svg className="w-10 h-10 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.555a.59.59 0 01.213.628l-.39 1.48c-.019.074-.024.15-.012.224.012.075.044.146.092.206a.51.51 0 00.378.167.51.51 0 00.206-.043l1.992-.917a.59.59 0 01.417-.033c1.087.293 2.242.448 3.406.448h.24c-.127-.553-.193-1.126-.193-1.714 0-3.658 3.186-6.625 7.114-6.625.206 0 .41.008.612.021C16.51 4.688 12.95 2.188 8.691 2.188zm-2.87 4.28a.857.857 0 11-.001 1.715.857.857 0 01.001-1.714zm6.063 0a.857.857 0 110 1.714.857.857 0 010-1.714z"/>
                    <path d="M23.999 14.729c0-3.338-3.132-6.046-6.997-6.046-3.864 0-6.996 2.708-6.996 6.046 0 3.337 3.132 6.045 6.996 6.045.938 0 1.836-.152 2.664-.426a.465.465 0 01.332.026l1.592.732a.406.406 0 00.492-.124.467.467 0 00.063-.47l-.312-1.18a.47.47 0 01.17-.5c1.463-1.076 2.396-2.688 2.396-4.503zm-9.385-1.358a.683.683 0 11.001-1.366.683.683 0 01-.001 1.366zm4.778 0a.683.683 0 110-1.366.683.683 0 010 1.366z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-white font-semibold mb-2">WeChat Pay</h3>
              <p className="text-center text-gray-400 text-sm">Scan QR code to pay</p>
              <div className="mt-3 text-center">
                <span className="inline-block px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded">0.6% fee</span>
              </div>
            </div>
            
            {/* Alipay */}
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors cursor-pointer group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.422 15.358c-.942-.374-3.426-1.054-4.538-1.368-.118-.034-.2-.057-.24-.068a7.12 7.12 0 00-.11-.03l-.09-.025c.364-.65.687-1.352.96-2.107h-3.45V9.69h4.246V8.76h-4.246V6.66h-2.016c-.03 0-.054.024-.054.054V8.76H7.7v.93h4.246v1.168H7.7v.93h6.21c-.2.49-.424.958-.67 1.4a29.72 29.72 0 00-3.83-.548c-2.658-.166-4.358.55-4.802 2.032-.434 1.452.67 3.168 3.142 3.492 2.18.286 4.356-.528 5.882-2.076.654.308 1.352.584 2.086.822 1.84.6 4.18 1.238 5.158 1.496.98.258 1.722-.052 1.962-.654.24-.6-.096-1.31-.598-1.496zm-11.292 1.01c-1.424.382-2.612-.112-2.612-.112s.664-1.24 2.478-.958c.83.13 1.558.448 2.146.856-.518.078-1.212.214-2.012.214z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-white font-semibold mb-2">Alipay</h3>
              <p className="text-center text-gray-400 text-sm">Redirect to pay</p>
              <div className="mt-3 text-center">
                <span className="inline-block px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">0.6% fee</span>
              </div>
            </div>
            
            {/* Bank Transfer */}
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors cursor-pointer group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gold-500/10 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-white font-semibold mb-2">Bank Transfer</h3>
              <p className="text-center text-gray-400 text-sm">Upload voucher</p>
              <div className="mt-3 text-center">
                <span className="inline-block px-2 py-1 bg-gold-500/10 text-gold-400 text-xs rounded">No fee</span>
              </div>
            </div>
            
            {/* Credit Card */}
            <div className="bg-navy-800/30 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors cursor-pointer group">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-center text-white font-semibold mb-2">Credit Card</h3>
              <p className="text-center text-gray-400 text-sm">Visa/MC/JCB/UnionPay</p>
              <div className="mt-3 text-center">
                <span className="inline-block px-2 py-1 bg-purple-500/10 text-purple-400 text-xs rounded">1.5-2.9% fee</span>
              </div>
            </div>
          </div>
          
          {/* Info box */}
          <div className="mt-8 bg-navy-800/20 rounded-xl p-6 border border-gold-subtle/30">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-gold-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-semibold text-white mb-2">Payment Information</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Payment instructions will be provided after case submission</li>
                  <li>• Bank transfer details sent via email upon case acceptance</li>
                  <li>• All payments are processed through secure channels</li>
                  <li>• Invoices provided upon request</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Fees?</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">Contact our secretariat for detailed fee calculations or fee reduction applications.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              Contact Us
            </Link>
            <Link href="/tribunal/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              Tribunal Composition
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
