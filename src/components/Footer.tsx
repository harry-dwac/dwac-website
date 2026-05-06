import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gold-subtle bg-navy-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border border-gold-500 rounded-md flex items-center justify-center">
                <span className="font-serif font-bold text-gold-400 text-xs">D</span>
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-[2px]">DWAC</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              The world&apos;s first permanent international arbitration institution dedicated to resolving digital world disputes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about/" className="text-gray-500 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/rules/" className="text-gray-500 hover:text-gold-400 transition-colors">Arbitration Rules</Link></li>
              <li><Link href="/arbitrators/join/" className="text-gray-500 hover:text-gold-400 transition-colors">Become an Arbitrator</Link></li>
              <li><Link href="/membership/" className="text-gray-500 hover:text-gold-400 transition-colors">Membership</Link></li>
              <li><Link href="/charter/" className="text-gray-500 hover:text-gold-400 transition-colors">Digital World Charter</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/dispute/" className="text-gray-500 hover:text-gold-400 transition-colors">File a Dispute</Link></li>
              <li><Link href="/fees/" className="text-gray-500 hover:text-gold-400 transition-colors">Fee Schedule</Link></li>
              <li><Link href="/fee-calculator/" className="text-gray-500 hover:text-gold-400 transition-colors">Fee Calculator</Link></li>
              <li><Link href="/model-clause/" className="text-gray-500 hover:text-gold-400 transition-colors">Model Clause</Link></li>
              <li><Link href="/evidence-guidance/" className="text-gray-500 hover:text-gold-400 transition-colors">Evidence Guidance</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/contact/" className="text-gray-500 hover:text-gold-400 transition-colors">Get in Touch</Link></li>
              <li className="text-gray-500">Email: secretary@dwac.net</li>
              <li className="text-gray-500">Domain: dwac.net</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gold-subtle/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Digital World Arbitration Centre (DWAC). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">EN</Link>
            <Link href="/zh-cn/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">简体中文</Link>
            <Link href="/zh-tw/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">繁體中文</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
