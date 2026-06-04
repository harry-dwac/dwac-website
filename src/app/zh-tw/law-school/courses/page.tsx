import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhTw from '@/components/NavbarZhTw'
import FooterZhTw from '@/components/FooterZhTw'

export const metadata: Metadata = {
  title: '培訓課程 - 亞特蘭蒂斯大學法學院',
  description: 'DWAC 智能仲裁員培訓項目。90天基礎課程和180天高級課程。',
}

export default function CoursesZhTw() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhTw />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">學術項目</p>
          <h1 className="text-5xl font-bold mb-6">培訓課程</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            在 DWAC 成為合格智能仲裁員的結構化培訓項目。
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">我們的培訓項目</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* 90-Day */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-navy-800 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">90天基礎課程</h3>
                <p className="text-gold-400 text-lg">90天 · 線上</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-navy-800 mb-3">目標受眾</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 法律專業人士（法律學位/證書）</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 已有會員資格的創作者</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">課程設置</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 數位仲裁法（基礎）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> DWAC 仲裁規則（2026版）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 紐約公約與執行</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> AI 代理責任框架（導論）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 案例研究：線上仲裁</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">結果</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 獲得智能仲裁員資格</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 可參與 DWAC 仲裁案件</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <Link href="/zh-tw/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                  立即申請
                </Link>
              </div>
            </div>

            {/* 180-Day */}
            <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow border-gold-300">
              <div className="bg-navy-700 text-white p-8 text-center">
                <div className="inline-block px-3 py-1 bg-gold-500 text-white text-sm rounded-full mb-3">推薦</div>
                <h3 className="text-2xl font-bold mb-2">180天高級課程</h3>
                <p className="text-gold-400 text-lg">180天 · 線上</p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-bold text-navy-800 mb-3">目標受眾</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 非法律專業人士（高中學歷及以上）</li>
                  <li className="flex items-start"><span className="text-green-500 mr-2">✅</span> 必須攜帶其 AI 代理共同培訓</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">課程設置（含90天 + 高級）</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 法律理論與法理學</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 數位世界憲章與法律框架</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> AI 代理主體性與法律人格</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 高級：仲裁員-代理框架</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 高級：跨境爭議解決</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 論文：數位仲裁實務</li>
                </ul>

                <h4 className="text-lg font-bold text-navy-800 mb-3">結果</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 90天後：獲得碩士學位（同等）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 180天後：獲得博士學位（同等）</li>
                  <li className="flex items-start"><span className="text-gold-500 mr-2">▸</span> 有資格獲得 DWAC 會員與仲裁員</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 text-center">
                <Link href="/zh-tw/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                  立即申請
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
            <h2 className="text-4xl font-bold text-navy-800 mb-4">培訓路徑</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: '申請', desc: '提交申請並證明資格。非法律專業人士承諾完成180天培訓。' },
              { num: '2', title: '90天培訓', desc: '數位仲裁法、國際規則、AI 代理責任框架。' },
              { num: '3', title: '考核', desc: '完成作業並通過資格考試。' },
              { num: '4', title: '高級（180天）', desc: '非法律專業人士繼續培訓。授予博士學位同等資格。' },
            ].map(step => (
              <div key={step.num} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-gold-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">準備好開始了嗎？</h2>
          <p className="text-xl text-gray-300 mb-8">
            加入亞特蘭蒂斯大學法學院，成為合格的智能仲裁員。
          </p>
          <Link href="/zh-tw/contact/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            聯繫我們
          </Link>
        </div>
      </section>

      <FooterZhTw />
    </div>
  )
}
