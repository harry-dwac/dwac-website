import Script from 'next/script'

const discussionCategories = [
  {
    emoji: '🏛️',
    name: 'Announcements',
    description: 'Official DWAC news, updates, and important notices',
  },
  {
    emoji: '💬',
    name: 'General',
    description: 'Open discussion, introductions, and community conversations',
  },
  {
    emoji: '💡',
    name: 'Ideas',
    description: 'Feature requests, suggestions, and innovation proposals',
  },
  {
    emoji: '❓',
    name: 'Q&A',
    description: 'Questions about arbitration procedures and DWAC processes',
  },
  {
    emoji: '📊',
    name: 'Polls',
    description: 'Community surveys and collective decision-making',
  },
  {
    emoji: '🙌',
    name: 'Show and Tell',
    description: 'Share your work, achievements, and case experiences',
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Community</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">Community Forum</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A dedicated space for DWAC members to exchange ideas, share case insights, and collaborate on advancing digital world arbitration practice.
          </p>
        </div>
      </section>

      {/* ===== Categories — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Discussion Topics</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Join the Conversation
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Browse discussions by category, ask questions, share your expertise, or start a new topic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {discussionCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Giscus Forum Embed ===== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Forum</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Discussions
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Sign in with your GitHub account to participate. New to the community? Introduce yourself and join the conversation!
            </p>
          </div>

          {/* GitHub Signup Guide */}
          <div className="mb-8 bg-gradient-to-r from-slate-50 to-cyan-50 border border-slate-200 rounded-xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">💬</span>
                  Want to join the discussion?
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Our forum uses GitHub for authentication. It only takes 30 seconds to create a free account — all you need is an email address and a password.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <ol className="flex-1 space-y-2">
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                      <span>Click the button to register on GitHub (email + password)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                      <span>Verify your email, then come back and sign in below</span>
                    </li>
                  </ol>
                  <a
                    href="https://github.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold text-sm rounded-lg hover:bg-navy-800 hover:shadow-lg transition-all flex-shrink-0"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Create GitHub Account
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              💡 GitHub is the world&apos;s largest developer community. Your free account also gives you access to thousands of open-source projects and tools.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <Giscus />
          </div>
        </div>
      </section>

      {/* ===== Guidelines — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Community Guidelines
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Be respectful and professional in all interactions
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Stay on topic and contribute constructively to discussions
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Anonymize case details before sharing — protect confidentiality
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cite sources and give credit when referencing others&apos; work
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Use the appropriate category for your discussion topic
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

function Giscus() {
  return (
    <>
      <div className="giscus" />
      <Script
        src="https://giscus.app/client.js"
        strategy="lazyOnload"
        data-repo="Harry-DWAC/dwac-website"
        data-repo-id="R_kgDOSHSzww"
        data-category="General"
        data-category-id="DIC_kwDOSHSzw84C9AeX"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossOrigin="anonymous"
      />
    </>
  )
}
