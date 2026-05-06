'use client'

import Link from 'next/link'
import { useState } from 'react'

const individualMembers = [
  { initials: 'JW', name: 'Prof. James Wilson', expertise: '国际商事仲裁', country: '英国' },
  { initials: 'LZ', name: 'Dr. Li Zhang', expertise: '数字知识产权', country: '中国' },
  { initials: 'SM', name: 'Sofia Martinez', expertise: '电子商务争议解决', country: '西班牙' },
  { initials: 'RK', name: 'Raj Krishnamurthy', expertise: '区块链与智能合约', country: '印度' },
  { initials: 'AH', name: 'Prof. Anna Hansen', expertise: '在线争议解决', country: '德国' },
  { initials: 'KT', name: 'Kenji Tanaka', expertise: '跨境数据争议', country: '日本' },
  { initials: 'OC', name: 'Olivia Chen', expertise: 'AI与算法问责', country: '新加坡' },
  { initials: 'MB', name: 'Dr. Michel Beaumont', expertise: '国际私法', country: '法国' },
]

const institutionalMembers = [
  { name: '新加坡国立大学', type: 'University', country: '新加坡' },
  { name: 'King & Spalding LLP', type: 'Law Firm', country: '美国' },
  { name: '上海国际仲裁中心', type: 'Chamber of Commerce', country: '中国' },
  { name: 'University of Cambridge', type: 'University', country: '英国' },
  { name: 'Freshfields Bruckhaus Deringer', type: 'Law Firm', country: '德国' },
  { name: '中国仲裁协会', type: 'NGO', country: '中国' },
]

const typeColors: Record<string, string> = {
  University: 'bg-blue-50 text-blue-700',
  'Law Firm': 'bg-purple-50 text-purple-700',
  'Chamber of Commerce': 'bg-gold-500/10 text-gold-700',
  NGO: 'bg-emerald-50 text-emerald-700',
}

const memberTypes = ['全部', 'University', 'Law Firm', 'Chamber of Commerce', 'NGO']

const typeLabels: Record<string, string> = {
  University: '大学',
  'Law Firm': '律师事务所',
  'Chamber of Commerce': '商会',
  NGO: '非政府组织',
}

export default function MembersPage() {
  const [tab, setTab] = useState<'individual' | 'institutional'>('individual')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('全部')

  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">名录</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">会员名录</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            探索我们不断壮大的全球仲裁专业人员和机构合作伙伴社区，共同致力于数字世界争议解决。
          </p>
        </div>
      </section>

      {/* ===== Stats — Dark ===== */}
      <section className="bg-navy-950 py-12 border-t border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">120+</p>
              <p className="text-sm text-slate-400 mt-1">个人会员</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">35+</p>
              <p className="text-sm text-slate-400 mt-1">机构会员</p>
            </div>
            <div>
              <p className="font-serif text-3xl lg:text-4xl font-bold text-gold-400">28+</p>
              <p className="text-sm text-slate-400 mt-1">国家与地区</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Directory — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setTab('individual')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                tab === 'individual'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
              }`}
            >
              个人会员
            </button>
            <button
              onClick={() => setTab('institutional')}
              className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                tab === 'institutional'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900 hover:text-navy-900'
              }`}
            >
              机构会员
            </button>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder={tab === 'individual' ? '按姓名、专业领域搜索...' : '按机构名称搜索...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-colors"
              />
            </div>
            {tab === 'institutional' && (
              <div className="flex gap-2 flex-wrap">
                {memberTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                      selectedType === type
                        ? 'bg-navy-900 text-white'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-navy-900'
                    }`}
                  >
                    {type === '全部' ? type : (typeLabels[type] || type)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Individual Members Grid */}
          {tab === 'individual' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {individualMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-6 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-gold-400">{member.initials}</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-xs text-gold-600 font-medium mb-2">{member.expertise}</p>
                  <div className="flex items-center justify-center gap-1.5">
                    <div className="w-5 h-3.5 bg-slate-200 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-2 bg-slate-400 rounded-sm" />
                    </div>
                    <span className="text-xs text-slate-400">{member.country}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Institutional Members Grid */}
          {tab === 'institutional' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {institutionalMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-bold text-slate-900 mb-1 truncate">{member.name}</h3>
                    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[member.type]} mb-2`}>
                      {typeLabels[member.type] || member.type}
                    </span>
                    <p className="text-xs text-slate-400">{member.country}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA — Dark ===== */}
      <section className="bg-gradient-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">加入我们</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">成为会员</h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
            加入塑造数字世界争议解决未来的全球仲裁专业人员社区。
          </p>
          <Link
            href="/zh-cn/membership/"
            className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
          >
            申请会员资格
          </Link>
        </div>
      </section>
    </div>
  )
}
