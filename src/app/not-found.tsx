'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const langMap: Record<string, {
  title: string; home: string; contact: string; message: string; subtitle: string
  quickLinks: { label: string; href: string }[]
}> = {
  '/zh-cn': {
    title: '页面未找到',
    home: '← 返回首页',
    contact: '联系我们',
    message: '您访问的页面不存在或已被移动。',
    subtitle: '别担心，我们帮您找到方向',
    quickLinks: [
      { label: '关于 DWAC', href: '/zh-cn/about/' },
      { label: '仲裁规则', href: '/zh-cn/rules/' },
      { label: '提交争议', href: '/zh-cn/how-to-apply/' },
      { label: '常见问题', href: '/zh-cn/faq/' },
    ],
  },
  '/zh-tw': {
    title: '頁面未找到',
    home: '← 返回首頁',
    contact: '聯絡我們',
    message: '您造訪的頁面不存在或已被移動。',
    subtitle: '別擔心，我們幫您找到方向',
    quickLinks: [
      { label: '關於 DWAC', href: '/zh-tw/about/' },
      { label: '仲裁規則', href: '/zh-tw/rules/' },
      { label: '提交爭議', href: '/zh-tw/how-to-apply/' },
      { label: '常見問題', href: '/zh-tw/faq/' },
    ],
  },
}

const enQuickLinks = [
  { label: 'About DWAC', href: '/about/' },
  { label: 'Arbitration Rules', href: '/rules/' },
  { label: 'File a Dispute', href: '/how-to-apply/' },
  { label: 'FAQ', href: '/faq/' },
]

export default function NotFound() {
  const pathname = usePathname()
  const prefix = pathname.startsWith('/zh-tw') ? '/zh-tw' : pathname.startsWith('/zh-cn') ? '/zh-cn' : ''
  const lang = langMap[prefix]
  const fallback = {
    title: 'Page Not Found',
    home: '← Back to Home',
    contact: 'Contact Us',
    message: "The page you're looking for doesn't exist or has been moved.",
    subtitle: "Don't worry, we'll help you find your way",
    quickLinks: enQuickLinks,
  }
  const { title, home, contact, message, subtitle, quickLinks } = lang ?? fallback
  const homeUrl = prefix ? `${prefix}/` : '/'
  const contactUrl = prefix ? `${prefix}/contact/` : '/contact/'

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-navy-900 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-navy-700/30 animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-navy-700/20 animate-[spin_40s_linear_infinite_reverse]" />

      {/* Content */}
      <div className="relative">
        {/* 404 visual */}
        <div className="relative mb-8">
          <div className="text-[140px] font-serif font-bold text-navy-200/30 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-28 h-28 text-gold-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        </div>

        <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-3">
          {title}
        </h1>
        <p className="text-gold-400 text-sm mb-3 tracking-wide">{subtitle}</p>
        <p className="text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">{message}</p>

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
            {prefix ? '您可能想了解' : 'You might be looking for'}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg border border-navy-700/60 text-sm text-slate-300 hover:border-gold-500/40 hover:text-gold-400 hover:bg-navy-800/50 transition-all"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-xs text-slate-600">
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
