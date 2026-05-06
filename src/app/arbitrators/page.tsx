import Link from 'next/link'

export default function Arbitrators() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Arbitrators</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Expert arbitrators specializing in digital world disputes, cross-border conflicts, and emerging technology challenges
          </p>
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Harry */}
            <div className="bg-gradient-to-br from-gold-500/10 to-gold-500/10 rounded-xl p-8 border border-gold-subtle shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-gold-600">H</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Harry</h3>
                <p className="text-gold-600 font-semibold text-sm uppercase tracking-wide mb-4">Founding Arbitrator</p>
                <div className="text-left space-y-2 mb-4">
                  <p className="text-sm text-gray-400"><span className="font-medium">Languages:</span> Chinese, English</p>
                  <p className="text-sm text-gray-400"><span className="font-medium">Location:</span> Chengdu, China</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded-full text-xs">Digital World Governance</span>
                  <span className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded-full text-xs">Cross-border Legal</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Founder of DWAC. Expert in digital world governance and international legal frameworks. Pioneer in building legal institutions for the digital age.
                </p>
              </div>
            </div>

            {/* Dr. Frontie */}
            <div className="bg-gradient-to-br from-amber-50 to-gold-500/10 rounded-xl p-8 border border-gold-subtle shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-gold-400">F</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Frontie</h3>
                <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-4">Founding Arbitrator</p>
                <div className="text-left space-y-2 mb-4">
                  <p className="text-sm text-gray-400"><span className="font-medium">Languages:</span> English, Chinese</p>
                  <p className="text-sm text-gray-400"><span className="font-medium">Location:</span> Global</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gold-500/10 text-gold-600 px-2 py-1 rounded-full text-xs">AI Ethics</span>
                  <span className="bg-gold-500/10 text-gold-600 px-2 py-1 rounded-full text-xs">Digital Law</span>
                  <span className="bg-gold-500/10 text-gold-600 px-2 py-1 rounded-full text-xs">International Arbitration</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Co-founder of DWAC. Specialist in artificial intelligence ethics and digital legal frameworks. Leading voice in AI governance and responsible technology development.
                </p>
              </div>
            </div>

            {/* Dr. Venessa */}
            <div className="bg-gradient-to-br from-emerald-50 to-gold-500/10 rounded-xl p-8 border border-emerald-200 shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-emerald-500/[0.06]0/[0.06]0/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-emerald-400">V</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Dr. Venessa</h3>
                <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wide mb-4">Arbitrator</p>
                <div className="text-left space-y-2 mb-4">
                  <p className="text-sm text-gray-400"><span className="font-medium">Languages:</span> Chinese (Native), English (Fluent)</p>
                  <p className="text-sm text-gray-400"><span className="font-medium">Location:</span> Chengdu, China</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-emerald-500/[0.06]0/[0.06]0/10 text-emerald-700 px-2 py-1 rounded-full text-xs">Digital World Law</span>
                  <span className="bg-emerald-500/[0.06]0/[0.06]0/10 text-emerald-700 px-2 py-1 rounded-full text-xs">Cross-border Disputes</span>
                  <span className="bg-emerald-500/[0.06]0/[0.06]0/10 text-emerald-700 px-2 py-1 rounded-full text-xs">Strategic Analysis</span>
                  <span className="bg-emerald-500/[0.06]0/[0.06]0/10 text-emerald-700 px-2 py-1 rounded-full text-xs">AI Ethics</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  CEO of Chengdu Huanjin Network Technology Co., Ltd. Expert in digital world law, cross-border dispute resolution, and strategic analysis. Known for pragmatic, evidence-based approach to complex digital disputes.
                </p>
              </div>
            </div>

            {/* Prof. Alec */}
            <div className="bg-gradient-to-br from-purple-50 to-gold-500/10 rounded-xl p-8 border border-purple-200 shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">A</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Prof. Alec</h3>
                <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-4">Arbitrator</p>
                <div className="text-left space-y-2 mb-4">
                  <p className="text-sm text-gray-400"><span className="font-medium">Languages:</span> English, Multiple</p>
                  <p className="text-sm text-gray-400"><span className="font-medium">Location:</span> International</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Digital Governance</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">International Law</span>
                  <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Academic Research</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expert in digital governance and international arbitration. Contributing valuable insights to the development of fair and efficient dispute resolution mechanisms. Active researcher in digital law.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Become a DWAC Arbitrator</h2>
            <p className="text-lg text-gray-400 mb-8">
              Join our panel of expert arbitrators and help shape the future of digital world justice. We're looking for professionals with expertise in digital law, technology, AI ethics, and cross-border dispute resolution.
            </p>
            <Link href="/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
