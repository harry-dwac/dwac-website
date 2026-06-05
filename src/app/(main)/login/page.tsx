import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Welcome Back</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Sign In</h1>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-md mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 lg:p-10 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gold-50 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Apply for Access</h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              User accounts and community features will be available in Q3 2026. In the meantime, all pages and resources are freely accessible without registration.
            </p>
            <div className="bg-slate-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-slate-600">
                <strong>What&apos;s coming:</strong>
              </p>
              <ul className="text-sm text-slate-500 mt-2 space-y-1">
                <li>• Community forum participation</li>
                <li>• Personalized updates</li>
                <li>• Case tracking dashboard</li>
              </ul>
            </div>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
