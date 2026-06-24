import Link from 'next/link'
export const metadata = {
  title: '会员 - 数字世界仲裁中心',
}


export default function MembershipZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">会员</h1>
          <p className="text-xl text-gray-300 max-w-2xl">加入DWAC，参与数字法治建设</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">会员类型</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-8">联系我们了解详细的会员类型和权益。</p>
            <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
