
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲裁服務 - 數字世界仲裁中心',
  description: '專業的數字世界爭議仲裁服務。公平、高效、全球可執行。',
}

import Link from 'next/link'

export default function ArbitrationOnlineZhTw() {
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
            🖥️ 線上仲裁
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">線上仲裁平臺</h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            DWAC 提供安全、高效、全數字化的仲裁平臺。線上提交爭議、上傳證據、參與線上聽證——全部線上完成。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/zh-tw/arbitration-flow/" className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all">
              檢視仲裁流程 →
            </Link>
            <Link href="/zh-tw/contact/" className="px-6 py-3 border border-gold-500/40 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all">
              聯絡我們
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">平臺功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-navy-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-gold-500/30 transition-all">
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">無紙化立案</h3>
              <p className="text-slate-400 leading-relaxed">
                線上提交索賠、證據和檔案。平臺支援大檔案上傳和校驗和驗證。
              </p>
            </div>

            <div className="bg-navy-800/40 p-8 rounded-2xl border border-slate-700/50 hover:border-gold-500/30 transition-all">
              <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">線上聽證</h3>
              <p className="text-slate-400 leading-relaxed">
                隨時隨地參與聽證。整合影片平臺支援證據展示、實時轉錄和安全錄制。
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
                端到端加密通訊。基於角色的訪問控制確保只有授權方可以訪問案件材料。
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
            我們簡化的線上仲裁流程專為高效和公平而設計。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "提交索賠", desc: "線上提交爭議並附上支援檔案" },
              { step: "2", title: "分配仲裁員", desc: "根據專業知識分配中立仲裁員" },
              { step: "3", title: "線上聽證", desc: "參與線上聽證並提交證據" },
              { step: "4", title: "作出裁決", desc: "作出有約束力的裁決並在國際範圍內執行" },
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
            <Link href="/zh-tw/arbitration-flow/" className="text-gold-400 hover:text-gold-300 font-semibold">
              檢視詳細流程 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">準備提交爭議？</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            我們的線上平臺讓啟動仲裁流程變得簡單。立即獲取費用估算並提交您的索賠。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zh-tw/dispute/" className="px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-lg hover:shadow-lg hover:shadow-gold-500/30 transition-all">
              提交爭議
            </Link>
            <Link href="/zh-tw/fee-calculator/" className="px-8 py-3.5 border border-gold-500/40 text-gold-400 font-semibold rounded-lg hover:bg-gold-500/10 transition-all">
              計算費用
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
