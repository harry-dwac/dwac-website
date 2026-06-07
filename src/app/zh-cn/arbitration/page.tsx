
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲裁服务 - 数字世界仲裁中心',
  description: '专业的数字世界争议仲裁服务。公平、高效、全球可执行。',
}

import Link from 'next/link'

export default function ArbitrationOnlineZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6">
            🖥️ 在线仲裁
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">在线仲裁平台</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            DWAC 提供安全、高效、全数字化的仲裁平台。在线提交争议、上传证据、参与线上听证——全部在线完成。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/zh-cn/arbitration-flow/" className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all">
              查看仲裁流程 →
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border border-gold-500/40 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all">
              联系我们
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">平台功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-gold-500/30 transition-all">
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">无纸化立案</h3>
              <p className="text-slate-400 leading-relaxed">
                在线提交索赔、证据和文件。平台支持大文件上传和校验和验证。
              </p>
            </div>

            <div className="bg-navy-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-gold-500/30 transition-all">
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">线上听证</h3>
              <p className="text-slate-400 leading-relaxed">
                随时随地参与听证。集成视频平台支持证据展示、实时转录和安全录制。
              </p>
            </div>

            <div className="bg-navy-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-gold-500/30 transition-all">
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">安全保密</h3>
              <p className="text-slate-400 leading-relaxed">
                端到端加密通信。基于角色的访问控制确保只有授权方可以访问案件材料。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">工作流程</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            我们简化的在线仲裁流程专为高效和公平而设计。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "提交索赔", desc: "在线提交争议并附上支持文件" },
              { step: "2", title: "分配仲裁员", desc: "根据专业知识分配中立仲裁员" },
              { step: "3", title: "线上听证", desc: "参与在线听证并提交证据" },
              { step: "4", title: "作出裁决", desc: "作出有约束力的裁决并在国际范围内执行" },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="bg-navy-800/60 p-6 rounded-2xl border border-slate-700/50 text-center">
                  <div className="w-12 h-12 bg-gold-500 text-navy-900 font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
                {item.step !== "4" && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gold-500/20 -translate-x-6" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/zh-cn/arbitration-flow/" className="text-gold-400 hover:text-gold-300 font-semibold">
              查看详细流程 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">准备提交争议？</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            我们的在线平台让启动仲裁流程变得简单。立即获取费用估算并提交您的索赔。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zh-cn/dispute/" className="px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all">
              提交争议
            </Link>
            <Link href="/zh-cn/fee-calculator/" className="px-8 py-3.5 border border-gold-500/40 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all">
              计算费用
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
