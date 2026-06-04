import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhTw from '@/components/NavbarZhTw'
import FooterZhTw from '@/components/FooterZhTw'

export const metadata: Metadata = {
  title: '法律資源庫 - 亞特蘭蒂斯大學法學院',
  description: '獲取數位世界仲裁的法律文件、仲裁規則和研究材料。',
}

const resources = [
  { icon: '📚', title: '仲裁規則', desc: 'DWAC 仲裁規則（2026版）與比較研究。', items: ['DWAC 仲裁規則（EN/CN）', '玉林仲裁規則（2018 vs 2026）', 'UNCITRAL 仲裁規則'] },
  { icon: '📜', title: '數位世界憲章', desc: '數位世界法律系統的憲法性文件。', items: ['全文（EN/CN）', '評註與分析', '修訂歷史'] },
  { icon: '📑', title: '示範條款', desc: '數位世界爭議的標準仲裁條款。', items: ['標準示範條款', '簡式示範條款', '數位世界特別條款'] },
  { icon: '⚖️', title: '法律框架', desc: 'AI 代理仲裁的法律框架。', items: ['AI 代理責任框架', '智能仲裁員資格體系', '數位證據指引'] },
  { icon: '🌐', title: '國際條約', desc: '紐約公約及其他執行條約。', items: ['紐約公約（1958）', '新加坡公約（2019）', '數位執行議定書（草案）'] },
  { icon: '🎓', title: '培訓材料', desc: '90天和180天培訓項目課程材料。', items: ['講義幻燈片（PDF）', '案例研究', '作業與解答'] },
]

export default function ResourcesZhTw() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhTw />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">資源庫</p>
          <h1 className="text-5xl font-bold mb-6">法律資源庫</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            獲取數位世界仲裁的法律文件、仲裁規則和研究材料。
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">資源分類</h2>
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
          <h2 className="text-3xl font-bold mb-4">需要特定資源？</h2>
          <p className="text-xl text-slate-300 mb-8">
            如需額外法律材料或研究支援，請聯繫我們。
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
