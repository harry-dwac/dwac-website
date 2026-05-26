import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '我们的仲裁员 - 数字世界仲裁中心',
  description: '认识DWAC认证仲裁员，专精数字世界纠纷、跨境冲突和新兴技术挑战。',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
