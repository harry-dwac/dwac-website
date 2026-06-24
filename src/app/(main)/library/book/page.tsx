import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Library — DWAC',
  description: 'DWAC Professional Library — authoritative publications on digital world law and arbitration.',
}

const books = [
  {
    href: '/library/book/vol1/',
    title: 'Volume I',
    subtitle: '世界各国关于网络空间的立法汇编',
    desc: 'Comprehensive compilation of cyberspace legislation from jurisdictions worldwide.',
    cover: '/images/library/vol1-cover.jpg',
  },
  {
    href: '/library/book/vol2/',
    title: 'Volume II',
    subtitle: '世界各地涉网纠纷案例研究',
    desc: 'Case studies of internet-related disputes from around the world.',
    cover: '/images/library/vol2-cover-en.jpg',
  },
]

export default function BookIndexPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">DWAC Professional Library</p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white mb-4">Publications</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Authoritative works on digital world law, arbitration, and governance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book) => (
              <Link
                key={book.href}
                href={book.href}
                className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-navy-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy-800 mb-1">{book.title}</h2>
                <p className="text-sm text-gold-600 mb-2">{book.subtitle}</p>
                <p className="text-sm text-slate-500">{book.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-gold-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Online
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
