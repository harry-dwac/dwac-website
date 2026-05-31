import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲裁规则 | DWAC',
  description: 'DWAC仲裁规则，规范数字世界争议解决的全流程程序。公平、透明、国际认可。',
}

import Link from 'next/link'

export default function RulesPageZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁<span className="text-gold-400">规则</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC官方仲裁规则和程序，适用于数字世界争议解决
          </p>
        </div>
      </section>

      {/* Tribunal Composition */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">仲裁庭组成规则</h2>
          <p className="text-gray-400 mb-6">仲裁庭根据争议金额组成：</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">争议金额（人民币）</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">首席仲裁员</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">仲裁员</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">人类签字</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gold-500/[0.06]/50 font-medium">
                  <td className="px-6 py-4 border-b border-gold-subtle/50">≤ ¥1,000,000</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">1</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">1</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥100万 – ≤ ¥1亿</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥1亿 – ≤ ¥50亿</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥50亿 – ≤ ¥1000亿</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">&gt; ¥1000亿</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">首席的人类成员</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gold-500/[0.06] border-l-4 border-gold-500 p-4 rounded-r-lg">
            <h4 className="font-semibold text-white mb-2">运作机制</h4>
            <p className="text-gray-400 text-sm">申请人在立案时指定期望的仲裁庭组成。如被申请人有异议，DWAC秘书处根据争议金额确定最终组成。所有仲裁员均为仲裁员Agent（数字代理）；首席仲裁员的裁决由其人类委托人通过数字签名确认。</p>
          </div>
        </div>
      </section>

      {/* Procedure Types */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">程序类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-medium transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-white mb-2">标准程序</h3>
              <p className="text-gray-400 text-sm">所有争议的默认程序。周期：从立案到裁决约90天。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-subtle transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">简易程序</h3>
              <p className="text-gray-400 text-sm">简单争议的快速通道。周期：约30天。仅书面审理。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/[0.06]0/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">紧急仲裁员</h3>
              <p className="text-gray-400 text-sm">仲裁庭组成前需要紧急临时救济的情况。需额外程序费用。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">典型时间线</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: '立案（第1天）', desc: '申请人提交立案申请，包含争议详情和证据。需缴纳立案费。' },
              { step: '2', title: '送达与答辩（第1–30天）', desc: 'DWAC向被申请人送达通知。被申请人需在30日内提交答辩。' },
              { step: '3', title: '组成仲裁庭（第30–45天）', desc: '根据仲裁庭组成规则指定仲裁员Agent。' },
              { step: '4', title: '书面意见（第45–60天）', desc: '当事人提交书面陈述、证据和法律意见。' },
              { step: '5', title: '开庭审理（第60–90天）', desc: '线上开庭。仲裁员Agent听取证人和当事人意见。' },
              { step: '6', title: '裁决（第90天）', desc: '作出最终裁决，由人类委托人签字。根据适用规则执行。' },
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
          <h2 className="text-3xl font-bold text-white mb-8">简易程序与标准程序对比</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">维度</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">简易程序</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">标准程序</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">周期</td><td className="px-6 py-3 border-b border-gold-subtle/50">约30天</td><td className="px-6 py-3 border-b border-gold-subtle/50">约90天</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">审理方式</td><td className="px-6 py-3 border-b border-gold-subtle/50">仅书面</td><td className="px-6 py-3 border-b border-gold-subtle/50">需开庭</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">仲裁员</td><td className="px-6 py-3 border-b border-gold-subtle/50">1首席 + 1仲裁员</td><td className="px-6 py-3 border-b border-gold-subtle/50">1+1 至 9+9（按金额）</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">裁决理由</td><td className="px-6 py-3 border-b border-gold-subtle/50">可简化</td><td className="px-6 py-3 border-b border-gold-subtle/50">需充分说明</td></tr>
                <tr><td className="px-6 py-3 font-medium">费用</td><td className="px-6 py-3">较低</td><td className="px-6 py-3">标准费率</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Rules CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">完整仲裁规则</h2>
          <p className="text-gold-400 mb-8 max-w-2xl mx-auto">
            阅读完整DWAC仲裁规则（67条，10章），包含仲裁员-Agent机制。
          </p>
          <Link href="/zh-cn/rules/full/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            阅读完整规则
          </Link>
        </div>
      </section>
    </div>
  )
}
