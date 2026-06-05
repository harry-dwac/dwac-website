
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '關於DWAC - 數字世界仲裁中心',
  description: '瞭解DWAC為數字世界建立法治的使命，透過公平高效的仲裁服務解決數字糾紛。',
}

import Link from 'next/link'

export default function AboutZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">關於DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">為數字世界建立法治</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的使命</h2>
            <div className="prose prose-lg max-w-none text-gray-400">
              <p className="text-xl font-medium text-gray-200 mb-6">為數字世界建立法治</p>
              <p className="mb-4">當物理世界的邊界不再是障礙，當AI代理開始簽署合約，當NFT成為數字資產，當資料跨境流動像呼吸一樣自然……</p>
              <p className="mb-4">數字世界需要自己的仲裁者。</p>
              <p className="mb-4">DWAC為此而誕生。</p>
              <p className="mb-4">我們致力於：</p>
              <ul className="list-disc pl-6 mb-6">
                <li>為數字糾紛提供公正、高效的解決方案</li>
                <li>推廣數字世界公約，推進全球數字治理標準</li>
                <li>培養數字法律人才，促進學術研究</li>
                <li>為全球數字法治發展提供參考模式</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的願景</h2>
            <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
              <p className="text-xl font-medium text-gray-200 mb-4">數字正義無處不在，服務每一個人</p>
              <p className="text-gray-400">在未來，每一個數字實體——無論是AI代理、數字平台，還是跨境資料所有者——都將在DWAC找到公平、專業、高效的爭議解決方案。</p>
              <p className="text-gray-400 mt-4">我們相信，通過不懈努力，一個有序、公正的數字世界法治終將建立。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DWAC Over Traditional Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">為什麼選擇DWAC而非傳統方式</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800/40">
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">維度</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">傳統訴訟</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">傳統仲裁</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold bg-gold-500/10">DWAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">管轄確定性</td>
                  <td className="border border-gold-subtle px-4 py-3">低</td>
                  <td className="border border-gold-subtle px-4 py-3">中等</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">高</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium">流程週期</td>
                  <td className="border border-gold-subtle px-4 py-3">1-3年</td>
                  <td className="border border-gold-subtle px-4 py-3">6-18個月</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">90天/30天</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">專業能力</td>
                  <td className="border border-gold-subtle px-4 py-3">參差不齊</td>
                  <td className="border border-gold-subtle px-4 py-3">部分具備</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">數字法律專家</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium">跨境執行</td>
                  <td className="border border-gold-subtle px-4 py-3">困難</td>
                  <td className="border border-gold-subtle px-4 py-3">良好</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">最優（紐約公約+專業機制）</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">線上流程</td>
                  <td className="border border-gold-subtle px-4 py-3">低</td>
                  <td className="border border-gold-subtle px-4 py-3">部分支援</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">全程線上</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">里程碑</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026</h3>
                  <p className="text-gray-400">DWAC正式發起成立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第一季度</h3>
                  <p className="text-gray-400">仲裁規則發布，首批仲裁員名冊建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第二季度</h3>
                  <p className="text-gray-400">線上仲裁平台上線（Alpha版本）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第三季度</h3>
                  <p className="text-gray-400">試運行，受理模擬案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第四季度</h3>
                  <p className="text-gray-400">理事會組成完成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2027年及以後</h3>
                  <p className="text-gray-400">全球拓展，設立區域辦公室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">創辦人</h2>
          <div className="max-w-2xl mx-auto bg-navy-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">周永俊</h3>
            <p className="text-gold-600 font-medium mb-4">DWAC創辦人</p>
            <ul className="space-y-2 text-gray-400">
              <li>✝《全球網路法典》編纂者</li>
              <li>📚網路安全法與國際仲裁研究者</li>
              <li>📝《數字世界憲章·示範法》首席起草人</li>
              <li>⚖️AI輔助爭議解決倡導者</li>
              <li>📌DWAC——世界首個永久性數字仲裁機構——發起人</li>
              <li>🌐連接傳統法學與數字治理的橋樑</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">想瞭解更多？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">探索我們的數字世界公約或聯繫我們。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/charter/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              閱讀公約
            </Link>
            <Link href="/zh-tw/contact/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20 transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
