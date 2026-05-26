
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '提交争议 - 数字世界仲裁中心',
  description: '提交您的数字争议进行专业仲裁。快速、公平、全球可执行。',
}

import Link from 'next/link'

export default function Dispute() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">提交仲裁申请</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            通过专业仲裁机制，开启数字世界争议解决之旅
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">如何提交仲裁申请</h2>
            <p className="text-gray-400 mb-6">
              数字世界仲裁中心（DWAC）为数字世界中产生的各类争议提供高效、专业的解决机制。请按以下步骤启动仲裁程序：
            </p>

            <ol className="space-y-4 mb-8 list-decimal list-inside text-gray-300">
              <li><strong>审查管辖范围</strong> — 确认您的争议属于我中心管辖范围（数字平台争议、智能合约、AI代理、数字资产、数据争议等）</li>
              <li><strong>准备相关材料</strong> — 收集与争议相关的所有证据、合同、通信记录及其他文件</li>
              <li><strong>提交申请</strong> — 填写仲裁请求表或直接联系我们</li>
              <li><strong>缴纳受理费</strong> — 根据争议金额缴纳相应的仲裁费用</li>
              <li><strong>等待确认</strong> — DWAC将在5个工作日内审核您的申请并确认受理</li>
            </ol>

            {/* What We Handle */}
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gold-400 mb-4">受理范围</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                <li>• 跨境数字平台争议</li>
                <li>• 智能合约履行争议</li>
                <li>• AI代理与自主系统争议</li>
                <li>• 数字资产纠纷（NFT、代币、虚拟财产）</li>
                <li>• 数据所有权与流转争议</li>
                <li>• 平台服务争议（账号封禁、内容移除）</li>
                <li>• 经当事人约定受理的其他数字世界争议</li>
              </ul>
            </div>

            {/* Filing Requirements */}
            <div className="bg-gold-500/[0.06] border border-gold-subtle p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold text-gold-400 mb-4">申请材料要求</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300">
                <li>• 填写完整的仲裁请求表</li>
                <li>• 相关合同或协议副本</li>
                <li>• 证据材料及文件</li>
                <li>• 仲裁受理费缴纳凭证</li>
                <li>• 各方当事人联系方式</li>
              </ul>
            </div>

            <p className="text-gray-400">
              争议金额在100万元人民币以下的，可适用简易程序，仲裁周期更短（30天），费用更低。
            </p>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-900 text-white p-8 rounded-2xl mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">准备提交仲裁申请？</h2>
            <p className="text-gray-300 mb-6">
              联系我们提交仲裁请求，或了解更多程序信息。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/zh-cn/contact/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gradient-gold transition-colors">
                联系我们
              </Link>
              <Link href="/zh-cn/fee-calculator/" className="px-6 py-3 border-2 border-gold-medium text-gold-400 font-semibold rounded-lg hover:bg-gold-500/30 hover:text-white transition-colors">
                费用计算器
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
