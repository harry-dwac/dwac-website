import Link from 'next/link'

export default function JoinZhCn() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">成为仲裁员</h1>
          <p className="text-xl text-gray-300 max-w-2xl">加入我们的数字法律专家精英团队</p>
        </div>
      </section>
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">为什么加入DWAC？</h2>
          <ul className="list-disc pl-6 text-gray-400 space-y-3 mb-8">
            <li>专注数字法律，处理前沿纠纷</li>
            <li>具有竞争力的专业费用</li>
            <li>与领先数字法律专业人士交流</li>
            <li>灵活在线方式进行听证</li>
          </ul>
          <Link href="/zh-cn/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-white font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            联系我们申请
          </Link>
        </div>
      </section>
    </div>
  )
}
