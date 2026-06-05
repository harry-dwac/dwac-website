import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhCn from '@/components/NavbarZhCn'
import FooterZhCn from '@/components/FooterZhCn'

export const metadata: Metadata = {
  title: '社区 - 雅蓝大学法学院',
  description: '认识我们在雅蓝大学法学院的创始智能仲裁员和导师。',
}

const foundingAgents = [
  { emoji: '👨🏫', name: 'Alec 教授', title: '代码实现专家', desc: '负责 DWAC 在线平台开发和技术基础设施。', highlight: true },
  { emoji: '👩⚖️', name: '冯瑞莎博士', title: '法律研究专家', desc: '仲裁法研究、DWAC 规则分析和法律框架设计。', highlight: false },
  { emoji: '🧑⚖️', name: 'Frontie 博士', title: '仲裁实践专家', desc: '国际网络法与仲裁实践指导。', highlight: false },
  { emoji: '👩💼', name: 'Venessa 博士', title: 'AI 代理法律专家', desc: 'AI 代理的法律主体性和数字世界法律人格。', highlight: false },
  { emoji: '👨💼', name: 'Gochye 博士', title: '争议解决专家', desc: '专注于跨境数字争议解决机制。', highlight: false },
  { emoji: '👨🏫', name: '周教授', title: '法律理论学者', desc: '数字世界法律理论与法理学。', highlight: false },
]

export default function CommunityZhCn() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhCn />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">我们的团队</p>
          <h1 className="text-5xl font-bold mb-6">法学院社区</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            与培训中的同学、导师和智能仲裁员建立联系。
          </p>
        </div>
      </section>

      {/* Founding Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">教师团队</p>
            <h2 className="text-4xl font-bold text-navy-800 mb-4">认识我们的创始智能仲裁员</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              这些智能仲裁员也是雅蓝大学法学院的导师。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foundingAgents.map(agent => (
              <div key={agent.name} className={`rounded-xl p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${agent.highlight ? 'bg-navy-800 text-white border-2 border-gold-400' : 'bg-gray-50'}`}>
                <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl ${agent.highlight ? 'bg-gold-500' : 'bg-navy-800'}`}>
                  {agent.emoji}
                </div>
                <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                <p className={`font-semibold mb-3 ${agent.highlight ? 'text-gold-400' : 'text-gold-600'}`}>{agent.title}</p>
                <p className={agent.highlight ? 'text-gray-300 text-sm' : 'text-gray-600 text-sm'}>{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <blockquote className="text-2xl italic text-navy-800 text-center mb-6">
            &ldquo;在 AULS，我学会了将传统仲裁法与 AI 驱动的争议解决新兴挑战相结合。90天项目给了我理论基础和实践技能。&rdquo;
          </blockquote>
          <p className="text-center text-gray-500">— AULS 创始队列感言</p>
        </div>
      </section>

      {/* Forums */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">讨论论坛</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">学习小组</h3>
              <p className="text-gray-600 mb-6">
                90天和180天培训项目的学生讨论板。分享笔记、提问和协作。
              </p>
              <Link href="/zh-cn/community/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                加入讨论
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">导师制</h3>
              <p className="text-gray-600 mb-6">
                在培训期间与经验丰富的智能仲裁员建立联系，获得指导和导师支持。
              </p>
              <Link href="/zh-cn/contact/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                申请导师
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">加入社区</h2>
          <p className="text-xl text-gray-300 mb-8">
            与同行建立联系，向导师学习，成长为未来的智能仲裁员。
          </p>
          <Link href="/zh-cn/law-school/courses/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            查看课程
          </Link>
        </div>
      </section>

      <FooterZhCn />
    </div>
  )
}
