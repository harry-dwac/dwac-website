import Script from 'next/script'

const discussionCategories = [
  {
    emoji: '🏛️',
    name: '公告',
    description: 'DWAC 官方新闻、更新和重要通知',
  },
  {
    emoji: '💬',
    name: '综合讨论',
    description: '开放讨论、自我介绍和社区交流',
  },
  {
    emoji: '💡',
    name: '创意建议',
    description: '功能请求、改进建议和创新提案',
  },
  {
    emoji: '❓',
    name: '问答',
    description: '关于仲裁程序和 DWAC 流程的问题',
  },
  {
    emoji: '📊',
    name: '投票',
    description: '社区调查和集体决策',
  },
  {
    emoji: '🙌',
    name: '经验分享',
    description: '分享您的工作成果、成就和案例经验',
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">社区</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">交流论坛</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC 会员专属的交流空间，分享仲裁实务经验，探讨数字世界争议解决前沿问题。
          </p>
        </div>
      </section>

      {/* ===== Categories — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">讨论主题</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              参与讨论
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              按分类浏览讨论，提出问题，分享专业见解，或发起全新话题。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {discussionCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Giscus Forum Embed ===== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">论坛</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              讨论区
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              使用 GitHub 账号登录即可参与讨论。新朋友？先自我介绍一下吧！
            </p>
          </div>

          {/* GitHub Signup Guide */}
          <div className="mb-8 bg-gradient-to-r from-slate-50 to-cyan-50 border border-slate-200 rounded-xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  想参与讨论？
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  我们的论坛使用 GitHub 进行身份验证。只需 30 秒即可创建免费账号——只需要邮箱和密码。
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <ol className="flex-1 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                      <span>点击按钮跳转到 GitHub 注册（只需邮箱 + 密码）</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                      <span>验证邮箱后，返回这里登录即可参与讨论</span>
                    </li>
                  </ol>
                  <a
                    href="https://github.com/signup?locale=zh-CN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold text-sm rounded-lg hover:bg-navy-800 hover:shadow-lg transition-all flex-shrink-0"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    注册 GitHub 账号
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              💡 GitHub 是全球最大的开发者社区。注册免费账号后，您还可以访问数千个开源项目和工具。
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <Giscus />
          </div>
        </div>
      </section>

      {/* ===== Guidelines — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              社区准则
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                在所有互动中保持尊重和专业
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                围绕主题进行建设性讨论
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                分享案例前请匿名处理 — 保护保密信息
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                引用他人观点时请注明来源
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                请在对应的分类下发起讨论
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

function Giscus() {
  return (
    <>
      <div className="giscus" />
      <Script
        src="https://giscus.app/client.js"
        strategy="lazyOnload"
        data-repo="Harry-DWAC/dwac-website"
        data-repo-id="R_kgDOSHSzww"
        data-category="General"
        data-category-id="DIC_kwDOSHSzw84C9AeX"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        data-loading="lazy"
        crossOrigin="anonymous"
      />
    </>
  )
}
