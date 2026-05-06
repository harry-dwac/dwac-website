import Link from 'next/link'

export default function CharterZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">数字世界公约</h1>
          <p className="text-xl text-gray-300 max-w-2xl">数字纠纷解决的基本原则</p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">序言</h2>
            <p className="text-gray-300 leading-relaxed">我们，公约的签署方认识到数字世界作为人类活动新领域的出现，承认在这个日益重要的空间中建立法治的必要性，相信每个数字实体都有权获得正义……</p>
            <p className="text-gray-300 leading-relaxed mt-4">特制定本数字世界公约，为解决数字环境中产生的纠纷提供全面的法律框架。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">核心原则</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-3">数字主权</h3>
              <p className="text-gray-400">每个数字实体都有权在数字世界中自由运营、交互和解决纠纷，不受不当干涉。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-3">公正公平</h3>
              <p className="text-gray-400">所有纠纷应通过公正、透明的程序解决，尊重所有相关方的权利。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-3">高效便捷</h3>
              <p className="text-gray-400">纠纷解决应及时、经济，并通过现代数字方式进行。</p>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="text-xl font-semibold text-white mb-3">全球适用</h3>
              <p className="text-gray-400">原则普遍适用，承认数字活动的固有跨国性质。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">了解更多</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
