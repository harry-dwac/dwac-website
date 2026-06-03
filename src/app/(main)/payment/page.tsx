import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Payment | DWAC',
  description: 'DWAC arbitration fee payment instructions. Bank transfer details and fee schedule for digital arbitration services.',
}

const feeSchedule = [
  { range: '≤ ¥50,000', filingFee: '¥1,000', arbitratorFee: '5% of claim' },
  { range: '¥50,001 – ¥200,000', filingFee: '¥3,000', arbitratorFee: '4% of claim' },
  { range: '¥200,001 – ¥1,000,000', filingFee: '¥5,000', arbitratorFee: '3% of claim' },
  { range: '¥1,000,001 – ¥5,000,000', filingFee: '¥10,000', arbitratorFee: '2.5% of claim' },
  { range: '> ¥5,000,000', filingFee: '¥15,000', arbitratorFee: '2% of claim' },
]

const installmentSchedule = [
  { phase: 'Filing Fee', timing: 'Upon case submission', percentage: 'Included in total' },
  { phase: 'First Installment (20%)', timing: 'After case acceptance', percentage: '20%' },
  { phase: 'Second Installment (40%)', timing: 'Upon hearing notice', percentage: '40%' },
  { phase: 'Final Installment (40%)', timing: 'Before award delivery', percentage: '40%' },
]

export default function PaymentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            Payment <span className="text-gradient-gold">Instructions</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Bank transfer details and fee schedule for DWAC arbitration services.
          </p>
        </div>
      </section>

      {/* Bank Transfer Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">Bank Transfer Details</h2>
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Account Name</span>
                <span className="text-navy-900 font-semibold" id="bank-account-name">成都浣锦网络科技有限公司</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Account Number</span>
                <span className="text-navy-900 font-semibold font-mono" id="bank-account-number">122815654024</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">Bank Name</span>
                <span className="text-navy-900 font-semibold" id="bank-name">Bank of China, Pidu Sub-branch.</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">SWIFT Code</span>
                <span className="text-navy-900 font-semibold font-mono" id="bank-swift">BKCHCNBJ</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-600 font-medium">Reference Format</span>
                <span className="text-navy-900 font-semibold">DWAC-[Case ID]-[Your Name]</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>Important:</strong> Please include your Case ID in the transfer reference. 
              After completing the transfer, send the payment receipt to{' '}
              <a href="mailto:finance@dwac.net" className="text-amber-900 underline font-semibold">finance@dwac.net</a>{' '}
              for confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Schedule */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">Fee Schedule</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-navy-900">
                  <th className="text-left py-3 px-4 text-navy-900 font-semibold">Dispute Amount</th>
                  <th className="text-left py-3 px-4 text-navy-900 font-semibold">Filing Fee</th>
                  <th className="text-left py-3 px-4 text-navy-900 font-semibold">Arbitrator Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeSchedule.map((row, i) => (
                  <tr key={i} className="border-b border-slate-200 hover:bg-white transition-colors">
                    <td className="py-3 px-4 text-slate-700">{row.range}</td>
                    <td className="py-3 px-4 text-slate-700 font-medium">{row.filingFee}</td>
                    <td className="py-3 px-4 text-slate-700">{row.arbitratorFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Installment Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">Payment Schedule</h2>
          <div className="grid gap-4">
            {installmentSchedule.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy-900">{item.phase}</p>
                  <p className="text-slate-600 text-sm">{item.timing}</p>
                </div>
                <span className="text-emerald-600 font-semibold">{item.percentage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">Refund Policy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
              <h3 className="font-semibold text-navy-900 mb-2">Before Hearing</h3>
              <p className="text-slate-600 text-sm">
                Withdrawal after case filing but before the hearing begins. 60% of fees refunded.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-amber-500 mb-2">40%</div>
              <h3 className="font-semibold text-navy-900 mb-2">Before Award</h3>
              <p className="text-slate-600 text-sm">
                Settlement after hearing begins but before the award is issued. 40% of fees refunded.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-red-500 mb-2">0%</div>
              <h3 className="font-semibold text-navy-900 mb-2">After Award</h3>
              <p className="text-slate-600 text-sm">
                No refund after the arbitral award has been delivered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to File a Case?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Start your arbitration proceeding online. Our AI-powered platform handles digital disputes efficiently and fairly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit a Case
            </Link>
            <Link
              href="/fees"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-400 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Full Fee Schedule
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
