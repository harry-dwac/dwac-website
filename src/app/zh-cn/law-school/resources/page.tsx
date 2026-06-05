import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhCn from '@/components/NavbarZhCn'
import FooterZhCn from '@/components/FooterZhCn'

export const metadata: Metadata = {
  title: '法律资源库 - 雅蓝大学法学院',
  description: '获取数字世界仲裁的法律文件、仲裁规则和研究材料。',
}

const resources = [
  { icon: '📚', title: '仲裁规则', desc: 'DWAC 仲裁规则（2026版）与比较研究。', items: ['DWAC 仲裁规则（EN/CN）', '玉林仲裁规则（2018 vs 2026）', 'UNCITRAL 仲裁规则'] },
  { icon: '📜', title: '数字世界宪章', desc: '数字世界法律系统的宪法性文件。', items: ['全文（EN/CN）', '评注与分析', '修订历史'] },
  { icon: '📑', title: '示范条款', desc: '数字世界争议的标准仲裁条款。', items: ['标准示范条款', '简式示范条款', '数字世界特别条款'] },
  { icon: '⚖️', title: '法律框架', desc: 'AI 代理仲裁的法律框架。', items: ['AI 代理责任框架', '智能仲裁员资格体系', '数字证据指引'] },
  { icon: '🌐', title: '国际条约', desc: '纽约公约及其他执行条约。', items: ['纽约公约（1958）', '新加坡公约（2019）', '数字执行议定书（草案）'] },
  { icon: '🎓', title: '培训材料', desc: '90天和180天培训项目课程材料。', items: ['讲义幻灯片（PDF）', '案例研究', '作业与解答'] },
]

export default function ResourcesZhCn() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhCn />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">资源库</p>
          <h1 className="text-5xl font-bold mb-6">法律资源库</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            获取数字世界仲裁的法律文件、仲裁规则和研究材料。
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">资源分类</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map(r => (
              <div key={r.title} className="bg-slate-50 rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{r.icon}</div>
                <h3 className="text-2xl font-bold text-navy-800 mb-3">{r.title}</h3>
                <p className="text-slate-600 mb-4">{r.desc}</p>
                <ul className="space-y-2">
                  {r.items.map(item => (
                    <li key={item} className="flex items-start text-slate-600 text-sm">
                      <span className="text-gold-500 mr-2 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">需要特定资源？</h2>
          <p className="text-xl text-slate-300 mb-8">
            如需额外法律材料或研究支持，请联系我们。
          </p>
          <Link href="/zh-cn/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            联系我们
          </Link>
        </div>
      </section>

      <FooterZhCn />
    </div>
  )
}
