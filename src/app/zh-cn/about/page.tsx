
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于DWAC - 数字世界仲裁中心',
  description: '了解DWAC为数字世界建立法治的使命，通过公平高效的仲裁服务解决数字纠纷。',
}

import Link from 'next/link'

export default function AboutZhCn() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">关于DWAC</h1>
          <p className="text-xl text-gray-300 max-w-2xl">为数字世界建立法治</p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我们的使命</h2>
            <div className="prose prose-lg max-w-none text-gray-400">
              <p className="text-xl font-medium text-gray-200 mb-6">为数字世界建立法治</p>
              <p className="mb-4">当物理世界的边界不再是障碍，当AI代理开始签署合约，当NFT成为数字资产，当数据跨境流动像呼吸一样自然……</p>
              <p className="mb-4">数字世界需要自己的仲裁者。</p>
              <p className="mb-4">DWAC为此而诞生。</p>
              <p className="mb-4">我们致力于：</p>
              <ul className="list-disc pl-6 mb-6">
                <li>为数字纠纷提供公正、高效的解决方案</li>
                <li>推广数字世界公约，推进全球数字治理标准</li>
                <li>培养数字法律人才，促进学术研究</li>
                <li>为全球数字法治发展提供参考模式</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">我们的愿景</h2>
            <div className="bg-gold-500/[0.06] border-l-4 border-gold-500 p-6 rounded-r-lg">
              <p className="text-xl font-medium text-gray-200 mb-4">数字正义无处不在，服务每一个人</p>
              <p className="text-gray-400">在未来，每一个数字实体——无论是AI代理、数字平台，还是跨境数据所有者——都将在DWAC找到公平、专业、高效的争议解决方案。</p>
              <p className="text-gray-400 mt-4">我们相信，通过不懈努力，一个有序、公正的数字世界法治终将建立。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DWAC Over Traditional Methods */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">为什么选择DWAC而非传统方式</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-navy-800/40">
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">维度</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">传统诉讼</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold">传统仲裁</th>
                  <th className="border border-gold-subtle px-4 py-3 text-left font-semibold bg-gold-500/10">DWAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">管辖确定性</td>
                  <td className="border border-gold-subtle px-4 py-3">低</td>
                  <td className="border border-gold-subtle px-4 py-3">中等</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">高</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium">流程周期</td>
                  <td className="border border-gold-subtle px-4 py-3">1-3年</td>
                  <td className="border border-gold-subtle px-4 py-3">6-18个月</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">90天/30天</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">专业能力</td>
                  <td className="border border-gold-subtle px-4 py-3">参差不齐</td>
                  <td className="border border-gold-subtle px-4 py-3">部分具备</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">数字法律专家</td>
                </tr>
                <tr className="bg-navy-800/30">
                  <td className="border border-gold-subtle px-4 py-3 font-medium">跨境执行</td>
                  <td className="border border-gold-subtle px-4 py-3">困难</td>
                  <td className="border border-gold-subtle px-4 py-3">良好</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">最优（纽约公约+专业机制）</td>
                </tr>
                <tr>
                  <td className="border border-gold-subtle px-4 py-3 font-medium">在线流程</td>
                  <td className="border border-gold-subtle px-4 py-3">低</td>
                  <td className="border border-gold-subtle px-4 py-3">部分支持</td>
                  <td className="border border-gold-subtle px-4 py-3 bg-gold-500/[0.06] font-semibold">全程在线</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">里程碑</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026</h3>
                  <p className="text-gray-400">DWAC正式发起成立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第一季度</h3>
                  <p className="text-gray-400">仲裁规则发布，首批仲裁员名册建立</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第二季度</h3>
                  <p className="text-gray-400">在线仲裁平台上线（Alpha版本）</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第三季度</h3>
                  <p className="text-gray-400">试运行，受理模拟案件</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2026年第四季度</h3>
                  <p className="text-gray-400">理事会组成完成</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-gold-500/[0.06] rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-white">2027年及以后</h3>
                  <p className="text-gray-400">全球拓展，设立区域办公室</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">创始人</h2>
          <div className="max-w-2xl mx-auto bg-navy-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-2">周永俊</h3>
            <p className="text-gold-600 font-medium mb-4">DWAC创始人</p>
            <ul className="space-y-2 text-gray-400">
              <li>✝《全球网络法典》编纂者</li>
              <li>📚网络安全法与国际仲裁研究者</li>
              <li>📝《数字世界宪章·示范法》首席起草人</li>
              <li>⚖️AI辅助争议解决倡导者</li>
              <li>📌DWAC——世界首个永久性数字仲裁机构——发起人</li>
              <li>🌐连接传统法学与数字治理的桥梁</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">想了解更多？</h2>
          <p className="text-gold-300 mb-8 max-w-2xl mx-auto">探索我们的数字世界公约或联系我们。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zh-cn/charter/" className="px-6 py-3 bg-navy-800/20 text-gold-600 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors">
              阅读公约
            </Link>
            <Link href="/zh-cn/contact/" className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-navy-800/20 transition-colors">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
