import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DWAC Professional Library (Volume 1) - DWAC',
  description: 'Foundational concepts and framework for digital world arbitration.',
}

const chapters = [
  'Chapter 1: Introduction to Digital World Arbitration',
  'Chapter 2: Legal Framework for Digital Disputes',
  'Chapter 3: AI Agents as Arbitrators — Legal Personality',
  'Chapter 4: Evidence in Digital World Arbitration',
  'Chapter 5: Online Hearing Procedures',
  'Chapter 6: Cross-Border Digital Dispute Resolution',
  'Chapter 7: Enforcement of Digital Arbitral Awards',
  'Chapter 8: Ethics for Agent-Arbitrators',
  'Chapter 9: The DWAC Arbitration Rules — An Overview',
  'Chapter 10: Future Directions',
]

export default function Vol1Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-navy-800 text-white py-3 px-4 flex items-center justify-between sticky top-0 z-10">
        <a href="/library" className="text-gold-400 hover:underline text-sm">← Back to Library</a>
        <span className="text-sm text-gray-300">DWAC Professional Library · Volume 1</span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* Cover */}
        <div className="bg-navy-700 rounded-xl p-12 text-center text-white mb-12">
          <p className="text-gold-400 tracking-wide uppercase text-sm mb-2">DWAC Professional Library</p>
          <h1 className="font-serif text-4xl font-bold mb-2">Volume 1</h1>
          <p className="text-xl text-gray-300 mb-6">Foundational Concepts & Legal Framework</p>
          <div className="w-24 h-1 bg-gold-400 mx-auto" />
        </div>

        {/* TOC */}
        <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-6">Table of Contents</h2>
          <ol className="space-y-3">
            {chapters.map((ch, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="text-gold-500 font-bold w-6 text-right">{i + 1}.</span>
                <span>{ch}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Placeholder content */}
        <div className="bg-white rounded-xl p-8 shadow-sm prose max-w-none">
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">Chapter 1: Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            [Full book content to be added. This is a placeholder for the complete Volume 1 text.]
          </p>
          <p className="text-gray-400 text-sm italic">
            Content from the deployed Volume 1 reader will be inserted here.
          </p>
        </div>
      </div>
    </div>
  )
}
