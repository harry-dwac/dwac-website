
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '案例类型 - 数字世界仲裁中心',
  description: '了解DWAC处理的数字纠纷类型，从AI和区块链到数据隐私和跨境电商。',
}

import Link from 'next/link'

export default function Cases() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">案件统计</h1>
          <p className="text-xl text-gray-300 max-w-2xl">DWAC 仲裁案件信息</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">即将上线</h2>
          <p className="text-gray-400 mb-8">
            DWAC目前处于创始阶段。我们的在线仲裁平台正在开发中，将于2026年第二季度上线。
          </p>
          <p className="text-gray-400 mb-8">
            平台运营后，本页面将提供脱敏的案件统计数据，包括受理案件量、解决周期和案件分类等信息。
          </p>
          <div className="bg-navy-800/30 rounded-xl p-8 inline-block">
            <div className="text-4xl font-bold text-gold-600 mb-2">2026年Q2</div>
            <p className="text-gray-400">平台上线</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">关注 DWAC</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">了解更多关于我们的使命以及数字争议解决机制的建设进展。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/about/" className="px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              关于DWAC
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg hover:bg-gold-500/[0.06] transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
