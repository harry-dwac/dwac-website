
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '示范仲裁条款 - 数字世界仲裁中心',
  description: '数字世界争议标准示范仲裁条款，免费用于合同。',
}

import Link from 'next/link'

export default function ModelClause() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">示范仲裁条款</h1>
          <p className="text-xl text-gray-300 max-w-2xl">在您的合同中纳入DWAC仲裁条款</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">标准条款</h2>
          
          <div className="bg-navy-800/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">凡因本合同引起或与本合同有关的任何争议、纠纷或请求，包括合同的存在、效力、解释、履行、违约或终止等事项，均应由数字世界仲裁中心（DWAC）按照其仲裁规则进行仲裁，仲裁裁决是终局的。</p>
            
            <p className="text-gray-300 mb-4">仲裁地应为[城市，国家]。仲裁语言应为[中文/英文/其他]。</p>
            
            <p className="text-gray-300">仲裁员人数应为[一名/三名]。</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">简化条款</h2>
          
          <div className="bg-navy-800/30 rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">凡因本合同引起或与本合同有关的任何争议，均应提交数字世界仲裁中心（DWAC）按照其仲裁规则进行仲裁。</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">数字世界专用条款</h2>
          
          <div className="bg-gold-500/[0.06] border border-gold-subtle rounded-xl p-6 mb-8">
            <p className="text-gray-300 mb-4">凡因[数字平台服务/智能合约履行/AI Agent（电子代理人）交互/数字资产交易/数据传输]引起的任何争议，均应提交数字世界仲裁中心（DWAC）按照《数字世界宪章》及DWAC仲裁规则进行仲裁。</p>
            
            <p className="text-gray-300">各方同意，DWAC对《数字世界宪章》所定义的数字世界活动中产生的争议享有排他性管辖权。</p>
          </div>

          <h2 className="text-2xl font-bold text-white mb-6">主要优势</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2 mb-8">
            <li>精通数字法律与技术的专业仲裁员</li>
            <li>全程在线审理，高效便捷</li>
            <li>默认90天结案周期</li>
            <li>依据《纽约公约》全球可执行</li>
            <li>保密审理制度</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">对仲裁条款有疑问？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">联系我们，获取合同仲裁条款起草方面的协助。</p>
          <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
