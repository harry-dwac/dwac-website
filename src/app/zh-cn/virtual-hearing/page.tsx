import Link from 'next/link'
export const metadata = {
  title: '在线听证 - 数字世界仲裁中心',
}


const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: '视频庭审',
    description: '实时视频程序连接所有参与者——申请人、被申请人、仲裁员和专家证人——在安全的虚拟法庭环境中。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: '文件共享',
    description: '安全的证据和文件交换，具有版本控制、访问权限和全面的审计追踪。所有提交均经过加密和时间戳认证。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: '实时记录',
    description: '支持多语言的实时文字记录。记录可搜索、可导出，并成为官方案件记录的一部分。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '电子签名',
    description: '裁决书、同意令和程序文件的安全电子签署。符合国际电子签名标准，确保法律效力。',
  },
]

const processSteps = [
  { number: '01', title: '提交', description: '通过安全在线门户提交案件文件和证据。' },
  { number: '02', title: '排期', description: '系统自动安排庭审并通知各方。' },
  { number: '03', title: '庭审', description: '实时视频程序，配备实时记录和文件共享。' },
  { number: '04', title: '评议', description: '仲裁员使用安全协作工具和案件材料进行评议。' },
  { number: '05', title: '裁决', description: '以电子方式签发裁决书，具有完全法律执行力。' },
]

export default function VirtualHearingPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-8">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">
              在线争议解决
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            虚拟仲裁<span className="text-gradient-gold">庭</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            一个综合性的在线平台，用于在安全的数字环境中进行仲裁庭审——从初始提交到最终裁决。
          </p>
        </div>
      </section>

      {/* ===== Features — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">平台</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              庭审功能
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              为国际仲裁程序需求设计的企业级功能。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-8 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-navy-900/5 rounded-xl flex items-center justify-center text-cyan-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <div className="w-8 h-0.5 bg-gold-500 mb-3" />
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process Flow — Dark ===== */}
      <section className="bg-gradient-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">流程</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              运作方式
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              从案件启动到裁决签发的五个精简步骤。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative mx-auto mb-4">
                  <div className="w-14 h-14 bg-navy-800 border-2 border-gold-500/30 rounded-full flex items-center justify-center mx-auto group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all">
                    <span className="font-serif text-lg font-bold text-gold-400">{step.number}</span>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="hidden sm:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold-500/30 to-transparent -translate-y-1/2" />
                  )}
                </div>
                <h3 className="font-serif text-sm font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Security — Light ===== */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">信任</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              安全合规
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔒', title: '端到端加密', desc: '所有通信和文件在传输和存储过程中均经过加密。' },
              { icon: '📋', title: 'GDPR合规', desc: '完全符合国际数据保护法规。' },
              { icon: '🌐', title: '多司法管辖区', desc: '遵守全球主要司法管辖区的仲裁法律。' },
              { icon: '📊', title: '审计追踪', desc: '完整记录所有操作和访问以确保透明度。' },
              { icon: '🛡️', title: '数据驻留', desc: '可配置的数据存储位置以满足本地要求。' },
              { icon: '⚡', title: '99.9%可用性', desc: '具有冗余故障转移系统的企业级基础设施。' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-sm font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Coming Soon — Dark ===== */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/60 border border-cyan-400/20 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">即将推出</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                虚拟仲裁庭 — 2025年上线
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                我们正在开发最先进的虚拟庭审平台。成为首批体验在线仲裁未来的用户。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/zh-cn/contact/"
                  className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
                >
                  申请早期访问
                </Link>
                <Link
                  href="/zh-cn/resources/"
                  className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all inline-block"
                >
                  查看资源
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
