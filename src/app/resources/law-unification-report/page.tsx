import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advancing Cross-Strait Rule-of-Law Unification Through the Extension of Judicial Jurisdiction | DWAC',
  description: 'A comprehensive research report on achieving national unification through the rule of law and judicial jurisdiction extension.',
}

const toc = [
  { id: 'intro', label: 'Introduction' },
  { id: 'ch1', label: 'Chapter 1: Origins and Limitations of Traditional Approaches' },
  { id: 'ch2', label: 'Chapter 2: Core Conception — Judicial Jurisdiction Extension' },
  { id: 'ch3', label: 'Chapter 3: Unilateral Advancement with State Power' },
  { id: 'ch4', label: 'Chapter 4: External Interference and Legal Obstacles' },
  { id: 'ch5', label: 'Chapter 5: Supporting Roles of Economy, Society, and Culture' },
  { id: 'ch6', label: 'Chapter 6: Conclusions and Implementation Recommendations' },
]

export default function LawUnificationReport() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-medium mb-3">DWAC Comprehensive Research Report</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Advancing Cross-Strait Rule-of-Law Unification Through the Extension of Judicial Jurisdiction
          </h1>
          <p className="text-xl text-gray-300 mb-6">— A Research Report on Achieving National Unification Through the Rule of Law</p>
          <div className="bg-gold-500/[0.06] border border-gold-500/20 rounded-lg p-4 text-gray-400 text-sm">
            Disclaimer: This report is an internal discussion draft presenting a strategic conception based on existing research. It does not claim to resolve all theoretical disputes or practical challenges, nor does it represent a final policy determination. Some analyses are speculative in nature and require further verification through practice.
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400 mt-4">
            <span>Date: January 2026</span>
            <span>·</span>
            <span>Civilian Patriotic Research Group</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy-800/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-12">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="sticky top-8 bg-slate-900/50 border border-slate-700/50 rounded-xl p-5">
                <h3 className="text-gold-400 font-bold mb-4 text-sm">Table of Contents</h3>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="block text-gray-400 hover:text-gold-400 text-sm leading-relaxed transition-colors">
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-12 max-w-4xl">

              {/* Introduction */}
              <div id="intro" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>The historical roots of the Taiwan question are deeply embedded in the millennia-long historical trajectory of the Chinese nation. From multiple dimensions—historical documents, archaeological findings, blood relations, and cultural heritage—Taiwan has been an inseparable part of Chinese territory since ancient times.</p>
                  <p>Over seven decades of separation have created considerable psychological barriers and social differences between compatriots on both sides of the Strait. From a rule-of-law perspective, cross-strait separation has also resulted in the actual division of judicial jurisdiction. How to gradually achieve the unification of judicial jurisdiction through rule-of-law means, thereby creating conditions for political unification, is the core question this report seeks to explore.</p>
                  <div className="bg-navy-800/40 rounded-lg p-4 mt-4">
                    <h3 className="text-gold-400 font-bold mb-2">Key Concept Definitions</h3>
                    <p className="text-sm"><strong className="text-white">Rule-of-law unification</strong> refers to a strategic path that, while upholding the one-China principle, uses rule-of-law measures as the primary method—through the gradual extension of judicial jurisdiction, promotion of legal system coordination, and expansion of rule-of-law functional coverage—to ultimately achieve the complete unification of national sovereignty and territorial integrity.</p>
                    <p className="text-sm mt-2"><strong className="text-white">Extension of judicial jurisdiction</strong> refers to the process by which mainland judicial organs, in accordance with the principle of national sovereignty, exercise jurisdiction over cases involving cross-strait factors, and gradually expand the scope and influence of jurisdiction through the handling of individual cases.</p>
                  </div>
                </div>
              </div>

              {/* Chapter 1 */}
              <div id="ch1" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-gold-400 mr-2">Chapter 1</span>Origins and Limitations of Traditional Approaches
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">Historical Origins of the Taiwan Question</h3>
                    <div className="text-gray-300 leading-relaxed text-sm space-y-3">
                      <p>China&apos;s jurisdictional records over Taiwan trace back to the Three Kingdoms period (230 CE). The Song-Yuan dynasties established administrative offices in Penghu. Following the Qing unification of Taiwan in 1683, Taiwan Prefecture was established under Fujian Province, and in 1885, Taiwan was formally established as a province. After the 1895 Treaty of Shimonoseki, Taiwan was ceded to Japan; compatriots in Taiwan waged fifty years of armed and cultural resistance. In 1945, pursuant to the Cairo Declaration and Potsdam Proclamation, Taiwan was restored to China, but due to civil war and external intervention, cross-strait political separation persists to this day.</p>
                      <p>UN General Assembly Resolution 2758 (1971) confirmed China&apos;s sovereignty over Taiwan at the international law level. The most direct manifestation of cross-strait separation in the rule-of-law domain is the actual division of judicial jurisdiction.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">Limitations of Traditional Approaches</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Political Negotiation', issue: 'Lack of mutual trust, asymmetrical bargaining positions, internal political constraints, external interference', verdict: 'Core issues exposed prematurely,陷入 zero-sum dilemma' },
                        { title: 'Economic Integration', issue: 'Separation of economic rationality from political identity, double-edged nature of dependency, uneven distribution', verdict: 'Close economic ties do not necessarily lead to political unification' },
                        { title: 'Military Deterrence', issue: 'Casualties, social upheaval, external intervention, difficulty winning hearts and minds', verdict: 'Should be positioned as deterrence and failsafe, not primary tool' },
                        { title: 'Cultural Identity', issue: 'Too slow, identity erosion, gap between identity and action', verdict: 'Long-term value but insufficient for pressing challenges' },
                      ].map((item, i) => (
                        <div key={i} className="bg-navy-800/40 rounded-lg p-4">
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-gray-400 text-xs mb-2">{item.issue}</p>
                          <p className="text-gold-400 text-xs font-medium">{item.verdict}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">The Rule of Law: A Neglected Dimension</h3>
                    <p className="text-gray-300 text-sm">Rule-of-law practice has revealed four strategic values: a <strong className="text-white">predictable institutional framework</strong>, a <strong className="text-white">peaceful channel for dispute resolution</strong>, a <strong className="text-white">practical platform for building consensus</strong>, and an <strong className="text-white">effective pathway for winning popular support</strong>.</p>
                  </div>
                </div>
              </div>

              {/* Chapter 2 */}
              <div id="ch2" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-gold-400 mr-2">Chapter 2</span>Core Conception: Judicial Jurisdiction Extension
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">Unique Advantages of the Rule of Law</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: 'Normativity & Predictability', desc: 'Law provides clear behavioral norms for cross-strait interactions, reducing uncertainty and building institutional trust' },
                        { title: 'Low Confrontation & Mildness', desc: 'Transforms disputes into legal questions, resolved within a legal framework, diluting political opposition' },
                        { title: 'Legitimacy Foundation', desc: 'Legal legitimacy (sovereignty principle), historical legitimacy, practical legitimacy, value-based legitimacy' },
                        { title: 'International Acceptability', desc: 'Rule of law is a universal language; judicial jurisdiction is a domestic matter; foreign interference is difficult' },
                      ].map((item, i) => (
                        <div key={i} className="bg-gold-500/[0.04] border border-gold-500/10 rounded-lg p-4">
                          <h4 className="text-gold-400 font-bold mb-1 text-sm">{item.title}</h4>
                          <p className="text-gray-400 text-xs">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">Three Dimensions of Jurisdiction Extension</h3>
                    <div className="space-y-3">
                      {[
                        { dim: 'Subject Dimension', desc: 'Jurisdiction over cases involving Taiwan compatriots\' activities on the mainland—reflecting the personal nature of sovereignty' },
                        { dim: 'Behavioral Dimension', desc: 'Jurisdiction over legal acts involving cross-strait factors—reflecting the territorial nature of sovereignty' },
                        { dim: 'Territorial Dimension', desc: 'Jurisdiction over cases involving the Taiwan region—reflecting sovereignty\'s spatial coverage' },
                      ].map((item, i) => (
                        <div key={i} className="border-l-4 border-gold-500 pl-4">
                          <h4 className="text-white font-bold">{item.dim}</h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">Three-Layer Progressive Model</h3>
                    <div className="space-y-4">
                      <div className="bg-navy-800/40 rounded-lg p-4 border-l-4 border-gold-500">
                        <h4 className="text-white font-bold mb-1">Layer 1: Case Accumulation → Rule Incubation</h4>
                        <p className="text-gray-400 text-sm">The Zhang Kaimin case established the &quot;victim-territory jurisdiction&quot; rule, designated as Guiding Case No. 47. Over 1,000 Taiwan nationals have since been repatriated for trial.</p>
                      </div>
                      <div className="bg-navy-800/40 rounded-lg p-4 border-l-4 border-gold-500">
                        <h4 className="text-white font-bold mb-1">Layer 2: Institutional Transmission → Rule Consolidation</h4>
                        <p className="text-gray-400 text-sm">Reporting → Experience summarization → Judicial interpretation/guiding cases → Legislative codification. The 2015 SPC Provisions on recognition of Taiwan judgments; the Hangzhou stolen assets return case.</p>
                      </div>
                      <div className="bg-navy-800/40 rounded-lg p-4 border-l-4 border-gold-500">
                        <h4 className="text-white font-bold mb-1">Layer 3: Winning Recognition → Gradual Transformation</h4>
                        <p className="text-gray-400 text-sm">From &quot;instrumental recognition&quot; (the law is useful) to &quot;value-based recognition&quot; (the law is just). Requires long-term, sustained practice.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-3">International Experience</h3>
                    <p className="text-gray-300 text-sm"><strong className="text-white">U.S. Long-Arm Jurisdiction:</strong> China can learn from the methodology (protecting national interests, law enforcement as vehicle, incremental precedent, legal framing), but the fundamental difference is: the U.S. targets other nations&apos; sovereignty; China targets its own territory. <strong className="text-white">Northern Myanmar Cross-Border Enforcement:</strong> 2023-2024 joint operations established a standardized &quot;apprehension → repatriation → trial&quot; chain.</p>
                  </div>
                </div>
              </div>

              {/* Chapter 3 */}
              <div id="ch3" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-gold-400 mr-2">Chapter 3</span>Unilateral Advancement with State Power
                </h2>
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Legitimacy Foundation</h3>
                    <ul className="space-y-2">
                      <li>· <strong className="text-white">Sovereignty principle</strong>: Exercising judicial jurisdiction over the Taiwan region is the inherent right of state sovereignty</li>
                      <li>· <strong className="text-white">Citizen protection</strong>: Mainland residents are victims in cross-border fraud cases</li>
                      <li>· <strong className="text-white">Intra-territorial jurisdiction</strong>: This is not &quot;extraterritorial jurisdiction&quot; but &quot;intra-territorial jurisdiction&quot;</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">State Power Support</h3>
                    <ul className="space-y-2">
                      <li>· <strong className="text-white">Enforcement capability</strong>: Operation &quot;Sky Net&quot; has recovered 10,000+ fugitives from 120+ countries</li>
                      <li>· <strong className="text-white">Judicial credibility</strong>: Specialized tribunals with cross-strait law expertise</li>
                      <li>· <strong className="text-white">Diplomatic-legal coordination</strong>: Articulating jurisdictional legitimacy through international law</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Specific Pathways</h3>
                    <ul className="space-y-2">
                      <li>· Amend the Criminal Procedure Law for cross-strait jurisdiction</li>
                      <li>· Enact the Special Procedures Act for Cross-Strait Judicial Assistance</li>
                      <li>· Unilaterally recognize Taiwan civil judgments as a goodwill gesture</li>
                      <li>· Apply the Anti-Foreign Sanctions Law, Foreign Relations Law, and Blocking Measures</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chapter 4 */}
              <div id="ch4" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-gold-400 mr-2">Chapter 4</span>External Interference and Legal Obstacles
                </h2>
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">&quot;Taiwan Independence&quot; Legal Obstruction</h3>
                    <p>Taiwan region imposes &quot;public order&quot; review thresholds on mainland judgments. Countermeasures: uphold legal position, unilaterally recognize Taiwan civil judgments, strengthen enforcement capabilities.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">External Force Interference</h3>
                    <p>The U.S. Taiwan Relations Act provides a purported legal basis for interference. Countermeasures: apply anti-sanctions legal instruments, expose illegality at international law level, demonstrate fairness of mainland rule of law.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Vulnerability and Resilience</h3>
                    <p>The core logic—from individual cases to universal jurisdiction, from rule-of-law unification to political unification—still contains theoretical gaps. Resilience can be enhanced through: continuous case accumulation, accelerated institutional consolidation, deeper international law argumentation, and broader popular support.</p>
                  </div>
                </div>
              </div>

              {/* Chapter 5 */}
              <div id="ch5" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-gold-400 mr-2">Chapter 5</span>Supporting Roles of Economy, Society, and Culture
                </h2>
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Economic Integration</h3>
                    <p>Cross-strait trade grew from ~$500 million (1978) to ~$300 billion. Cumulative Taiwan investment in the mainland exceeds $70 billion. Economic integration creates massive cross-border legal demand, providing real impetus for rule-of-law unification.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Social Exchange</h3>
                    <p>Cross-strait visits exceed 130 million cumulative, with ~300,000 cross-strait marriages annually. Deepening social exchange creates daily intersections with mainland legal institutions, building popular support.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Cultural Identity</h3>
                    <p>Both sides share Chinese cultural roots. Rule-of-law culture is an important component of Chinese culture; demonstrating its modern transformation through legal practice provides cultural support for rule-of-law unification.</p>
                  </div>
                </div>
              </div>

              {/* Chapter 6 */}
              <div id="ch6" className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  <span className="text-gold-400 mr-2">Chapter 6</span>Conclusions and Implementation Recommendations
                </h2>
                <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Core Conclusions</h3>
                    <p>The rule-of-law unification path offers unique advantages: peacefulness, progressiveness, low reversibility, and high international acceptability. We recommend incorporating rule-of-law unification into the national unification strategic framework as a fifth pillar alongside political negotiation, economic integration, military deterrence, and cultural identity.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Three-Phase Strategy</h3>
                    <div className="space-y-3">
                      <div className="bg-navy-800/40 rounded-lg p-3">
                        <h4 className="text-white font-bold">Near-term (1-3 years) — Lay Foundations, Set Benchmarks</h4>
                        <p className="text-gray-400 text-xs mt-1">Establish specialized tribunals; issue guiding cases; handle telecommunications fraud and cross-border asset recovery; sign judicial cooperation agreements; build adjudication rule reporting system</p>
                      </div>
                      <div className="bg-navy-800/40 rounded-lg p-3">
                        <h4 className="text-white font-bold">Mid-term (3-5 years) — Build Mechanisms, Expand Scope</h4>
                        <p className="text-gray-400 text-xs mt-1">Issue judicial interpretation on cross-strait judgment recognition; extend jurisdiction to IP, e-commerce, finance; train 200+ specialized professionals; draft Special Procedures Act</p>
                      </div>
                      <div className="bg-navy-800/40 rounded-lg p-3">
                        <h4 className="text-white font-bold">Long-term (5-10 years) — Promote Recognition, Consolidate Foundations</h4>
                        <p className="text-gray-400 text-xs mt-1">Form comprehensive jurisdictional rule system; full rule-of-law coverage across all domains; widespread recognition among Taiwan compatriots; promote mutual judgment recognition agreement</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gold-400 mb-2">Final Note</h3>
                    <p>This report constitutes a strategic conception, not a policy commitment. Further research is needed on: the logical transition from case accumulation to universal jurisdiction, countermeasures against external interference, empirical study of Taiwan public acceptance, and institutional interface between rule-of-law unification and &quot;One Country, Two Systems.&quot;</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center py-8 border-t border-slate-700/50">
                <p className="text-gray-500 text-sm mb-2">Report Nature: Internal Discussion Draft | Date: January 2026</p>
                <p className="text-gray-500 text-sm">Civilian Patriotic Research Group</p>
                <div className="mt-4 space-x-4">
                  <Link href="/resources/law-unification-strategy/" className="text-gold-400 hover:text-gold-300 text-sm">
                    View Strategy Brief →
                  </Link>
                  <Link href="/resources/" className="text-gray-400 hover:text-gray-300 text-sm">
                    ← Back to Resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
