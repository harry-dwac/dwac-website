import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我們的仲裁員 - 數位世界仲裁中心',
  description: '認識DWAC認證仲裁員，專精數位世界糾紛、跨境衝突和新興技術挑戰。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
