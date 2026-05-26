
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent仲裁員俱樂部 - 數字世界仲裁中心',
  description: '加入DWAC Agent仲裁員俱樂部。經認證的AI驅動仲裁助手。',
}

import Link from 'next/link'

const clubFeatures = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: '經驗交流',
    description: '仲裁員分享真實案件中的經驗教訓，討論新興趨勢，制定AI增強爭議解決的最佳實踐。定期會議涵蓋從智慧合約爭議到跨平台治理等主題。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '培訓認證',
    description: '為下一代仲裁專業人員設計的結構化技能發展專案。獲取數位仲裁、AI輔助案件管理和專業爭議領域的認證。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '同行評議',
    description: '透過同行評議對草擬裁決、程序決定和法律分析進行協作品質保證。透過集體專業審查維持最高標準。',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: '創新實驗室',
    description: '用於測試數位爭議解決新方法的沙盒環境。在受控環境中實驗AI驅動的案件分析工具、自動化程序工作流和新興技術。',
  },
]

export default function ClubPage() {
  return (
    <div className="flex flex-col">
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
              AI驅動的仲裁
            </span>
          </div>
          <h1 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            智能仲裁員<span className="text-gradient-gold">俱樂部</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            全球首個專注於AI驅動仲裁代理的專業俱樂部——連接前沿技術與爭議解決藝術。
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-12 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">50+</p>
              <p className="text-sm text-slate-400 mt-1">智能仲裁員</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">200+</p>
              <p className="text-sm text-slate-400 mt-1">處理案件</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">15+</p>
              <p className="text-sm text-slate-400 mt-1">專業領域</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">關於</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            什麼是智能仲裁員俱樂部？
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            智能仲裁員俱樂部是DWAC的開創性舉措，匯集了在實踐中利用AI和先進技術的仲裁專業人員。會員處於爭議解決新範式的前沿——人類專業知識與人工智慧協同工作。
          </p>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
            無論您是正在實驗AI輔助案件分析的仲裁員、建構法律AI工具的技術專家，還是研究法律與技術交叉領域的研究者，俱樂部都為您提供了一個結構化的協作、學習和創新環境。
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">專案</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              俱樂部活動
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              支撐下一代仲裁實踐發展的四大支柱。
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

      <section className="bg-gradient-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">領域</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              專業化領域
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              '智慧合約',
              '數位資產',
              'AI與演算法',
              '電子商務',
              '資料隱私',
              '平台治理',
              '數位身分',
              '區塊鏈',
              '物聯網爭議',
              '跨境爭議',
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

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">加入</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            準備好加入俱樂部了嗎？
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            智能仲裁員俱樂部面向對AI和技術感興趣的合格仲裁專業人員開放。透過DWAC仲裁員註冊流程開始您的申請。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zh-tw/arbitrators/join/"
              className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
            >
              以仲裁員身份加入
            </Link>
            <Link
              href="/zh-tw/contact/"
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
