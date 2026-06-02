import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gold-400">数字世界</span><br />
              仲裁中心
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              独立的、非营利性的永久性国际仲裁机构，专注于解决数字世界纠纷。公平、高效、全球可执行。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-cn/contact/" className="px-8 py-3 bg-gold-500/[0.06]0 hover:bg-gold-500 text-white font-semibold rounded-lg transition-colors">
                提起仲裁
              </Link>
              <Link href="/zh-cn/arbitrators/join/" className="px-8 py-3 border-2 border-gold-500 text-gold-400 hover:bg-gold-500/[0.05]0 hover:text-white font-semibold rounded-lg transition-colors">
                成为仲裁员
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 关于 DWAC ===== */}
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Why Choose DWAC */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">为什么选择DWAC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">专业</h3>
              <p className="text-gray-400">专家仲裁员专注数字法律、区块链、AI和数据合规。</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">高效</h3>
              <p className="text-gray-400">全在线程序，默认90天解决。简易程序：30天。</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-navy-800/30 border border-gold-subtle/50">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">全球</h3>
              <p className="text-gray-400">依据《纽约公约》，裁决在170+国家可执行。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Emoji */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">我们能帮您什么</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Link href="/zh-cn/contact/" className="block p-6 rounded-xl bg-navy-900 text-white hover:bg-navy-800 transition-colors text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-semibold text-lg mb-2">提交仲裁申请</h3>
              <p className="text-gray-400 text-sm">填写申请表，开始您的数字世界纠纷解决之旅</p>
            </Link>
            <Link href="/zh-cn/arbitrators/join/" className="block p-6 rounded-xl bg-gradient-gold text-white hover:bg-gold-600 transition-colors text-center">
              <div className="text-4xl mb-4">👨‍⚖️</div>
              <h3 className="font-semibold text-lg mb-2">成为仲裁员</h3>
              <p className="text-gold-300 text-sm">加入我们专家团队，处理全球数字法律纠纷</p>
            </Link>
            <Link href="/zh-cn/membership/" className="block p-6 rounded-xl bg-navy-900 text-white hover:bg-navy-800 transition-colors text-center">
              <div className="text-4xl mb-4">🎫</div>
              <h3 className="font-semibold text-lg mb-2">申请会员</h3>
              <p className="text-gray-400 text-sm">参与数字世界法治建设，享受专属权益</p>
            </Link>
            <Link href="/zh-cn/charter/" className="block p-6 rounded-xl bg-gradient-gold text-white hover:bg-gold-600 transition-colors text-center">
              <div className="text-4xl mb-4">📜</div>
              <h3 className="font-semibold text-lg mb-2">阅读数字世界公约</h3>
              <p className="text-gold-300 text-sm">了解我们的法律框架和核心原则</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">里程碑</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年 - DWAC发起设立</h3>
                  <p className="text-gray-400">数字世界仲裁中心正式成立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q4 - 创始理事会组建完成</h3>
                  <p className="text-gray-400">首批创始理事会成员正式就位</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06]0 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q1 - 仲裁规则发布</h3>
                  <p className="text-gray-400">《数字世界仲裁规则》正式发布，首批仲裁员名册建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">→</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q2 - 在线仲裁平台上线</h3>
                  <p className="text-gray-400">Alpha版本正式发布</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-800/40 rounded-full flex items-center justify-center text-white font-bold">Q3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q3 - 试运行</h3>
                  <p className="text-gray-400">开始受理模拟案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-navy-800/40 rounded-full flex items-center justify-center text-white font-bold">Q4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q4 - 正式运营</h3>
                  <p className="text-gray-400">与首批平台签署合作协议</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">最新动态</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">公告</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">数字世界仲裁中心正式成立</h3>
              <p className="text-gray-400 text-sm">DWAC作为首个专注于解决数字世界纠纷的永久性国际仲裁机构正式投入运营。</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full">仲裁员</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">首批仲裁员名单公布</h3>
              <p className="text-gray-400 text-sm">由周永俊 (Harry)、Frontie博士、Venessa博士、Alec教授组成的创始仲裁员团队正式亮相。</p>
            </article>
            <article className="bg-navy-800/20 p-6 rounded-xl shadow-sm">
              <div className="flex gap-2 mb-3">
                <span className="text-gray-500 text-sm">2026年4月</span>
                <span className="bg-gradient-gold text-navy-900 font-bold text-xs px-2 py-0.5 rounded-full">文件</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">《数字世界公约》中文版发布</h3>
              <p className="text-gray-400 text-sm">作为数字世界法治的基础性文件，《数字世界公约》正式发布。</p>
            </article>
          </div>
          <div className="text-center mt-8">
            <Link href="/zh-cn/news/" className="text-gold-500 font-semibold hover:text-gold-400">
              查看更多动态 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备好开始了吗？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            无论您需要解决纠纷还是想作为仲裁员做出贡献，我们随时为您提供帮助。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              联系我们
            </Link>
            <Link href="/zh-cn/arbitrators/join/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20/10 transition-colors">
              加入仲裁员
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
