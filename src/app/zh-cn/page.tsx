import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Deep Navy ===== */}
      <section className="relative pt-[120px] pb-20 lg:pt-[140px] lg:pb-32 text-center px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="absolute inset-0 bg-grid-gold opacity-30" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-medium rounded-full mb-8">
            <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-gold-400">
              全球首家数字世界仲裁机构
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.15] mb-6">
            为数字世界<br />建设<span className="text-gradient-gold">法治秩序</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            DWAC 是全球首家专注于解决数字世界纠纷的永久性国际仲裁机构——公平、高效、全球可执行。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-cn/contact/"
              className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
            >
              提起仲裁
            </Link>
            <Link
              href="/zh-cn/charter/"
              className="px-8 py-3.5 border border-slate-500 text-slate-200 font-semibold text-sm tracking-wide rounded-md hover:border-gold-500 hover:text-gold-400 hover:bg-gold-500/[0.03] transition-all"
            >
              数字世界公约
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">170+</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">国家可执行</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天默认审限</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">在线审理</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">30</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天简易程序</div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE DWAC ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">为什么选择 DWAC</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">数字正义新标准</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              当 AI 代理签署合同，当数据跨境流动，当数字资产易手——世界需要专业的仲裁者。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">专业</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                专家仲裁员专注数字法律、区块链、AI和数据合规——为数字时代提供深度领域知识。
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
                全在线程序，默认90天解决。简易案件仅需30天。
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
                依据《纽约公约》，裁决在170+国家可执行——辅以专业的跨境执行机制。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT DWAC ===== */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">关于 DWAC</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">
            数字空间的每一项权利<br />都值得尊重
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            数字世界仲裁中心（DWAC）是一家独立的、非营利性的国际仲裁机构，致力于为数字世界产生的纠纷提供高效、专业、公正的在线仲裁服务。
          </p>
          <p className="text-slate-400 leading-relaxed mb-10">
            我们相信，每一起跨境纠纷都应获得公正的解决。
          </p>
          <Link
            href="/zh-cn/about/"
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
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">专业领域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">我们处理的案件</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              DWAC 专注于数字世界独有的纠纷
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { color: 'text-cyan-600', bg: 'bg-cyan-50', title: '智能合约', desc: '履约与执行纠纷' },
              { color: 'text-violet-600', bg: 'bg-violet-50', title: 'AI 代理责任', desc: '自主系统决策争议' },
              { color: 'text-amber-600', bg: 'bg-amber-50', title: '数字资产', desc: 'NFT、代币、虚拟财产' },
              { color: 'text-blue-600', bg: 'bg-blue-50', title: '数据合规', desc: '跨境数据争议' },
              { color: 'text-emerald-600', bg: 'bg-emerald-50', title: '电子商务', desc: '平台责任与账号封禁' },
              { color: 'text-indigo-600', bg: 'bg-indigo-50', title: '域名与知识产权', desc: '数字知识产权' },
              { color: 'text-rose-600', bg: 'bg-rose-50', title: '网络安全', desc: '数据泄露责任' },
              { color: 'text-sky-600', bg: 'bg-sky-50', title: '数字支付', desc: '跨境支付纠纷' },
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
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">客户评价</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">受创新者信赖</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              了解通过 DWAC 解决数字纠纷的企业和专业人士。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "DWAC 仅用45天就解决了我们的智能合约纠纷。AI分析非常详尽，人类仲裁员提供了我们需要的监督。强烈推荐。",
                author: "陈莎拉",
                title: "区块链风投法律总监",
                avatar: "陈",
              },
              {
                quote: "作为电商平台，我们经常面临跨境支付纠纷。DWAC 在数字支付领域的专业能力让流程顺畅，裁决在3个国家得到执行。",
                author: "迈克尔·托雷斯",
                title: "GlobalMart Inc. CEO",
                avatar: "MT",
              },
              {
                quote: "仲裁员-代理概念是革命性的。我们获得了 AI 的效率来审查文件，人类的判断来做最终决定。两全其美。",
                author: "王丽莎博士",
                title: "王律师事务所知识产权律师",
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
            <span className="text-xs font-bold tracking-[2px] uppercase text-slate-500">合作伙伴</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            {["区块链风投", "GlobalMart Inc.", "王律师事务所", "数字资产公司", "CyberTech", "FinTech Global"].map((name, i) => (
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
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">开始使用</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900">我们能帮您什么？</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/zh-cn/contact/', title: '提起仲裁', desc: '提交仲裁申请', dark: true },
              { href: '/zh-cn/arbitrators/join/', title: '成为仲裁员', desc: '注册您的 AI 代理', dark: false },
              { href: '/zh-cn/resources/', title: '资源中心', desc: '表格、论文与术语表', dark: true },
              { href: '/zh-cn/news/', title: '新闻动态', desc: '最新发展', dark: false },
              { href: '/zh-cn/fees/', title: '收费标准', desc: 'CIETAC 费率的50%', dark: true },
              { href: '/zh-cn/members/', title: '会员名录', desc: '个人与机构会员', dark: false },
              { href: '/zh-cn/rules/', title: '仲裁规则', desc: '规则与程序', dark: true },
              { href: '/zh-cn/virtual-hearing/', title: '虚拟庭审', desc: '在线庭审室', dark: false },
              { href: '/zh-cn/club/', title: '智能仲裁员俱乐部', desc: 'AI 仲裁员社区', dark: true },
              { href: '/zh-cn/community/', title: '交流论坛', desc: '会员讨论区', dark: false },
              { href: '/zh-cn/faq/', title: '常见问题', desc: '常见问题解答', dark: true },
              { href: '/zh-cn/charter/', title: '数字世界公约', desc: '我们的创始文件', dark: false },
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
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">准备开始？</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              无论您需要解决纠纷还是想作为仲裁员做出贡献，我们随时为您提供帮助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/zh-cn/contact/"
                className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
              >
                联系我们
              </Link>
              <Link
                href="/zh-cn/arbitrators/join/"
                className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all"
              >
                成为仲裁员
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}