import Link from 'next/link'

export default function HomeZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gold-400">數字世界</span><br />
            仲裁中心
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">DWAC</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            首個專注於解決數字世界糾紛的永久性國際仲裁機構。公平、高效、全球可執行。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/contact/" className="px-8 py-3 bg-gold-500/[0.06]0 hover:bg-gold-500 text-white font-semibold rounded-lg transition-colors">
              提起仲裁
            </Link>
            <Link href="/zh-tw/arbitrators/join/" className="px-8 py-3 border-2 border-gold-500 text-gold-400 hover:bg-gold-500/[0.05]0 hover:text-white font-semibold rounded-lg transition-colors">
              成為仲裁員
            </Link>
          </div>
        </div>
      </section>

      {/* Why DWAC */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">為什麼選擇DWAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">專業</h3>
              <p className="text-gray-400">專家仲裁員專注數字法律、區塊鏈、AI和資料合規。</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">高效</h3>
              <p className="text-gray-400">全線上程序，預設90天解決。簡易程序：30天。</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">全球</h3>
              <p className="text-gray-400">依據《紐約公約》，裁決在170+國家可執行。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">準備好開始了嗎？</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
