'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const langMap: Record<string, {
  title: string; home: string; contact: string; message: string; subtitle: string
  searchPlaceholder: string; searchButton: string; didYouMean: string
  quickLinks: { label: string; href: string; icon: string }[]
}> = {
  '/zh-cn': {
    title: '页面未找到',
    home: '← 返回首页',
    contact: '联系我们',
    message: '您访问的页面不存在或已被移动。别担心，我们帮您找到方向。',
    subtitle: '这片海域没有岛屿，但我们有罗盘',
    searchPlaceholder: '搜索 DWAC 网站...',
    searchButton: '搜索',
    didYouMean: '您是不是在找：',
    quickLinks: [
      { label: '关于 DWAC', href: '/zh-cn/about/', icon: '⚖️' },
      { label: '仲裁规则', href: '/zh-cn/rules/', icon: '📜' },
      { label: '提交争议', href: '/zh-cn/how-to-apply/', icon: '📋' },
      { label: '常见问题', href: '/zh-cn/faq/', icon: '❓' },
    ],
  },
  '/zh-tw': {
    title: '頁面未找到',
    home: '← 返回首頁',
    contact: '聯絡我們',
    message: '您造訪的頁面不存在或已被移動。別擔心，我們幫您找到方向。',
    subtitle: '這片海域沒有島嶼，但我們有羅盤',
    searchPlaceholder: '搜尋 DWAC 網站...',
    searchButton: '搜尋',
    didYouMean: '您是不是在找：',
    quickLinks: [
      { label: '關於 DWAC', href: '/zh-tw/about/', icon: '⚖️' },
      { label: '仲裁規則', href: '/zh-tw/rules/', icon: '📜' },
      { label: '提交爭議', href: '/zh-tw/how-to-apply/', icon: '📋' },
      { label: '常見問題', href: '/zh-tw/faq/', icon: '❓' },
    ],
  },
}

const enQuickLinks = [
  { label: 'About DWAC', href: '/about/', icon: '⚖️' },
  { label: 'Arbitration Rules', href: '/rules/', icon: '📜' },
  { label: 'File a Dispute', href: '/how-to-apply/', icon: '📋' },
  { label: 'FAQ', href: '/faq/', icon: '❓' },
]

/* Compass SVG — arbitration-themed navigation symbol */
function CompassSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="60" cy="60" r="48" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {/* Cardinal points */}
      <text x="60" y="14" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" opacity="0.6">N</text>
      <text x="60" y="112" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" opacity="0.6">S</text>
      <text x="14" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" opacity="0.6">W</text>
      <text x="106" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" opacity="0.6">E</text>
      {/* Scale of justice as compass needle */}
      <g transform="translate(60,60)">
        {/* Needle pointing NE */}
        <line x1="0" y1="0" x2="8" y2="-34" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        <line x1="0" y1="0" x2="-8" y2="34" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
        {/* Scale pans */}
        <path d="M-4,-32 l-12,-4 l-6,8" stroke="#c9a84c" strokeWidth="1.2" fill="none" opacity="0.7" />
        <path d="M4,32 l12,4 l6,-8" stroke="#c9a84c" strokeWidth="1.2" fill="none" opacity="0.7" />
        <circle cx="-22" cy="-30" r="5" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.5" />
        <circle cx="22" cy="30" r="5" stroke="#c9a84c" strokeWidth="1" fill="none" opacity="0.5" />
      </g>
      {/* Center pivot */}
      <circle cx="60" cy="60" r="4" fill="#c9a84c" opacity="0.4" />
      {/* Ticks */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const r1 = 44, r2 = 48
        const x1 = 60 + r1 * Math.cos(rad), y1 = 60 + r1 * Math.sin(rad)
        const x2 = 60 + r2 * Math.cos(rad), y2 = 60 + r2 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
      })}
    </svg>
  )
}

/* Suggest similar paths based on the URL */
function suggestPaths(prefix: string, pathname: string): { label: string; href: string }[] {
  const lower = pathname.toLowerCase()
  const isZhCn = prefix === '/zh-cn'
  const isZhTw = prefix === '/zh-tw'
  const p = (en: string, zhCn: string, zhTw: string) => isZhCn ? zhCn : isZhTw ? zhTw : en

  if (lower.includes('arbit') || lower.includes('arbi') || lower.includes('仲') || lower.includes('仲')) {
    return [
      { label: p('Arbitration Overview', '仲裁概览', '仲裁概覽'), href: `${prefix}/arbitration/` },
      { label: p('Arbitration Rules', '仲裁规则', '仲裁規則'), href: `${prefix}/rules/` },
      { label: p('Our Arbitrators', '仲裁员名单', '仲裁員名單'), href: `${prefix}/arbitrators/` },
    ]
  }
  if (lower.includes('case') || lower.includes('案') || lower.includes('case')) {
    return [
      { label: p('Case Search', '案件查询', '案件查詢'), href: `${prefix}/cases/` },
      { label: p('How to Apply', '如何申请', '如何申請'), href: `${prefix}/how-to-apply/` },
    ]
  }
  if (lower.includes('member') || lower.includes('会员') || lower.includes('會員')) {
    return [
      { label: p('Membership', '会员制度', '會員制度'), href: `${prefix}/membership/` },
      { label: p('Member List', '会员列表', '會員列表'), href: `${prefix}/members/` },
    ]
  }
  if (lower.includes('dispute') || lower.includes('争议') || lower.includes('爭議') || lower.includes('submit') || lower.includes('file')) {
    return [
      { label: p('File a Dispute', '提交争议', '提交爭議'), href: `${prefix}/how-to-apply/` },
      { label: p('Dispute Process', '争议流程', '爭議流程'), href: `${prefix}/dispute/` },
      { label: p('Fee Calculator', '费用计算', '費用計算'), href: `${prefix}/fee-calculator/` },
    ]
  }
  if (lower.includes('rule') || lower.includes('规则') || lower.includes('規則')) {
    return [
      { label: p('Arbitration Rules', '仲裁规则', '仲裁規則'), href: `${prefix}/rules/` },
      { label: p('Framework', '框架规则', '框架規則'), href: `${prefix}/framework/` },
    ]
  }
  if (lower.includes('degree') || lower.includes('law') || lower.includes('school') || lower.includes('课程') || lower.includes('課程') || lower.includes('学') || lower.includes('學')) {
    return [
      { label: p('Law School', '法学院', '法學院'), href: `${prefix}/law-school/` },
      { label: p('Degrees', '学位证书', '學位證書'), href: `${prefix}/degree/` },
    ]
  }
  return []
}

