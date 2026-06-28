import Link from 'next/link'
export const metadata = {
  title: '常见问题 - 数字世界仲裁中心',
  description: '关于DWAC数字世界仲裁服务的常见问题 — 程序、费用、执行、证据、仲裁员选择等。',
}


export default function FAQZhCn() {
  const faqs = [
    {
      question: "DWAC处理哪些类型的纠纷？",
      answer: "DWAC处理与数字世界活动相关的纠纷，包括：跨境数字平台纠纷、智能合约履行问题、AI Agent（电子代理人）交互、数字资产争议（NFT、代币、虚拟财产）、数据所有权纠纷、平台服务纠纷，以及经双方同意的其他数字世界纠纷。"
    },
    {
      question: "仲裁过程需要多长时间？",
      answer: "标准案件通常在仲裁庭组成后90天内解决。对于¥1,000,000人民币以下的纠纷，我们的简化程序可在30天内解决。"
    },
    {
      question: "DWAC裁决可以在全球执行吗？",
      answer: "可以。DWAC裁决依据《纽约公约》在170多个国家和地区可被承认和执行。缔约国有义务承认和执行仲裁裁决，仅受公约第五条规定的有限拒绝理由约束。"
    },
    {
      question: "仲裁费用是多少？",
      answer: "仲裁费用包括基于争议金额的立案费和管理费。我们的费用约为CIETAC标准的50%。请参考费用计算器或联系我们获取基于您具体案件的详细估算。"
    },
    {
      question: "谁可以向DWAC提起仲裁？",
      answer: "任何涉及数字世界纠纷的当事人，只要存在有效的仲裁协议（通过合同条款或提交DWAC管辖），均可提起仲裁。包括个人、企业、代表委托人的AI Agent（电子代理人）和机构实体。"
    },
    {
      question: "仲裁程序是否保密？",
      answer: "是的。DWAC仲裁程序是私密的且保密的。未经所有当事人同意，裁决不予公布。所有仲裁员、工作人员和参与者均受保密义务约束。"
    },
    {
      question: "是否需要律师才能参与DWAC仲裁？",
      answer: "当事人可以选择由法律顾问代表，但并非强制要求。当事人可以自行代表，也可以由AI Agent（电子代理人）代表参与DWAC程序。"
    },
    {
      question: "支持哪些语言？",
      answer: "DWAC程序可以以多种语言进行。默认语言为英文，但经双方同意可接受中文（简体和繁体）或其他语言。"
    },
    {
      question: "如何在数字纠纷中提交证据？",
      answer: "证据通过DWAC案件管理系统以电子方式提交。可接受的格式包括文档、数字记录、区块链交易日志、智能合约代码、AI决策日志和元数据。所有证据必须经过适当认证。详见我们的证据指引页面。"
    },
    {
      question: "仲裁员如何选任？",
      answer: "当事人可以共同提名仲裁员，或各自提名一名仲裁员再共同选定首席仲裁员。简化程序中指定独任仲裁员。DWAC维护着一份具备数字法、区块链、AI和数据合规专业知识的合格仲裁员名册。"
    },
    {
      question: "可以申请仲裁员回避吗？",
      answer: "可以。如有合理理由怀疑仲裁员的公正性或独立性，或仲裁员不具备当事人约定的资格，可申请回避。书面回避申请应在知悉回避理由后7天内提交。"
    },
    {
      question: "如果一方当事人未回应或未参与怎么办？",
      answer: "在一方当事人经适当通知后未回应或未参与的情况下，仲裁可依缺席程序进行。仲裁庭将审查参与方提交的证据，并可基于现有记录作出裁决，同时确保缺席方获得合理的参与机会。"
    },
    {
      question: "仲裁裁决如何执行？",
      answer: "裁决一经作出，即对所有当事人具有约束力。胜诉方可向任何《纽约公约》管辖区的有管辖权法院申请承认和执行。DWAC可根据请求协助提供执行文件。"
    },
    {
      question: "仲裁裁决可以上诉吗？",
      answer: "DWAC裁决是终局且具有约束力的，不可就实体问题上诉。但当事人可基于有限的程序理由向相关仲裁法申请撤销裁决，如未获适当通知、仲裁员不当行为或裁决超出仲裁协议范围等。"
    },
    {
      question: "什么是示范仲裁条款？",
      answer: "示范条款是当事人可纳入合同的预定仲裁协议。DWAC推荐条款：'凡因本合同引起或与本合同有关的任何争议，包括任何数字世界争议，均应提交DWAC并按其仲裁规则最终解决。'完整文本及变体请参见示范条款页面。"
    },
    {
      question: "DWAC支持紧急或临时措施吗？",
      answer: "支持。当事人可在仲裁庭组成前申请紧急或临时措施，包括保全证据、维持现状或防止不可挽回损失的命令。收到申请后48小时内即可指定紧急仲裁员。"
    },
    {
      question: "AI Agent（电子代理人）可以参与程序吗？",
      answer: "可以。DWAC是全球首个明确认可AI Agent（电子代理人）作为授权代表的仲裁机构。AI Agent（电子代理人）可在认证和验证要求的前提下，代表委托人提起仲裁、提交答辩、呈交证据和进行谈判。"
    },
    {
      question: "数字资产在仲裁中如何估值？",
      answer: "数字资产根据当事人约定的方法进行估值。如无约定，仲裁庭可确定截至指定日期的公允市场价值，考虑交易平台价格、稀缺性、实用性和市场行情等因素。复杂估值可能需要专家证言。"
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">常见问题</h1>
          <p className="text-xl text-gray-300 max-w-2xl">关于DWAC仲裁服务的常见问题解答</p>
        </div>
      </section>
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
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">还有问题？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">直接联系我们，我们将很乐意为您提供帮助。</p>
          <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
