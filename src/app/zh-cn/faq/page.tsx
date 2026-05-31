import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '常见问题 | DWAC',
  description: '关于DWAC数字仲裁服务、费用和程序的常见问题解答。',
}

import Link from 'next/link'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'DWAC受理哪些类型的争议？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DWAC受理数字世界活动中产生的争议，包括：跨境数字平台争议、智能合约履行问题、AI代理交互、数字资产纠纷（NFT、代币、虚拟财产）、数据所有权争议、平台服务争议，以及其他经协议约定的数字世界争议。'
      }
    },
    {
      '@type': 'Question',
      name: '仲裁程序需要多长时间？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '标准案件通常在仲裁庭组成后90天内解决。争议金额低于100万元人民币的案件，可适用简易程序，30天内解决。'
      }
    },
    {
      '@type': 'Question',
      name: 'DWAC裁决是否可以在全球执行？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。DWAC裁决设计为可根据《纽约公约》在170多个国家和地区执行。'
      }
    },
    {
      '@type': 'Question',
      name: '仲裁费用是多少？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '仲裁费用包括根据争议金额计算的立案费和管理费。请参阅我们的费用计算器或联系我们获取基于具体案件的详细估算。'
      }
    },
    {
      '@type': 'Question',
      name: '谁可以向DWAC提起仲裁？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '任何涉及数字世界争议的当事人，只要有有效的仲裁协议（通过合同条款或接受DWAC管辖），都可以提起仲裁。'
      }
    },
    {
      '@type': 'Question',
      name: '仲裁程序是否保密？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的。DWAC仲裁程序是私密的和保密的。未经所有当事人同意，裁决不会公开。'
      }
    },
    {
      '@type': 'Question',
      name: '参与DWAC仲裁需要律师吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当事人可以选择委托法律顾问，但这不是强制性的。当事人可以在DWAC程序中自行代理。'
      }
    },
    {
      '@type': 'Question',
      name: '支持哪些语言？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DWAC程序可以多种语言进行。默认语言为英语，但根据当事人协议也可接受其他语言。'
      }
    }
  ]
}

export default function FAQZhCn() {
  const faqs = [
    {
      question: "DWAC受理哪些类型的争议？",
      answer: "DWAC受理数字世界活动中产生的争议，包括：跨境数字平台争议、智能合约履行问题、AI代理交互、数字资产纠纷（NFT、代币、虚拟财产）、数据所有权争议、平台服务争议，以及其他经协议约定的数字世界争议。"
    },
    {
      question: "仲裁程序需要多长时间？",
      answer: "标准案件通常在仲裁庭组成后90天内解决。争议金额低于100万元人民币的案件，可适用简易程序，30天内解决。"
    },
    {
      question: "DWAC裁决是否可以在全球执行？",
      answer: "是的。DWAC裁决设计为可根据《纽约公约》在170多个国家和地区执行。"
    },
    {
      question: "仲裁费用是多少？",
      answer: "仲裁费用包括根据争议金额计算的立案费和管理费。请参阅我们的费用计算器或联系我们获取基于具体案件的详细估算。"
    },
    {
      question: "谁可以向DWAC提起仲裁？",
      answer: "任何涉及数字世界争议的当事人，只要有有效的仲裁协议（通过合同条款或接受DWAC管辖），都可以提起仲裁。"
    },
    {
      question: "仲裁程序是否保密？",
      answer: "是的。DWAC仲裁程序是私密的和保密的。未经所有当事人同意，裁决不会公开。"
    },
    {
      question: "参与DWAC仲裁需要律师吗？",
      answer: "当事人可以选择委托法律顾问，但这不是强制性的。当事人可以在DWAC程序中自行代理。"
    },
    {
      question: "支持哪些语言？",
      answer: "DWAC程序可以多种语言进行。默认语言为英语，但根据当事人协议也可接受其他语言。"
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
            <h1 className="text-4xl font-bold mb-4">常见问题</h1>
            <p className="text-xl text-gray-300 max-w-2xl">查找关于DWAC仲裁服务的常见问题解答</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">仍有疑问？</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">直接联系我们，我们将竭诚为您服务。</p>
            <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              联系我们
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
