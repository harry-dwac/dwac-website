import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import ErrorBoundary from '@/components/ErrorBoundary'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'DWAC - 数字世界仲裁中心',
  description: '首个专注于解决数字世界纠纷的永久性国际仲裁机构。专业、高效、全球可执行的仲裁服务。',
  keywords: '仲裁,数字纠纷,区块链,AI争议,在线仲裁,DWAC',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-full flex flex-col bg-navy-800/30">
        <header className="bg-slate-900 text-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="/zh-cn/" className="text-xl font-bold text-gold-400">DWAC</a>
                <span className="ml-2 text-sm text-gray-400 hidden sm:block">数字世界仲裁中心</span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="/zh-cn/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">首页</a>
                  <a href="/zh-cn/about/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">关于我们</a>
                  <a href="/zh-cn/arbitrators/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">仲裁员名册</a>
                  <a href="/zh-cn/arbitrators/join/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">加入仲裁员</a>
                  <a href="/zh-cn/membership/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">会员资格</a>
                  <a href="/zh-cn/charter/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">公约</a>
                  <a href="/zh-cn/contact/" className="hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium">联系我们</a>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <a href="/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">English</a>
                <a href="/zh-cn/" className="px-2 py-1 text-xs font-medium rounded bg-gradient-gold text-white">简体</a>
                <a href="/zh-tw/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">繁体</a>
              </div>
            </div>
            <div className="md:hidden">
              <div className="flex items-center space-x-1 mr-2">
                <a href="/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">English</a>
                <a href="/zh-cn/" className="px-2 py-1 text-xs font-medium rounded bg-gradient-gold text-white">简体</a>
                <a href="/zh-tw/" className="px-2 py-1 text-xs font-medium rounded bg-slate-700 text-gray-300 hover:bg-slate-600">繁体</a>
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
                  数字世界仲裁中心 - 首个专注于解决数字世界纠纷的永久性国际仲裁机构。
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">快速链接</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh-cn/about/" className="hover:text-gold-400">关于我们</a></li>
                  <li><a href="/zh-cn/arbitrators/join/" className="hover:text-gold-400">成为仲裁员</a></li>
                  <li><a href="/zh-cn/membership/" className="hover:text-gold-400">会员资格</a></li>
                  <li><a href="/zh-cn/charter/" className="hover:text-gold-400">数字世界公约</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">联系我们</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/zh-cn/contact/" className="hover:text-gold-400">联系我们</a></li>
                  <li className="text-gray-400">邮箱: secretary@dwac.net</li>
                  <li className="text-gray-400">Domain: dwac.net</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-gray-400">
              <p>© 2026 数字世界仲裁中心 (DWAC). 保留所有权利。</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
