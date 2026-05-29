'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Arbitrator {
  id: string
  name: string
  nameZh: string
  title: string
  titleZh: string
  specialty: string[]
  location: string
  locationZh: string
  languages: string[]
  experience: string
  experienceZh: string
  image: string // initials for avatar
  color: string
}

const arbitrators: Arbitrator[] = [
  {
    id: 'harry',
    name: 'Harry',
    nameZh: 'Harry',
    title: 'Founder & Lead Arbitrator',
    titleZh: '创始人 & 首席仲裁员',
    specialty: ['Digital World Governance', 'Cross-border Dispute Resolution', 'New York Convention Enforcement'],
    location: 'Hong Kong / Singapore',
    locationZh: '香港 / 新加坡',
    languages: ['English', 'Mandarin', 'Cantonese'],
    experience: '20+ years in international arbitration, founder of DWAC, pioneer in digital world dispute resolution frameworks.',
    experienceZh: '20 余年国际仲裁经验，DWAC 创始人，数字世界争议解决框架先驱。',
    image: 'H',
    color: 'from-gold-500 to-amber-600',
  },
  {
    id: 'dr-frontie',
    name: 'Dr. Frontie',
    nameZh: 'Frontie 博士',
    title: 'Senior Arbitrator',
    titleZh: '高级仲裁员',
    specialty: ['AI Ethics', 'Digital Law', 'Smart Contract Auditing'],
    location: 'Beijing / Geneva',
    locationZh: '北京 / 日内瓦',
    languages: ['English', 'Mandarin', 'French'],
    experience: 'Ph.D. in Digital Jurisprudence, published 40+ papers on AI liability and algorithmic dispute resolution.',
    experienceZh: '数字法理学博士，发表 40 余篇 AI 责任与算法争议解决论文。',
    image: 'F',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'dr-venessa',
    name: 'Dr. Venessa',
    nameZh: 'Venessa 博士',
    title: 'Senior Arbitrator',
    titleZh: '高级仲裁员',
    specialty: ['Digital World Law', 'Cross-border E-Commerce', 'Data Privacy (GDPR/PIPL)'],
    location: 'London / Shanghai',
    locationZh: '伦敦 / 上海',
    languages: ['English', 'Mandarin', 'German'],
    experience: 'Former counsel at leading international arbitration chambers, specialist in EU-Asia digital trade disputes.',
    experienceZh: '曾任国际仲裁庭资深顾问，专精欧盟-亚洲数字贸易争议。',
    image: 'V',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'prof-alec',
    name: 'Prof. Alec',
    nameZh: 'Alec 教授',
    title: 'Academic Arbitrator',
    titleZh: '学术仲裁员',
    specialty: ['Digital Governance', 'International Law', 'Blockchain Regulation'],
    location: 'Zurich / Tokyo',
    locationZh: '苏黎世 / 东京',
    languages: ['English', 'German', 'Japanese'],
    experience: 'Tenured professor of international law, advisor to multiple governments on digital asset regulation frameworks.',
    experienceZh: '国际法终身教授，多个政府数字资产监管框架顾问。',
    image: 'A',
    color: 'from-purple-500 to-indigo-600',
  },
]

const stats = [
  { value: '4', label: 'Panel Arbitrators', labelZh: '仲裁员' },
  { value: '50+', label: 'Years Combined Experience', labelZh: '合计经验年数' },
  { value: '8', label: 'Languages Covered', labelZh: '覆盖语言' },
  { value: '170+', label: 'Enforceable Jurisdictions', labelZh: '可执行司法管辖区' },
]

