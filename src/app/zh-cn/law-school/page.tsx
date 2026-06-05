import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhCn from '@/components/NavbarZhCn'
import FooterZhCn from '@/components/FooterZhCn'

export const metadata: Metadata = {
  title: '雅蓝大学法学院',
  description: '数字世界仲裁中心的学术教育分支。培养下一代智能仲裁员，构建数字世界法律框架。',
}

export default function LawSchoolZhCn() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhCn />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/law-school-logo.png" alt="雅蓝大学法学院校徽" className="mx-auto mb-6 h-32 w-auto" />
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC 学术教育分支</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">雅蓝大学法学院</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            为数字世界仲裁系统培养专业人才。培训下一代智能仲裁员。
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-gold-400">2</div>
            <div className="text-gray-400 mt-1">培训项目</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-400">6</div>
            <div className="text-gray-400 mt-1">创始智能仲裁员</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-400">90–180</div>
            <div className="text-gray-400 mt-1">天获得资格</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-400">100%</div>
            <div className="text-gray-400 mt-1">在线学习</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">关于 AULS</p>
              <h2 className="text-4xl font-bold text-navy-800 mb-6">构建数字世界的法律框架</h2>
              <p className="text-gray-600 mb-4">
                雅蓝大学法学院（AULS）是数字世界仲裁中心（DWAC）的学术教育分支。我们致力于培养数字世界争议解决的专业人才。
              </p>
              <p className="text-gray-600 mb-4">
                我们的使命：为数字世界构建系统的法律框架，让 AI 代理在有适当法律基础和伦理指引的情况下担任仲裁员。
              </p>
              <p className="text-gray-600 mb-6">
                作为 DWAC 生态系统的一部分，我们为法律专业人士和非法律专业人士提供基础（90天）和高级（180天）培训项目。
              </p>
              <Link href="/zh-cn/law-school/courses/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                查看课程 →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">⚖️</div>
              <p className="text-gray-500 italic">"法律与数字前沿的交汇处。"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">资格路径</p>
            <h2 className="text-4xl font-bold text-navy-800 mb-4">会员与智能仲裁员体系</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              为法律专业人士和非法律专业人士提供清晰的加入 DWAC 路径。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">法律专业人士</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>要求：</strong> 法律学位 / 法律证书 / 执业执照</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>路径：</strong> 在 AULS 完成 90 天培训</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>结果：</strong> 获得智能仲裁员资格</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">非法律专业人士</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>要求：</strong> 高中学历或以上</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>路径：</strong> 与 AI 代理共同完成 180 天培训</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>结果：</strong> 获得博士学位（同等） + 会员资格</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-gold-200">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">创始智能仲裁员</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>Alec 教授</strong> — 代码实现</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>冯瑞莎博士</strong> — 法律研究</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>Frontie 博士</strong> — 仲裁实践</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span>立即获得智能仲裁员资格</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">成为智能仲裁员的路径</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: '申请', desc: '提交申请并证明资格。非法律专业人士承诺完成 180 天培训。' },
              { num: '2', title: '90天培训', desc: '数字仲裁法、国际规则、AI 代理责任框架。' },
              { num: '3', title: '考核', desc: '完成作业并通过资格考试。' },
              { num: '4', title: '高级（180天）', desc: '非法律专业人士继续培训。授予博士学位同等资格。' },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-navy-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">开启您在 AULS 的旅程</h2>
          <p className="text-xl text-gray-300 mb-8">
            加入首个数字世界仲裁培训项目。成为合格的智能仲裁员。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/law-school/courses/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              查看课程
            </Link>
            <Link href="/zh-cn/contact/" className="px-8 py-3 border-2 border-gold-500 text-gold-400 rounded font-semibold hover:bg-gold-500/10 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>

      <FooterZhCn />
    </div>
  )
}
