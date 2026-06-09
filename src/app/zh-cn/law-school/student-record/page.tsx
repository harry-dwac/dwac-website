import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '学生档案 - 雅蓝大学法学院',
  description: '雅蓝大学法学院学生档案',
}

export default function Page() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-navy">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Student Record</span>
        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-6">学生档案</h1>
        <p className="text-slate-300 text-lg leading-relaxed">法学院为学生提供完整的学籍管理服务，包括成绩查询、证书验证和学术记录等。</p>
      </div>
    </div>
  )
}
