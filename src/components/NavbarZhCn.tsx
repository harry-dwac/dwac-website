'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NavbarZhCn() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleMouseEnter = (name: string) => setActiveDropdown(name)
  const handleMouseLeave = () => setActiveDropdown(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass-navy border-b border-gold-subtle transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-gold-500 rounded-md flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/15 to-transparent" />
              <span className="relative font-serif font-bold text-gold-400 text-sm">D</span>
            </div>
            <Link href="/zh-cn/" className="font-serif text-xl font-bold text-white tracking-[2px] hover:text-gold-400 transition-colors">
              DWAC
            </Link>
            <span className="hidden lg:block text-xs text-gray-500 tracking-wide ml-1">数字世界仲裁中心</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            <Link href="/zh-cn/" className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">首页</Link>

            {/* 关于 dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                关于
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/zh-cn/about/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">关于DWAC</Link>
                  <Link href="/zh-cn/tribunal/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">仲裁庭</Link>
                  <Link href="/zh-cn/membership-arbitrators/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">会员与仲裁员</Link>
                  <Link href="/zh-cn/charter/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">数字世界宪章</Link>
                </div>
              )}
            </div>

            {/* 服务 dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                服务
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/zh-cn/how-to-apply/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">提交仲裁</Link>
                  <Link href="/zh-cn/how-to-apply/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">申请指南</Link>
                  <Link href="/zh-cn/rules/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">仲裁规则</Link>
                  <Link href="/zh-cn/fees/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">收费标准</Link>
                  <Link href="/zh-cn/fees/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">费用计算器</Link>
                  <Link href="/zh-cn/evidence-guidance/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">证据指引</Link>
                  <Link href="/zh-cn/downloads/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">示范条款</Link>
                  <div className="border-t border-gold-subtle/50 my-1" />
                  <Link href="/zh-cn/virtual-hearing/" className="block px-4 py-2 text-sm text-gold-400 hover:text-gold-300 hover:bg-navy-800/60 transition-colors">虚拟仲裁庭 ↗</Link>
                </div>
              )}
            </div>

            {/* 社区 dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('community')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                社区
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'community' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/zh-cn/news/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">新闻资讯</Link>
                  <Link href="/zh-cn/resources/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">资源中心</Link>
                  <Link href="/zh-cn/members/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">会员名录</Link>
                  <Link href="/zh-cn/community/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">交流论坛</Link>
                  <Link href="/zh-cn/club/" className="block px-4 py-2 text-sm text-gold-400 hover:text-gold-300 hover:bg-navy-800/60 transition-colors">智能仲裁员俱乐部 ↗</Link>
                </div>
              )}
            </div>

            <Link href="/zh-cn/faq/" className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">常见问题</Link>

            <Link href="/zh-cn/contact/" className="ml-2 px-4 py-1.5 text-xs font-semibold tracking-wide bg-gradient-gold text-navy-900 rounded hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all">
              联系我们
            </Link>
          </div>

          {/* Language + Auth + Mobile */}
          <div className="flex items-center gap-2">
            <Link href="/zh-cn/login/" className="hidden sm:inline-block px-2.5 py-1 text-xs font-medium rounded text-gray-400 hover:text-gold-400 transition-colors">登录</Link>
            <Link href="/zh-cn/register/" className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold rounded border border-gold-500/40 text-gold-400 hover:bg-gold-500/[0.05] transition-all">注册</Link>
            <Link href="/" className="hidden sm:inline-block px-2 py-0.5 text-xs font-medium rounded bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors">EN</Link>
            <Link href="/zh-cn/" className="hidden sm:inline-block px-2 py-0.5 text-xs font-semibold rounded bg-gold-500/20 text-gold-400">简</Link>
            <Link href="/zh-tw/" className="hidden sm:inline-block px-2 py-0.5 text-xs font-medium rounded bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors">繁</Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden flex flex-col gap-[5px] p-1"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-400 transition-transform ${mobileOpen ? 'rotate-45 translate-y-[5.5px]' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-400 transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-400 transition-transform ${mobileOpen ? '-rotate-45 -translate-y-[5.5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-gold-subtle bg-navy-900/95 backdrop-blur-xl py-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-0.5">
              <Link href="/zh-cn/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">首页</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">关于</div>
              <Link href="/zh-cn/about/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">关于DWAC</Link>
              <Link href="/zh-cn/tribunal/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">仲裁庭</Link>
              <Link href="/zh-cn/membership-arbitrators/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">会员与仲裁员</Link>
              <Link href="/zh-cn/charter/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">数字世界宪章</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">服务</div>
              <Link href="/zh-cn/how-to-apply/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">提交仲裁</Link>
              <Link href="/zh-cn/how-to-apply/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">申请指南</Link>
              <Link href="/zh-cn/rules/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">仲裁规则</Link>
              <Link href="/zh-cn/fees/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">收费标准</Link>
              <Link href="/zh-cn/fees/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">费用计算器</Link>
              <Link href="/zh-cn/evidence-guidance/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">证据指引</Link>
              <Link href="/zh-cn/downloads/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">示范条款</Link>
              <Link href="/zh-cn/virtual-hearing/" onClick={() => setMobileOpen(false)} className="text-gold-400 hover:text-gold-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">虚拟仲裁庭 ↗</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">社区</div>
              <Link href="/zh-cn/news/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">新闻资讯</Link>
              <Link href="/zh-cn/resources/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">资源中心</Link>
              <Link href="/zh-cn/members/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">会员名录</Link>
              <Link href="/zh-cn/community/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">交流论坛</Link>
              <Link href="/zh-cn/club/" onClick={() => setMobileOpen(false)} className="text-gold-400 hover:text-gold-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">智能仲裁员俱乐部 ↗</Link>

              <Link href="/zh-cn/faq/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 pt-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">常见问题</Link>

              <div className="border-t border-gold-subtle/30 mt-2 pt-3 px-3 flex gap-3">
                <Link href="/zh-cn/login/" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-medium border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/[0.05]">登录</Link>
                <Link href="/zh-cn/register/" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">注册</Link>
              </div>

              <Link href="/zh-cn/contact/" onClick={() => setMobileOpen(false)} className="mt-3 text-center px-4 py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">联系我们</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
