import Link from 'next/link'

export default function FooterZhTw() {
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
              首個專注於解決數位世界糾紛的永久性國際仲裁機構。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">快速連結</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/zh-tw/about/" className="text-gray-500 hover:text-gold-400 transition-colors">關於我們</Link></li>
              <li><Link href="/zh-tw/rules/" className="text-gray-500 hover:text-gold-400 transition-colors">仲裁規則</Link></li>
              <li><Link href="/zh-tw/arbitrators/join/" className="text-gray-500 hover:text-gold-400 transition-colors">成為仲裁員</Link></li>
              <li><Link href="/zh-tw/membership/" className="text-gray-500 hover:text-gold-400 transition-colors">會員資格</Link></li>
              <li><Link href="/zh-tw/charter/" className="text-gray-500 hover:text-gold-400 transition-colors">數位世界憲章</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">服務</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/zh-tw/how-to-apply/" className="text-gray-500 hover:text-gold-400 transition-colors">提交仲裁</Link></li>
              <li><Link href="/zh-tw/fees/" className="text-gray-500 hover:text-gold-400 transition-colors">收費標準</Link></li>
              <li><Link href="/zh-tw/fee-calculator/" className="text-gray-500 hover:text-gold-400 transition-colors">費用計算器</Link></li>
              <li><Link href="/zh-tw/model-clause/" className="text-gray-500 hover:text-gold-400 transition-colors">示範條款</Link></li>
              <li><Link href="/zh-tw/evidence-guidance/" className="text-gray-500 hover:text-gold-400 transition-colors">證據指引</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">聯繫我們</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/zh-tw/contact/" className="text-gray-500 hover:text-gold-400 transition-colors">聯繫我們</Link></li>
              <li className="text-gray-500">郵箱: secretary@dwac.net</li>
              <li className="text-gray-500">域名: dwac.net</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gold-subtle/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} 數位世界仲裁中心 (DWAC). 保留所有權利。
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
