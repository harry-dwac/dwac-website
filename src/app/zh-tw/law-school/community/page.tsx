import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學術社區 - 雅藍大學法學院',
  description: '雅藍大學法學院學術社區',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Community</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">學術社區</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法學院擁有活躍的學術社區，定期舉辦學術研討會、講座和論壇，促進學術交流與合作。</p>
      </div>
    </div>
  )
}
