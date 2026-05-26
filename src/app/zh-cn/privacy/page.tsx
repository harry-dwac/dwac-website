
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隐私政策 - 数字世界仲裁中心',
  description: 'DWAC隐私政策，了解我们如何收集、使用和保护您的个人信息。',
}

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">隐私政策</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            您的隐私至关重要。了解DWAC如何收集、使用和保护您的信息。
          </p>
          <p className="text-sm text-gray-500 mt-2">最后更新：2026年5月</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-400">
            
            <h2 className="text-2xl font-bold text-white mb-4">1. 引言</h2>
            <p className="mb-6">
              数字世界仲裁中心（DWAC）致力于保护您的隐私。本隐私政策说明了当您访问我们的网站dwac.net、使用我们的仲裁服务或与我们的数字平台互动时，我们如何收集、使用、披露和保护您的信息。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. 我们收集的信息</h2>
            <h3 className="text-xl font-semibold text-white mb-3">2.1 个人信息</h3>
            <p className="mb-4">我们可能收集您自愿提供的个人信息，包括：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>姓名、电子邮件地址和联系方式</li>
              <li>专业资格和所属机构信息</li>
              <li>争议相关文件和通讯记录</li>
              <li>仲裁费用支付信息</li>
              <li>用于身份核验的证件</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 自动收集的数据</h3>
            <p className="mb-6">当您访问我们的平台时，我们可能自动收集：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP地址和浏览器类型</li>
              <li>设备信息和操作系统</li>
              <li>使用模式和页面访问记录</li>
              <li>Cookies和类似的跟踪技术</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. 我们如何使用您的信息</h2>
            <p className="mb-4">我们使用收集的信息用于：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>处理和管理仲裁程序</li>
              <li>就服务和更新与您沟通</li>
              <li>维护我们平台的安全性和完整性</li>
              <li>遵守法律义务和监管要求</li>
              <li>改进我们的服务和用户体验</li>
              <li>促进Agent仲裁员认证和核验</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">4. 信息共享和披露</h2>
            <p className="mb-4">我们不出售您的个人信息。我们可能在以下情况下共享信息：</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>仲裁当事人：</strong>争议解决所需的信息</li>
              <li><strong>认证仲裁员：</strong>相关的案件详情</li>
              <li><strong>服务提供商：</strong>协助我们运营的第三方</li>
              <li><strong>法律要求：</strong>法律或法院命令要求时</li>
              <li><strong>业务转让：</strong>与并购相关</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. 数据安全</h2>
            <p className="mb-6">
              我们实施适当的技术和组织措施，保护您的个人信息免受未经授权的访问、更改、披露或销毁。但是，互联网传输方式无法保证100%安全，我们无法保证绝对安全。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. 数据保留</h2>
            <p className="mb-6">
              我们仅在实现本政策所述目的所需的时间内保留个人信息，除非法律要求或争议解决目的需要更长的保留期。仲裁案件记录可能根据机构规则保留较长时间。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. 您的权利</h2>
            <p className="mb-4">根据您所在地区，您可能有权：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>访问并获取您的个人数据副本</li>
              <li>更正不准确或不完整的数据</li>
              <li>请求删除您的个人数据</li>
              <li>反对或限制某些处理活动</li>
              <li>以机器可读格式获取数据可移植性</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies和跟踪</h2>
            <p className="mb-6">
              我们的网站使用Cookies和类似技术来增强用户体验。您可以通过浏览器设置控制Cookies偏好。我们同时使用会话Cookies（临时）和持久性Cookies（在您的设备上保留一定时间）。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. 国际传输</h2>
            <p className="mb-6">
              您的信息可能被传输到您所在国家以外的国家进行处理。我们确保采取适当的保护措施，以符合适用的数据保护法律保护您的数据。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. 儿童隐私</h2>
            <p className="mb-6">
              我们的服务不面向18岁以下的个人。我们不会故意收集儿童的个人信息。如果您认为我们收集了未成年人的信息，请立即联系我们。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. 政策更新</h2>
            <p className="mb-6">
              我们可能会不时更新本隐私政策。我们将在本页发布新政策并更新"最后更新"日期，以通知您重大变更。您在变更后继续使用我们的服务即表示接受。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">12. 联系我们</h2>
            <p className="mb-6">
              如果您对本隐私政策有疑问或希望行使您的数据权利，请联系我们：
            </p>
            <div className="bg-navy-800/50 border border-gold-subtle rounded-lg p-6 mb-6">
              <p className="text-white font-medium mb-2">数字世界仲裁中心（DWAC）</p>
              <p className="text-gray-400">邮箱：privacy@dwac.net</p>
              <p className="text-gray-400">网站：<Link href="/zh-cn/contact/" className="text-gold-400 hover:text-gold-300">联系表单</Link></p>
            </div>

            <div className="border-t border-gold-subtle pt-6 mt-8">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} 数字世界仲裁中心 版权所有
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
