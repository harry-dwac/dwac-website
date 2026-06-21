import Link from "next/link"
export const metadata = {
  title: '服務項目 - 数字世界仲裁中心',
}


export default function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">全面解決方案</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">服務領域</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            從仲裁到調解，DWAC 提供專為數位世界量身定制的全方位爭議解決服務。
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">我們提供</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">爭議解決服務</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              專業、高效、可執行——為各類數位世界爭議提供全方位解決路徑。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">線上仲裁</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                全程線上仲裁程序，裁決依據《紐約公約》在170+國家可執行。預設90天結案，簡易程序僅需30天。
              </p>
              <Link href="/zh-tw/dispute/" className="text-cyan-600 text-sm font-semibold hover:text-cyan-700">提交仲裁申請 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">調解服務</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                由經驗豐富的調解員主導的協商談判，專注於數位世界爭議。自願、保密、靈活——在維護商業關係的同時達成和解。
              </p>
              <Link href="/zh-tw/contact/" className="text-emerald-600 text-sm font-semibold hover:text-emerald-700">申請調解 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">緊急仲裁員</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                緊急臨時措施包括財產保全、證據保護和禁令。48小時內指定緊急仲裁員，應對時間敏感的緊急情況。
              </p>
              <Link href="/zh-tw/rules/" className="text-amber-600 text-sm font-semibold hover:text-amber-700">查看緊急仲裁規則 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-violet-50 rounded-xl flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">網域與智慧財產權爭議</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                專門處理網域名稱衝突、數位智慧財產權和網域搶註爭議。以UDRP為藍本，增加數位世界特有條款。
              </p>
              <Link href="/zh-tw/dispute/" className="text-violet-600 text-sm font-semibold hover:text-violet-700">提交網域爭議 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">合規諮詢</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                數位合規、資料保護法規和跨境法律框架的專業指導，幫助企業應對複雜的數位監管環境。
              </p>
              <Link href="/zh-tw/contact/" className="text-rose-600 text-sm font-semibold hover:text-rose-700">獲取專家建議 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">費用估算</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                透明且具競爭力的收費，約為傳統仲裁機構的50%。使用線上計算器預估您的爭議解決費用。
              </p>
              <Link href="/zh-tw/fee-calculator/" className="text-blue-600 text-sm font-semibold hover:text-blue-700">費用計算器 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">專業領域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">數位爭議類型</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              DWAC 處理數位生態系統中的各類爭議
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "智慧合約", desc: "履行與執行爭議" },
              { title: "AI 代理責任", desc: "自主系統決策" },
              { title: "數位資產", desc: "NFT、代幣、虛擬財產" },
              { title: "資料合規", desc: "跨境資料爭議" },
              { title: "電子商務", desc: "平台責任與封號" },
              { title: "網域與智慧財產權", desc: "線上智慧財產權" },
              { title: "網路安全", desc: "資料外洩責任" },
              { title: "數位支付", desc: "跨境交易爭議" },
            ].map((item) => (
              <div key={item.title} className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">170+</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">國家可執行</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天預設結案</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">線上程序</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">50%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">傳統機構費率</div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">準備好開始了嗎？</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              提交您的爭議或聯繫我們進行諮詢。我們的團隊將幫助您找到最佳解決路徑。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-tw/dispute/" className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all">
                提交仲裁申請
              </Link>
              <Link href="/zh-tw/contact/" className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all">
                聯繫我們
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