export default function NotFound() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState('')

  const prefix = pathname.startsWith('/zh-tw') ? '/zh-tw' : pathname.startsWith('/zh-cn') ? '/zh-cn' : ''
  const lang = langMap[prefix]
  const fallback = {
    title: 'Page Not Found',
    home: '← Back to Home',
    contact: 'Contact Us',
    message: "The page you're looking for doesn't exist or has been moved. Don't worry, we'll help you find your way.",
    subtitle: 'Lost at sea? Let our compass guide you.',
    searchPlaceholder: 'Search DWAC website...',
    searchButton: 'Search',
    didYouMean: 'Did you mean:',
    quickLinks: enQuickLinks,
  }
  const { title, home, contact, message, subtitle, searchPlaceholder, searchButton, didYouMean, quickLinks } = lang ?? fallback
  const homeUrl = prefix ? `${prefix}/` : '/'
  const contactUrl = prefix ? `${prefix}/contact/` : '/contact/'

  const suggestions = suggestPaths(prefix, pathname)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const base = prefix || ''
    window.location.href = `${base}/?s=${encodeURIComponent(searchQuery.trim())}`
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-navy-900 relative overflow-hidden">
      {/* Decorative animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-navy-700/20 animate-[spin_70s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-navy-700/15 animate-[spin_50s_linear_infinite_reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-navy-700/10 animate-[spin_30s_linear_infinite]" />

      {/* Subtle radial gradient accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-gold-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* 404 visual — floating numbers + compass */}
        <div className="relative mb-10">
          <div className="text-[150px] font-serif font-bold leading-none select-none flex items-center justify-center gap-2">
            <span className="text-navy-200/20 animate-[bounce_3s_ease-in-out_infinite]">4</span>
            <span className="text-navy-200/20 animate-[bounce_3s_ease-in-out_infinite_0.3s]">0</span>
            <span className="text-navy-200/20 animate-[bounce_3s_ease-in-out_infinite_0.6s]">4</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-2">
            <CompassSvg className="w-24 h-24 text-gold-400/60 animate-[pulse_4s_ease-in-out_infinite]" />
          </div>
        </div>

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">
          {title}
        </h1>
        <p className="text-gold-400 text-sm mb-3 tracking-wide">{subtitle}</p>
        <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">{message}</p>

        {/* Search bar */}
        <form onSubmit={handleSearch} className="max-w-sm mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full px-4 py-3 pr-24 bg-navy-800/60 border border-navy-600/50 rounded-lg text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-gold text-navy-900 font-semibold text-xs rounded-md hover:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all"
            >
              {searchButton}
            </button>
          </div>
        </form>

        {/* "Did you mean?" suggestions */}
        {suggestions.length > 0 && (
          <div className="mb-10">
            <p className="text-xs text-slate-500 mb-3 tracking-widest uppercase">{didYouMean}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="px-4 py-2 rounded-full border border-gold-500/20 text-xs text-gold-400/80 hover:bg-gold-500/10 hover:border-gold-500/40 transition-all"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href={homeUrl}
            className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
          >
            {home}
          </Link>
          <Link
            href={contactUrl}
            className="border border-slate-600 text-slate-300 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:text-gold-400 transition-all inline-block"
          >
            {contact}
          </Link>
        </div>

        {/* Quick links */}
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-slate-500 mb-4 tracking-widest uppercase">
            {prefix ? '快速导航' : 'Quick Navigation'}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group px-4 py-3 rounded-lg border border-navy-700/60 text-sm text-slate-300 hover:border-gold-500/40 hover:text-gold-400 hover:bg-navy-800/50 transition-all flex items-center gap-2"
              >
                <span className="text-base opacity-60 group-hover:opacity-100 transition-opacity">{link.icon}</span>
                <span>{link.label}</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-gold-500">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-xs text-slate-600 relative z-10">
        <p>DWAC · Digital World Arbitration Centre</p>
        <p className="mt-1">
          {prefix
            ? `如有疑问，请联系 `
            : `If you believe this is an error, please contact `}
          <a href="mailto:secretary@dwac.net" className="text-gold-500 hover:underline">
            secretary@dwac.net
          </a>
        </p>
      </div>
    </div>
  )
}
