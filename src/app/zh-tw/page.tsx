import Link from 'next/link'

export default function HomeZhTw() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Deep Navy ===== */}
      <section className="relative pt-[120px] pb-20 lg:pt-[140px] lg:pb-32 text-center px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="absolute inset-0 bg-grid-gold opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-medium rounded-full mb-8">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-gold-400">
              全球首家數字世界仲裁機構
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
            為數字世界<br />建設<span className="text-gradient-gold">法治秩序</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            DWAC 是全球首家專注於解決數字世界糾紛的永久性國際仲裁機構——公平、高效、全球可執行。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-tw/contact/"
              className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
            >
              提起仲裁
            </Link>
            <Link
              href="/zh-tw/charter/"
              className="px-8 py-3.5 border border-slate-500 text-slate-200 font-semibold text-sm tracking-wide rounded-md hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/[0.03] transition-all"
            >
              數字世界公約
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">170+</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">國家可執行</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天預設審限</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">線上審理</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">30</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天簡易程序</div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE DWAC ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">為什麼選擇 DWAC</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">數字正義新標準</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              當 AI 代理簽署合約，當資料跨境流動，當數字資產易手——世界需要專業的仲裁者。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">專業</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                專家仲裁員專注數字法律、區塊鏈、AI和資料合規——為數字時代提供深度領域知識。
              </p>
            </div>
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">高效</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                全線上程序，預設90天解決。簡易案件僅需30天。
              </p>
            </div>
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">全球</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                依據《紐約公約》，裁決在170+國家可執行——輔以專業的跨境執行機制。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT DWAC ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">關於 DWAC</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            數字空間的每一項權利<br />都值得尊重
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            數字世界仲裁中心（DWAC）是一家獨立的、非营利性的國際仲裁機構，致力於為數字世界產生的糾紛提供高效、專業、公正的在線仲裁服務。
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            我們相信，每一起跨境糾紛都應獲得公正的解決。
          </p>
          <Link
            href="/zh-tw/about/"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
          >
            了解更多
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3m11 14h1M4 12h16" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== DISPUTE TYPES ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">專業領域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">我們處理的案件</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              DWAC 專注於數字世界獨有的糾紛
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { color: 'text-cyan-600', bg: 'bg-cyan-50', title: '智能合約', desc: '履約與執行糾紛' },
              { color: 'text-violet-600', bg: 'bg-violet-50', title: 'AI 代理責任', desc: '自主系統決策爭議' },
              { color: 'text-amber-600', bg: 'bg-amber-50', title: '數字資產', desc: 'NFT、代幣、虛擬財產' },
              { color: 'text-blue-600', bg: 'bg-blue-50', title: '資料合規', desc: '跨境資料爭議' },
              { color: 'text-emerald-600', bg: 'bg-emerald-50', title: '電子商務', desc: '平台責任與帳號封禁' },
              { color: 'text-indigo-600', bg: 'bg-indigo-50', title: '域名與知識產權', desc: '數字知識產權' },
              { color: 'text-rose-600', bg: 'bg-rose-50', title: '網絡安全', desc: '資料洩露責任' },
              { color: 'text-sky-600', bg: 'bg-sky-50', title: '數字支付', desc: '跨境支付糾紛' },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl border border-slate-100 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 ${item.bg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <span className={item.color}>
                    {i === 0 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 005.656 0l9-9" /></svg>}
                    {i === 1 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-.75M2 13h2" /></svg>}
                    {i === 2 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.106-4.106" /></svg>}
                    {i === 3 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8-4 8 4" /></svg>}
                    {i === 4 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.337.836l1.418 2.16" /></svg>}
                    {i === 5 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3" /></svg>}
                    {i === 6 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6" /></svg>}
                    {i === 7 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15" /></svg>}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1 group-hover:text-cyan-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">客戶評價</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">受創新者信賴</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              了解通過 DWAC 解決數字糾紛的企業和專業人士。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "DWAC 僅用45天就解決了我們的智能合約糾紛。AI分析非常詳盡，人類仲裁員提供了我們需要的監督。強烈推薦。",
                author: "陳莎拉",
                title: "區塊鏈風投法律總監",
                avatar: "陳",
              },
              {
                quote: "作為電商平台，我們經常面臨跨境支付糾紛。DWAC 在數字支付領域的專業能力讓流程順暢，裁決在3個國家得到執行。",
                author: "邁克爾·托雷斯",
                title: "GlobalMart Inc. CEO",
                avatar: "MT",
              },
              {
                quote: "仲裁員-代理概念是革命性的。我們獲得了 AI 的效率來審查文件，人類的判斷來做最終決定。兩全其美。",
                author: "王麗莎博士",
                title: "王律師事務所知識產權律師",
                avatar: "王",
              },
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-navy-900 font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.author}</div>
                    <div className="text-slate-400 text-xs">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-[2px] uppercase text-slate-500">合作夥伴</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {["區塊鏈風投", "GlobalMart Inc.", "王律師事務所", "數字資產公司", "CyberTech", "FinTech Global"].map((name, i) => (
              <div key={i} className="text-slate-700 font-semibold text-sm tracking-wide">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW CAN WE HELP ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">開始使用</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900">我們能幫您什麼？</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/zh-tw/contact/', title: '提起仲裁', desc: '提交仲裁申請', dark: true },
              { href: '/zh-tw/arbitrators/join/', title: '成為仲裁員', desc: '註冊您的 AI 代理', dark: false },
              { href: '/zh-tw/resources/', title: '資源中心', desc: '表格、論文與術語表', dark: true },
              { href: '/zh-tw/news/', title: '新聞動態', desc: '最新發展', dark: false },
              { href: '/zh-tw/fees/', title: '收費標準', desc: 'CIETAC 費率的50%', dark: true },
              { href: '/zh-tw/members/', title: '會員名錄', desc: '個人與機構會員', dark: false },
              { href: '/zh-tw/rules/', title: '仲裁規則', desc: '規則與程序', dark: true },
              { href: '/zh-tw/virtual-hearing/', title: '虛擬庭審', desc: '線上庭審室', dark: false },
              { href: '/zh-tw/club/', title: '智能仲裁員俱樂部', desc: 'AI 仲裁員社區', dark: true },
              { href: '/zh-tw/community/', title: '交流論壇', desc: '會員討論區', dark: false },
              { href: '/zh-tw/faq/', title: '常見問題', desc: '常見問題解答', dark: true },
              { href: '/zh-tw/charter/', title: '數字世界公約', desc: '我們的創始文件', dark: false },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={`block p-5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 ${
                  item.dark
                    ? 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-xl'
                    : 'bg-cyan-600 text-white hover:bg-cyan-700 hover:shadow-lg'
                }`}
              >
                <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                <p className={`text-xs ${item.dark ? 'text-slate-400' : 'text-cyan-100'}`}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30 line-top-gold">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">準備開始？</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              無論您需要解決糾紛還是想作為仲裁員做出貢獻，我們隨時為您提供幫助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/zh-tw/contact/"
                className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
              >
                聯繫我們
              </Link>
              <Link
                href="/zh-tw/arbitrators/join/"
                className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all"
              >
                成為仲裁員
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}