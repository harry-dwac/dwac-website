import Link from 'next/link'
export const metadata = {
  title: '社群 - 数字世界仲裁中心',
}


const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '討論區',
    description: '就仲裁實務、數位法律發展和程序創新進行主題討論。分享見解，從DWAC社區的集體經驗中學習。',
    items: ['程序問題', '案件策略', '數位證據', '倫理與標準'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: '案例研究',
    description: '由DWAC仲裁員和從業者貢獻的匿名案例分析。研究真實場景，探索不同方法，加深對數位爭議解決的理解。',
    items: ['電子商務爭議', '平台治理', '數位資產案例', '跨境問題'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '知識庫',
    description: '由社區策劃的協作文章、指南和參考資料。一座隨著DWAC全球會員集體專業知識不斷成長的活圖書館。',
    items: ['實務指南', '司法管轄區調研', '技術評論', '模板與清單'],
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">社區</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">交流論壇</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC會員專屬空間，用於交流思想、分享案例見解，並協作推進數位世界仲裁實踐。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">關於論壇</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            當專業知識遇上協作
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
            DWAC交流論壇旨在促進全球仲裁專業人員、研究者和從業者之間的同行知識交流。無論您是資深仲裁員還是數位爭議解決的新人，這個平台都能將您與志同道合的同行連結起來。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-serif text-2xl font-bold text-gold-500 mb-1">20+</p>
              <p className="text-sm text-slate-500">話題類別</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-serif text-2xl font-bold text-gold-500 mb-1">500+</p>
              <p className="text-sm text-slate-500">預期會員</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-serif text-2xl font-bold text-gold-500 mb-1">全球</p>
              <p className="text-sm text-slate-500">多語言支援</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">功能</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              論壇功能
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              三大核心模組，支援專業協作的方方面面。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-8"
              >
                <div className="w-14 h-14 bg-navy-900/5 rounded-xl flex items-center justify-center text-gold-500 mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/60 border border-gold-500/20 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[2px] uppercase text-gold-400">即將推出</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                論壇將於2025年第三季上線
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                我們正在為DWAC社區打造世界級的協作平台。上線前將向所有活躍DWAC會員開放註冊。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/zh-tw/membership/"
                  className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
                >
                  申請會員資格
                </Link>
                <Link
                  href="/zh-tw/contact/"
                  className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all inline-block"
                >
                  聯繫我們
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gold-500/[0.06] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">需要會員資格</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  交流論壇僅對活躍DWAC會員開放。如需獲取存取權限，請完成會員申請流程。個人和機構會員均享有完整的論壇存取權限。
                </p>
                <Link
                  href="/zh-tw/membership/"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  了解會員資格
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
