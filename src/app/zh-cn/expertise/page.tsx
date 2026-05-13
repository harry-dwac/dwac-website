import Link from 'next/link'

const expertiseAreas = [
  {
    slug: 'smart-contracts',
    title: '智能合约',
    icon: '📜',
    description: '涉及区块链网络上自动执行协议的性能和执行纠纷。DWAC仲裁员专精于解释基于代码的合同条款，并处理因智能合约故障、漏洞或歧义而产生的纠纷。',
    examples: [
      'DeFi协议纠纷与流动性池冲突',
      '预言机操纵与价格源故障',
      '智能合约升级争议与兼容性纠纷',
      'Token转账失败与原子交换纠纷',
    ],
  },
  {
    slug: 'ai-agent-liability',
    title: 'AI代理责任',
    icon: '🤖',
    description: '涉及数字世界中自主AI代理决策、行为和互动的纠纷。随着AI代理越来越多地签署合同并从事商业活动，其行动的责任框架变得至关重要。',
    examples: [
      'AI代理合同违约与虚假陈述',
      '自主Agent未经授权的数字资产交易',
      'AI生成内容的知识产权纠纷',
      'AI代理决策问责空白',
    ],
  },
  {
    slug: 'digital-assets',
    title: '数字资产',
    icon: '🏛️',
    description: '为NFT、Token、虚拟财产及其他数字资产提供全面的纠纷解决服务。DWAC理解数字所有权的独特特征，并提供跨境数字资产交易的专业知识。',
    examples: [
      'NFT所有权、真实性和来源纠纷',
      'Token铸造和空投分配冲突',
      '虚拟土地和元宇宙财产纠纷',
      '数字收藏品和游戏资产所有权',
    ],
  },
  {
    slug: 'data-compliance',
    title: '数据合规',
    icon: '🌐',
    description: '涉及跨管辖权的数据传输、存储、处理和保护的跨境数据纠纷。DWAC适用《数字世界公约》和国际数据保护标准来resolve这些复杂事项。',
    examples: [
      '跨境数据传输合规违规',
      'GDPR及地区数据保护执法纠纷',
      '数据主权和本地化要求',
      '数据泄露责任和赔偿请求',
    ],
  },
  {
    slug: 'e-commerce',
    title: '电子商务',
    icon: '🛒',
    description: '数字市场的平台责任、消费者保护和商业纠纷。DWAC为数字商业生态中大量、快速出现的纠纷提供高效解决。',
    examples: [
      '平台封禁纠纷和账户暂停冲突',
      '数字商品交易中的消费者保护',
      '数字产品市场卖家-买家纠纷',
      '支付处理商责任和资金追回',
    ],
  },
  {
    slug: 'domain-ip',
    title: '域名与知识产权',
    icon: '🌍',
    description: '数字知识产权纠纷，包括域名冲突、数字化空间中的商标侵权，以及与数字创作和AI生成内容相关的新兴知识产权问题。',
    examples: [
      'UDRP域名纠纷和网络抢注',
      '跨境数字商标侵权',
      'AI生成内容的版权归属',
      '数字资产商标和品牌保护',
    ],
  },
  {
    slug: 'cybersecurity',
    title: '网络安全',
    icon: '🔒',
    description: '数据泄露责任、网络攻击赔偿和安全协议纠纷。DWAC仲裁员既理解网络安全事件的技术现实，也理解承担责任的法律框架。',
    examples: [
      '数据泄露责任和受害者赔偿',
      '勒索软件付款和恢复纠纷',
      '安全协议失败及由此产生的财务损失',
      '跨境网络事件归因纠纷',
    ],
  },
  {
    slug: 'digital-payments',
    title: '数字支付',
    icon: '⚡',
    description: '涉及数字货币、稳定币和新兴支付技术的跨境支付纠纷。DWAC提供解决非传统支付工具纠纷所需的专业知识。',
    examples: [
      '稳定币脱钩和稳定性纠纷',
      '跨境支付失败和中间商责任',
      '加密货币交易所纠纷和资金追回',
      'CBDC交易纠纷和政策冲突',
    ],
  },
]

export default function ExpertisePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-navy-800 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">专业领域</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            我们处理的纠纷类型
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC专精于数字世界特有的纠纷。我们的仲裁员将深厚的法律专业知识与对数字系统的技术理解相结合。
          </p>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="bg-navy-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area) => (
              <div
                key={area.slug}
                className="bg-navy-800/40 border border-gold-subtle rounded-xl p-8 hover:border-gold-500/50 hover:bg-navy-800/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl flex-shrink-0">{area.icon}</span>
                  <h2 className="font-serif text-2xl font-bold text-white">{area.title}</h2>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{area.description}</p>
                <div className="border-t border-gold-subtle/30 pt-4">
                  <p className="text-xs font-bold tracking-[2px] uppercase text-gold-600 mb-3">常见纠纷</p>
                  <ul className="space-y-2">
                    {area.examples.map((ex, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                        <span className="text-gold-500 mt-1 flex-shrink-0">›</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Expertise Matters */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">
            为什么数字专业知识至关重要
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">技术理解</h3>
                  <p className="text-slate-600 text-sm">DWAC仲裁员理解区块链架构、智能合约逻辑和AI决策过程——而不仅仅是法律论点。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">解决速度</h3>
                  <p className="text-slate-600 text-sm">数字纠纷通常比传统诉讼需要更快的解决速度。我们的90天默认时间线专为数字经济的节奏而设计。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">全球可执行性</h3>
                  <p className="text-slate-600 text-sm">裁决在《纽约公约》170多个国家可执行，数字资产有专门的跨境执行机制。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-gold py-16 text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">您有其中某类纠纷？</h2>
          <p className="text-gold-300 mb-8 max-w-xl mx-auto">我们的仲裁员已准备好提供帮助。提交纠纷或联系我们进行初步评估。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/dispute/" className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
              提交纠纷
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-white/10 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
