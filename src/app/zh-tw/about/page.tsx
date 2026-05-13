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
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的使命</h2>
            <p className="text-xl font-medium text-gray-200 mb-6">為數字世界建立法治</p>
            <p className="text-gray-400 mb-4">當物理世界的邊界不再是障礙，當AI代理開始簽署合約，當NFT成為數字資產，當資料跨境流動像呼吸一樣自然……</p>
            <p className="text-gray-400 mb-4">數字世界需要自己的仲裁者。</p>
            <p className="text-gray-400 mb-4">DWAC為此而誕生。</p>
            <p className="text-gray-400 mb-4">我們致力於：</p>
            <ul className="list-disc pl-6 mb-6 text-gray-400">
              <li>為數字糾紛提供公正、高效的解決方案</li>
              <li>推廣數字世界公約，推進全球數字治理標準</li>
              <li>培養數字法律人才，促進學術研究</li>
              <li>為全球數字法治發展提供參考模式</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的願景</h2>
            <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
              <p className="text-xl font-medium text-gray-200 mb-4">
                數字正義，遍及各地，惠及人人
              </p>
              <p className="text-gray-400">
                未來，每一個數字主體——無論是一個AI代理、一個數字平台，還是一位跨境資料所有者——都將在DWAC找到公正、專業、高效的糾紛解決服務。
              </p>
              <p className="text-gray-400 mt-4">
                我們相信，透過持續努力，一個有序、公正的數字世界法治終將建立。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DWAC Over Traditional Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">為什麼選擇 DWAC</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800/40">
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">維度</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">傳統訴訟</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold text-white">傳統仲裁</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left bg-gold-500/10 font-semibold text-white">DWAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-gray-300">管轄確定性</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">低</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">中</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">高</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-gray-300">流程時長</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">1-3年</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">6-18個月</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">90天 / 30天</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-gray-300">專業能力</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">參差不齊</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">部分覆蓋</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">數字法律專家</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-gray-300">跨境執行</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">困難</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">良好</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">最優（紐約公約+專項機制）</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium text-gray-300">線上流程</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">低</td>
                  <td className="border border-gold-subtle px-4 py-3 text-gray-400">部分</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold text-gold-400">全流程線上</td>
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
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年</h3>
                  <p className="text-gray-400">DWAC正式啟動並成立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2025年Q4</h3>
                  <p className="text-gray-400">創始委員會組建完成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q1</h3>
                  <p className="text-gray-400">仲裁規則發布，首批仲裁員名單確立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q2</h3>
                  <p className="text-gray-400">線上仲裁平台上線（Alpha版本）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-navy-900 font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年Q3</h3>
                  <p className="text-gray-400">試營運階段開始，接受模擬案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/20 rounded-full flex items-center justify-center text-gold-400 font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2027年及以後</h3>
                  <p className="text-gray-400">全球擴張，區域辦公室設立</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">創始人</h2>
          <div className="max-w-2xl mx-auto bg-navy-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">周永軍</h3>
            <p className="text-gold-600 font-medium mb-4">DWAC創始人</p>
            <ul className="space-y-2 text-gray-400">
              <li>&#x270D; 《全球網絡法彙編》主編</li>
              <li>&#x1F4DD; 《數字世界公約（示範法）》主起草人</li>
              <li>&#x1F3AF; DWAC發起人</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">了解更多？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">
            探索我們的數字世界公約，或與我們取得聯繫。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/charter/" className="px-6 py-3 bg-navy-800/20 text-navy-900 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              閱讀公約
            </Link>
            <Link href="/zh-tw/contact/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-white/10 transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}