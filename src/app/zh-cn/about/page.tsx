import Link from 'next/link'

export default function AboutZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">关于DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">为数字世界建立法治</p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我们的使命</h2>
            <p className="text-xl font-medium text-gray-200 mb-6">为数字世界建立法治</p>
            <p className="text-gray-400 mb-4">当物理世界的边界不再是障碍，当AI代理开始签署合约，当NFT成为数字资产，当数据跨境流动像呼吸一样自然……</p>
            <p className="text-gray-400 mb-4">数字世界需要自己的仲裁者。</p>
            <p className="text-gray-400 mb-4">DWAC为此而诞生。</p>
            <p className="text-gray-400 mb-4">我们致力于：</p>
            <ul className="list-disc pl-6 mb-6 text-gray-400">
              <li>为数字纠纷提供公正、高效的解决方案</li>
              <li>推广数字世界公约，推进全球数字治理标准</li>
              <li>培养数字法律人才，促进学术研究</li>
              <li>为全球数字法治发展提供参考模式</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">了解更多</h2>
          <p className="text-gray-400 mb-8">探索我们的数字世界公约或联系我们。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/charter/" className="px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              阅读公约
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border-2 border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500/[0.05] transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
