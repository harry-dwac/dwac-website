import Link from 'next/link'
import { arbitrators, roleLabels } from '@/data/profiles'

export default function Arbitrators() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Panel</span>
          <h1 className="font-serif text-4xl font-bold text-white mb-4">Our Arbitrators</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Expert arbitrators specializing in digital world disputes, cross-border conflicts, and emerging technology challenges
          </p>
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Founding Arbitrators */}
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-8">Founding Arbitrators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {arbitrators.filter(a => a.role === 'founding-arbitrator').map((arbitrator) => (
              <Link
                key={arbitrator.slug}
                href={`/profile/${arbitrator.slug}/`}
                className="block bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${arbitrator.avatarColor} border border-gold-subtle flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl font-bold text-gold-400">{arbitrator.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-2xl font-bold text-navy-800">{arbitrator.name}</h3>
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-gold-500/10 text-gold-600 rounded-full border border-gold-500/30">
                        Founding
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{arbitrator.location} · {arbitrator.languages.slice(0,2).join(', ')}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{arbitrator.shortBio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {arbitrator.specializations.slice(0,3).map((s, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs bg-navy-50 text-navy-600 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Arbitrators */}
          <h2 className="font-serif text-2xl font-bold text-navy-800 mb-8">Arbitrators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {arbitrators.filter(a => a.role === 'arbitrator').map((arbitrator) => (
              <Link
                key={arbitrator.slug}
                href={`/profile/${arbitrator.slug}/`}
                className="block bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-xl p-8"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${arbitrator.avatarColor} border border-gold-subtle flex items-center justify-center flex-shrink-0`}>
                    <span className="text-3xl font-bold text-gold-400">{arbitrator.initials}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-2xl font-bold text-navy-800 mb-1">{arbitrator.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{arbitrator.location} · {arbitrator.languages.slice(0,2).join(', ')}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{arbitrator.shortBio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {arbitrator.specializations.slice(0,3).map((s, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs bg-navy-50 text-navy-600 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400">
            Click on any arbitrator to view their full profile, qualifications, and arbitration approach.
          </p>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-gradient-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-6">Become a DWAC Arbitrator</h2>
          <p className="text-lg text-slate-300 mb-8">
            Join our panel of expert arbitrators and help shape the future of digital world justice.
          </p>
          <Link href="/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold text-navy-900 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] transition-all">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  )
}
