import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學生檔案 - 雅藍大學法學院',
  description: '雅藍大學法學院學生檔案',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Student Record</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">學生檔案</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法學院為學生提供完整的學籍管理服務，包括成績查詢、證書驗證和學術記錄等。</p>
      </div>
    </div>
  )
}
