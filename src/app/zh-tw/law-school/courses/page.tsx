import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '課程設置 - 雅藍大學法學院',
  description: '雅藍大學法學院課程設置',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Courses</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">課程設置</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法學院提供涵蓋數位法律、區塊鏈監管、AI倫理與法律、跨境數據合規等領域的專業課程體系。</p>
      </div>
    </div>
  )
}
