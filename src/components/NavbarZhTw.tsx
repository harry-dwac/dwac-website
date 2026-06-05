'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchModal from './SearchModal'
import LanguageSwitcher from './LanguageSwitcher'

export default function NavbarZhTw() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)

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
            <Link href="/zh-tw/" className="font-serif text-xl font-bold text-white tracking-[2px] hover:text-gold-400 transition-colors">
              DWAC
            </Link>
            <span className="hidden lg:block text-xs text-gray-500 tracking-wide ml-1">數位世界仲裁中心</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            <Link href="/zh-tw/" className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">首頁</Link>

            {/* 法學院 dropdown — 醒目位置 */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('lawschool')} onMouseLeave={handleMouseLeave}>
              <Link href="/zh-tw/law-school/" className="hover-underline text-gold-400 hover:text-gold-300 text-sm font-semibold px-2 py-1 transition-colors flex items-center gap-1">
                法學院
                <svg className="w-3.5 h-3.5 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {activeDropdown === 'lawschool' && (
                <div className="absolute top-full left-0 mt-0 w-60 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/zh-tw/law-school/courses/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">課程項目</Link>
                  <Link href="/zh-tw/law-school/community/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">社群</Link>
                  <Link href="/zh-tw/law-school/resources/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">資源庫</Link>
                  <Link href="/zh-tw/law-school/publications/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">出版物</Link>
                  <div className="border-t border-gold-subtle/50 my-1" />
                  <Link href="/zh-tw/members/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">會員名錄</Link>
                  <Link href="/zh-tw/community/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">交流論壇</Link>
                  <Link href="/zh-tw/club/" className="block px-4 py-2 text-sm text-gold-400 hover:text-gold-300 hover:bg-navy-800/60 transition-colors">智能仲裁員俱樂部 ↗</Link>
                </div>
              )}
            </div>

            {/* 關於 dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                關於
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-0 w-52 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/zh-tw/about/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">關於DWAC</Link>
                  <Link href="/zh-tw/tribunal/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">仲裁庭</Link>
                  <Link href="/zh-tw/expertise/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">專業領域</Link>
                  <Link href="/zh-tw/membership-arbitrators/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">會員與仲裁員</Link>
                  <Link href="/zh-tw/charter/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">數位世界憲章</Link>
                </div>
              )}
            </div>

            {/* 服務 dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors flex items-center gap-1">
                服務
                <svg className="w-3.5 h-3.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-navy-900/95 backdrop-blur-xl border border-gold-subtle rounded-lg shadow-2xl py-2 animate-fade-in">
                  <Link href="/zh-tw/how-to-apply/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">提交仲裁</Link>
                  <Link href="/zh-tw/how-to-apply/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">申請指南</Link>
                  <Link href="/zh-tw/rules/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">仲裁規則</Link>
                  <Link href="/zh-tw/fees/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">收費標準</Link>
                  <Link href="/zh-tw/fees/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">費用計算器</Link>
                  <Link href="/zh-tw/evidence-guidance/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">證據指引</Link>
                  <Link href="/zh-tw/downloads/" className="block px-4 py-2 text-sm text-gray-300 hover:text-gold-400 hover:bg-navy-800/60 transition-colors">示範條款</Link>
                  <div className="border-t border-gold-subtle/50 my-1" />
                  <Link href="/zh-tw/virtual-hearing/" className="block px-4 py-2 text-sm text-gold-400 hover:text-gold-300 hover:bg-navy-800/60 transition-colors">虛擬仲裁庭 ↗</Link>
                </div>
              )}
            </div>



            <Link href="/zh-tw/faq/" className="hover-underline text-gray-400 hover:text-white text-sm font-medium px-2 py-1 transition-colors">常見問題</Link>

            <Link href="/zh-tw/digital-tribunal/" className="hover-underline text-cyan-400 hover:text-cyan-300 text-sm font-medium px-2 py-1 transition-colors">數字仲裁庭</Link>

            <button onClick={() => setSearchOpen(true)} className="p-1.5 text-gray-400 hover:text-gold-400 transition-colors" aria-label="搜尋">
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <Link href="/zh-tw/contact/" className="ml-2 px-4 py-1.5 text-xs font-semibold tracking-wide bg-gradient-gold text-navy-900 rounded hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all">
              聯繫我們
            </Link>
          </div>

          {/* Language + Auth + Mobile */}
          <div className="flex items-center gap-2">
            <Link href="/zh-tw/login/" className="hidden sm:inline-block px-2.5 py-1 text-xs font-medium rounded text-gray-400 hover:text-gold-400 transition-colors">登入</Link>
            <Link href="/zh-tw/register/" className="hidden sm:inline-block px-2.5 py-1 text-xs font-semibold rounded border border-gold-500/40 text-gold-400 hover:bg-gold-500/[0.05] transition-all">註冊</Link>
            <LanguageSwitcher />

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
              <Link href="/zh-tw/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">首頁</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">關於</div>
              <Link href="/zh-tw/about/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">關於DWAC</Link>
              <Link href="/zh-tw/tribunal/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">仲裁庭</Link>
              <Link href="/zh-tw/membership-arbitrators/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">會員與仲裁員</Link>
              <Link href="/zh-tw/charter/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">數位世界憲章</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-600">服務</div>
              <Link href="/zh-tw/how-to-apply/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">提交仲裁</Link>
              <Link href="/zh-tw/how-to-apply/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">申請指南</Link>
              <Link href="/zh-tw/rules/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">仲裁規則</Link>
              <Link href="/zh-tw/fees/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">收費標準</Link>
              <Link href="/zh-tw/fees/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">費用計算器</Link>
              <Link href="/zh-tw/evidence-guidance/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">證據指引</Link>
              <Link href="/zh-tw/downloads/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">示範條款</Link>
              <Link href="/zh-tw/virtual-hearing/" onClick={() => setMobileOpen(false)} className="text-gold-400 hover:text-gold-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">虛擬仲裁庭 ↗</Link>

              <div className="px-3 pt-3 pb-1 text-[10px] font-bold tracking-[2px] uppercase text-gold-400">⚖️ 法學院</div>
              <Link href="/zh-tw/law-school/" onClick={() => setMobileOpen(false)} className="text-gold-400 hover:text-gold-300 pl-6 py-2 text-sm font-semibold rounded-lg hover:bg-navy-700/50 transition-all">法學院主頁</Link>
              <Link href="/zh-tw/law-school/courses/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">課程項目</Link>
              <Link href="/zh-tw/law-school/community/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">社群</Link>
              <Link href="/zh-tw/law-school/resources/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">資源庫</Link>
              <Link href="/zh-tw/law-school/publications/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">出版物</Link>
              <Link href="/zh-tw/members/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">會員名錄</Link>
              <Link href="/zh-tw/community/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 pl-6 py-2 text-sm rounded-lg hover:bg-navy-700/50 transition-all">交流論壇</Link>
              <Link href="/zh-tw/club/" onClick={() => setMobileOpen(false)} className="text-gold-400 hover:text-gold-300 pl-6 py-2 text-sm rounded-lg hover:bg-navy-800/60 transition-all">智能仲裁員俱樂部 ↗</Link>

              <Link href="/zh-tw/faq/" onClick={() => setMobileOpen(false)} className="text-gray-300 hover:text-gold-400 px-3 pt-3 py-2.5 text-sm font-medium rounded-lg hover:bg-navy-700/50 transition-all">常見問題</Link>

              <div className="border-t border-gold-subtle/30 mt-2 pt-3 px-3 flex gap-3">
                <Link href="/zh-tw/login/" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-medium border border-gold-500/40 text-gold-400 rounded-lg hover:bg-gold-500/[0.05]">登入</Link>
                <Link href="/zh-tw/register/" onClick={() => setMobileOpen(false)} className="flex-1 text-center py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">註冊</Link>
              </div>

              <Link href="/zh-tw/contact/" onClick={() => setMobileOpen(false)} className="mt-3 text-center px-4 py-2.5 text-sm font-semibold bg-gradient-gold text-navy-900 rounded-lg">聯繫我們</Link>
            </div>
          </div>
        )}
      </nav>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} currentLang="zh-tw" />
    </header>
  )
}
