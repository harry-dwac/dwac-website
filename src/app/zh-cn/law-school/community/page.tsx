import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学术社区 - 雅蓝大学法学院',
  description: '雅蓝大学法学院学术社区',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Community</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">学术社区</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法学院拥有活跃的学术社区，定期举办学术研讨会、讲座和论坛，促进学术交流与合作。</p>
      </div>
    </div>
  )
}
