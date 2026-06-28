
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '法律资源 - 数字世界仲裁中心',
  description: '数字仲裁综合法律资源。法规、判例和学术文章。',
}

import Link from 'next/link'

interface ResourceCardProps {
  icon: string
  title: string
  desc: string
  tags: { text: string; type?: 'default' | 'region' }[]
  links: { text: string; href: string; primary?: boolean }[]
}

function ResourceCard({ icon, title, desc, tags, links }: ResourceCardProps) {
  return (
    <div className="bg-navy-800/50 border border-navy-700/50 rounded-xl p-6 hover:border-gold-500/50 transition-all hover:-translate-y-0.5">
      <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
        <span className="text-gold-400">{icon}</span> {title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-3">{desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`text-xs px-2 py-0.5 rounded ${
              tag.type === 'region'
                ? 'bg-violet-500/10 text-violet-400'
                : 'bg-gradient-gold/10 text-gold-400'
            }`}
          >
            {tag.text}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              link.primary
                ? 'bg-gradient-gold text-navy-900 font-bold hover:bg-gradient-gold'
                : 'bg-transparent text-gold-400 border border-navy-700 hover:border-gold-500'
            }`}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  )
}

const categories = [
  {
    icon: '💡',
    title: '知识产权',
    desc: '数字环境中的著作权、专利、商标与商业秘密',
    resources: [
      {
        icon: '📜',
        title: 'WIPO版权条约（WCT）',
        desc: 'WIPO互联网条约，规范数字环境中的著作权保护。跨境知识产权争议的重要参考。',
        tags: [{ text: '国际条约' }, { text: 'WIPO' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.wipo.int/treaties/en/ip/wct/' }, { text: '📋 申请表格', href: '/zh-cn/how-to-apply/' }],
      },
      {
        icon: '🌐',
        title: 'WIPO表演与录音制品条约（WPPT）',
        desc: '数字时代表演者和录音制品制作者的保护条约。',
        tags: [{ text: '国际条约' }, { text: 'WIPO' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.wipo.int/treaties/en/ip/wppt/' }],
      },
      {
        icon: '🇺🇸',
        title: '美国《数字千年版权法》（DMCA）',
        desc: '美国联邦版权法，规范数字版权管理和在线服务提供商责任。',
        tags: [{ text: '国内法' }, { text: '美国', type: 'region' as const }],
        links: [{ text: '📄 PDF下载', href: 'https://www.copyright.gov/legislation/dmca.pdf' }],
      },
      {
        icon: '🇪🇺',
        title: '欧盟数字单一市场版权指令',
        desc: '欧盟框架，协调成员国在数字单一市场中的版权规则。',
        tags: [{ text: '区域法规' }, { text: '欧盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://eur-lex.europa.eu/eli/dir/2019/790/oj' }],
      },
    ],
  },
  {
    icon: '⛓️',
    title: '智能合约与区块链',
    desc: '区块链交易的法律认可、可执行性与争议解决',
    resources: [
      {
        icon: '📋',
        title: 'UNCITRAL电子商务示范法',
        desc: '电子商务法律认可的基础框架。许多司法管辖区的电子商务法以此为蓝本。',
        tags: [{ text: '国际条约' }, { text: 'UNCITRAL' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/ecommerce/modellaw' }, { text: '📝 合同模板', href: '/zh-cn/resources/contracts/' }],
      },
      {
        icon: '📜',
        title: 'UNCITRAL电子签名示范法',
        desc: '确立电子签名与手写签名等同标准的法律框架。',
        tags: [{ text: '国际条约' }, { text: 'UNCITRAL' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/ecommerce/modellaw' }],
      },
      {
        icon: '🇨🇳',
        title: '《中华人民共和国电子商务法》',
        desc: '中国综合性电子商务法律，规范电子商务经营者、合同、争议解决及责任。',
        tags: [{ text: '国内法' }, { text: '中国', type: 'region' as const }],
        links: [{ text: '📝 合同模板', href: '/zh-cn/resources/contracts/' }],
      },
      {
        icon: '🇸🇬',
        title: '新加坡《电子交易法》',
        desc: '为电子交易和合同提供法律确定性的先进立法，被广泛认可为亚太地区典范。',
        tags: [{ text: '国内法' }, { text: '新加坡', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://sso.agc.gov.sg/Act/ETA2010' }],
      },
    ],
  },
  {
    icon: '🤖',
    title: '人工智能与数据治理',
    desc: 'AI监管、数据保护及自主代理责任框架',
    resources: [
      {
        icon: '🇪🇺',
        title: '欧盟《人工智能法案》',
        desc: '欧盟AI综合监管法规，涵盖风险分类及AI系统合规要求。',
        tags: [{ text: '监管法规' }, { text: '欧盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' }],
      },
      {
        icon: '🇪🇺',
        title: '欧盟《通用数据保护条例》（GDPR）',
        desc: '数据保护法的金标准，适用于处理欧盟居民个人数据的任何实体。',
        tags: [{ text: '数据保护' }, { text: '欧盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://gdpr.eu/' }],
      },
      {
        icon: '🇨🇳',
        title: '《中华人民共和国个人信息保护法》（PIPL）',
        desc: '中国综合性数据保护法律，规范个人信息处理及跨境数据传输。',
        tags: [{ text: '数据保护' }, { text: '中国', type: 'region' as const }],
        links: [{ text: '🔗 相关资源', href: '/zh-cn/resources/law/' }],
      },
      {
        icon: '🤝',
        title: 'OECD AI原则',
        desc: '关于可信AI的国际标准，涵盖透明度、问责制和包容性。',
        tags: [{ text: 'AI治理' }, { text: '国际' }, { text: 'OECD', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://oecd.ai/en/principles' }],
      },
    ],
  },
  {
    icon: '⚖️',
    title: '在线争议解决（ODR）',
    desc: '国际ODR框架、平台与执行机制',
    resources: [
      {
        icon: '🌐',
        title: 'UNCITRAL ODR指南',
        desc: '联合国消费者ODR指南，涵盖在线争议解决的原则、程序及实施框架。',
        tags: [{ text: 'ODR' }, { text: '国际' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/consumers' }, { text: '⚖️ DWAC流程', href: '/zh-cn/how-to-apply/' }],
      },
      {
        icon: '🌐',
        title: 'eBay/PayPal ODR模式',
        desc: '业界领先的ODR模式，每年处理数百万争议。平台ODR的参考架构。',
        tags: [{ text: 'ODR' }, { text: '行业' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 参考资料', href: 'https://www.ebay.com/pages/resolution/' }],
      },
      {
        icon: '🇺🇸',
        title: '美国仲裁协会（AAA）',
        desc: '美国领先的仲裁机构，提供在线争议解决服务及完善的程序规则。',
        tags: [{ text: '仲裁' }, { text: '美国', type: 'region' as const }],
        links: [{ text: '🌐 官网', href: 'https://www.adr.org/' }],
      },
      {
        icon: '🇬🇧',
        title: '伦敦国际仲裁院（LCIA）',
        desc: '享有盛誉的国际仲裁机构，具备数字争议解决能力及跨境执行专长。',
        tags: [{ text: '仲裁' }, { text: '英国', type: 'region' as const }],
        links: [{ text: '🌐 官网', href: 'https://www.lcia.org/' }],
      },
    ],
  },
  {
    icon: '🪪',
    title: '数字身份与去中心化身份（DID）',
    desc: '数字身份验证与自主身份的法律框架和标准',
    resources: [
      {
        icon: '🌐',
        title: 'W3C去中心化标识符（DID）',
        desc: 'W3C国际标准，实现可验证的、自主管理的数字身份。',
        tags: [{ text: 'DID' }, { text: '标准' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.w3.org/TR/did-core/' }],
      },
      {
        icon: '🇪🇺',
        title: '欧盟eIDAS法规',
        desc: '欧盟电子身份认证和信任服务法规，为电子签名和身份认证建立法律框架。',
        tags: [{ text: '数字身份' }, { text: '欧盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj' }],
      },
      {
        icon: '🇰🇷',
        title: '韩国《电子金融监督法》',
        desc: '韩国电子金融服务监管框架，涵盖数字身份验证和金融科技。',
        tags: [{ text: '数字身份' }, { text: '韩国', type: 'region' as const }],
        links: [{ text: '🔗 相关资源', href: '/zh-cn/resources/law/' }],
      },
      {
        icon: '🌐',
        title: 'KYC/AML框架（FATF）',
        desc: '金融行动特别工作组关于数字资产交易中客户身份识别和反洗钱的建议。',
        tags: [{ text: 'KYC/AML' }, { text: '国际' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.fatf-gafi.org/en/topics/kYC.html' }],
      },
    ],
  },
  {
    icon: '🌍',
    title: '跨境执行',
    desc: '国际条约与数字仲裁裁决的承认与执行机制',
    resources: [
      {
        icon: '📜',
        title: '《纽约公约》（1958）',
        desc: '跨国仲裁裁决承认与执行的基石条约，170多个缔约国。跨境仲裁执行的必备工具。',
        tags: [{ text: '条约' }, { text: '172国家', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/arbitration/newyorkconvention' }, { text: '⚖️ DWAC流程', href: '/zh-cn/how-to-apply/' }],
      },
      {
        icon: '📜',
        title: 'UNCITRAL国际商事仲裁示范法',
        desc: '被许多国家采用为国内仲裁法蓝本的示范法，为仲裁程序提供法律框架。',
        tags: [{ text: '示范法' }, { text: 'UNCITRAL' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/arbitration/modellaw' }],
      },
      {
        icon: '🇭🇰',
        title: '香港《仲裁条例》',
        desc: '现代仲裁立法，在CAFTA安排下实现香港与内地仲裁裁决的无缝执行。',
        tags: [{ text: '国内法' }, { text: '香港特别行政区', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.elegislation.gov.hk/' }],
      },
      {
        icon: '🇸🇬',
        title: '新加坡《国际仲裁法》',
        desc: '基于UNCITRAL示范法的新加坡仲裁立法，以支持仲裁的司法实践闻名。',
        tags: [{ text: '国内法' }, { text: '新加坡', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://sso.agc.gov.sg/' }],
      },
    ],
  },
]

export default function LawPage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero */}
      <section className="bg-navy-800 border-b border-navy-800">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            全球<span className="text-gold-400">法律资源</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            数字世界争议的全面法律参考——按管辖区域和主题分类
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16">
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-navy-800">
              <div className="w-14 h-14 bg-gradient-gold/10 border border-gold-500/30 rounded-xl flex items-center justify-center text-2xl">
                {category.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
                <p className="text-sm text-gray-400">{category.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.resources.map((resource, resIdx) => (
                <ResourceCard
                  key={resIdx}
                  icon={resource.icon}
                  title={resource.title}
                  desc={resource.desc}
                  tags={resource.tags}
                  links={resource.links}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Info Box */}
        <div className="bg-gradient-gold/10 border border-gold-500/30 rounded-2xl p-8 mt-12">
          <h3 className="text-lg font-semibold text-gold-400 mb-4">📚 需要更多资源？</h3>
          <p className="text-gray-300 leading-relaxed">
            浏览我们完整的资源库：<br />
            • <Link href="/zh-cn/resources/" className="text-gold-400 hover:underline">资源中心首页</Link> — 全部DWAC资源<br />
            • <Link href="/zh-cn/how-to-apply/" className="text-gold-400 hover:underline">申请表格</Link> — ARB-001至ARB-008<br />
            • <Link href="/zh-cn/resources/contracts/" className="text-gold-400 hover:underline">合同模板</Link> — 5大类共10份模板<br />
            • <Link href="/zh-cn/fee-calculator/" className="text-gold-400 hover:underline">费用计算器</Link> — 仲裁成本估算<br />
            • <Link href="/zh-cn/rules/" className="text-gold-400 hover:underline">仲裁规则</Link> — DWAC完整程序规则<br /><br />
            法律研究咨询请联系 <a href="mailto:legal@dwac.net" className="text-gold-400 hover:underline">legal@dwac.net</a>
          </p>
        </div>
      </div>
    </div>
  )
}
