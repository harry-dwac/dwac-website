import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch with DWAC for dispute resolution, arbitration inquiries, or partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">secretary@dwac.net</p>
                    <p className="text-gray-400">secretary@dwac.net</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Website</h3>
                    <p className="text-gray-400">dwac.net</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-navy-800/30 rounded-xl">
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/dispute/" className="block text-gold-600 hover:text-gold-400 font-medium">
                    �?File a Dispute
                  </Link>
                  <Link href="/fee-calculator/" className="block text-gold-600 hover:text-gold-400 font-medium">
                    �?Fee Calculator
                  </Link>
                  <Link href="/arbitrators/join/" className="block text-gold-600 hover:text-gold-400 font-medium">
                    �?Become an Arbitrator
                  </Link>
                  <Link href="/membership/" className="block text-gold-600 hover:text-gold-400 font-medium">
                    �?Membership
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
              <div className="bg-navy-800/30 p-6 rounded-xl">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:border-gold-500 focus:outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:border-gold-500 focus:outline-none" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                    <select className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:border-gold-500 focus:outline-none bg-navy-800/20">
                      <option>Dispute Resolution</option>
                      <option>Arbitration Inquiry</option>
                      <option>Partnership</option>
                      <option>Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                    <textarea rows={5} className="w-full px-4 py-2 border border-gold-subtle rounded-lg focus:border-gold-500 focus:outline-none" placeholder="Your message..."></textarea>
                  </div>
                  <button className="w-full py-3 bg-gradient-gold hover:bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg transition-colors">
                    Send Message
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  For urgent arbitration matters, please email directly at <a href="mailto:secretary@dwac.net" className="text-gold-600">secretary@dwac.net</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
