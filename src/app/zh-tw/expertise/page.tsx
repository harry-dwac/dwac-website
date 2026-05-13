import Link from 'next/link'

const expertiseAreas = [
  {
    slug: 'smart-contracts',
    title: '智慧合約',
    icon: '📜',
    description: '涉及區塊鏈網路上自動執行協定的性能和執行糾紛。DWAC仲裁員專精於解釋基於代碼的合同條款，並處理因智慧合約故障、漏洞或歧義而產生的糾紛。',
    examples: [
      'DeFi協定糾紛與流動性池衝突',
      '預言機操縱與價格饋故障',
      '智慧合約升級爭議與相容性糾紛',
      'Token轉帳失敗與原子交換糾紛',
    ],
  },
  {
    slug: 'ai-agent-liability',
    title: 'AI代理責任',
    icon: '🤖',
    description: '涉及數字世界中自主AI代理決策、行為和互動的糾紛。隨著AI代理越來越多地簽署合同並從事商業活動，其行動的責任框架變得至關重要。',
    examples: [
      'AI代理合同違約與虛假陳述',
      '自主Agent未經授權的數字資產交易',
      'AI生成內容的智慧財產權糾紛',
      'AI代理決策問責空白',
    ],
  },
  {
    slug: 'digital-assets',
    title: '數字資產',
    icon: '🏛️',
    description: '為NFT、Token、虛擬財產及其他數字資產提供全面的糾紛解決服務。DWAC理解數字所有權的獨特特徵，並提供跨境數字資產交易的專業知識。',
    examples: [
      'NFT所有權、真實性和來源糾紛',
      'Token鑄造和空投分配衝突',
      '虛擬土地和元宇宙財產糾紛',
      '數字收藏品和遊戲資產所有權',
    ],
  },
  {
    slug: 'data-compliance',
    title: '資料合規',
    icon: '🌐',
    description: '涉及跨管轄權的資料傳輸、儲存、處理和保護的跨境資料糾紛。DWAC適用《數字世界公約》和國際資料保護標準來resolve這些複雜事項。',
    examples: [
      '跨境資料傳輸合規違規',
      'GDPR及地區資料保護執法糾紛',
      '資料主權和本地化要求',
      '資料洩露責任和賠償請求',
    ],
  },
  {
    slug: 'e-commerce',
    title: '電子商務',
    icon: '🛒',
    description: '數字市場的平台責任、消費者保護和商業糾紛。DWAC為數字商業生態中大量、快速出現的糾紛提供高效解決。',
    examples: [
      '平台封禁糾紛和帳戶暫停衝突',
      '數字商品交易中的消費者保護',
      '數字產品市場賣家-買家糾紛',
      '支付處理商責任和資金追回',
    ],
  },
  {
    slug: 'domain-ip',
    title: '域名與智慧財產權',
    icon: '🌍',
    description: '數字智慧財產權糾紛，包括域名衝突、數字化空間中的商标侵權，以及與數字創作和AI生成內容相關的新興智慧財產權問題。',
    examples: [
      'UDRP域名糾紛和網路搶注',
      '跨境數字商标侵權',
      'AI生成內容的版權歸屬',
      '數字資產商标和品牌保護',
    ],
  },
  {
    slug: 'cybersecurity',
    title: '網路安全',
    icon: '🔒',
    description: '資料洩露責任、網路攻擊賠償和安全協定糾紛。DWAC仲裁員既理解網路安全事件的技術現實，也理解承擔責任的法律框架。',
    examples: [
      '資料洩露責任和受害者賠償',
      '勒索軟體付款和恢復糾紛',
      '安全協定失敗及由此產生的財務損失',
      '跨境網路事件歸因糾紛',
    ],
  },
  {
    slug: 'digital-payments',
    title: '數字支付',
    icon: '⚡',
    description: '涉及數字貨幣、穩定幣和新興支付技術的跨境支付糾紛。DWAC提供解決非傳統支付工具糾紛所需的專業知識。',
    examples: [
      '穩定幣脫鉤和穩定性糾紛',
      '跨境支付失敗和中間商責任',
      '加密貨幣交易所糾紛和資金追回',
      'CBDC交易糾紛和政策衝突',
    ],
  },
]

export default function ExpertisePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">專業領域</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            我們處理的糾紛類型
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC專精於數字世界特有的糾紛。我們的仲裁員將深厚的法律專業知識與對數字系統的技術理解相結合。
          </p>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area) => (
              <div
                key={area.slug}
                className="bg-navy-800/40 border border-gold-subtle rounded-xl p-8 hover:border-gold-500/50 hover:bg-navy-800/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl flex-shrink-0">{area.icon}</span>
                  <h2 className="font-serif text-2xl font-bold text-white">{area.title}</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{area.description}</p>
                <div className="border-t border-gold-subtle/30 pt-4">
                  <p className="text-xs font-bold tracking-[2px] uppercase text-gold-600 mb-3">常見糾紛</p>
                  <ul className="space-y-2">
                    {area.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="text-gold-500 mt-1 flex-shrink-0">›</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Expertise Matters */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">
            為什麼數字專業知識至關重要
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">技術理解</h3>
                  <p className="text-slate-600 text-sm">DWAC仲裁員理解區塊鏈架構、智慧合約邏輯和AI決策過程——而不僅僅是法律論點。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">解決速度</h3>
                  <p className="text-slate-600 text-sm">數字糾紛通常比傳統訴訟需要更快的解決速度。我們的90天預設時間線專為數字經濟的節奏而設計。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">全球可執行性</h3>
                  <p className="text-slate-600 text-sm">裁決在《紐約公約》170多個國家可執行，數字資產有專門的跨境執行機制。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-gold py-16 text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">您有其中某類糾紛？</h2>
          <p className="text-gold-300 mb-8 max-w-xl mx-auto">我們的仲裁員已準備好提供幫助。提交糾紛或聯繫我們進行初步評估。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/dispute/" className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
              提交糾紛
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
