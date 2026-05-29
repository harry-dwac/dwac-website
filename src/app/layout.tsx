import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const BASE_URL = 'https://dwac.net'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'DWAC - Digital World Arbitration Centre',
    template: '%s | DWAC',
  },
  description: 'The world\'s first permanent international arbitration institution dedicated to resolving digital world disputes. Professional, efficient, and globally enforceable arbitration services in 170+ countries.',
  keywords: [
    'digital arbitration',
    'online dispute resolution',
    'blockchain arbitration',
    'AI disputes',
    'smart contract disputes',
    'NFT disputes',
    'cross-border arbitration',
    'digital assets',
    'New York Convention',
    'international arbitration',
    'DWAC',
    'Digital World Arbitration Centre',
  ],
  authors: [{ name: 'DWAC', url: BASE_URL }],
  creator: 'DWAC',
  publisher: 'Digital World Arbitration Centre',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'DWAC',
    title: 'DWAC - Digital World Arbitration Centre',
    description: 'The world\'s first permanent international arbitration institution. Professional, efficient, and globally enforceable arbitration services in 170+ countries.',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'DWAC - Digital World Arbitration Centre',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DWAC - Digital World Arbitration Centre',
    description: 'The world\'s first permanent international arbitration institution. Professional, efficient, and globally enforceable.',
    site: '@DWAC',
    creator: '@DWAC',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': BASE_URL,
      'zh-CN': `${BASE_URL}/zh-cn`,
      'zh-TW': `${BASE_URL}/zh-tw`,
    },
  },
  category: 'Legal Services',
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Digital World Arbitration Centre (DWAC)',
  alternateName: 'DWAC',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.svg`,
  description: 'The world\'s first permanent international arbitration institution dedicated to resolving digital world disputes.',
  foundingDate: '2024',
  areaServed: 'Worldwide',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'secretary@dwac.net',
    contactType: 'customer service',
    availableLanguage: ['English', 'Chinese', 'Spanish'],
  },
  sameAs: [
    'https://twitter.com/DWAC',
    'https://linkedin.com/company/dwac',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Arbitration Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Contract Dispute Resolution',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Agent Liability Arbitration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Assets Dispute Resolution',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy-900 text-gray-200 font-sans antialiased">
        {/* Background effects */}
        <div className="fixed inset-0 bg-grid pointer-events-none z-0" />
        <div className="fixed -top-48 -left-48 w-[800px] h-[800px] rounded-full bg-navy-500/15 blur-[150px] pointer-events-none z-0" />
        <div className="fixed -bottom-64 -right-48 w-[600px] h-[600px] rounded-full bg-gold-500/[0.06] blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10">
          <ErrorBoundary>
            <Navbar />
          </ErrorBoundary>
          <main className="flex-1">
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </body>
    </html>
  )
}
