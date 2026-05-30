import Link from 'next/link'

export default function EvidenceZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">证据指引</h1>
          <p className="text-xl text-gray-300 max-w-2xl">向DWAC提交数字证据</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">数字证据类型</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-3 mb-8">
            <li>智能合约代码及区块链交易记录</li>
            <li>通信记录（邮件、聊天记录等）</li>
            <li>平台记录（账户活动、服务协议等）</li>
            <li>AI Agent（电子代理人）交互文档</li>
          </ul>
          <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            联系我们
          </Link>
        </div>
      </section>
    </div>
  )
}
