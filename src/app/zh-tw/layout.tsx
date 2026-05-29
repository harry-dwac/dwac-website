import type { Metadata } from 'next'
import '../globals.css'
import NavbarZhTw from '@/components/NavbarZhTw'
import FooterZhTw from '@/components/FooterZhTw'
import ErrorBoundary from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: {
    default: 'DWAC - 數字世界仲裁中心',
    template: '%s | DWAC',
    absolute: 'DWAC - 數字世界仲裁中心',
  },
  description: '首個專注於解決數字世界糾紛的永久性國際仲裁機構。專業、高效、全球可執行的仲裁服務。',
  keywords: '仲裁,數字糾紛,區塊鏈,AI爭議,在線仲裁,DWAC',
}

export default function ZhTwLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarZhTw />
      <main className="flex-1">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <FooterZhTw />
    </>
  )
}
