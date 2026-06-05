import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhCn from '@/components/NavbarZhCn'
import FooterZhCn from '@/components/FooterZhCn'

export const metadata: Metadata = {
  title: '培训课程 - 雅蓝大学法学院',
  description: 'DWAC 智能仲裁员培训项目。90天基础课程和180天高级课程。',
}

export default function CoursesZhCn() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhCn />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">学术项目</p>
          <h1 className="text-5xl font-bold mb-6">培训课程</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            在 DWAC 成为合格智能仲裁员的结构化培训项目。
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">我们的培训项目</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* 90-Day */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-navy-800 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">90天基础课程</h3>
                <p className="text-gold-400 text-lg">90天 · 在线</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-navy-800 mb-3">目标受众</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 法律专业人士（法律学位/证书）</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 已有会员资格的创作者</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">课程设置</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 数字仲裁法（基础）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> DWAC 仲裁规则（2026版）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 纽约公约与执行</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> AI 代理责任框架（导论）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 案例研究：在线仲裁</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">结果</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 获得智能仲裁员资格</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 可参与 DWAC 仲裁案件</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <Link href="/zh-cn/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                  立即申请
                </Link>
              </div>
            </div>

            {/* 180-Day */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow border-gold-300">
              <div className="bg-navy-700 text-white p-8 text-center">
                <div className="inline-block px-3 py-1 bg-gold-500 text-white text-sm rounded-full mb-3">推荐</div>
                <h3 className="text-2xl font-bold mb-2">180天高级课程</h3>
                <p className="text-gold-400 text-lg">180天 · 在线</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-navy-800 mb-3">目标受众</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 非法律专业人士（高中学历及以上）</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 必须携带其 AI 代理共同培训</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">课程设置（含90天 + 高级）</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 法律理论与法理学</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 数字世界宪章与法律框架</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> AI 代理主体性与法律人格</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 高级：仲裁员-代理框架</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 高级：跨境争议解决</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 论文：数字仲裁实践</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">结果</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 90天后：获得硕士学位（同等）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 180天后：获得博士学位（同等）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 有资格获得 DWAC 会员与仲裁员</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <Link href="/zh-cn/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                  立即申请
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Pathway */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">培训路径</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: '申请', desc: '提交申请并证明资格。非法律专业人士承诺完成180天培训。' },
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
            <Link href="/zh-cn/law-school/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              返回法学院主页
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
