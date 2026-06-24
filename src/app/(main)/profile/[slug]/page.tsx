import Link from 'next/link'
import type { Metadata } from 'next'
import { profiles, roleLabels } from '@/data/profiles'

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const profile = profiles.find(p => p.slug === params.slug)
  return {
    title: profile ? `${profile.name} - ${roleLabels[profile.role]} | DWAC` : 'Profile | DWAC',
    description: profile?.shortBio || 'DWAC Member Profile',
  }
}

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const profile = profiles.find(p => p.slug === params.slug)
  if (!profile) return <div className="min-h-screen flex items-center justify-center text-white">Profile not found</div>

  const isArbitrator = profile.role === 'founding-arbitrator' || profile.role === 'arbitrator'

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className={`w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br ${profile.avatarColor} border border-gold-subtle flex items-center justify-center flex-shrink-0`}>
              <span className="text-5xl md:text-6xl font-bold text-gold-400">{profile.initials}</span>
            </div>
            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <span className={`inline-block text-xs font-bold tracking-[2px] uppercase px-3 py-1 rounded-full border ${profile.role === 'founding-arbitrator' ? 'border-gold-500/40 text-gold-400' : 'border-cyan-500/40 text-cyan-400'} mb-4`}>
                {roleLabels[profile.role]}
              </span>
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-2">{profile.name}</h1>
              <p className="text-lg text-slate-300 mb-4 max-w-xl">{profile.shortBio}</p>
              {profile.dwacId && (
                <p className="text-sm text-gold-400 font-mono mb-3">{profile.dwacId}</p>
              )}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {profile.specializations.map((s, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-navy-800 text-slate-300 rounded-full border border-navy-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-navy-950 border-t border-navy-800 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-serif text-2xl font-bold text-gold-400">{profile.cases}+</div>
              <div className="text-xs text-slate-400 mt-1">Cases Handled</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-400">{profile.joinedYear}</div>
              <div className="text-xs text-slate-400 mt-1">Year Joined</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-400">{profile.languages.length}</div>
              <div className="text-xs text-slate-400 mt-1">Languages</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold-400">{profile.specializations.length}</div>
              <div className="text-xs text-slate-400 mt-1">Specializations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-10">
              {/* About */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">About</h2>
                <p className="text-gray-600 leading-relaxed text-base">{profile.fullBio}</p>
              </div>

              {/* Approach */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-serif text-lg font-bold text-navy-800 mb-3">⚖️ Arbitration Approach</h3>
                <p className="text-gray-600 leading-relaxed">{profile.approach}</p>
              </div>

              {/* Why DWAC */}
              <div className="bg-gold-50 rounded-xl p-6 border border-gold-200">
                <h3 className="font-serif text-lg font-bold text-navy-800 mb-3">🌟 Why DWAC</h3>
                <p className="text-gray-600 leading-relaxed italic">&ldquo;{profile.whyDwac}&rdquo;</p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">Experience</h2>
                <ul className="space-y-3">
                  {profile.experience.map((exp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600">{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Publications */}
              {profile.publications.length > 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-navy-800 mb-4">Selected Publications</h2>
                  <ul className="space-y-3">
                    {profile.publications.map((pub, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-gold-500 mt-0.5">📖</span>
                        <span className="text-gray-600">{pub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="bg-navy-900 rounded-xl p-6 text-white">
                <h3 className="font-semibold text-gold-400 mb-4 text-sm uppercase tracking-wide">Quick Info</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-slate-400 mb-1">Location</div>
                    <div className="font-medium">{profile.location}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 mb-1">Languages</div>
                    <div className="font-medium">{profile.languages.join(', ')}</div>
                  </div>
                  {profile.dwacId && (
                    <div>
                      <div className="text-slate-400 mb-1">DWAC ID</div>
                      <div className="font-mono text-gold-400">{profile.dwacId}</div>
                    </div>
                  )}
                  <div>
                    <div className="text-slate-400 mb-1">Cases</div>
                    <div className="font-medium">{profile.cases}+</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-navy-800 mb-4 text-sm uppercase tracking-wide">Certifications</h3>
                <div className="space-y-2">
                  {profile.certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-emerald-600 text-xs">✓</span>
                      </span>
                      <span className="text-sm text-gray-600">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-semibold text-navy-800 mb-4 text-sm uppercase tracking-wide">Qualifications</h3>
                <ul className="space-y-2">
                  {profile.qualifications.map((q, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-gold-500 mt-0.5">•</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              {isArbitrator && (
                <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 rounded-xl p-6 border border-gold-200 text-center">
                  <h3 className="font-serif text-lg font-bold text-navy-800 mb-2">Request This Arbitrator</h3>
                  <p className="text-sm text-gray-600 mb-4">Want {profile.name.split(' ').pop()} to handle your case?</p>
                  <Link
                    href="/contact/"
                    className="inline-block px-6 py-2.5 bg-gradient-gold text-navy-900 font-bold text-sm rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] transition-all"
                  >
                    File a Dispute
                  </Link>
                </div>
              )}
              {!isArbitrator && (
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 rounded-xl p-6 border border-cyan-200 text-center">
                  <h3 className="font-serif text-lg font-bold text-navy-800 mb-2">Join DWAC</h3>
                  <p className="text-sm text-gray-600 mb-4">Become part of our global community.</p>
                  <Link
                    href="/membership/"
                    className="inline-block px-6 py-2.5 bg-cyan-600 text-white font-bold text-sm rounded-lg hover:bg-cyan-700 transition-all"
                  >
                    Apply for Membership
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-6 bg-navy-900 text-gray-400 text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-gold-400 transition-colors">DWAC</Link>
            <span>/</span>
            {isArbitrator ? (
              <>
                <Link href="/arbitrators/" className="hover:text-gold-400 transition-colors">Arbitrators</Link>
              </>
            ) : (
              <>
                <Link href="/members/" className="hover:text-gold-400 transition-colors">Members</Link>
              </>
            )}
            <span>/</span>
            <span className="text-gold-400">{profile.name}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
