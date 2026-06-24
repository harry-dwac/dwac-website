import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学位项目 - 雅蓝大学法学院',
  description: '雅蓝大学法学院学位项目',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Degree Programs</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">学位项目</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法学院开设数字法学硕士（LL.M.）和数字法学博士（LL.D.）学位项目，培养高层次数字法律人才。</p>
      </div>
    </div>
  )
}
