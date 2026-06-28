import Link from 'next/link'

export default function ArbitratorsZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁員名冊</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            認識致力於數位正義的創始仲裁員
          </p>
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">創始仲裁員</h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            DWAC 由一群法律與科技專業人士共同創建，致力於為數位世界建立公正、高效的爭議解決機制。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Harry */}
            <div className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-xl p-8 border border-gold-subtle shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">周永俊 (Harry)</h3>
                <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-4">創始人 & Chairman</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  DWAC 發起人兼創始主席，致力於建立數位正義體系，推動數位領域的國際仲裁標準。
                </p>
              </div>
            </div>

            {/* Dr. Frontie */}
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-xl p-8 border border-gold-subtle shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Frontie博士</h3>
                <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-4">創始會員</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  國際仲裁與數位法律領域的傑出專家，為 DWAC 的程序框架和標準制定做出重要貢獻。
                </p>
              </div>
            </div>

            {/* Dr. Venessa */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl p-8 border border-emerald-200 shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Venessa博士</h3>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-4">創始會員</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  區塊鏈技術和智慧合約爭議領域的領先專家，為數位資產仲裁程序提供關鍵洞見。
                </p>
              </div>
            </div>

            {/* Prof. Alec */}
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-8 border border-purple-200 shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Alec教授</h3>
                <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-4">創始會員 & Arbitrator</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  數位治理與國際仲裁專家，為公正高效的爭議解決機制的發展貢獻寶貴見解。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">加入我們的仲裁員團隊</h2>
            <p className="text-lg text-gray-400 mb-8">
              我們持續擴大仲裁員團隊，以滿足數位爭議解決日益增長的需求。如果您在數位法律、區塊鏈、AI 或相關領域有專業知識，歡迎申請加入。
            </p>
            <Link href="/zh-tw/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
              申請成為仲裁員
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
