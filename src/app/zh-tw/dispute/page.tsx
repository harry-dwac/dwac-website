
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '提交爭議 - 數字世界仲裁中心',
  description: '提交您的數字爭議進行專業仲裁。快速、公平、全球可執行。',
}

import Link from 'next/link'

export default function Dispute() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">提交仲裁申請</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            通過專業仲裁機制，開啓數字世界爭議解決之旅
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">如何提交仲裁申請</h2>
            <p className="text-gray-400 mb-6">
              數字世界仲裁中心（DWAC）爲數字世界中產生的各類爭議提供高效、專業的解決機制。請按以下步驟啓動仲裁程序：
            </p>

            <ol className="space-y-4 mb-8 list-decimal list-inside text-gray-300">
              <li><strong>審查管轄範圍</strong> — 確認您的爭議屬於我中心管轄範圍（數字平臺爭議、智能合約、AI Agent（电子代理人）、數字資產、數據爭議等）</li>
              <li><strong>準備相關材料</strong> — 收集與爭議相關的所有證據、合同、通信記錄及其他文件</li>
              <li><strong>提交申請</strong> — 填寫仲裁請求表或直接聯繫我們</li>
              <li><strong>繳納受理費</strong> — 根據爭議金額繳納相應的仲裁費用</li>
              <li><strong>等待確認</strong> — DWAC將在5個工作日內審覈您的申請並確認受理</li>
            </ol>

            {/* What We Handle */}
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gold-400 mb-4">受理範圍</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                <li>• 跨境數字平臺爭議</li>
                <li>• 智能合約履行爭議</li>
                <li>• AI Agent（电子代理人）與自主系統爭議</li>
                <li>• 數字資產糾紛（NFT、代幣、虛擬財產）</li>
                <li>• 數據所有權與流轉爭議</li>
                <li>• 平臺服務爭議（賬號封禁、內容移除）</li>
                <li>• 經當事人約定受理的其他數字世界爭議</li>
              </ul>
            </div>

            {/* Filing Requirements */}
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gold-400 mb-4">申請材料要求</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                <li>• 填寫完整的仲裁請求表</li>
                <li>• 相關合同或協議副本</li>
                <li>• 證據材料及文件</li>
                <li>• 仲裁受理費繳納憑證</li>
                <li>• 各方當事人聯繫方式</li>
              </ul>
            </div>

            <p className="text-gray-400">
              爭議金額在100萬元人民幣以下的，可適用簡易程序，仲裁週期更短（30天），費用更低。
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-900 text-white p-8 rounded-2xl mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">準備提交仲裁申請？</h2>
            <p className="text-gray-300 mb-6">
              聯繫我們提交仲裁請求，或瞭解更多程序信息。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-tw/contact/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gradient-gold transition-colors">
                聯繫我們
              </Link>
              <Link href="/zh-tw/fee-calculator/" className="px-6 py-3 border-2 border-gold-medium text-gold-400 font-semibold rounded-lg hover:bg-gold-500/30 hover:text-white transition-colors">
                費用計算器
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
