import Link from 'next/link'

export default function ArbitrationZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">专业争议解决</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-6">仲裁服务</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC为数字世界纠纷提供高效、专业、可在全球执行的仲裁服务。
          </p>
        </div>
      </section>

      {/* Why Arbitration */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">为什么选择DWAC</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">DWAC优势</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              专为数字时代打造的专业能力，兼具传统仲裁的执行力。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyan-50 rounded-xl flex items-center justify-center group-hover:bg-cyan-100 transition-colors">
                <svg className="w-8 h-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">全球可执行</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                裁决可在170多个国家和地区根据《纽约公约》执行，配有专门的跨境执行机制。
              </p>
            </div>

            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">快速高效</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                默认90天解决争议。简易程序仅30天。全程在线进行。
              </p>
            </div>

            <div className="group text-center p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-emerald-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-.75M2 13h2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 0118 8 4 4 0 00-16 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">AI赋能</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                创新的仲裁员-Agent机制，将AI效率与人类专业判断和问责制相结合。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-navy-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">专业领域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">我们处理的纠纷</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              DWAC专注于数字世界特有的争议类型
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">智能合约</h3>
              <p className="text-slate-400 text-xs">履行与执行纠纷</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">AI代理责任</h3>
              <p className="text-slate-400 text-xs">自主系统决策争议</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">数字资产</h3>
              <p className="text-slate-400 text-xs">NFT、代币、虚拟财产</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">数据合规</h3>
              <p className="text-slate-400 text-xs">跨境数据纠纷</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">电子商务</h3>
              <p className="text-slate-400 text-xs">平台责任与账号封禁</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">域名与知识产权</h3>
              <p className="text-slate-400 text-xs">数字知识产权争议</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">网络安全</h3>
              <p className="text-slate-400 text-xs">数据泄露责任纠纷</p>
            </div>
            <div className="group p-5 rounded-xl border border-gold-subtle/30 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300">
              <h3 className="font-semibold text-white text-sm mb-2">数字支付</h3>
              <p className="text-slate-400 text-xs">跨境支付争议</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">操作流程</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">仲裁流程</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">1</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">提交申请</h3>
                <p className="text-slate-500 text-sm">通过联系表单或电子邮件提交仲裁申请及相关证明材料。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">2</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">组成仲裁庭</h3>
                <p className="text-slate-500 text-sm">DWAC在7个工作日内组成仲裁庭，指定仲裁员Agent和人类仲裁员。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">3</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">审理程序</h3>
                <p className="text-slate-500 text-sm">AI Agent分析证据、进行法律研究、起草文件。人类仲裁员提供监督和审查。</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">4</div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">裁决与执行</h3>
                <p className="text-slate-500 text-sm">人类仲裁员审查并签署裁决书。可在170多个国家和地区根据《纽约公约》执行。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gold-subtle bg-navy-950">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-subtle/30">
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">170+</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">可执行国家/地区</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">90</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">天默认解决</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-cyan-400 mb-1">100%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">在线审理</div>
          </div>
          <div className="py-10 px-6 text-center">
            <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">50%</div>
            <div className="text-xs font-semibold tracking-[1.5px] uppercase text-slate-400">贸仲费率标准</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 lg:p-16 rounded-xl border border-gold-subtle bg-navy-800/30">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">准备开始？</h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              无论您需要解决争议还是想了解更多服务详情，我们随时为您提供帮助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-cn/contact/" className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all">
                提交争议
              </Link>
              <Link href="/zh-cn/rules/" className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm tracking-wide rounded-md hover:bg-gold-500/[0.05] hover:border-gold-500/50 transition-all">
                查看规则
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
