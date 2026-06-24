import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學位認證 - 雅藍大學法學院',
  description: '雅藍大學法學院學位認證',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Degree Verification</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">學位認證</h1>
        <p className="text-slate-300 text-lg leading-relaxed">提供學位認證和驗證服務，確保學位授予的規範性和權威性。</p>
      </div>
    </div>
  )
}
