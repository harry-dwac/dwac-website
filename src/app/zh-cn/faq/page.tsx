import Link from 'next/link'

export default function FAQZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">常见问题</h1>
          <p className="text-xl text-gray-300 max-w-2xl">关于DWAC仲裁服务的常见问题</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">DWAC处理哪些类型的纠纷？</h3>
              <p className="text-gray-400">DWAC处理与数字世界活动相关的纠纷，包括跨境数字平台纠纷、智能合约履行问题、AI代理交互、数字资产争议等。</p>
            </div>
            <div className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
              <h3 className="font-semibold text-lg text-white mb-3">仲裁过程需要多长时间？</h3>
              <p className="text-gray-400">标准案件通常在仲裁庭组成后90天内解决。对于1,000,000人民币以下的纠纷，简化程序可在30天内解决。</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              还有问题？联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
