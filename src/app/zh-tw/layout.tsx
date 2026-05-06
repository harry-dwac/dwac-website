import ErrorBoundary from '@/components/ErrorBoundary'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'DWAC - 數字世界仲裁中心',
  description: '首個專注於解決數字世界糾紛的永久性國際仲裁機構。專業、高效、全球可執行的仲裁服務。',
  keywords: '仲裁,數字糾紛,區塊鏈,AI爭議,在線仲裁,DWAC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-full flex flex-col bg-navy-800/30">
        <header className="bg-slate-900 text-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/zh-tw/" className="text-xl font-bold text-gold-400">DWAC</a>
                <span className="ml-2 text-sm text-gray-400 hidden sm:block">數字世界仲裁中心</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/zh-tw/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">首頁</a>
                  <a href="/zh-tw/about/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">關於我們</a>
                  <a href="/zh-tw/arbitrators/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">仲裁員名冊</a>
                  <a href="/zh-tw/arbitrators/join/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">加入仲裁員</a>
                  <a href="/zh-tw/membership/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">會員資格</a>
                  <a href="/zh-tw/charter/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">公約</a>
                  <a href="/zh-tw/contact/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">聯繫我們</a>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <a href="/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">English</a>
                <a href="/zh-cn/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">简体</a>
                <a href="/zh-tw/" className="px-2 py-1 text-xs font-medium rounded bg-gradient-gold text-white">繁體</a>
              </div>
            </div>
            <div className="md:hidden">
              <div className="flex items-center space-x-1 mr-2">
                <a href="/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">English</a>
                <a href="/zh-cn/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">简体</a>
                <a href="/zh-tw/" className="px-2 py-1 text-xs font-medium rounded bg-gradient-gold text-white">繁體</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-1">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <footer className="bg-slate-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-gold-400 mb-4">DWAC</h3>
                <p className="text-sm text-gray-400 max-w-md">
                  數字世界仲裁中心 - 首個專注於解決數字世界糾紛的永久性國際仲裁機構。
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">快速鏈接</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh-tw/about/" className="hover:text-gold-400">關於我們</a></li>
                  <li><a href="/zh-tw/arbitrators/join/" className="hover:text-gold-400">成為仲裁員</a></li>
                  <li><a href="/zh-tw/membership/" className="hover:text-gold-400">會員資格</a></li>
                  <li><a href="/zh-tw/charter/" className="hover:text-gold-400">數字世界公約</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">聯繫我們</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh-tw/contact/" className="hover:text-gold-400">聯繫我們</a></li>
                  <li className="text-gray-400">郵箱: secretary@dwac.net</li>
                  <li className="text-gray-400">Domain: dwac.net</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2026 數字世界仲裁中心 (DWAC). 保留所有權利。</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
