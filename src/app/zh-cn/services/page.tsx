import Link from "next/link"

export default function Services() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">全面解决方案</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">服务领域</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            从仲裁到调解，DWAC 提供专为数字世界量身定制的全方位争议解决服务。
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">我们提供</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">争议解决服务</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              专业、高效、可执行——为各类数字世界争议提供全方位解决路径。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-7 h-7 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">在线仲裁</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                全程在线仲裁程序，裁决依据《纽约公约》在170+国家可执行。默认90天结案，简易程序仅需30天。
              </p>
              <Link href="/zh-cn/dispute/" className="text-cyan-600 text-sm font-semibold hover:text-cyan-700">提交仲裁申请 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">调解服务</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                由经验丰富的调解员主导的协商谈判，专注于数字世界争议。自愿、保密、灵活——在维护商业关系的同时达成和解。
              </p>
              <Link href="/zh-cn/contact/" className="text-emerald-600 text-sm font-semibold hover:text-emerald-700">申请调解 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">紧急仲裁员</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                紧急临时措施包括财产保全、证据保护和禁令。48小时内指定紧急仲裁员，应对时间敏感的紧急情况。
              </p>
              <Link href="/zh-cn/rules/" className="text-amber-600 text-sm font-semibold hover:text-amber-700">查看紧急仲裁规则 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-violet-50 rounded-xl flex items-center justify-center group-hover:bg-violet-100 transition-colors">
                <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">域名与知识产权争议</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                专门处理域名冲突、数字知识产权和网络抢注争议。以UDRP为蓝本，增加数字世界特有条款。
              </p>
              <Link href="/zh-cn/dispute/" className="text-violet-600 text-sm font-semibold hover:text-violet-700">提交域名争议 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-rose-50 rounded-xl flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                <svg className="w-7 h-7 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">合规咨询</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                数字合规、数据保护法规和跨境法律框架的专业指导，帮助企业应对复杂的数字监管环境。
              </p>
              <Link href="/zh-cn/contact/" className="text-rose-600 text-sm font-semibold hover:text-rose-700">获取专家建议 &rarr;</Link>
            </div>

            <div className="group p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 mb-6 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">费用估算</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                透明且具有竞争力的收费，约为传统仲裁机构的50%。使用在线计算器预估您的争议解决费用。
              </p>
              <Link href="/zh-cn/fee-calculator/" className="text-blue-600 text-sm font-semibold hover:text-blue-700">费用计算器 &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">专业领域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">数字争议类型</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              DWAC 处理数字生态系统中的各类争议
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "智能合约", desc: "履行与执行争议" },
              { title: "AI 代理责任", desc: "自主系统决策" },
              { title: "数字资产", desc: "NFT、代币、虚拟财产" },
              { title: "数据合规", desc: "跨境数据争议" },
              { title: "电子商务", desc: "平台责任与封号" },
              { title: "域名与知识产权", desc: "在线知识产权" },
              { title: "网络安全", desc: "数据泄露责任" },
              { title: "数字支付", desc: "跨境交易争议" },
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
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">国家可执行</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天默认结案</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">在线程序</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">50%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">传统机构费率</div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">准备好开始了吗？</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              提交您的争议或联系我们进行咨询。我们的团队将帮助您找到最佳解决路径。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-cn/dispute/" className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all">
                提交仲裁申请
              </Link>
              <Link href="/zh-cn/contact/" className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
