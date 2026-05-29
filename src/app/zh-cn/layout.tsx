import type { Metadata } from 'next'
import '../globals.css'
import NavbarZhCn from '@/components/NavbarZhCn'
import FooterZhCn from '@/components/FooterZhCn'
import ErrorBoundary from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: {
    default: 'DWAC - 数字世界仲裁中心',
    template: '%s | DWAC',
    absolute: 'DWAC - 数字世界仲裁中心',
  },
  description: '首个专注于解决数字世界纠纷的永久性国际仲裁机构。专业、高效、全球可执行的仲裁服务。',
  keywords: '仲裁,数字纠纷,区块链,AI争议,在线仲裁,DWAC',
}

export default function ZhCnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarZhCn />
      <main className="flex-1">
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      <FooterZhCn />
    </>
  )
}
