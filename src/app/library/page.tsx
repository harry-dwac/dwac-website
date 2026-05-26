import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Library - DWAC',
  description: 'DWAC Professional Library - Digital World Arbitration Centre professional publications and legal references.',
}

const books = [
  {
    vol: 'Volume 1',
    titleZh: '数字世界仲裁中心专业图书室（卷一）',
    titleEn: 'DWAC Professional Library (Volume 1)',
    cover: '/images/library/vol1-cover.png',
    href: '/library/book/vol1',
    desc: 'Foundational concepts and framework for digital world arbitration.',
  },
  {
    vol: 'Volume 2',
    titleZh: '数字世界仲裁中心专业图书室（卷二）',
    titleEn: 'DWAC Professional Library (Volume 2)',
    cover: '/images/library/vol2-cover.png',
    href: '/library/book/vol2',
    desc: 'Advanced practices and case studies in digital world dispute resolution.',
  },
]

export default function LibraryPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC Professional Library</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            Professional<br />Library
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Core publications and references for digital world arbitration and dispute resolution.
          </p>
        </div>
      </section>

      {/* Bookshelf */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-navy-800 mb-12 text-center">
            Publications
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {books.map((book) => (
              <Link
                key={book.vol}
                href={book.href}
                className="group block bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] bg-navy-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-44 bg-navy-700 rounded shadow-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gold-400 font-serif text-lg">{book.vol}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Cover preview</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gold-500 text-sm font-semibold mb-1">{book.vol}</p>
                  <h3 className="font-serif text-xl font-bold text-navy-800 mb-2">
                    {book.titleEn}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3">{book.titleZh}</p>
                  <p className="text-gray-600 text-sm">{book.desc}</p>
                  <p className="text-gold-500 text-sm font-semibold mt-4 group-hover:underline">
                    Read Online →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
