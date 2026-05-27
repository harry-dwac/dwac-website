import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DWAC 仲裁规则（全文） | 数字世界仲裁中心",
  description: "数字世界仲裁中心（DWAC）仲裁规则完整文本",
  keywords: ["DWAC", "仲裁规则", "全文", "程序规则"],
};

export default function ZhCnRulesFull() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">DWAC 仲裁规则（全文）</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            数字世界仲裁中心完整程序规则
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-white mb-6">目录</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
              <li><a href="#section1" className="text-gold-400 hover:underline">一般规定</a></li>
              <li><a href="#section2" className="text-gold-400 hover:underline">仲裁的开始</a></li>
              <li><a href="#section3" className="text-gold-400 hover:underline">仲裁庭</a></li>
              <li><a href="#section4" className="text-gold-400 hover:underline">程序</a></li>
              <li><a href="#section5" className="text-gold-400 hover:underline">裁决</a></li>
              <li><a href="#section6" className="text-gold-400 hover:underline">费用</a></li>
            </ol>

            <div className="prose prose-invert max-w-none">
              <h3 id="section1" className="text-xl font-bold text-white mt-8 mb-4">第一节：一般规定</h3>
              <p className="text-gray-300 mb-4">
                <strong>规则 1.1</strong> — 本规则管辖数字世界仲裁中心（DWAC）的仲裁程序。
              </p>
              <p className="text-gray-300 mb-4">
                <strong>规则 1.2</strong> — 当事人可以协议修改或补充本规则，但该修改与适用法律强制性规定冲突的除外。
              </p>
              <p className="text-gray-300 mb-4">
                <strong>规则 1.3</strong> — 仲裁的官方语言应为英语，除非当事人另有约定。
              </p>

              <h3 id="section2" className="text-xl font-bold text-white mt-8 mb-4">第二节：仲裁的开始</h3>
              <p className="text-gray-300 mb-4">
                <strong>规则 2.1</strong> — 仲裁自申请人向 DWAC 提交仲裁申请书时开始。
              </p>

              <h3 id="section3" className="text-xl font-bold text-white mt-8 mb-4">第三节：仲裁庭</h3>
              <p className="text-gray-300 mb-4">
                <strong>规则 3.1</strong> — 仲裁庭应由一名或三名仲裁员组成，由当事人协议决定。
              </p>

              <h3 id="section6" className="text-xl font-bold text-white mt-8 mb-4">第六节：费用</h3>
              <p className="text-gray-300 mb-4">
                <strong>规则 6.1</strong> — 仲裁费用应由仲裁庭决定由当事人承担。
              </p>
            </div>

            <div className="mt-8 p-4 bg-gold-500/[0.06] border-l-4 border-gold-subtle rounded-r-lg">
              <p className="text-gold-400 text-sm">
                <strong>注：</strong> 此为 DWAC 仲裁规则摘要。完整权威文本请联系 <a href="mailto:secretary@dwac.net" className="underline">secretary@dwac.net</a>。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
