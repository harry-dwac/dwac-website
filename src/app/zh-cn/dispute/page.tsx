import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "争议解决 | DWAC",
  description: "DWAC 数字世界仲裁中心 - 专业解决数字经济争议",
};

export default function DisputePage() {
  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-800 to-navy-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              争议解决
            </h1>
            <p className="text-xl text-gold-400 mb-8">
              专业、高效、可信赖的数字争议解决方案
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-navy-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* 服务类型 */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-navy-700/50 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-xl font-semibold text-gold-400 mb-4">商事仲裁</h3>
                <p className="text-gray-300">专业仲裁员团队，快速解决商业纠纷</p>
              </div>
              
              <div className="bg-navy-700/50 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-xl font-semibold text-gold-400 mb-4">域名争议</h3>
                <p className="text-gray-300">专业处理域名抢注、侵权等争议</p>
              </div>
              
              <div className="bg-navy-700/50 p-6 rounded-lg border border-gold-500/20">
                <h3 className="text-xl font-semibold text-gold-400 mb-4">在线调解</h3>
                <p className="text-gray-300">灵活高效的替代性争议解决方式</p>
              </div>
            </div>
            
            {/* 流程说明 */}
            <div className="bg-navy-700/30 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">争议解决流程</h2>
              <ol className="space-y-4 text-gray-300">
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-bold">1</span>
                  <div>
                    <h4 className="font-semibold text-white">提交申请</h4>
                    <p>在线提交争议解决申请书及相关证据材料</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-bold">2</span>
                  <div>
                    <h4 className="font-semibold text-white">组成仲裁庭</h4>
                    <p>根据争议性质选择合适的仲裁员组成仲裁庭</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-bold">3</span>
                  <div>
                    <h4 className="font-semibold text-white">审理与裁决</h4>
                    <p>通过在线平台进行审理，高效作出裁决</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gold-500 text-navy-900 rounded-full flex items-center justify-center font-bold">4</span>
                  <div>
                    <h4 className="font-semibold text-white">执行监督</h4>
                    <p>协助当事人执行仲裁裁决</p>
                  </div>
                </li>
              </ol>
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <Link
                href="/zh-cn/arbitration"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                开始申请仲裁
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
