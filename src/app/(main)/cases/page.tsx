import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Case Studies | DWAC',
  description: 'Explore DWAC case studies and hypothetical dispute scenarios across AI, blockchain, digital assets, and cross-border e-commerce.',
}

const caseStudies = [
  {
    id: 'ai-ip-dispute',
    title: 'AI-Generated Content Copyright Dispute',
    titleZh: 'AI 生成内容版权争议',
    category: 'Intellectual Property',
    categoryZh: '知识产权',
    summary: 'A Singapore-based AI startup and a US content platform dispute ownership of AI-generated artwork used in commercial campaigns.',
    summaryZh: '新加坡 AI 初创公司与美国内容平台就 AI 生成艺术作品在商业活动使用中的版权归属产生争议。',
    amount: 'USD 2,400,000',
    status: 'Resolved',
    statusZh: '已裁决',
    date: '2025-Q3',
    tags: ['AI Copyright', 'Cross-border', 'Copyright'],
    outcome: 'Tribunal determined joint ownership with usage-licensing framework.',
    outcomeZh: '仲裁庭裁定共同所有，并建立使用许可框架。',
  },
  {
    id: 'smart-contract-failure',
    title: 'Smart Contract Execution Failure',
    titleZh: '智能合约执行失败',
    category: 'Smart Contracts',
    categoryZh: '智能合约',
    summary: 'An automated DeFi protocol execution error leads to unintended asset transfers between parties in multiple jurisdictions.',
    summaryZh: '去中心化金融协议自动执行错误，导致资产在多个司法管辖区之间被意外转移。',
    amount: 'USD 8,700,000',
    status: 'In Progress',
    statusZh: '审理中',
    date: '2026-Q1',
    tags: ['DeFi', 'Smart Contract', 'Multi-jurisdiction'],
    outcome: '',
    outcomeZh: '',
  },
  {
    id: 'cross-border-ecommerce',
    title: 'Cross-Border E-Commerce Dispute',
    titleZh: '跨境电商争议',
    category: 'E-Commerce',
    categoryZh: '电子商务',
    summary: 'A German manufacturer and a Chinese distributor dispute warranty terms and delivery penalties under a digital agency agreement.',
    summaryZh: '德国制造商与中国分销商就数字代理协议中的质保条款和交付罚则产生争议。',
    amount: 'EUR 1,200,000',
    status: 'Resolved',
    statusZh: '已裁决',
    date: '2025-Q4',
    tags: ['E-Commerce', 'EU-China', 'Agency Agreement'],
    outcome: 'Award issued within 90 days. Enforcement via New York Convention (Germany↔China).',
    outcomeZh: '90 天内作出裁决。依据纽约公约在中德两国执行。',
  },
  {
    id: 'data-privacy-breach',
    title: 'Cross-Border Data Privacy Breach',
    titleZh: '跨境数据隐私泄露',
    category: 'Data Privacy',
    categoryZh: '数据隐私',
    summary: 'A cloud service provider\'s data breach affecting users across 14 jurisdictions triggers multi-party arbitration under GDPR and PIPL.',
    summaryZh: '云服务提供商数据泄露事件影响 14 个司法管辖区的用户，触发 GDPR 和 PIPL 框架下的多方仲裁。',
    amount: 'USD 45,000,000',
    status: 'In Progress',
    statusZh: '审理中',
    date: '2026-Q2',
    tags: ['GDPR', 'PIPL', 'Multi-party', 'Data Breach'],
    outcome: '',
    outcomeZh: '',
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Token Voting Dispute',
    titleZh: 'DAO 治理代币投票争议',
    category: 'DAO & Governance',
    categoryZh: 'DAO 治理',
    summary: 'Dispute over token-weighted voting rights in a decentralized autonomous organization following a protocol fork.',
    summaryZh: '协议分叉后，去中心化自治组织内代币加权投票权争议。',
    amount: 'USD 12,000,000',
    status: 'Resolved',
    statusZh: '已裁决',
    date: '2026-Q1',
    tags: ['DAO', 'Governance', 'Protocol Fork'],
    outcome: 'Tribunal established precedential framework for DAO governance disputes.',
    outcomeZh: '仲裁庭建立了 DAO 治理争议的首个先例框架。',
  },
  {
    id: 'nft-royalty',
    title: 'NFT Royalty Enforcement Dispute',
    titleZh: 'NFT 版税执行争议',
    category: 'Digital Assets',
    categoryZh: '数字资产',
    summary: 'An NFT artist seeks enforcement of smart contract royalty terms against a secondary marketplace operating across multiple blockchains.',
    summaryZh: 'NFT 艺术家就智能合约版税条款向跨多条区块链运营的二级市场交易场所主张执行。',
    amount: 'USD 3,800,000',
    status: 'Filed',
    statusZh: '已立案',
    date: '2026-Q2',
    tags: ['NFT', 'Royalties', 'Smart Contract', 'Multi-chain'],
    outcome: '',
    outcomeZh: '',
  },
]

