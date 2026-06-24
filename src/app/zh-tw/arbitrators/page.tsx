import Link from 'next/link'

export default function ArbitratorsZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁員名冊</h1>
          <p className="text-xl text-gray-300 max-w-2xl">我們的數位法律專家團隊</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-8">我們的仲裁員名冊正在建立中。如果您是有資格的法律專業人員，請申請加入。</p>
          <Link href="/zh-tw/arbitrators/join/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            申請加入
          </Link>
        </div>
      </section>
    </div>
  )
}
