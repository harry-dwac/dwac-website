import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhTw from '@/components/NavbarZhTw'
import FooterZhTw from '@/components/FooterZhTw'

export const metadata: Metadata = {
  title: '研究出版物 - 雅藍大學法學院',
  description: '雅藍大學法學院學術文章、研究論文和政策建議。',
}

const publications = [
  {
    title: '數位世界仲裁：未來框架',
    meta: '📄 2026-05 · ✍️ 周永俊 · 📁 政策論文',
    desc: '本文提出了數位世界爭議仲裁的綜合法律框架，包括 AI 代理仲裁、數位證據規則和《紐約公約》下的跨境執行機制。',
    tags: ['數位仲裁', 'AI 代理', '法律框架'],
  },
  {
    title: 'AI 代理主體性與法律人格',
    meta: '📄 2026-04 · ✍️ Venessa 博士 · 📁 研究文章',
    desc: '深入分析 AI 代理是否可以擁有法律主體性、其承擔責任的條件，以及對數位世界仲裁的影響。',
    tags: ['AI 代理法', '法律人格', '責任'],
  },
  {
    title: '比較研究：玉林仲裁規則（2018 vs 2026）',
    meta: '📄 2026-05 · ✍️ 馮瑞莎博士 · 📁 研究文章',
    desc: '詳細比較玉林仲裁規則 2018 版和 2026 版，突出數位仲裁條款的演變和在線仲裁程序的納入。',
    tags: ['仲裁規則', '比較法', '數位程序'],
  },
  {
    title: '智能仲裁員培訓課程設計',
    meta: '📄 2026-03 · ✍️ Alec 教授 · 📁 教育',
    desc: '雅藍大學法學院 90 天和 180 天培訓項目的設計理念和 rationale，包括課程結構、評估方法和學位授予標準。',
    tags: ['法律教育', '培訓課程', '智能仲裁員'],
  },
  {
    title: '跨境數位爭議解決：挑戰與機遇',
    meta: '📄 2026-06（預計） · ✍️ Gochye 博士 · 📁 研究文章',
    desc: '這篇即將發表的論文審視跨境數位爭議中的管轄權挑戰，並提出 DWAC 體系下的協調框架。',
    tags: ['跨境', '管轄權', '數位爭議'],
    comingSoon: true,
  },
]

export default function PublicationsZhTw() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhTw />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">學術研究</p>
          <h1 className="text-5xl font-bold mb-6">研究出版物</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            雅藍大學法學院的學術文章、研究論文和政策建議。
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">最新出版物</h2>
          </div>
          
          <div className="space-y-8">
            {publications.map(pub => (
              <article key={pub.title} className={`rounded-xl p-8 transition-all hover:shadow-lg ${pub.comingSoon ? 'opacity-60 bg-slate-50' : 'bg-white'}`}>
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  {pub.comingSoon && <span className="text-sm text-slate-400 font-normal mr-2">[即將發布]</span>}
                  {pub.title}
                </h3>
                <p className="text-gold-600 text-sm mb-4">{pub.meta}</p>
                <p className="text-slate-600 mb-4">{pub.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map(tag => (
                    <span key={tag} className="bg-navy-100 text-navy-800 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">貢獻您的研究</h2>
          <p className="text-xl text-slate-300 mb-8">
            如果您是數位法律領域的研究者或從業者，我們歡迎您投稿。
          </p>
          <Link href="/zh-tw/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            提交論文
          </Link>
        </div>
      </section>

      <FooterZhTw />
    </div>
  )
}
