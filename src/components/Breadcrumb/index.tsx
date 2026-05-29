"use client"

import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // JSON-LD BreadcrumbList structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://dwac.net/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `https://dwac.net${item.href}`,
      })),
    ],
  }

  return (
    <>
      {/* JSON-LD is injected via parent page's metadata */}
      <nav aria-label="Breadcrumb" className="bg-navy-800/50 border-b border-gold-subtle/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
            {/* Home */}
            <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                href="/" 
                className="text-gray-400 hover:text-gold-400 transition-colors"
                itemProp="item"
              >
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            
            {/* Other items */}
            {items.map((item, index) => (
              <li key={item.href} className="flex items-center">
                <span className="mx-2 text-gray-600">/</span>
                {index === items.length - 1 ? (
                  // Current page (not a link)
                  <span 
                    className="text-gold-400 font-medium"
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    <span itemProp="name">{item.label}</span>
                    <meta itemProp="position" content={String(index + 2)} />
                  </span>
                ) : (
                  <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-gold-400 transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{item.label}</span>
                    </Link>
                    <meta itemProp="position" content={String(index + 2)} />
                  </li>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
