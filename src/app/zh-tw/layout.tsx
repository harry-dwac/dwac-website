import ErrorBoundary from '@/components/ErrorBoundary'
import Navbar from '@/components/NavbarZhTw'
import Footer from '@/components/FooterZhTw'
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