const stats = [
  { value: '94%', label: 'Case Resolution Rate', labelZh: '案件解决率' },
  { value: '<90 Days', label: 'Avg. Time to Award', labelZh: '平均裁决时间' },
  { value: '170+', label: 'New York Convention States', labelZh: '纽约公约缔约国' },
  { value: '50%', label: 'Cost vs. CIETAC', labelZh: '费用较 CIETAC 节省' },
]

export default function CasesPage() {
  return (
    <div className="flex flex-col">

      {/* ═════ Hero ═════ */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-15" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-cyan-400">Case Studies</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Case <span className="text-gradient-gold">Studies</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore real and hypothetical dispute scenarios across AI, blockchain, digital assets,
            and cross-border digital commerce — all resolvable through DWAC's Digital Tribunal.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-3 leading-relaxed">
            探索 AI、区块链、数字资产和跨境数字商务领域的真实及模拟争议场景——均可通过 DWAC 数字仲裁庭解决。
          </p>
        </div>
      </section>

      {/* ═════ Stats ═════ */}
      <section className="bg-navy-800/50 border-y border-gold-subtle/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">{s.value}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{s.label}</div>
                <div className="text-[10px] text-slate-600">{s.labelZh}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ Case Cards ═════ */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Dispute Resolution</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Each case demonstrates DWAC's capability across jurisdictions, legal frameworks, and dispute types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((c) => (
              <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold ${
                    c.status === 'Resolved' ? 'bg-emerald-500/10 text-emerald-600' :
                    c.status === 'In Progress' ? 'bg-amber-500/10 text-amber-600' :
                    'bg-slate-500/10 text-slate-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      c.status === 'Resolved' ? 'bg-emerald-500' :
                      c.status === 'In Progress' ? 'bg-amber-500 animate-pulse' :
                      'bg-slate-500'
                    }`} />
                    {c.statusZh}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{c.date}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1 group-hover:text-gold-600 transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3">{c.titleZh}</p>

                {/* Summary */}
                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">{c.summary}</p>

                {/* Meta */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-navy-900/5 text-navy-800 px-2 py-0.5 rounded-full font-medium">{tag}</span>
                  ))}
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Amount in Dispute</div>
                    <div className="text-sm font-bold text-slate-900 font-mono">{c.amount}</div>
                  </div>
                  {c.outcome ? (
                    <div className="text-right max-w-[60%]">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Outcome</div>
                      <p className="text-xs text-emerald-600 leading-relaxed line-clamp-2">{c.outcome}</p>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Ongoing...</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════ Process Note ═════ */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs font-semibold text-gold-600">Note / 说明</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
            These are illustrative case studies
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed mb-2">
            The cases above are representative scenarios demonstrating DWAC's jurisdiction and procedural capabilities.
            As DWAC is in its founding phase, live case data will be published here once proceedings commence (Q3 2026).
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            以上为展示 DWAC 管辖范围和程序能力的代表性模拟案例。DWAC 目前处于创始阶段，
            真实案件数据将在程序启动后（2026 年 Q2）在此公布。
          </p>
        </div>
      </section>

      {/* ═════ CTA ═════ */}
      <section className="bg-gradient-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Have a Similar Dispute?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            DWAC's Digital Tribunal is ready to handle your case — wherever you are, whatever the jurisdiction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dispute/" className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3.5 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
              File a Case
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link href="/contact/" className="border border-gold-500/30 text-gold-400 font-semibold text-sm px-8 py-3.5 rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all">
              Contact an Arbitrator
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
