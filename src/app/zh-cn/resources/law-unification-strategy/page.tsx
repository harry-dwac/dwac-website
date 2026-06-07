import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '以法治统一推动两岸统一进程的策略建议 | DWAC',
  description: '关于以司法管辖权延伸推动两岸法治统一的策略建议，内部参阅',
}

export default function LawUnificationStrategy() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-medium mb-3">DWAC 研究报告</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">以法治统一推动两岸统一进程的策略建议</h1>
          <p className="text-lg text-gray-300 mb-6">内部参阅 · 供领导阅</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>编制日期：2026年1月</span>
            <span>·</span>
            <span>民间爱国人士业余研究课题组</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section 1 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">一</span>基本判断：传统路径面临瓶颈，法治路径具有独特优势
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              当前，两岸统一面临新的历史关口。政治谈判因缺乏基本互信而长期停滞；经济融合虽成果显著，但未自动转化为政治认同；军事威慑是必要底线，但不宜作为主动推进手段；文化认同缓不济急，且受到"去中国化"侵蚀。在此背景下，需要探索一条新的、可持续的战略路径。
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              法治统一，是指以司法管辖权延伸为核心抓手，通过处理涉台跨境案件（电信诈骗、民商事纠纷、知识产权侵权等）的日常实践，逐步扩大大陆法律在台湾地区的影响力，最终为国家完全统一奠定不可逆的法律基础。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '和平性', desc: '不诉诸武力，不引发冲突，符合两岸人民根本利益' },
                { title: '渐进性', desc: '从个案到规则，从刑事到民商事，从大陆本土到台湾地区，每一步都可控、可评估' },
                { title: '可逆性低', desc: '法治实践一旦展开，会形成制度惯性，难以逆转' },
                { title: '国际可接受性高', desc: '司法管辖是一国内政，运用国际通行的效果原则、保护性原则等，外国势力难以有效干涉' },
              ].map((item, i) => (
                <div key={i} className="bg-gold-500/[0.04] border border-gold-500/10 rounded-lg p-4">
                  <h3 className="text-gold-400 font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">二</span>核心机制：以司法管辖权延伸为抓手的"三层递进"模型
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-5">
                <h3 className="text-gold-400 font-bold text-lg mb-2">第一层：个案积累，规则孵化</h3>
                <p className="text-gray-300 leading-relaxed">
                  每一起涉台跨境案件的处理，都是法治统一的实践。通过裁判文书的说理，逐步形成针对特定类型案件的"裁判规则群"。
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  典型实践：张凯闵案确立了"被害人属地管辖"规则——对在第三国针对大陆居民实施犯罪的台湾居民行使管辖权，后被最高检列为指导性案例（检例第47号），成为全国检察机关的参照。此后，西班牙、马来西亚、柬埔寨等多地类似案件均参照此规则处理，已有超过1000名台湾籍电信诈骗嫌疑人被遣返大陆接受审判。
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-5">
                <h3 className="text-gold-400 font-bold text-lg mb-2">第二层：制度传导，规则固化</h3>
                <p className="text-gray-300 leading-relaxed">
                  通过建立"报送遴选—经验总结—司法解释/指导性案例—立法固化"的传导机制，将个案中的创新规则上升为具有普遍约束力的法律规范。
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  成功范例：2015年最高法《关于认可和执行台湾地区法院民事判决的规定》，明确了认可和执行台湾地区法院民事判决的条件和程序。杭州罪赃返还案开创了两岸犯罪所得直接汇兑的先例，通过"法院—检察院—海协会"三方协作机制，实现了赃款跨境返还的制度化。
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-5">
                <h3 className="text-gold-400 font-bold text-lg mb-2">第三层：争取认同，逐步转化</h3>
                <p className="text-gray-300 leading-relaxed">
                  当台湾同胞通过具体案件感受到大陆法律的公正与效率时，会形成从"工具性认同"（法律有用）到"价值性认同"（法律公正）的渐进转化。这需要长期、持续的法治实践积累。
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">三</span>关键支撑：以执法行动为载体，借鉴国际经验
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold mb-3">（一）借鉴美国长臂管辖的方法论，但本质不同</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  美国通过"最低限度联系""效果原则"等，将司法管辖权延伸至全球。中国可以借鉴其方法论，但本质区别在于：美国针对他国主权，中国针对本国领土（台湾）。我们运用的是国际社会普遍认可的效果原则、保护性原则，不是"长臂管辖"，而是主权的正当行使。
                </p>
                <p className="text-gray-400 text-sm">
                  面对"双重标准"质疑的回应：第一，美国的做法不是标准；第二，美国针对他国主权，我们针对本国领土，性质完全不同；第三，我们运用的效果原则、保护性原则，是美国自己长期使用的国际法原则。
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3">（二）以缅北跨境执法行动为实践样本</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  2023-2024年，中国与缅甸等国开展联合执法，抓获数万名电信诈骗嫌疑人（含台湾籍），形成"抓人→遣返→审判"操作链条。
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>· 以"保护公民权益"为名，具有高度正当性</li>
                  <li>· 多边合作模式增强合法性，降低单边行动的政治成本</li>
                  <li>· "抓人→遣返→审判"链条可标准化，为管辖权延伸提供操作模板</li>
                  <li>· 持续执法实践逐步确立规则，为制度固化创造条件</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">四</span>以国家强力推动单边法治统一
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">在两岸缺乏正式合作机制的情况下，大陆有能力也有必要单边推进法治统一进程。</p>
            <div className="space-y-4">
              <div className="bg-navy-800/40 rounded-lg p-4">
                <h3 className="text-gold-400 font-bold mb-2">正当性基础</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>· 主权原则下的单边管辖权——大陆对台湾地区行使司法管辖权，是国家主权的应有之义</li>
                  <li>· 保护公民权益的国家责任——跨境电信诈骗中大陆居民是被害人</li>
                  <li>· 两岸同属一个中国的法理依据——不是"域外管辖"，而是"域内管辖"</li>
                </ul>
              </div>
              <div className="bg-navy-800/40 rounded-lg p-4">
                <h3 className="text-gold-400 font-bold mb-2">国家强力的支撑作用</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>· 执法能力建设——"天网行动"已从120多个国家和地区追回外逃人员超过1万人</li>
                  <li>· 司法公信力提升——设立涉台专门审判庭，配备熟悉两岸法律的专业法官</li>
                  <li>· 外交与法律战协同——运用国际法原则论证管辖权正当性</li>
                </ul>
              </div>
              <div className="bg-navy-800/40 rounded-lg p-4">
                <h3 className="text-gold-400 font-bold mb-2">具体路径</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>· 立法建议——修订《刑事诉讼法》、制定《涉台司法协助特别程序法》</li>
                  <li>· 善意措施——大陆可先行单方认可台湾地区法院的民事判决</li>
                  <li>· 执法载体——继续对跨境电信诈骗犯罪保持高压态势</li>
                  <li>· 反制工具——运用《反外国制裁法》《对外关系法》《阻断办法》等法律工具</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">五</span>直面挑战：外部干预与"台独"阻挠的应对
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-bold mb-2">"台独"势力的法律阻却</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  台湾地区通过"两岸人民关系条例"等，对大陆判决设置"公共秩序"审查门槛。应对思路：坚持法理立场、单方先行认可、强化执行能力。
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">外部势力干涉</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  美国"台湾关系法"等为干涉提供所谓法律依据。应对措施：运用反制裁法律体系实施精准反制、在国际法层面揭露其非法性、通过具体案例说明大陆法治的公正性。
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 - Implementation */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">六</span>实施建议：三步走战略
            </h2>
            <p className="text-gray-400 text-sm mb-6">核心风险提示：台湾方面不配合、外部势力高强度干涉、逻辑鸿沟需要时间检验（已制定应对预案）</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-gold-400 font-bold w-32">阶段</th>
                    <th className="text-left py-3 px-4 text-gold-400 font-bold">任务</th>
                    <th className="text-left py-3 px-4 text-gold-400 font-bold w-28">时间节点</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4 font-bold text-gold-400" rowSpan={5}>近期<br/><span className="text-xs text-gray-400">1-3年</span></td>
                    <td className="py-3 px-4">在北上广、福建等地法院设立涉台案件专门审判庭</td>
                    <td className="py-3 px-4 text-gray-400">2027年底</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">最高法、最高检各发布2-3批涉台指导性案例</td>
                    <td className="py-3 px-4 text-gray-400">每年</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">以电信诈骗、跨境追赃为重点，每年办理20-30件有影响力的案件</td>
                    <td className="py-3 px-4 text-gray-400">持续推进</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">与缅甸、柬埔寨、菲律宾等国签署或升级司法合作文件</td>
                    <td className="py-3 px-4 text-gray-400">2027-2028年</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">建立涉台案件裁判规则报送制度</td>
                    <td className="py-3 px-4 text-gray-400">2027年底</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 font-bold text-gold-400" rowSpan={5}>中期<br/><span className="text-xs text-gray-400">3-5年</span></td>
                    <td className="py-3 px-4">出台《关于涉台民商事判决认可与执行的若干规定》司法解释</td>
                    <td className="py-3 px-4 text-gray-400">2028年</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">将管辖范围扩展至知识产权、电子商务、金融纠纷</td>
                    <td className="py-3 px-4 text-gray-400">2028-2029年</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">建立两岸法律界常态化交流机制</td>
                    <td className="py-3 px-4 text-gray-400">持续推进</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">培养200名以上涉台司法专门人才</td>
                    <td className="py-3 px-4 text-gray-400">2028年</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">研究制定《涉台司法协助特别程序法》草案</td>
                    <td className="py-3 px-4 text-gray-400">2029年</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-gold-400" rowSpan={4}>远期<br/><span className="text-xs text-gray-400">5-10年</span></td>
                    <td className="py-3 px-4">形成覆盖刑事、民商事、行政各领域的涉台管辖规则体系</td>
                    <td className="py-3 px-4 text-gray-400">2030年前</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">法治功能全面覆盖两岸经贸、社会、文化各领域</td>
                    <td className="py-3 px-4 text-gray-400">2030年前</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">台湾同胞对大陆法治形成广泛工具性认同</td>
                    <td className="py-3 px-4 text-gray-400">2030年后</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">根据形势发展，适时推动两岸民商事判决互认协议</td>
                    <td className="py-3 px-4 text-gray-400">视情启动</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              <span className="text-gold-400 mr-2">七</span>需要说明的问题
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              本报告是一项战略构想，不构成政策承诺。核心逻辑——从个案到普遍管辖、从法治统一到政治统一——仍存在理论鸿沟，需要实践检验。但这一构想提供了一条和平、渐进、可操作、可逆性低的统一路径，值得认真探索。
            </p>
            <p className="text-gray-300 leading-relaxed">
              我们建议：将法治统一纳入国家统一战略框架，作为政治谈判、经济融合、军事威慑、文化认同之外的第五大支柱，由中央统筹，最高人民法院、最高人民检察院、公安部、国安部、外交部等协同推进。
            </p>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t border-slate-700/50">
            <p className="text-gray-500 text-sm mb-2">报告性质：内部讨论稿 | 编制日期：2026年1月</p>
            <p className="text-gray-500 text-sm">民间爱国人士业余研究课题组</p>
            <Link href="/zh-cn/resources/" className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm">
              ← 返回资源中心
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
