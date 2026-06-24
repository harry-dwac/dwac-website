import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '联系我们 - 数字世界仲裁中心',
  description: '联系数字世界仲裁中心，我们24小时内回复。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
