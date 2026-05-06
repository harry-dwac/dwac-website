import Link from 'next/link'

export default function CharterZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">數字世界公約</h1>
          <p className="text-xl text-gray-300 max-w-2xl">數字糾紛解決的基本原則</p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">序言</h2>
            <p className="text-gray-300 leading-relaxed">我們，公約的簽署方認識到數字世界作為人類活動新領域的出現，承認在這個日益重要的空間中建立法治的必要性，相信每個數字實體都有權獲得正義……</p>
            <p className="text-gray-300 leading-relaxed mt-4">特制定本數字世界公約，為解決數字環境中產生的糾紛提供全面的法律框架。</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-gold text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-tw/contact/" className="px-6 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              聯繫我們
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
