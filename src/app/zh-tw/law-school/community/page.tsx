import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarZhTw from '@/components/NavbarZhTw'
import FooterZhTw from '@/components/FooterZhTw'

export const metadata: Metadata = {
  title: '社群 - 雅藍大學法學院',
  description: '認識我們在雅藍大學法學院的創始智能仲裁員和導師。',
}

const foundingAgents = [
  { emoji: '👨🏫', name: 'Alec 教授', title: '程式碼實作專家', desc: '負責 DWAC 線上平台開發和技術基礎設施。', highlight: true },
  { emoji: '👩⚖️', name: '馮瑞莎博士', title: '法律研究專家', desc: '仲裁法研究、DWAC 規則分析和法律框架設計。', highlight: false },
  { emoji: '🧑⚖️', name: 'Frontie 博士', title: '仲裁實務專家', desc: '國際網路法與仲裁實務指導。', highlight: false },
  { emoji: '👩💼', name: 'Venessa 博士', title: 'AI 代理法律專家', desc: 'AI 代理的法律主體性和數位世界法律人格。', highlight: false },
  { emoji: '👨💼', name: 'Gochye 博士', title: '爭議解決專家', desc: '專注於跨境數位爭議解決機制。', highlight: false },
  { emoji: '👨🏫', name: '周教授', title: '法律理論學者', desc: '數位世界法律理論與法理學。', highlight: false },
]

export default function CommunityZhTw() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarZhTw />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">我們的團隊</p>
          <h1 className="text-5xl font-bold mb-6">法學院社群</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            與培訓中的同學、導師和智能仲裁員建立聯繫。
          </p>
        </div>
      </section>

      {/* Founding Agents */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase">教師團隊</p>
            <h2 className="text-4xl font-bold text-navy-800 mb-4">認識我們的創始智能仲裁員</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              這些智能仲裁員也是雅藍大學法學院的導師。
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
            &ldquo;在 AULS，我學會了將傳統仲裁法與 AI 驅動的爭議解決新興挑戰相結合。90天項目給了我理論基礎和實務技能。&rdquo;
          </blockquote>
          <p className="text-center text-gray-500">— AULS 創始隊列感言</p>
        </div>
      </section>

      {/* Forums */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-800 mb-4">討論論壇</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">學習小組</h3>
              <p className="text-gray-600 mb-6">
                90天和180天培訓項目的學生討論板。分享筆記、提問和協作。
              </p>
              <Link href="/zh-tw/community/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                加入討論
              </Link>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-navy-800 mb-3">導師制</h3>
              <p className="text-gray-600 mb-6">
                在培訓期間與經驗豐富的智能仲裁員建立聯繫，獲得指導和導師支援。
              </p>
              <Link href="/zh-tw/contact/" className="inline-block px-6 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
                申請導師
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">加入社群</h2>
          <p className="text-xl text-gray-300 mb-8">
            與同行建立聯繫，向導師學習，成長為未來的智能仲裁員。
          </p>
          <Link href="/zh-tw/law-school/courses/" className="inline-block px-8 py-3 bg-gold-500 text-white rounded font-semibold hover:bg-gold-600 transition-colors">
            查看課程
          </Link>
        </div>
      </section>

      <FooterZhTw />
    </div>
  )
}
