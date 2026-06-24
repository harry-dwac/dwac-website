import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學位項目 - 雅藍大學法學院',
  description: '雅藍大學法學院學位項目',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Degree Programs</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">學位項目</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法學院開設數位法學碩士（LL.M.）和數位法學博士（LL.D.）學位項目，培養高層次數位法律人才。</p>
      </div>
    </div>
  )
}
