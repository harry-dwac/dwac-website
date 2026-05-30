
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '示範仲裁條款 - 數字世界仲裁中心',
  description: '數字世界爭議標準示範仲裁條款，免費用於合同。',
}

import Link from 'next/link'

export default function ModelClause() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">示範仲裁條款</h1>
          <p className="text-xl text-gray-300 max-w-2xl">在您的合同中納入DWAC仲裁條款</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">標準條款</h2>
          
          <div className="bg-navy-800/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">凡因本合同引起或與本合同有關的任何爭議、糾紛或請求，包括合同的存在、效力、解釋、履行、違約或終止等事項，均應由數字世界仲裁中心（DWAC）按照其仲裁規則進行仲裁，仲裁裁決是終局的。</p>
            
            <p className="text-gray-300 mb-4">仲裁地應爲[城市，國家]。仲裁語言應爲[中文/英文/其他]。</p>
            
            <p className="text-gray-300">仲裁員人數應爲[一名/三名]。</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">簡化條款</h2>
          
          <div className="bg-navy-800/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">凡因本合同引起或與本合同有關的任何爭議，均應提交數字世界仲裁中心（DWAC）按照其仲裁規則進行仲裁。</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">數字世界專用條款</h2>
          
          <div className="bg-gold-500/[0.06] border border-gold-subtle rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">凡因[數字平臺服務/智能合約履行/AI Agent（电子代理人）交互/數字資產交易/數據傳輸]引起的任何爭議，均應提交數字世界仲裁中心（DWAC）按照《數字世界憲章》及DWAC仲裁規則進行仲裁。</p>
            
            <p className="text-gray-300">各方同意，DWAC對《數字世界憲章》所定義的數字世界活動中產生的爭議享有排他性管轄權。</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">主要優勢</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
            <li>精通數字法律與技術的專業仲裁員</li>
            <li>全程在線審理，高效便捷</li>
            <li>默認90天結案週期</li>
            <li>依據《紐約公約》全球可執行</li>
            <li>保密審理制度</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">對仲裁條款有疑問？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">聯繫我們，獲取合同仲裁條款起草方面的協助。</p>
          <Link href="/zh-tw/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            聯繫我們
          </Link>
        </div>
      </section>
    </div>
  )
}
