
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '案例型別 - 數位世界仲裁中心',
  description: '瞭解DWAC處理的數位糾紛型別，從AI和區塊鏈到資料隱私和跨境電商。',
}

import Link from 'next/link'

export default function Cases() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">案件統計</h1>
          <p className="text-xl text-gray-300 max-w-2xl">DWAC 仲裁案件信息</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">即將上線</h2>
          <p className="text-gray-400 mb-8">
            DWAC目前處於創始階段。我們的在線仲裁平臺正在開發中，將於2026年第二季度上線。
          </p>
          <p className="text-gray-400 mb-8">
            平臺運營後，本頁面將提供脫敏的案件統計數據，包括受理案件量、解決週期和案件分類等信息。
          </p>
          <div className="bg-navy-800/30 rounded-xl p-8 inline-block">
            <div className="text-4xl font-bold text-gold-600 mb-2">2026年Q2</div>
            <p className="text-gray-400">平臺上線</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">關注 DWAC</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">瞭解更多關於我們的使命以及數位爭議解決機制的建設進展。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/about/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              關於DWAC
            </Link>
            <Link href="/zh-tw/contact/" className="px-6 py-3 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg hover:bg-gold-500/[0.06] transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
