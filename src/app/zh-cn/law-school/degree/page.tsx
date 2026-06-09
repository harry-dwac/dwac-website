import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学位认证 - 雅蓝大学法学院',
  description: '雅蓝大学法学院学位认证',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Degree Verification</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">学位认证</h1>
        <p className="text-slate-300 text-lg leading-relaxed">提供学位认证和验证服务，确保学位授予的规范性和权威性。</p>
      </div>
    </div>
  )
}
