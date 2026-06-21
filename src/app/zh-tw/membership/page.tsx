import Link from 'next/link'
export const metadata = {
  title: '會員 - 数字世界仲裁中心',
}


export default function MembershipZhTw() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">會員</h1>
          <p className="text-xl text-gray-300 max-w-2xl">加入DWAC，參與數字法治建設</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-8">聯繫我們了解詳細的會員類型和權益。</p>
          <Link href="/zh-tw/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            聯繫我們
          </Link>
        </div>
      </section>
    </div>
  )
}
