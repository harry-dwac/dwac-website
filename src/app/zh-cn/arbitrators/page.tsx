import Link from 'next/link'

export default function Arbitrators() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁员名册</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            认识致力于数字正义的创始仲裁员
          </p>
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">创始仲裁员</h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            The 数字世界仲裁中心 was founded by a group of legal and technology professionals committed to establishing fair and efficient dispute resolution mechanisms for the digital world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Harry */}
            <div className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-xl p-8 border border-gold-subtle shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">周永俊 (Harry)</h3>
                <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-4">创始人 & Chairman</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Initiator and founding chairman of DWAC, dedicated to establishing digital justice systems and promoting international arbitration standards in the digital realm.
                </p>
              </div>
            </div>

            {/* Dr. Frontie */}
            <div className="bg-gradient-to-br from-amber-50 to-slate-50 rounded-xl p-8 border border-gold-subtle shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Frontie博士</h3>
                <p className="text-gold-400 font-semibold text-sm uppercase tracking-wide mb-4">创始会员</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Distinguished expert in international arbitration and digital law, contributing to the development of DWAC's procedural frameworks and standards.
                </p>
              </div>
            </div>

            {/* Dr. Venessa */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl p-8 border border-emerald-200 shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Venessa博士</h3>
                <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide mb-4">创始会员</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Leading expert in blockchain technology and smart contract disputes, providing critical insights for digital asset arbitration proceedings.
                </p>
              </div>
            </div>

            {/* Prof. Alec */}
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-8 border border-purple-200 shadow-lg">
              <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Alec教授</h3>
                <p className="text-purple-600 font-semibold text-sm uppercase tracking-wide mb-4">创始会员 & Arbitrator</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Expert in digital governance and international arbitration, contributing valuable insights to the development of fair and efficient dispute resolution mechanisms.
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
            <h2 className="text-3xl font-bold text-white mb-6">加入我们的仲裁员团队</h2>
            <p className="text-lg text-gray-400 mb-8">
              We are continually expanding our panel of arbitrators to meet the growing demand for digital dispute resolution. If you have expertise in digital law, blockchain, AI, or related fields, we invite you to apply.
            </p>
            <Link href="/zh-cn/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
              申请成为仲裁员
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
