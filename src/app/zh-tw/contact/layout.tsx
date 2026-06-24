import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '聯繫我們 - 數位世界仲裁中心',
  description: '聯繫數位世界仲裁中心，我們24小時內回覆。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
