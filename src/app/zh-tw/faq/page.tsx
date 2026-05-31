
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '常見問題 - 數字世界仲裁中心',
  description: '關於DWAC數字仲裁服務、費用和程式的常見問題。',
}

import Link from 'next/link'

export default function FAQZhTw() {
  const faqs = [
    {
      question: 'DWAC處理哪些類型的糾紛？',
      answer: 'DWAC處理與數字世界活動相關的糾紛，包括：跨境數字平台糾紛、智慧合約履行問題、AI代理互動、數字資產爭議（NFT、代幣、虛擬財產）、資料所有權糾紛、平台服務糾紛，以及雙方同意的其他數字世界糾紛。'
    },
    {
      question: '仲裁過程需要多長時間？',
      answer: '標準案件通常在仲裁庭組成後90天內解決。對於1,000,000人民幣以下的糾紛，簡化程式可在30天內解決。'
    },
    {
      question: 'DWAC的裁決可以在全球執行嗎？',
      answer: '可以。DWAC的裁決設計為可在全球170多個國家和地區根據《紐約公約》執行。'
    },
    {
      question: '仲裁費用是多少？',
      answer: '仲裁費用包括基於爭議金額的受理費和行政管理費。請參閱我們的費用計算器或聯繫我們，獲取針對您具體案件的詳細估算。'
    },
    {
      question: '誰可以向DWAC提起爭議？',
      answer: '任何涉及數字世界糾紛的一方，只要存在有效的仲裁協議（透過合同條款或提交至DWAC管轄），都可以提起爭議。'
    },
    {
      question: '仲裁過程是保密的嗎？',
      answer: '是的。DWAC仲裁程式是私密和保密的。未經所有當事方同意，裁決不會公開發布。'
    },
    {
      question: '參加DWAC仲裁需要律師嗎？',
      answer: '雖然當事方可以選擇由法律顧問代理，但這並非強制要求。當事方可以自行在DWAC程式中代表自己。'
    },
    {
      question: '支援哪些語言？',
      answer: 'DWAC程式可以使用多種語言進行。英語為預設語言，但根據當事方的協議，也可以接受其他語言。'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">常見問題</h1>
          <p className="text-xl text-gray-300 max-w-2xl">關於DWAC仲裁服務的常見問題</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
                <h3 className="font-semibold text-lg text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">還有其他問題？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">直接聯繫我們，我們將樂意為您提供幫助。</p>
          <Link href="/zh-tw/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            聯繫我們
          </Link>
        </div>
      </section>
    </div>
  )
}
