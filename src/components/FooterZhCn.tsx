import Link from 'next/link'

export default function FooterZhCn() {
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
              首个专注于解决数字世界纠纷的永久性国际仲裁机构。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">快速链接</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/zh-cn/about/" className="text-gray-500 hover:text-gold-400 transition-colors">关于我们</Link></li>
              <li><Link href="/zh-cn/rules/" className="text-gray-500 hover:text-gold-400 transition-colors">仲裁规则</Link></li>
              <li><Link href="/zh-cn/arbitrators/join/" className="text-gray-500 hover:text-gold-400 transition-colors">成为仲裁员</Link></li>
              <li><Link href="/zh-cn/membership/" className="text-gray-500 hover:text-gold-400 transition-colors">会员资格</Link></li>
              <li><Link href="/zh-cn/charter/" className="text-gray-500 hover:text-gold-400 transition-colors">数字世界宪章</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">服务</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/zh-cn/how-to-apply/" className="text-gray-500 hover:text-gold-400 transition-colors">提交仲裁</Link></li>
              <li><Link href="/zh-cn/fees/" className="text-gray-500 hover:text-gold-400 transition-colors">收费标准</Link></li>
              <li><Link href="/zh-cn/fees/" className="text-gray-500 hover:text-gold-400 transition-colors">费用计算器</Link></li>
              <li><Link href="/zh-cn/downloads/" className="text-gray-500 hover:text-gold-400 transition-colors">示范条款</Link></li>
              <li><Link href="/zh-cn/evidence-guidance/" className="text-gray-500 hover:text-gold-400 transition-colors">证据指引</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-[2px] uppercase text-gold-500 mb-5">联系我们</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/zh-cn/contact/" className="text-gray-500 hover:text-gold-400 transition-colors">联系我们</Link></li>
              <li className="text-gray-500">邮箱: secretary@dwac.net</li>
              <li className="text-gray-500">域名: dwac.net</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gold-subtle/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} 数字世界仲裁中心 (DWAC). 保留所有权利。
            </p>
            <div className="flex items-center gap-4">
              <Link href="/zh-cn/privacy/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">隐私政策</Link>
              <Link href="/zh-cn/terms/" className="text-xs text-gray-600 hover:text-gold-400 transition-colors">服务条款</Link>
            </div>
          </div>
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
