import Link from 'next/link'

const expertiseAreas = [
  {
    slug: 'smart-contracts',
    title: 'Smart Contracts',
    icon: '📜',
    description: 'Performance and execution disputes involving self-executing agreements on blockchain networks. DWAC arbitrators specialize in interpreting code-based contractual terms and resolving disputes arising from smart contract failures, bugs, or ambiguities.',
    examples: [
      'DeFi protocol disputes and liquidity pool conflicts',
      'Oracle manipulation and price feed failures',
      'Smart contract升级争议与兼容性纠纷',
      'Token transfer failures and atomic swap disputes',
    ],
  },
  {
    slug: 'ai-agent-liability',
    title: 'AI Agent Liability',
    icon: '🤖',
    description: 'Disputes arising from autonomous AI agent decisions, actions, and interactions in the digital world. As AI agents increasingly sign contracts and engage in commercial activities, liability frameworks for their actions become critical.',
    examples: [
      'AI agent contract breach and misrepresentation',
      'Unauthorized digital asset transactions by autonomous agents',
      'AI-generated content IP disputes',
      'AI agent decision-making accountability gaps',
    ],
  },
  {
    slug: 'digital-assets',
    title: 'Digital Assets',
    icon: '🏛️',
    description: 'Comprehensive dispute resolution for NFTs, tokens, virtual property, and other digital assets. DWAC understands the unique characteristics of digital ownership and provides specialized expertise in cross-border digital asset transactions.',
    examples: [
      'NFT ownership, authenticity, and provenance disputes',
      'Token minting and airdrop distribution conflicts',
      'Virtual land and metaverse property disputes',
      'Digital collectibles and gaming asset ownership',
    ],
  },
  {
    slug: 'data-compliance',
    title: 'Data Compliance',
    icon: '🌐',
    description: 'Cross-border data disputes involving the transfer, storage, processing, and protection of data across jurisdictions. DWAC applies both the Digital World Charter and international data protection standards to resolve these complex matters.',
    examples: [
      'Cross-border data transfer compliance violations',
      'GDPR and regional data protection enforcement disputes',
      'Data sovereignty and localization requirements',
      'Data breach liability and compensation claims',
    ],
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce',
    icon: '🛒',
    description: 'Platform liability, consumer protection, and commercial disputes in digital marketplaces. DWAC provides efficient resolution for the high-volume, fast-paced disputes that characterize the digital commerce ecosystem.',
    examples: [
      'Platform ban disputes and account suspension conflicts',
      'Consumer protection in digital goods transactions',
      'Marketplace seller-buyer disputes over digital products',
      'Payment processor liability and fund recovery',
    ],
  },
  {
    slug: 'domain-ip',
    title: 'Domain & IP',
    icon: '🌍',
    description: 'Digital intellectual property disputes including domain name conflicts, trademark infringement in the digital space, and emerging IP issues related to digital creation and AI-generated content.',
    examples: [
      'UDRP domain name disputes and cybersquatting',
      'Digital trademark infringement across borders',
      'AI-generated content copyright ownership',
      'Digital asset trademark and brand protection',
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔒',
    description: 'Data breach liability, cyber attack compensation, and security protocol disputes. DWAC arbitrators understand both the technical realities of cybersecurity incidents and the legal frameworks for assigning liability.',
    examples: [
      'Data breach liability and victim compensation',
      'Ransomware payment and recovery disputes',
      'Security protocol failures and resulting financial losses',
      'Cross-border cyber incident attribution disputes',
    ],
  },
  {
    slug: 'digital-payments',
    title: 'Digital Payments',
    icon: '⚡',
    description: 'Cross-border payment disputes involving digital currencies, stablecoins, and emerging payment technologies. DWAC provides the specialized expertise needed to resolve disputes involving non-traditional payment instruments.',
    examples: [
      'Stablecoin depeg and stability disputes',
      'Cross-border payment failures and intermediary liability',
      'Cryptocurrency exchange disputes and fund recovery',
      'CBDC transaction disputes and policy conflicts',
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
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Our Expertise</span>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-6">
            What We Handle
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC specializes in disputes unique to the digital world. Our arbitrators combine deep legal expertise with technical understanding of digital systems.
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
                  <p className="text-xs font-bold tracking-[2px] uppercase text-gold-600 mb-3">Common Disputes</p>
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

      {/* Comparison with Traditional */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-8 text-center">
            Why Digital Expertise Matters
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Technical Understanding</h3>
                  <p className="text-slate-600 text-sm">DWAC arbitrators understand blockchain architecture, smart contract logic, and AI decision-making processes — not just the legal arguments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Speed of Resolution</h3>
                  <p className="text-slate-600 text-sm">Digital disputes often require faster resolution than traditional litigation. Our 90-day default timeline is designed specifically for the pace of the digital economy.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Global Enforceability</h3>
                  <p className="text-slate-600 text-sm">Awards are enforceable in 170+ countries under the New York Convention, with specialized cross-border enforcement mechanisms for digital assets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-gold py-16 text-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">Have a Dispute in One of These Areas?</h2>
          <p className="text-gold-300 mb-8 max-w-xl mx-auto">Our arbitrators are ready to help. File a dispute or contact us for a preliminary assessment.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dispute/" className="px-6 py-3 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors">
              File a Dispute
            </Link>
            <Link href="/contact/" className="px-6 py-3 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}