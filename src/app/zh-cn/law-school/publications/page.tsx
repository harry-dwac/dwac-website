import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学术成果 - 雅蓝大学法学院',
  description: '雅蓝大学法学院学术成果',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Publications</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">学术成果</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法学院师生在数字法律领域发表大量学术论文、专著和研究报告，推动数字法学理论发展。</p>
      </div>
    </div>
  )
}
