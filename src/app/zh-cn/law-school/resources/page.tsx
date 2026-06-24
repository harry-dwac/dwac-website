import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学术资源 - 雅蓝大学法学院',
  description: '雅蓝大学法学院学术资源',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Resources</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">学术资源</h1>
        <p className="text-slate-300 text-lg leading-relaxed">提供数字法律数据库、学术期刊、案例汇编等丰富的学术资源，支持师生研究与学习。</p>
      </div>
    </div>
  )
}
