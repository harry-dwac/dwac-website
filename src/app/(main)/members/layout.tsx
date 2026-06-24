import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Members - DWAC',
  description: 'DWAC membership benefits and community of digital law professionals.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
