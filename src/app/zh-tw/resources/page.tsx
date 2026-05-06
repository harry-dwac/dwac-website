import Link from 'next/link'

interface ResourceCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
  items: { name: string; free: boolean }[]
}

function ResourceCategory({ icon, title, description, items }: ResourceCategoryProps) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-6">
      <div className="flex items-start gap-4 mb-5">
        <div className="w-12 h-12 bg-navy-900/5 rounded-xl flex items-center justify-center flex-shrink-0 text-gold-500">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{title}</h3>
          <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-sm text-slate-700">{item.name}</span>
            </div>
            {item.free ? (
              <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full">免費</span>
            ) : (
              <span className="text-xs font-semibold px-2.5 py-1 bg-gold-500/[0.06] text-gold-600 rounded-full">下載</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

const categories: ResourceCategoryProps[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: '表格與範本',
    description: '用於啟動和管理仲裁程序的標準申請和程序表格。',
    items: [
      { name: '仲裁申請書 (ARB-001)', free: false },
      { name: '答辯陳述書 (ARB-002)', free: false },
      { name: '證據提交表 (ARB-003)', free: false },
      { name: '仲裁員聲明表 (ARB-004)', free: false },
      { name: '會員申請表 (MEM-001)', free: true },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: '參考與指引',
    description: '權威參考資料，包括仲裁規則、證據指引和示範條款。',
    items: [
      { name: 'DWAC仲裁規則（67條）', free: true },
      { name: '證據提交指引', free: true },
      { name: '示範仲裁條款', free: true },
      { name: '數位世界公約', free: true },
      { name: '程序時間表參考', free: true },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: '雙語術語對照',
    description: '國際仲裁和數位法律的英中術語綜合參考資料。',
    items: [
      { name: '仲裁術語（英中對照）', free: true },
      { name: '數位法律術語表（英中對照）', free: true },
      { name: '區塊鏈與智慧合約術語', free: true },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: '研究論文',
    description: '關於數位世界仲裁、ODR和網路爭議解決的學術論文和工作論文。',
    items: [
      { name: '數位世界仲裁：框架與未來', free: false },
      { name: 'AI時代的線上爭議解決', free: false },
      { name: '跨境數位商務爭議', free: false },
      { name: '智慧合約爭議解決機制', free: false },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: '學術專著',
    description: '關於數位法律和仲裁的學術著作、專著和機構出版物。',
    items: [
      { name: '數位世界仲裁（專著）', free: false },
      { name: 'DWAC年度報告', free: true },
      { name: '數位法律研究白皮書', free: false },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: '收費標準',
    description: '當前費用表、仲裁成本計算器和付款指引。',
    items: [
      { name: '2025年仲裁收費標準', free: true },
      { name: '行政費用表', free: true },
      { name: '費用計算工具', free: true },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">資料庫</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">資源中心</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            表格、參考資料、術語對照、研究論文、學術出版物和收費標準——數位世界仲裁所需的一切資源。
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gold-500/[0.06] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 mb-1">使用須知</h3>
              <p className="text-sm text-slate-500">
                標記為<span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full mx-1">免費</span>的資源可免費線上閱讀。
                標記為<span className="inline-flex items-center text-xs font-semibold px-2 py-0.5 bg-gold-500/[0.06] text-gold-600 rounded-full mx-1">下載</span>的項目可能需要付費或機構存取權限。
                聯繫<a href="mailto:secretary@dwac.net" className="text-gold-500 hover:underline">secretary@dwac.net</a>獲取批量或機構授權。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 pb-20 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <ResourceCategory key={idx} {...cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">獲取幫助</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            找不到您需要的資源？
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            我們的團隊隨時準備協助您了解DWAC資源、表格或出版物的任何問題。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-tw/contact/"
              className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
            >
              聯繫我們
            </Link>
            <a
              href="mailto:secretary@dwac.net"
              className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all inline-block"
            >
              secretary@dwac.net
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
