import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學術資源 - 雅藍大學法學院',
  description: '雅藍大學法學院學術資源',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Resources</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">學術資源</h1>
        <p className="text-slate-300 text-lg leading-relaxed">提供數字法律數據庫、學術期刊、案例彙編等豐富的學術資源，支持師生研究與學習。</p>
      </div>
    </div>
  )
}
