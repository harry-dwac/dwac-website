import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學術成果 - 雅藍大學法學院',
  description: '雅藍大學法學院學術成果',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Publications</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">學術成果</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法學院師生在數位法律領域發表大量學術論文、專著和研究報告，推動數位法學理論發展。</p>
      </div>
    </div>
  )
}
