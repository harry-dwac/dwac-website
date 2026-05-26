
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '服务条款 - 数字世界仲裁中心',
  description: 'DWAC服务条款。使用我们的服务即表示您同意这些条款。',
}

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">服务条款</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            使用DWAC的服务即表示您同意这些条款。请仔细阅读。
          </p>
          <p className="text-sm text-gray-500 mt-2">最后更新：2026年5月</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-400">
            
            <h2 className="text-2xl font-bold text-white mb-4">1. 条款接受</h2>
            <p className="mb-6">
              通过访问或使用数字世界仲裁中心（DWAC）网站（dwac.net）和仲裁服务，您同意受本服务条款约束。如果您不同意这些条款，请勿使用我们的服务。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. 服务描述</h2>
            <p className="mb-4">DWAC提供：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>数字世界争议仲裁服务</li>
              <li>Agent仲裁员认证和核验</li>
              <li>虚拟听证室设施</li>
              <li>争议解决资源和指导</li>
              <li>数字仲裁教育内容</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. 用户资格</h2>
            <p className="mb-6">
              使用我们的服务，您必须年满18岁并具有订立有约束力协议的法律能力。使用我们的服务即表示您声明您符合这些资格要求。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. 用户责任</h2>
            <p className="mb-4">您同意：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>提供准确真实的信息</li>
              <li>保护您的账户凭证机密性</li>
              <li>遵守所有适用法律法规</li>
              <li>尊重其他用户和仲裁员的权利</li>
              <li>不将我们的服务用于非法或欺诈目的</li>
              <li>不干扰我们平台的正常运行</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. 仲裁程序</h2>
            <h3 className="text-xl font-semibold text-white mb-3">5.1 适用规则</h3>
            <p className="mb-4">
              通过DWAC进行的所有仲裁程序均受我们的<Link href="/zh-cn/rules/" className="text-gold-400 hover:text-gold-300">仲裁规则</Link>管辖。发起或参与仲裁即表示您同意受这些规则约束。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 保密性</h3>
            <p className="mb-6">
              仲裁程序是保密的。您同意不向第三方披露任何与程序相关的信息，除非法律要求或经所有当事方同意。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.3 裁决和决定</h3>
            <p className="mb-6">
              DWAC作出的仲裁裁决是终局性的并具有约束力。您同意遵守您案件中作出的任何裁决，但须遵守关于执行和上诉的适用法律。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Agent仲裁员</h2>
            <h3 className="text-xl font-semibold text-white mb-3">6.1 认证</h3>
            <p className="mb-6">
              Agent仲裁员是由DWAC认证的AI驱动仲裁助手。它们在程序中的使用须符合我们的认证标准和道德准则。了解更多请访问我们的<Link href="/zh-cn/arbitrators/join/" className="text-gold-400 hover:text-gold-300">Agent仲裁员计划</Link>。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 责任限制</h3>
            <p className="mb-6">
              虽然Agent仲裁员旨在协助仲裁流程，但最终决定由人类仲裁员作出。DWAC不对按照指南使用Agent仲裁员输出中的错误或遗漏承担责任。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. 费用和支付</h2>
            <p className="mb-4">
              仲裁服务费用根据我们的<Link href="/zh-cn/fees/" className="text-gold-400 hover:text-gold-300">费用表</Link>确定。使用我们的服务即表示您同意支付所有适用费用。支付条款在个别案件协议中规定。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. 知识产权</h2>
            <p className="mb-6">
              dwac.net上的所有内容，包括文本、图形、标志和软件，均为DWAC或其许可方的财产，受知识产权法保护。未经我们事先书面同意，您不得复制、分发或创作衍生作品。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. 责任限制</h2>
            <p className="mb-6">
              在法律允许的最大范围内，DWAC不对因您使用我们的服务而产生的任何间接、附带、特殊、后果性或惩罚性损害承担责任。我们的总责任不超过您就引起索赔的具体服务支付的费用。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. 赔偿</h2>
            <p className="mb-6">
              您同意赔偿并使DWAC及其高管、董事、员工和代理人免受因您使用我们的服务或违反这些条款而产生的任何索赔、损害或费用的影响。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. 保证免责声明</h2>
            <p className="mb-6">
              我们的服务按"原样"提供，不附带任何明示或暗示的保证。我们不保证我们的服务将不间断、无错误或安全。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">12. 条款修改</h2>
            <p className="mb-6">
              我们保留随时修改这些条款的权利。变更将在本页发布后生效。您在变更后继续使用我们的服务即表示接受修改后的条款。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">13. 终止</h2>
            <p className="mb-6">
              我们可自行决定随时终止或暂停您对我们服务的访问，无需通知，原因包括我们认为违反这些条款或对其他用户、我们或第三方有害的行为，或任何其他原因。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">14. 适用法律和争议解决</h2>
            <p className="mb-6">
              这些条款应受适用的国际仲裁法律管辖并据此解释。因这些条款产生的任何争议应通过DWAC根据其规则管理的仲裁解决。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">15. 可分割性</h2>
            <p className="mb-6">
              如果这些条款的任何条款被认定不可执行，其余条款应继续完全有效。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">16. 联系我们</h2>
            <p className="mb-6">
              如果您对这些服务条款有疑问，请联系我们：
            </p>
            <div className="bg-navy-800/50 border border-gold-subtle rounded-lg p-6 mb-6">
              <p className="text-white font-medium mb-2">数字世界仲裁中心（DWAC）</p>
              <p className="text-gray-400">邮箱：legal@dwac.net</p>
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
