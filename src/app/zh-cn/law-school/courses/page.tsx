import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '课程设置 - 雅蓝大学法学院',
  description: '雅蓝大学法学院课程设置',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Courses</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">课程设置</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法学院提供涵盖数字法律、区块链监管、AI伦理与法律、跨境数据合规等领域的专业课程体系。</p>
      </div>
    </div>
  )
}
