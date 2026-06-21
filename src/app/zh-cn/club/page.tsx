import Link from 'next/link'
export const metadata = {
  title: 'DWAC 俱乐部 - 数字世界仲裁中心',
}


const clubFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '经验交流',
    description: '仲裁员分享真实案件中的经验教训，讨论新兴趋势，制定AI增强争议解决的最佳实践。定期会议涵盖从智能合约争议到跨平台治理等主题。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '培训认证',
    description: '为下一代仲裁专业人员设计的结构化技能发展项目。获取数字仲裁、AI辅助案件管理和专业争议领域的认证。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '同行评议',
    description: '通过同行评议对草拟裁决、程序决定和法律分析进行协作质量保证。通过集体专业审查维持最高标准。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: '创新实验室',
    description: '用于测试数字争议解决新方法的沙盒环境。在受控环境中实验AI驱动的案件分析工具、自动化程序工作流和新兴技术。',
  },
]

export default function ClubPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark, Tech-Themed ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-grid-gold" />
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/10 to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold-500/20 to-transparent" />
        </div>
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">
              AI驱动的仲裁
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            智能仲裁员<span className="text-gradient-gold">俱乐部</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            全球首个专注于AI驱动仲裁代理的专业俱乐部——连接前沿技术与争议解决艺术。
          </p>
        </div>
      </section>

      {/* ===== Stats — Dark ===== */}
      <section className="bg-navy-950 py-12 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">50+</p>
              <p className="text-sm text-slate-400 mt-1">智能仲裁员</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">200+</p>
              <p className="text-sm text-slate-400 mt-1">处理案件</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">15+</p>
              <p className="text-sm text-slate-400 mt-1">专业领域</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== About — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">关于</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            什么是智能仲裁员俱乐部？
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            智能仲裁员俱乐部是DWAC的开创性举措，汇集了在实践中利用AI和先进技术的仲裁专业人员。会员处于争议解决新范式的前沿——人类专业知识与人工智能协同工作。
          </p>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
            无论您是正在实验AI辅助案件分析的仲裁员、构建法律AI工具的技术专家，还是研究法律与技术交叉领域的研究者，俱乐部都为您提供了一个结构化的协作、学习和创新环境。
          </p>
        </div>
      </section>

      {/* ===== Feature Sections — Alternating ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">项目</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              俱乐部活动
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              支撑下一代仲裁实践发展的四大支柱。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-8 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-navy rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-slate-900">{feature.title}</h3>
                    <div className="w-8 h-0.5 bg-gold-500 mt-2" />
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Specializations — Dark ===== */}
      <section className="bg-gradient-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">领域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              专业化领域
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              '智能合约',
              '数字资产',
              'AI与算法',
              '电子商务',
              '数据隐私',
              '平台治理',
              '数字身份',
              '区块链',
              '物联网争议',
              '跨境争议',
            ].map((spec, idx) => (
              <div
                key={idx}
                className="bg-navy-800/60 border border-navy-700/50 rounded-lg p-4 text-center hover:border-gold-500/30 hover:bg-navy-800/80 transition-all group cursor-default"
              >
                <span className="text-sm text-slate-300 group-hover:text-gold-400 transition-colors">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How to Join — Light ===== */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">加入</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            准备好加入俱乐部了吗？
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            智能仲裁员俱乐部面向对AI和技术感兴趣的合格仲裁专业人员开放。通过DWAC仲裁员注册流程开始您的申请。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-cn/arbitrators/join/"
              className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
            >
              以仲裁员身份加入
            </Link>
            <Link
              href="/zh-cn/contact/"
              className="border border-slate-300 text-slate-700 font-semibold text-sm px-8 py-3 rounded-md hover:border-navy-900 hover:text-navy-900 transition-all inline-block"
            >
              了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
