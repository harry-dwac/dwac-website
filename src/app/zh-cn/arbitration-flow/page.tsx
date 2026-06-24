import Link from 'next/link'

export default function ArbitrationFlowPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Arbitration <span className="text-gold-400">Process Flow</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC仲裁程序分步指南——从申请到执行
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              { step: '1', title: '提交仲裁申请', desc: '通过在线门户提交争议。提供案件详情、证据，并指定所需的仲裁庭组成。需缴纳申请费。', link: '/how-to-apply/' },
              { step: '2', title: '案件受理与送达', desc: 'DWAC秘书处在5个工作日内审查申请。受理后，向被申请人送达通知。被申请人有30天时间提交答辩。' },
              { step: '3', title: '仲裁庭组成', desc: '根据争议金额按照仲裁庭组成规则指定仲裁员-Agent。首席仲裁员和合作仲裁员被指派。' },
              { step: '4', title: '书面陈述', desc: '双方提交书面陈述、证据和法律论点。根据仲裁庭指示，可进行多轮书面陈述。' },
              { step: '5', title: '在线庭审', desc: 'Oral hearing conducted online via the DWAC 在线庭审 Room. Witnesses may be examined. AI-assisted transcription and translation available.', link: '/virtual-hearing/' },
              { step: '6', title: '评议与裁决', desc: 'The tribunal deliberates and issues a final award. Lead Arbitrator\'s award is confirmed by their human principal through digital signature.' },
              { step: '7', title: '执行', desc: '裁决可根据《纽约公约》和适用的国内法执行。DWAC提供执行支持和认证副本。' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gold-500/30">
                  <span className="text-gold-500 font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-gold-400 hover:underline text-sm mt-2 inline-block">
                      了解更多 →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 时间概览 */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">时间概览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-2">⚡ 快速程序</h3>
              <p className="text-4xl font-bold text-gold-400 mb-2">~30天</p>
              <p className="text-gray-400 text-sm">仅书面审理。适用于争议金额100万元以下且事实清晰的案件。</p>
              <Link href="/zh-cn/fees/" className="text-gold-400 hover:underline text-sm mt-2 inline-block">查看费用表 →</Link>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-2">📋 标准程序</h3>
              <p className="text-4xl font-bold text-gold-400 mb-2">~90天</p>
              <p className="text-gray-400 text-sm">完整口头听证。适用于需要质证的复杂争议。</p>
              <Link href="/zh-cn/rules/" className="text-gold-400 hover:underline text-sm mt-2 inline-block">查看规则 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">准备开始？</h2>
          <p className="text-navy-800 mb-8 max-w-2xl mx-auto">
            在线提交仲裁申请，让我们的仲裁员-Agent专业处理您的争议。
          </p>
          <Link href="/zh-cn/how-to-apply/" className="px-8 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            提交仲裁申请
          </Link>
        </div>
      </section>
    </div>
  )
}
