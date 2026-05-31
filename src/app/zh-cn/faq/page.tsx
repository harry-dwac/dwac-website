
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '常见问题 - 数字世界仲裁中心',
  description: '关于DWAC数字仲裁服务、费用和程序的常见问题。',
}

import Link from 'next/link'

export default function FAQZhCn() {
  const faqs = [
    {
      question: 'DWAC处理哪些类型的纠纷？',
      answer: 'DWAC处理与数字世界活动相关的纠纷，包括：跨境数字平台纠纷、智能合约履行问题、AI代理交互、数字资产争议（NFT、代币、虚拟财产）、数据所有权纠纷、平台服务纠纷，以及双方同意的其他数字世界纠纷。'
    },
    {
      question: '仲裁过程需要多长时间？',
      answer: '标准案件通常在仲裁庭组成后90天内解决。对于1,000,000人民币以下的纠纷，简化程序可在30天内解决。'
    },
    {
      question: 'DWAC的裁决可以在全球执行吗？',
      answer: '可以。DWAC的裁决设计为可在全球170多个国家和地区根据《纽约公约》执行。'
    },
    {
      question: '仲裁费用是多少？',
      answer: '仲裁费用包括基于争议金额的受理费和行政管理费。请参阅我们的费用计算器或联系我们，获取针对您具体案件的详细估算。'
    },
    {
      question: '谁可以向DWAC提起争议？',
      answer: '任何涉及数字世界纠纷的一方，只要存在有效的仲裁协议（通过合同条款或提交至DWAC管辖），都可以提起争议。'
    },
    {
      question: '仲裁过程是保密的吗？',
      answer: '是的。DWAC仲裁程序是私密和保密的。未经所有当事方同意，裁决不会公开发布。'
    },
    {
      question: '参加DWAC仲裁需要律师吗？',
      answer: '虽然当事方可以选择由法律顾问代理，但这并非强制要求。当事方可以自行在DWAC程序中代表自己。'
    },
    {
      question: '支持哪些语言？',
      answer: 'DWAC程序可以使用多种语言进行。英语为默认语言，但根据当事方的协议，也可以接受其他语言。'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">常见问题</h1>
          <p className="text-xl text-gray-300 max-w-2xl">关于DWAC仲裁服务的常见问题</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">还有其他问题？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">直接联系我们，我们将乐意为您提供帮助。</p>
          <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
