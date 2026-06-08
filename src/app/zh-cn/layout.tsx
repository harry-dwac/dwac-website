import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/NavbarZhCn'
import ErrorBoundary from '@/components/ErrorBoundary'
import Footer from '@/components/FooterZhCn'

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
        <Navbar />
        <main className="flex-1">
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
        </main>
        <Footer />
      </body>
    </html>
  )
}
