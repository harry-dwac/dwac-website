import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us ',
  description: 'Get in touch with the Digital World Arbitration Centre. We respond within 24 hours.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
