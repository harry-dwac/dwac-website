import type { Metadata } from 'next'

// EN redirect pages: canonical points to the target URL (no /en/ prefix)
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.dwac.net',
    languages: {
      'en': 'https://www.dwac.net',
      'zh-CN': 'https://www.dwac.net/zh-cn',
      'zh-TW': 'https://www.dwac.net/zh-tw',
    },
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
