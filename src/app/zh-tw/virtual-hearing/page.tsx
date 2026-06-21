import Link from 'next/link'
export const metadata = {
  title: '線上聽證 - 数字世界仲裁中心',
}


const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: '視訊庭審',
    description: '即時視訊程序連接所有參與者——申請人、被申請人、仲裁員和專家證人——在安全的虛擬法庭環境中。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    title: '檔案共享',
    description: '安全的證據和檔案交換，具有版本控制、存取權限和全面的稽核追蹤。所有提交均經過加密和時間戳認證。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    title: '即時紀錄',
    description: '支援多語言的即時文字紀錄。紀錄可搜尋、可匯出，並成為官方案件記錄的一部分。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '電子簽名',
    description: '裁決書、同意令和程序檔案的安全電子簽署。符合國際電子簽名標準，確保法律效力。',
  },
]

const processSteps = [
  { number: '01', title: '提交', description: '透過安全線上門戶提交案件檔案和證據。' },
  { number: '02', title: '排期', description: '系統自動安排庭審並通知各方。' },
  { number: '03', title: '庭審', description: '即時視訊程序，配備即時紀錄和檔案共享。' },
  { number: '04', title: '評議', description: '仲裁員使用安全協作工具和案件材料進行評議。' },
  { number: '05', title: '裁決', description: '以電子方式簽發裁決書，具有完全法律執行力。' },
]

export default function VirtualHearingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-8">
            <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">
              線上爭議解決
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5">
            虛擬仲裁<span className="text-gradient-gold">庭</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            一個綜合性的線上平台，用於在安全的數位環境中進行仲裁庭審——從初始提交到最終裁決。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">平台</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              庭審功能
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              為國際仲裁程序需求設計的企業級功能。
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

      <section className="bg-gradient-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">流程</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              運作方式
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              從案件啟動到裁決簽發的五個精簡步驟。
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

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">信任</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              安全合規
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔒', title: '端到端加密', desc: '所有通訊和檔案在傳輸和儲存過程中均經過加密。' },
              { icon: '📋', title: 'GDPR合規', desc: '完全符合國際資料保護法規。' },
              { icon: '🌐', title: '多司法管轄區', desc: '遵守全球主要司法管轄區的仲裁法律。' },
              { icon: '📊', title: '稽核追蹤', desc: '完整記錄所有操作和存取以確保透明度。' },
              { icon: '🛡️', title: '資料駐留', desc: '可設定的資料儲存位置以滿足本地要求。' },
              { icon: '⚡', title: '99.9%可用性', desc: '具有冗餘故障轉移系統的企業級基礎設施。' },
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

      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/60 border border-cyan-400/20 rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">即將推出</span>
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
                虛擬仲裁庭 — 2025年上線
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
                我們正在開發最先進的虛擬庭審平台。成為首批體驗線上仲裁未來的使用者。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/zh-tw/contact/"
                  className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
                >
                  申請早期存取
                </Link>
                <Link
                  href="/zh-tw/resources/"
                  className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all inline-block"
                >
                  查看資源
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
