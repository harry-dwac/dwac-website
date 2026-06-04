import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '培训项目 - 亚特兰蒂斯大学法学院',
  description: 'DWAC 智能仲裁员培训项目。基础（90天）和高级（180天）两种路径。',
}

const programs = [
  {
    title: '基础路径',
    duration: '90 天',
    level: '入门级别',
    desc: '为期 90 天的集中培训项目，涵盖数字世界仲裁基础、法律框架和 AI 代理操作。适合进入数字仲裁领域的法律专业人士。',
    outcomes: [
      '理解 DWAC 仲裁规则',
      '操作 AI 代理-仲裁员',
      '处理基础数字证据',
      '主持在线庭审',
    ],
  },
  {
    title: '高级路径',
    duration: '180 天',
    level: '高级别',
    desc: '为期 180 天的高级培训项目，面向经验丰富的仲裁员。涵盖复杂跨境争议、紧急仲裁员程序和 AI 辅助审议标准。',
    outcomes: [
      '处理多司法管辖区争议',
      '主持紧急仲裁员案件',
      '审议 AI 生成的意见书',
      '培训初级智能仲裁员',
    ],
  },
]

export default function ProgramsPageZhCn() {
  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 text-sm">
          <Link href="/zh-cn/law-school/" className="text-gold-500 hover:underline">法学院</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">培训项目</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">AULS 培训</p>
          <h1 className="font-serif text-5xl font-bold mb-6">培训项目</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            两种路径获得 DWAC 智能仲裁员认证。选择您的路径。
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          {programs.map((p) => (
            <div key={p.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <div className="bg-navy-700 text-white p-6">
                <p className="text-gold-400 text-sm font-semibold mb-1">{p.level}</p>
                <h2 className="font-serif text-2xl font-bold">{p.title}</h2>
                <p className="text-gray-300 text-sm mt-1">{p.duration}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{p.desc}</p>
                <h3 className="font-semibold text-navy-800 mb-3">学习成果</h3>
                <ul className="space-y-2">
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex gap-2 text-gray-700 text-sm">
                      <span className="text-gold-500">✓</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-4">准备好开始了吗？</h2>
          <p className="text-xl text-gray-600 mb-8">
            加入亚特兰蒂斯大学法学院，成为合格的智能仲裁员。
          </p>
          <Link
            href="/zh-cn/contact/"
            className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors"
          >
            立即申请
          </Link>
        </div>
      </section>
    </div>
  )
}
