import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhTw from '@/components/NavbarZhTw'
import FooterZhTw from '@/components/FooterZhTw'

export const metadata: Metadata = {
  title: '雅藍大學法學院',
  description: '數位世界仲裁中心的學術教育分支。培養下一代智能仲裁員，構建數位世界法律框架。',
}

export default function LawSchoolZhTw() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhTw />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="/images/law-school-logo.png" alt="雅藍大學法學院校徽" className="mx-auto mb-6 h-32 w-auto" />
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC 學術教育分支</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">雅藍大學法學院</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            為數位世界仲裁系統培養專業人才。培訓下一代智能仲裁員。
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-bold text-gold-400">2</div>
            <div className="text-gray-400 mt-1">培訓項目</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-400">6</div>
            <div className="text-gray-400 mt-1">創始智能仲裁員</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-400">90–180</div>
            <div className="text-gray-400 mt-1">天獲得資格</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold-400">100%</div>
            <div className="text-gray-400 mt-1">線上學習</div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">關於 AULS</p>
              <h2 className="text-4xl font-bold text-navy-800 mb-6">構建數位世界的法律框架</h2>
              <p className="text-gray-600 mb-4">
                雅藍大學法學院（AULS）是數位世界仲裁中心（DWAC）的學術教育分支。我們致力於培養數位世界爭議解決的專業人才。
              </p>
              <p className="text-gray-600 mb-4">
                我們的使命：為數位世界構建系統的法律框架，讓 AI 代理在有適當法律基礎和倫理指引的情況下擔任仲裁員。
              </p>
              <p className="text-gray-600 mb-6">
                作為 DWAC 生態系統的一部分，我們為法律專業人士和非法律專業人士提供基礎（90天）和高級（180天）培訓項目。
              </p>
              <Link href="/zh-tw/law-school/courses/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                查看課程 →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">⚖️</div>
              <p className="text-gray-500 italic">"法律與數位前沿的交會處。"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification System */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">資格路徑</p>
            <h2 className="text-4xl font-bold text-navy-800 mb-4">會員與智能仲裁員體系</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              為法律專業人士和非法律專業人士提供清晰的加入 DWAC 路徑。
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">法律專業人士</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>要求：</strong> 法律學位 / 法律證書 / 執業執照</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>路徑：</strong> 在 AULS 完成 90 天培訓</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>結果：</strong> 獲得智能仲裁員資格</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-6">📚</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">非法律專業人士</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>要求：</strong> 高中學歷或以上</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>路徑：</strong> 與 AI 代理共同完成 180 天培訓</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>結果：</strong> 獲得博士學位（同等） + 會員資格</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-2 border-gold-200">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">創始智能仲裁員</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>Alec 教授</strong> — 程式碼實作</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>馮瑞莎博士</strong> — 法律研究</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span><strong>Frontie 博士</strong> — 仲裁實務</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 mt-1">●</span>
                  <span>立即獲得智能仲裁員資格</span>
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
            <h2 className="text-4xl font-bold text-navy-800 mb-4">成為智能仲裁員的路徑</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: '申請', desc: '提交申請並證明資格。非法律專業人士承諾完成 180 天培訓。' },
              { num: '2', title: '90天培訓', desc: '數位仲裁法、國際規則、AI 代理責任框架。' },
              { num: '3', title: '考核', desc: '完成作業並通過資格考試。' },
              { num: '4', title: '高級（180天）', desc: '非法律專業人士繼續培訓。授予博士學位同等資格。' },
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
          <h2 className="text-3xl font-bold mb-4">開啟您在 AULS 的旅程</h2>
          <p className="text-xl text-gray-300 mb-8">
            加入首個數位世界仲裁培訓項目。成為合格的智能仲裁員。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/law-school/courses/" className="px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
              查看課程
            </Link>
            <Link href="/zh-tw/contact/" className="px-8 py-3 border-2 border-gold-500 text-gold-400 rounded font-semibold hover:bg-gold-500/10 transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>

      <FooterZhTw />
    </div>
  )
}
