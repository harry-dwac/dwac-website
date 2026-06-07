'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const langMap: Record<string, { home: string; contact: string; message: string }> = {
  '/zh-cn': { home: '← 返回首页', contact: '联系我们', message: '您访问的页面不存在或已被移动。' },
  '/zh-tw': { home: '← 返回首頁', contact: '聯絡我們', message: '您造訪的頁面不存在或已被移動。' },
}

export default function NotFound() {
  const pathname = usePathname()
  const prefix = pathname.startsWith('/zh-tw') ? '/zh-tw' : pathname.startsWith('/zh-cn') ? '/zh-cn' : ''
  const lang = langMap[prefix] ?? { home: '← Back to Home', contact: 'Contact Us', message: "The page you're looking for doesn't exist or has been moved." }
  const homeUrl = prefix ? `${prefix}/` : '/'
  const contactUrl = prefix ? `${prefix}/contact/` : '/contact/'

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-navy-900">
      <div className="relative mb-8">
        <div className="text-[120px] font-serif font-bold text-navy-200 leading-none select-none">404</div>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-20 h-20 text-gold-400 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
        {prefix ? '页面未找到' : 'Page Not Found'}
      </h1>
      <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">{lang.message}</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href={homeUrl}
          className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3 rounded-md hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all inline-block"
        >
          {lang.home}
        </Link>
        <Link
          href={contactUrl}
          className="border border-slate-600 text-slate-300 font-semibold text-sm px-8 py-3 rounded-md hover:border-gold-500 hover:text-gold-400 transition-all inline-block"
        >
          {lang.contact}
        </Link>
      </div>

      <div className="mt-12 text-xs text-slate-600">
        <p>DWAC · Digital World Arbitration Centre</p>
        <p className="mt-1">If you believe this is an error, please contact <a href="mailto:secretary@dwac.net" className="text-gold-500 hover:underline">secretary@dwac.net</a></p>
      </div>
    </div>
  )
}
