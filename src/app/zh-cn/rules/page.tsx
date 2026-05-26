
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '仲裁规则 - 数字世界仲裁中心',
  description: 'DWAC管理所有程序的仲裁规则。公平、透明、国际认可。',
}

import Link from 'next/link'

export default function RulesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁<span className="text-gold-400">规则</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC数字世界争议仲裁规则与程序
          </p>
        </div>
      </section>

      {/* Tribunal Composition */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">仲裁庭组成规则</h2>
          <p className="text-gray-400 mb-6">仲裁庭应根据争议金额按以下标准组成：</p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gold-500/[0.06]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">争议金额（人民币）</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">首席仲裁员</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">合议仲裁员</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">人类签章</th>
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
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥1M – ≤ ¥100M</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">3</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥100M – ≤ ¥5B</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">5</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gold-subtle/50">&gt; ¥5B – ≤ ¥100B</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">7</td>
                  <td className="px-6 py-4 text-center border-b border-gold-subtle/50">首席的人类成员</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">&gt; ¥100B</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">9</td>
                  <td className="px-6 py-4 text-center">首席的人类成员</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-gold-500/[0.06] border-l-4 border-gold-500 p-4 rounded-r-lg">
            <h4 className="font-semibold text-white mb-2">运行机制</h4>
            <p className="text-gray-400 text-sm">申请人在提交申请时指定仲裁庭组成方案。如被申请人对组成方案有异议，由DWAC秘书处根据争议金额确定最终组成。所有仲裁员均为仲裁员代理（数字代理）；首席仲裁员的裁决须经其人类委托人数字签章确认。</p>
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
              <p className="text-gray-400 text-sm">适用于所有争议的默认程序。周期：自立案至裁决约90天。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-gold-subtle transition-colors">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-white mb-2">简易程序</h3>
              <p className="text-gray-400 text-sm">适用于简单争议的快速通道。周期：约30天。仅书面审理。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-semibold text-white mb-2">紧急仲裁员</h3>
              <p className="text-gray-400 text-sm">在仲裁庭组成前申请紧急临时措施。另计程序费用。</p>
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
              { step: '1', title: '立案（第1天）', desc: '申请人提交立案申请，附争议详情及证据材料。缴纳受理费。' },
              { step: '2', title: '送达与答辩（第1–30天）', desc: 'DWAC向被申请人送达通知。被申请人须在30日内提交答辩。' },
              { step: '3', title: '仲裁庭组成（第30–45天）', desc: '按仲裁庭组成规则指定仲裁员代理。' },
              { step: '4', title: '书面陈述（第45–60天）', desc: '各方提交书面陈述、证据及法律论点。' },
              { step: '5', title: '开庭审理（第60–90天）', desc: '在线举行口头审理。仲裁员代理听取证人证言及各方陈述。' },
              { step: '6', title: '裁决（第90天）', desc: '作出终局裁决，由人类委托人签章。依据适用规则执行。' },
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
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">对比项</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">简易程序</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gold-400 border-b-2 border-gold-subtle">标准程序</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">周期</td><td className="px-6 py-3 border-b border-gold-subtle/50">约30天</td><td className="px-6 py-3 border-b border-gold-subtle/50">约90天</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">审理方式</td><td className="px-6 py-3 border-b border-gold-subtle/50">仅书面审理</td><td className="px-6 py-3 border-b border-gold-subtle/50">须举行口头审理</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">仲裁员</td><td className="px-6 py-3 border-b border-gold-subtle/50">1名首席 + 1名合议</td><td className="px-6 py-3 border-b border-gold-subtle/50">根据金额1+1至9+9</td></tr>
                <tr><td className="px-6 py-3 border-b border-gold-subtle/50 font-medium">裁决说理</td><td className="px-6 py-3 border-b border-gold-subtle/50">可接受简要说理</td><td className="px-6 py-3 border-b border-gold-subtle/50">须完整说理</td></tr>
                <tr><td className="px-6 py-3 font-medium">费用</td><td className="px-6 py-3">较低费用</td><td className="px-6 py-3">标准费用</td></tr>
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
            阅读DWAC完整仲裁规则（67条，10章），包括仲裁员代理机制。
          </p>
          <Link href="/rules/full/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            阅读完整规则
          </Link>
        </div>
      </section>
    </div>
  )
}
