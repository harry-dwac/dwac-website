import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhCn from '@/components/NavbarZhCn'
import FooterZhCn from '@/components/FooterZhCn'

export const metadata: Metadata = {
  title: '研究出版物 - 雅蓝大学法学院',
  description: '雅蓝大学法学院的学术文章、研究论文和政策建议。',
}

const publications = [
  {
    title: '数字世界仲裁：未来框架',
    meta: '📄 2026-05 · ✍️ 周永俊 · 📁 政策论文',
    desc: '本文提出了数字世界争议仲裁的综合法律框架，包括 AI 代理仲裁、数字证据规则和《纽约公约》下的跨境执行机制。',
    tags: ['数字仲裁', 'AI 代理', '法律框架'],
  },
  {
    title: 'AI 代理主体性与法律人格',
    meta: '📄 2026-04 · ✍️ Venessa 博士 · 📁 研究文章',
    desc: '深入分析 AI 代理是否可以拥有法律主体性、其承担责任的条件，以及对数字世界仲裁的影响。',
    tags: ['AI 代理法', '法律人格', '责任'],
  },
  {
    title: '比较研究：玉林仲裁规则（2018 vs 2026）',
    meta: '📄 2026-05 · ✍️ 冯瑞莎博士 · 📁 研究文章',
    desc: '详细比较玉林仲裁规则 2018 版和 2026 版，突出数字仲裁条款的演变和在线仲裁程序的纳入。',
    tags: ['仲裁规则', '比较法', '数字程序'],
  },
  {
    title: '智能仲裁员培训课程设计',
    meta: '📄 2026-03 · ✍️ Alec 教授 · 📁 教育',
    desc: '雅蓝大学法学院 90 天和 180 天培训项目的设计理念和 rationale，包括课程结构、评估方法和学位授予标准。',
    tags: ['法律教育', '培训课程', '智能仲裁员'],
  },
  {
    title: '跨境数字争议解决：挑战与机遇',
    meta: '📄 2026-06（预计） · ✍️ Gochye 博士 · 📁 研究文章',
    desc: '这篇即将发表的论文审视跨境数字争议中的管辖权挑战，并提出 DWAC 体系下的协调框架。',
    tags: ['跨境', '管辖权', '数字争议'],
    comingSoon: true,
  },
]

export default function PublicationsZhCn() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhCn />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">学术研究</p>
          <h1 className="text-5xl font-bold mb-6">研究出版物</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            雅蓝大学法学院的学术文章、研究论文和政策建议。
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
              <article key={pub.title} className={`rounded-xl p-8 transition-all hover:shadow-lg ${pub.comingSoon ? 'opacity-60 bg-slate-50' : 'bg-slate-50'}`}>
                <h3 className="text-xl font-bold mb-2">
                  {pub.comingSoon && <span className="text-sm text-slate-400 font-normal mr-2">[即将发布]</span>}
                  {pub.title}
                </h3>
                <p className="text-gold-600 text-sm mb-3">{pub.meta}</p>
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
          <h2 className="text-3xl font-bold mb-4">贡献您的研究</h2>
          <p className="text-xl text-slate-300 mb-8">
            如果您是数字法律领域的研究者或从业者，我们欢迎您投稿。
          </p>
          <Link href="/zh-cn/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            提交论文
          </Link>
        </div>
      </section>

      <FooterZhCn />
    </div>
  )
}
