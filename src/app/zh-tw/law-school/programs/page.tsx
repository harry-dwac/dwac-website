import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '培訓項目 - 雅藍大學法學院',
  description: 'DWAC 智能仲裁員培訓項目。基礎（90天）和高等（180天）兩種路徑。',
}

const programs = [
  {
    title: '基礎路徑',
    duration: '90 天',
    level: '入門級別',
    desc: '為期 90 天的集中培訓項目，涵蓋數位世界仲裁基礎、法律框架和 AI 代理操作。適合進入數位仲裁領域的法律專業人士。',
    outcomes: [
      '理解 DWAC 仲裁規則',
      '操作 AI 代理-仲裁員',
      '處理基礎數位證據',
      '主持線上庭審',
    ],
  },
  {
    title: '高等路徑',
    duration: '180 天',
    level: '高等級別',
    desc: '為期 180 天的高等培訓項目，面向經驗豐富的仲裁員。涵蓋複雜跨境爭議、緊急仲裁員程序和 AI 輔助審議標準。',
    outcomes: [
      '處理多司法管轄區爭議',
      '主持緊急仲裁員案件',
      '審議 AI 生成之意見書',
      '培訓初等智能仲裁員',
    ],
  },
]

export default function ProgramsPageZhTw() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/zh-tw/law-school/" className="text-gold-500 hover:underline">法學院</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">培訓項目</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">AULS 培訓</p>
          <h1 className="font-serif text-5xl font-bold mb-6">培訓項目</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            兩種路徑獲得 DWAC 智能仲裁員認證。選擇您的路徑。
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {programs.map((p) => (
            <div key={p.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-navy-700 text-white p-6">
                <p className="text-gold-400 text-sm font-semibold mb-1">{p.level}</p>
                <h2 className="font-serif text-2xl font-bold">{p.title}</h2>
                <p className="text-gray-300 text-sm mt-1">{p.duration}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{p.desc}</p>
                <h3 className="font-semibold text-navy-800 mb-3">學習成果</h3>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-2 text-gray-700 text-sm">
                      <span className="text-gold-500">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">準備好開始了嗎？</h2>
          <p className="text-gray-600 mb-8">加入雅藍大學法學院，成為合格的智能仲裁員。</p>
          <Link
            href="/zh-tw/contact/"
            className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
          >
            立即申請
          </Link>
        </div>
      </section>
    </div>
  )
}
