import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '常見問題 | DWAC',
  description: '關於DWAC數字仲裁服務、費用和程序的常見問題解答。',
}

import Link from 'next/link'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'DWAC受理哪些類型的爭議？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DWAC受理數字世界活動中產生的爭議，包括：跨境數字平台爭議、智慧合約履行問題、AI代理互動、數字資產糾紛（NFT、代幣、虛擬財產）、資料所有權爭議、平台服務爭議，以及其他經協議約定的數字世界爭議。'
      }
    },
    {
      '@type': 'Question',
      name: '仲裁程式需要多長時間？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '標準案件通常在仲裁庭組成後90天內解決。爭議金額低於100萬元人民幣的案件，可適用簡易程式，30天內解決。'
      }
    },
    {
      '@type': 'Question',
      name: 'DWAC裁決是否可以在全球執行？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。DWAC裁決設計為可根據《紐約公約》在170多個國家和地區執行。'
      }
    },
    {
      '@type': 'Question',
      name: '仲裁費用是多少？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '仲裁費用包括根據爭議金額計算的立案費和管理費。請參閱我們的費用計算器或聯繫我們獲取基於具體案件的詳細估算。'
      }
    },
    {
      '@type': 'Question',
      name: '誰可以向DWAC提起仲裁？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '任何涉及數字世界爭議的當事人，只要有有效的仲裁協議（透過合約條款或接受DWAC管轄），都可以提起仲裁。'
      }
    },
    {
      '@type': 'Question',
      name: '仲裁程式是否保密？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。DWAC仲裁程式是私密的和保密的。未經所有當事人同意，裁決不會公開。'
      }
    },
    {
      '@type': 'Question',
      name: '參與DWAC仲裁需要律師嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '當事人可以選擇委託法律顧問，但這不是強制性的。當事人可以在DWAC程式中自行代理。'
      }
    },
    {
      '@type': 'Question',
      name: '支援哪些語言？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DWAC程式可以多種語言進行。預設語言為英語，但根據當事人協議也可接受其他語言。'
      }
    }
  ]
}

export default function FAQZhTw() {
  const faqs = [
    {
      question: "DWAC受理哪些類型的爭議？",
      answer: "DWAC受理數字世界活動中產生的爭議，包括：跨境數字平台爭議、智慧合約履行問題、AI代理互動、數字資產糾紛（NFT、代幣、虛擬財產）、資料所有權爭議、平台服務爭議，以及其他經協議約定的數字世界爭議。"
    },
    {
      question: "仲裁程式需要多長時間？",
      answer: "標準案件通常在仲裁庭組成後90天內解決。爭議金額低於100萬元人民幣的案件，可適用簡易程式，30天內解決。"
    },
    {
      question: "DWAC裁決是否可以在全球執行？",
      answer: "是的。DWAC裁決設計為可根據《紐約公約》在170多個國家和地區執行。"
    },
    {
      question: "仲裁費用是多少？",
      answer: "仲裁費用包括根據爭議金額計算的立案費和管理費。請參閱我們的費用計算器或聯繫我們獲取基於具體案件的詳細估算。"
    },
    {
      question: "誰可以向DWAC提起仲裁？",
      answer: "任何涉及數字世界爭議的當事人，只要有有效的仲裁協議（透過合約條款或接受DWAC管轄），都可以提起仲裁。"
    },
    {
      question: "仲裁程式是否保密？",
      answer: "是的。DWAC仲裁程式是私密的和保密的。未經所有當事人同意，裁決不會公開。"
    },
    {
      question: "參與DWAC仲裁需要律師嗎？",
      answer: "當事人可以選擇委託法律顧問，但這不是強制性的。當事人可以在DWAC程式中自行代理。"
    },
    {
      question: "支援哪些語言？",
      answer: "DWAC程式可以多種語言進行。預設語言為英語，但根據當事人協議也可接受其他語言。"
    }
  ]

  return (
    <>
      <script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="flex flex-col">
        {/* Hero */}
        <section className="bg-navy-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">常見問題</h1>
            <p className="text-xl text-gray-300 max-w-2xl">查找關於DWAC仲裁服務的常見問題解答</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">仍有疑問？</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">直接聯繫我們，我們將竭誠為您服務。</p>
            <Link href="/zh-tw/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              聯繫我們
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
