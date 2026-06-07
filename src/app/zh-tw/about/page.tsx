import Link from 'next/link'

export default function AboutZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">關於DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">為數字世界建立法治</p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我們的使命</h2>
            <p className="text-xl font-medium text-gray-200 mb-6">為數字世界建立法治</p>
            <p className="text-gray-400 mb-4">當物理世界的邊界不再是障礙，當AI代理開始簽署合約，當NFT成為數字資產，當資料跨境流動像呼吸一樣自然……</p>
            <p className="text-gray-400 mb-4">數字世界需要自己的仲裁者。</p>
            <p className="text-gray-400 mb-4">DWAC為此而誕生。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/charter/" className="px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              閱讀公約
            </Link>
            <Link href="/zh-tw/contact/" className="px-6 py-3 border-2 border-gold-500 text-gold-500 font-semibold rounded-lg hover:bg-gold-500/[0.05] transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