export default function ArbitratorsPage() {
  const [showZh, setShowZh] = useState(false)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <div className="flex flex-col">

      {/* ════ Hero ════ */}
      <section className="relative bg-gradient-navy py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/30 rounded-full mb-6">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-[2px] uppercase text-gold-400">
              Panel of Arbitrators
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-gradient-gold">Arbitrators</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC's panel brings together leading experts in digital law, AI ethics,
            cross-border disputes, and international arbitration.
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-3">
            DWAC 仲裁员团队汇聚数字法律、AI 伦理、跨境争议和国际仲裁领域的顶尖专家。
          </p>

          {/* Language toggle */}
          <button
            onClick={() => setShowZh(!showZh)}
            className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 border border-gold-500/20 rounded-full text-xs text-gold-400 hover:bg-gold-500/10 transition-colors"
          >
            {showZh ? 'EN' : '中文'}
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* ════ Stats ════ */}
      <section className="bg-navy-800 border-y border-gold-subtle/30">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gold-subtle/20">
          {stats.map((s) => (
            <div key={s.value} className="py-8 px-4 text-center">
              <div className="font-serif text-3xl lg:text-4xl font-bold text-gold-400 mb-1">{s.value}</div>
              <div className="text-[11px] text-slate-400 tracking-wide">{s.label}</div>
              <div className="text-[10px] text-slate-600">{s.labelZh}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ════ Arbitrator Cards ════ */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">The Panel</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Arbitrators
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Each arbitrator is vetted for domain expertise, neutrality, and experience with digital disputes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {arbitrators.map((arb) => {
              const isExpanded = expandedId === arb.id
              return (
                <div
                  key={arb.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Card header with gradient */}
                  <div className={`h-2 bg-gradient-to-r ${arb.color}`} />

                  <div className="p-7">
                    <div className="flex items-start gap-5">
                      {/* Avatar */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${arb.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg shrink-0`}>
                        {arb.image}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl font-bold text-slate-900">{showZh ? arb.nameZh : arb.name}</h3>
                        <p className="text-xs text-gold-600 font-semibold tracking-wide mb-1">
                          {showZh ? arb.titleZh : arb.title}
                        </p>
                        <p className="text-[11px] text-slate-400">{showZh ? arb.locationZh : arb.location}</p>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {(showZh ? arb.specialty.map(s => {
                        const zhMap: Record<string, string> = {
                          'Digital World Governance': '数字世界治理',
                          'Cross-border Dispute Resolution': '跨境争议解决',
                          'New York Convention Enforcement': '纽约公约执行',
                          'AI Ethics': 'AI 伦理',
                          'Digital Law': '数字法律',
                          'Smart Contract Auditing': '智能合约审计',
                          'Digital World Law': '数字世界法',
                          'Cross-border E-Commerce': '跨境电商',
                          'Data Privacy (GDPR/PIPL)': '数据隐私（GDPR/PIPL）',
                          'Digital Governance': '数字治理',
                          'International Law': '国际法',
                          'Blockchain Regulation': '区块链监管',
                        }
                        return zhMap[s] || s
                      }) : arb.specialty).map((s) => (
                        <span key={s} className="text-[10px] bg-navy-900/5 text-navy-800 px-2 py-0.5 rounded-full font-medium">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Experience preview */}
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed line-clamp-2">
                      {showZh ? arb.experienceZh : arb.experience}
                    </p>

                    {/* Expand / collapse */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : arb.id)}
                      className="mt-3 text-xs text-gold-500 hover:text-gold-400 font-medium transition-colors"
                    >
                      {isExpanded ? (showZh ? '收起 ▲' : 'Show Less ▲') : (showZh ? '展开更多 ▼' : 'Show More ▼')}
                    </button>

                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 animate-fade-in">
                        <div className="mb-3">
                          <span className="text-[10px] font-bold tracking-[2px] uppercase text-slate-400">Languages / 语言</span>
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            {arb.languages.map((l) => (
                              <span key={l} className="text-[11px] bg-emerald-500/10 text-emerald-700 px-2 py-0.5 rounded-full">{l}</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {showZh ? arb.experienceZh : arb.experience}
                        </p>
                      </div>
                    )}

                    {/* Languages always visible */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {arb.languages.slice(0, 3).map((l) => (
                            <span key={l} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{l}</span>
                          ))}
                        </div>
                        <Link
                          href={`/arbitrators/${arb.id}/`}
                          className="text-xs text-gold-500 hover:text-gold-400 font-medium transition-colors"
                        >
                          {showZh ? '查看详情 →' : 'View Profile →'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ════ Join CTA ════ */}
      <section className="bg-gradient-navy py-16 border-t border-gold-subtle/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Become a DWAC Arbitrator
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
            We are expanding our panel. If you have expertise in digital law, AI, blockchain,
            or cross-border dispute resolution — we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/arbitrators/join/"
              className="px-8 py-3.5 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              {showZh ? '申请加入' : 'Apply Now'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link
              href="/contact/"
              className="px-8 py-3.5 border border-gold-500/30 text-gold-400 font-semibold text-sm rounded-md hover:border-gold-500 hover:bg-gold-500/5 transition-all"
            >
              {showZh ? '联系我们' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </section>

      {/* ════ Note ════ */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-[11px] text-slate-400 italic leading-relaxed">
            Arbitrator profiles are representative. DWAC is in its founding phase — additional panel members
            from leading institutions will be announced in Q2 2026.
          </p>
          <p className="text-[10px] text-slate-400 mt-1">
            仲裁员资料为代表性信息。DWAC 处于创始阶段——来自顶尖机构的更多仲裁员将于 2026 年 Q2 公布。
          </p>
        </div>
      </section>
    </div>
  )
}
