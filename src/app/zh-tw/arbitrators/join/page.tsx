import Link from 'next/link'

export default function JoinZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">成為仲裁員</h1>
          <p className="text-xl text-gray-300 max-w-2xl">加入我們的數字法律專家精英團隊</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">為什麼加入DWAC？</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-3 mb-8">
            <li>專注數字法律，處理前沿糾紛</li>
            <li>具有競爭力的專業費用</li>
            <li>與領先數字法律專業人士交流</li>
            <li>靈活線上方式進行聽證</li>
          </ul>
          <Link href="/zh-tw/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            聯繫我們申請
          </Link>
        </div>
      </section>
    </div>
  )
}
