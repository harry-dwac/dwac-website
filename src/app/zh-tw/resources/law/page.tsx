
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '法律資源 - 數位世界仲裁中心',
  description: '數位仲裁綜合法律資源。法規、判例和學術文章。',
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
    title: '知識產權',
    desc: '數位環境中的著作權、專利、商標與商業祕密',
    resources: [
      {
        icon: '📜',
        title: 'WIPO版權條約（WCT）',
        desc: 'WIPO互聯網條約，規範數位環境中的著作權保護。跨境知識產權爭議的重要參考。',
        tags: [{ text: '國際條約' }, { text: 'WIPO' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.wipo.int/treaties/en/ip/wct/' }, { text: '📋 申請表格', href: '/zh-tw/how-to-apply/' }],
      },
      {
        icon: '🌐',
        title: 'WIPO表演與錄音製品條約（WPPT）',
        desc: '數位時代表演者和錄音製品製作者的保護條約。',
        tags: [{ text: '國際條約' }, { text: 'WIPO' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.wipo.int/treaties/en/ip/wppt/' }],
      },
      {
        icon: '🇺🇸',
        title: '美國《數字千年版權法》（DMCA）',
        desc: '美國聯邦版權法，規範數位版權管理和在線服務提供商責任。',
        tags: [{ text: '國內法' }, { text: '美國', type: 'region' as const }],
        links: [{ text: '📄 PDF下載', href: 'https://www.copyright.gov/legislation/dmca.pdf' }],
      },
      {
        icon: '🇪🇺',
        title: '歐盟數位單一市場版權指令',
        desc: '歐盟框架，協調成員國在數位單一市場中的版權規則。',
        tags: [{ text: '區域法規' }, { text: '歐盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://eur-lex.europa.eu/eli/dir/2019/790/oj' }],
      },
    ],
  },
  {
    icon: '⛓️',
    title: '智能合約與區塊鏈',
    desc: '區塊鏈交易的法律認可、可執行性與爭議解決',
    resources: [
      {
        icon: '📋',
        title: 'UNCITRAL電子商務示範法',
        desc: '電子商務法律認可的基礎框架。許多司法管轄區的電子商務法以此爲藍本。',
        tags: [{ text: '國際條約' }, { text: 'UNCITRAL' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/ecommerce/modellaw' }, { text: '📝 合同模板', href: '/zh-tw/resources/contracts/' }],
      },
      {
        icon: '📜',
        title: 'UNCITRAL電子簽名示範法',
        desc: '確立電子簽名與手寫簽名等同標準的法律框架。',
        tags: [{ text: '國際條約' }, { text: 'UNCITRAL' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/ecommerce/modellaw' }],
      },
      {
        icon: '🇨🇳',
        title: '《中華人民共和國電子商務法》',
        desc: '中國綜合性電子商務法律，規範電子商務經營者、合同、爭議解決及責任。',
        tags: [{ text: '國內法' }, { text: '中國', type: 'region' as const }],
        links: [{ text: '📝 合同模板', href: '/zh-tw/resources/contracts/' }],
      },
      {
        icon: '🇸🇬',
        title: '新加坡《電子交易法》',
        desc: '爲電子交易和合同提供法律確定性的先進立法，被廣泛認可爲亞太地區典範。',
        tags: [{ text: '國內法' }, { text: '新加坡', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://sso.agc.gov.sg/Act/ETA2010' }],
      },
    ],
  },
  {
    icon: '🤖',
    title: '人工智能與數據治理',
    desc: 'AI監管、數據保護及自主代理責任框架',
    resources: [
      {
        icon: '🇪🇺',
        title: '歐盟《人工智能法案》',
        desc: '歐盟AI綜合監管法規，涵蓋風險分類及AI系統合規要求。',
        tags: [{ text: '監管法規' }, { text: '歐盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689' }],
      },
      {
        icon: '🇪🇺',
        title: '歐盟《通用數據保護條例》（GDPR）',
        desc: '數據保護法的金標準，適用於處理歐盟居民個人數據的任何實體。',
        tags: [{ text: '數據保護' }, { text: '歐盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://gdpr.eu/' }],
      },
      {
        icon: '🇨🇳',
        title: '《中華人民共和國個人信息保護法》（PIPL）',
        desc: '中國綜合性數據保護法律，規範個人信息處理及跨境數據傳輸。',
        tags: [{ text: '數據保護' }, { text: '中國', type: 'region' as const }],
        links: [{ text: '🔗 相關資源', href: '/zh-tw/resources/law/' }],
      },
      {
        icon: '🤝',
        title: 'OECD AI原則',
        desc: '關於可信AI的國際標準，涵蓋透明度、問責制和包容性。',
        tags: [{ text: 'AI治理' }, { text: '國際' }, { text: 'OECD', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://oecd.ai/en/principles' }],
      },
    ],
  },
  {
    icon: '⚖️',
    title: '在線爭議解決（ODR）',
    desc: '國際ODR框架、平臺與執行機制',
    resources: [
      {
        icon: '🌐',
        title: 'UNCITRAL ODR指南',
        desc: '聯合國消費者ODR指南，涵蓋在線爭議解決的原則、程序及實施框架。',
        tags: [{ text: 'ODR' }, { text: '國際' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/consumers' }, { text: '⚖️ DWAC流程', href: '/zh-tw/how-to-apply/' }],
      },
      {
        icon: '🌐',
        title: 'eBay/PayPal ODR模式',
        desc: '業界領先的ODR模式，每年處理數百萬爭議。平臺ODR的參考架構。',
        tags: [{ text: 'ODR' }, { text: '行業' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 參考資料', href: 'https://www.ebay.com/pages/resolution/' }],
      },
      {
        icon: '🇺🇸',
        title: '美國仲裁協會（AAA）',
        desc: '美國領先的仲裁機構，提供在線爭議解決服務及完善的程序規則。',
        tags: [{ text: '仲裁' }, { text: '美國', type: 'region' as const }],
        links: [{ text: '🌐 官網', href: 'https://www.adr.org/' }],
      },
      {
        icon: '🇬🇧',
        title: '倫敦國際仲裁院（LCIA）',
        desc: '享有盛譽的國際仲裁機構，具備數位爭議解決能力及跨境執行專長。',
        tags: [{ text: '仲裁' }, { text: '英國', type: 'region' as const }],
        links: [{ text: '🌐 官網', href: 'https://www.lcia.org/' }],
      },
    ],
  },
  {
    icon: '🪪',
    title: '數位身份與去中心化身份（DID）',
    desc: '數位身份驗證與自主身份的法律框架和標準',
    resources: [
      {
        icon: '🌐',
        title: 'W3C去中心化標識符（DID）',
        desc: 'W3C國際標準，實現可驗證的、自主管理的數位身份。',
        tags: [{ text: 'DID' }, { text: '標準' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.w3.org/TR/did-core/' }],
      },
      {
        icon: '🇪🇺',
        title: '歐盟eIDAS法規',
        desc: '歐盟電子身份認證和信任服務法規，爲電子簽名和身份認證建立法律框架。',
        tags: [{ text: '數位身份' }, { text: '歐盟', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://eur-lex.europa.eu/eli/reg/2014/910/oj' }],
      },
      {
        icon: '🇰🇷',
        title: '韓國《電子金融監督法》',
        desc: '韓國電子金融服務監管框架，涵蓋數位身份驗證和金融科技。',
        tags: [{ text: '數位身份' }, { text: '韓國', type: 'region' as const }],
        links: [{ text: '🔗 相關資源', href: '/zh-tw/resources/law/' }],
      },
      {
        icon: '🌐',
        title: 'KYC/AML框架（FATF）',
        desc: '金融行動特別工作組關於數位資產交易中客戶身份識別和反洗錢的建議。',
        tags: [{ text: 'KYC/AML' }, { text: '國際' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.fatf-gafi.org/en/topics/kYC.html' }],
      },
    ],
  },
  {
    icon: '🌍',
    title: '跨境執行',
    desc: '國際條約與數位仲裁裁決的承認與執行機制',
    resources: [
      {
        icon: '📜',
        title: '《紐約公約》（1958）',
        desc: '跨國仲裁裁決承認與執行的基石條約，170多個締約國。跨境仲裁執行的必備工具。',
        tags: [{ text: '條約' }, { text: '172國家', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/arbitration/newyorkconvention' }, { text: '⚖️ DWAC流程', href: '/zh-tw/how-to-apply/' }],
      },
      {
        icon: '📜',
        title: 'UNCITRAL國際商事仲裁示範法',
        desc: '被許多國家採用爲國內仲裁法藍本的示範法，爲仲裁程序提供法律框架。',
        tags: [{ text: '示範法' }, { text: 'UNCITRAL' }, { text: '全球', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://uncitral.un.org/en/texts/arbitration/modellaw' }],
      },
      {
        icon: '🇭🇰',
        title: '香港《仲裁條例》',
        desc: '現代仲裁立法，在CAFTA安排下實現香港與內地仲裁裁決的無縫執行。',
        tags: [{ text: '國內法' }, { text: '香港特別行政區', type: 'region' as const }],
        links: [{ text: '🌐 官方文本', href: 'https://www.elegislation.gov.hk/' }],
      },
      {
        icon: '🇸🇬',
        title: '新加坡《國際仲裁法》',
        desc: '基於UNCITRAL示範法的新加坡仲裁立法，以支持仲裁的司法實踐聞名。',
        tags: [{ text: '國內法' }, { text: '新加坡', type: 'region' as const }],
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
            全球<span className="text-gold-400">法律資源</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            數位世界爭議的全面法律參考——按管轄區域和主題分類
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
          <h3 className="text-lg font-semibold text-gold-400 mb-4">📚 需要更多資源？</h3>
          <p className="text-gray-300 leading-relaxed">
            瀏覽我們完整的資源庫：<br />
            • <Link href="/zh-tw/resources/" className="text-gold-400 hover:underline">資源中心首頁</Link> — 全部DWAC資源<br />
            • <Link href="/zh-tw/how-to-apply/" className="text-gold-400 hover:underline">申請表格</Link> — ARB-001至ARB-008<br />
            • <Link href="/zh-tw/resources/contracts/" className="text-gold-400 hover:underline">合同模板</Link> — 5大類共10份模板<br />
            • <Link href="/zh-tw/fee-calculator/" className="text-gold-400 hover:underline">費用計算器</Link> — 仲裁成本估算<br />
            • <Link href="/zh-tw/rules/" className="text-gold-400 hover:underline">仲裁規則</Link> — DWAC完整程序規則<br /><br />
            法律研究諮詢請聯繫 <a href="mailto:legal@dwac.net" className="text-gold-400 hover:underline">legal@dwac.net</a>
          </p>
        </div>
      </div>
    </div>
  )
}
