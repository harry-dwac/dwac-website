import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '付款指引 | DWAC',
  description: 'DWAC 仲裁費用付款指引，包括銀行轉帳資訊及費用標準。',
}

const feeSchedule = [
  { range: '≤ ¥50,000', filingFee: '¥1,000', arbitratorFee: '爭議金額 5%' },
  { range: '¥50,001 – ¥200,000', filingFee: '¥3,000', arbitratorFee: '爭議金額 4%' },
  { range: '¥200,001 – ¥1,000,000', filingFee: '¥5,000', arbitratorFee: '爭議金額 3%' },
  { range: '¥1,000,001 – ¥5,000,000', filingFee: '¥10,000', arbitratorFee: '爭議金額 2.5%' },
  { range: '> ¥5,000,000', filingFee: '¥15,000', arbitratorFee: '爭議金額 2%' },
]

const installmentSchedule = [
  { phase: '立案費', timing: '提交仲裁申請時', percentage: '含在總額中' },
  { phase: '第一期款 (20%)', timing: '案件受理後', percentage: '20%' },
  { phase: '第二期款 (40%)', timing: '收到開庭通知時', percentage: '40%' },
  { phase: '第三期款 (40%)', timing: '裁決書送達前', percentage: '40%' },
]

export default function PaymentZhTwPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            付款<span className="text-gradient-gold">指引</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC 仲裁服務銀行轉帳資訊及費用標準。
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">銀行轉帳資訊</h2>
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">戶名</span>
                <span className="text-navy-900 font-semibold">待確認</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">帳號</span>
                <span className="text-navy-900 font-semibold font-mono">待確認</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">開戶行</span>
                <span className="text-navy-900 font-semibold">待確認</span>
              </div>
              <div className="flex justify-between py-3 border-b border-slate-200">
                <span className="text-slate-600 font-medium">SWIFT 代碼</span>
                <span className="text-navy-900 font-semibold font-mono">待確認</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-slate-600 font-medium">轉帳備註格式</span>
                <span className="text-navy-900 font-semibold">DWAC-[案件編號]-[您的姓名]</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-800 text-sm">
              <strong>重要提示：</strong>請在轉帳備註中填寫您的案件編號。轉帳完成後，請將付款憑證發送至{' '}
              <a href="mailto:finance@dwac.net" className="text-amber-900 underline font-semibold">finance@dwac.net</a>{' '}
              以便我們確認到帳。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">費用標準</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-navy-900">
                  <th className="text-left py-3 px-4 text-navy-900 font-semibold">爭議金額</th>
                  <th className="text-left py-3 px-4 text-navy-900 font-semibold">立案費</th>
                  <th className="text-left py-3 px-4 text-navy-900 font-semibold">仲裁員報酬</th>
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">付款進度</h2>
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-navy-900 mb-8">退款政策</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
              <h3 className="font-semibold text-navy-900 mb-2">開庭前撤案</h3>
              <p className="text-slate-600 text-sm">立案後、開庭前撤案，退還 60% 費用。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-amber-500 mb-2">40%</div>
              <h3 className="font-semibold text-navy-900 mb-2">裁決前和解</h3>
              <p className="text-slate-600 text-sm">開庭後、裁決前達成和解，退還 40% 費用。</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-3xl font-bold text-red-500 mb-2">0%</div>
              <h3 className="font-semibold text-navy-900 mb-2">裁決後</h3>
              <p className="text-slate-600 text-sm">裁決書送達後，費用不予退還。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            準備提交案件？
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            線上啟動仲裁程序，我們的 AI 驅動平台高效公正地處理數位爭議。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-tw/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              提交案件
            </Link>
            <Link
              href="/zh-tw/fees"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-400 text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              完整費用標準
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
