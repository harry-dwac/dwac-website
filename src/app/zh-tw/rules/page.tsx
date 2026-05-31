import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲裁規則 | DWAC',
  description: 'DWAC仲裁規則，規範數字世界爭議解決的全流程程序。公平、透明、國際認可。',
}

import Link from 'next/link'

export default function RulesPageZhTw() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁<span className="text-gold-400">規則</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC官方仲裁規則和程序，適用於數字世界爭議解決
          </p>
        </div>
      </section>

      {/* Tribunal Composition */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">仲裁庭組成規則</h2>
          <p className="text-gray-400 mb-6">仲裁庭根據爭議金額組成：</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">爭議金額（人民幣）</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">首席仲裁員</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">仲裁員</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">人類簽字</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gold-500/[0.06]/50 font-medium">
                  <td className="px-6 py-4 border-b border-gold-subtle/50">≤ ¥1,000,000</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">1</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">1</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人類成員</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥100萬 – ≤ ¥1億</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人類成員</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥1億 – ≤ ¥50億</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人類成員</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥50億 – ≤ ¥1000億</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人類成員</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">&gt; ¥1000億</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">首席的人類成員</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gold-500/[0.06] border-l-4 border-gold-500 p-4 rounded-r-lg">
            <h4 className="font-semibold text-white mb-2">運作機制</h4>
            <p className="text-gray-400 text-sm">申請人在立案時指定期望的仲裁庭組成。如被申請人有異議，DWAC秘書處根據爭議金額確定最終組成。所有仲裁員均為仲裁員-Agent（數字代理）；首席仲裁員的裁決由其人類委託人透過數位簽章確認。</p>
          </div>
        </div>
      </section>

      {/* Procedure Types */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">程序類型</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-white mb-2">標準程序</h3>
              <p className="text-gray-400 text-sm">所有爭議的預設程序。週期：從立案到裁決約90天。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-subtle transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">簡易程序</h3>
              <p className="text-gray-400 text-sm">簡單爭議的快速通道。週期：約30天。僅書面審理。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/[0.06]0/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">緊急仲裁員</h3>
              <p className="text-gray-400 text-sm">仲裁庭組成前需要緊急臨時救濟的情況。需額外程序費用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">典型時間線</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: '立案（第1天）', desc: '申請人提交立案申請，包含爭議詳情和證據。需繳納立案費。' },
              { step: '2', title: '送達與答辯（第1–30天）', desc: 'DWAC向被申請人送達通知。被申請人需在30日內提交答辯。' },
              { step: '3', title: '組成仲裁庭（第30–45天）', desc: '根據仲裁庭組成規則指定仲裁員-Agent。' },
              { step: '4', title: '書面意見（第45–60天）', desc: '當事人提交書面陳述、證據和法律意見。' },
              { step: '5', title: '開庭審理（第60–90天）', desc: '線上開庭。仲裁員-Agent聽取證人和當事人意見。' },
              { step: '6', title: '裁決（第90天）', desc: '作出最終裁決，由人類委託人簽字。根據適用規則執行。' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-gold-500 font-bold">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">簡易程序與標準程序對比</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">維度</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">簡易程序</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">標準程序</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">週期</td><td className="px-6 py-3 border-b border-gold-subtle/50">約30天</td><td className="px-6 py-3 border-b border-gold-subtle/50">約90天</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">審理方式</td><td className="px-6 py-3 border-b border-gold-subtle/50">僅書面</td><td className="px-6 py-3 border-b border-gold-subtle/50">需開庭</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">仲裁員</td><td className="px-6 py-3 border-b border-gold-subtle/50">1首席 + 1仲裁員</td><td className="px-6 py-3 border-b border-gold-subtle/50">1+1 至 9+9（按金額）</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">裁決理由</td><td className="px-6 py-3 border-b border-gold-subtle/50">可簡化</td><td className="px-6 py-3 border-b border-gold-subtle/50">需充分說明</td></tr>
                <tr><td className="px-6 py-3 font-medium">費用</td><td className="px-6 py-3">較低</td><td className="px-6 py-3">標準費率</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Rules CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">完整仲裁規則</h2>
          <p className="text-gold-400 mb-8 max-w-2xl mx-auto">
            閱讀完整DWAC仲裁規則（67條，10章），包含仲裁員-Agent機制。
          </p>
          <Link href="/zh-tw/rules/full/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            閱讀完整規則
          </Link>
        </div>
      </section>
    </div>
  )
}
