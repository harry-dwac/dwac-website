import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Strategic Recommendations on Advancing Cross-Strait Unification Through the Rule of Law ',
  description: 'Strategic recommendations on advancing cross-strait unification through the extension of judicial jurisdiction and the rule of law.',
}

export default function LawUnificationStrategy() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-400 text-sm font-medium mb-3">DWAC Research Report</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Strategic Recommendations on Advancing Cross-Strait Unification Through the Rule of Law
          </h1>
          <p className="text-lg text-gray-300 mb-6">Internal Reference · For Leadership Review</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>Date: January 2026</span>
            <span>·</span>
            <span>Civilian Patriotic Research Group</span>
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section 1 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">I</span>Fundamental Assessment: Traditional Approaches Face Bottlenecks; the Rule-of-Law Path Offers Unique Advantages
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Cross-strait unification faces a new historical juncture. Political negotiations have long stalled due to a lack of basic mutual trust; economic integration, while yielding significant results, has not automatically translated into political identity; military deterrence is a necessary baseline but unsuitable as a proactive instrument; cultural identity is too slow and has been eroded by &quot;de-Sinicization&quot; efforts. Against this backdrop, a new, sustainable strategic path must be explored.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Rule-of-law unification refers to the approach of using the extension of judicial jurisdiction as the core mechanism—through the daily practice of handling cross-strait cases involving telecommunications fraud, civil and commercial disputes, and intellectual property infringement—to gradually expand the influence of mainland law in the Taiwan region, ultimately establishing an irreversible legal foundation for the complete unification of the nation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Peacefulness', desc: 'No resort to force, no armed conflict, consistent with the fundamental interests of people on both sides of the Strait' },
                { title: 'Progressiveness', desc: 'From individual cases to established rules, from criminal to civil and commercial matters, every step is controllable and assessable' },
                { title: 'Low Reversibility', desc: 'Once rule-of-law practices are established, they create institutional inertia that is difficult to reverse' },
                { title: 'High International Acceptability', desc: 'Judicial jurisdiction is a matter of domestic sovereignty; the application of internationally recognized effects doctrine and protective principles makes foreign interference difficult' },
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
              <span className="text-gold-400 mr-2">II</span>Core Mechanism: The &quot;Three-Layer Progressive Model&quot; Centered on Judicial Jurisdiction Extension
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-5">
                <h3 className="text-gold-400 font-bold text-lg mb-2">Layer 1: Case Accumulation, Rule Incubation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every cross-strait case handled is a practice of rule-of-law unification. Through judicial reasoning in written decisions, a &quot;cluster of adjudicative rules&quot; for specific case types is gradually formed.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Landmark case: The Zhang Kaimin case established the &quot;victim-territory jurisdiction&quot; rule—exercising jurisdiction over Taiwan residents who commit crimes against mainland residents in third countries. This was later designated as Guiding Case No. 47 by the Supreme People&apos;s Procuratorate, becoming a national reference. Since then, similar cases from Spain, Malaysia, Cambodia, and elsewhere have followed this rule, with over 1,000 Taiwan nationals suspected of telecommunications fraud repatriated to the mainland for trial.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-5">
                <h3 className="text-gold-400 font-bold text-lg mb-2">Layer 2: Institutional Transmission, Rule Consolidation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Through the transmission mechanism of &quot;reporting and selection → experience summarization → judicial interpretation/guiding cases → legislative codification,&quot; innovative rules from individual cases are elevated into legal norms with universal binding force.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Successful precedent: The 2015 Supreme People&apos;s Court Provisions on the Recognition and Enforcement of Civil Judgments of Taiwan Region Courts clarified the conditions and procedures for recognizing and enforcing Taiwan region court judgments. The Hangzhou stolen assets return case pioneered the direct exchange of crime proceeds across the Strait through a &quot;court–procuratorate–ARATS&quot; tripartite coordination mechanism.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-5">
                <h3 className="text-gold-400 font-bold text-lg mb-2">Layer 3: Winning Recognition, Gradual Transformation</h3>
                <p className="text-gray-300 leading-relaxed">
                  When Taiwan compatriots experience the fairness and efficiency of mainland law through specific cases, a gradual transformation from &quot;instrumental recognition&quot; (the law is useful) to &quot;value-based recognition&quot; (the law is just) takes shape. This requires long-term, sustained accumulation of rule-of-law practice.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">III</span>Key Support: Law Enforcement Actions as Vehicles, Drawing on International Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-bold mb-3">(1) Learning from U.S. Long-Arm Jurisdiction Methodology—With Fundamental Differences</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  The United States has extended judicial jurisdiction globally through &quot;minimum contacts&quot; and the &quot;effects doctrine.&quot; China may learn from this methodology, but the fundamental difference is: the U.S. targets the sovereignty of other nations, while China targets its own territory (Taiwan). What China exercises are the internationally recognized effects doctrine and protective principles—not &quot;long-arm jurisdiction,&quot; but the legitimate exercise of sovereignty.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-3">(2) Northern Myanmar Cross-Border Law Enforcement as a Practical Model</h3>
                <p className="text-gray-300 leading-relaxed mb-3">
                  In 2023–2024, China conducted joint law enforcement with Myanmar and other countries, apprehending tens of thousands of telecommunications fraud suspects (including Taiwan nationals), forming an operational chain of &quot;apprehension → repatriation → trial.&quot;
                </p>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>· Framed under &quot;protecting citizens&apos; rights,&quot; with high legitimacy</li>
                  <li>· Multilateral cooperation model enhances legitimacy and reduces political costs</li>
                  <li>· The &quot;apprehension → repatriation → trial&quot; chain can be standardized as an operational template</li>
                  <li>· Sustained enforcement practices gradually establish rules, creating conditions for institutional consolidation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">IV</span>Advancing Unilateral Rule-of-Law Unification with State Power
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">In the absence of formal cross-strait cooperation mechanisms, the mainland has both the capability and the necessity to unilaterally advance the rule-of-law unification process.</p>
            <div className="space-y-4">
              <div className="bg-navy-800/40 rounded-lg p-4">
                <h3 className="text-gold-400 font-bold mb-2">Legitimacy Foundation</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>· Unilateral jurisdiction under the sovereignty principle—exercising judicial jurisdiction over the Taiwan region is the inherent right of state sovereignty</li>
                  <li>· National responsibility to protect citizens&apos; rights—mainland residents are victims in cross-border telecommunications fraud</li>
                  <li>· Legal basis of one-China—this is &quot;intra-territorial jurisdiction,&quot; not &quot;extraterritorial jurisdiction&quot;</li>
                </ul>
              </div>
              <div className="bg-navy-800/40 rounded-lg p-4">
                <h3 className="text-gold-400 font-bold mb-2">State Power Support</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>· Enforcement capability—Operation &quot;Sky Net&quot; has recovered over 10,000 fugitives from 120+ countries and regions</li>
                  <li>· Judicial credibility—establishing specialized tribunals with judges versed in cross-strait law</li>
                  <li>· Diplomatic-legal coordination—articulating jurisdictional legitimacy through international law principles</li>
                </ul>
              </div>
              <div className="bg-navy-800/40 rounded-lg p-4">
                <h3 className="text-gold-400 font-bold mb-2">Specific Pathways</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>· Legislative proposals—amend the Criminal Procedure Law; enact the Special Procedures Act for Cross-Strait Judicial Assistance</li>
                  <li>· Goodwill measures—the mainland may unilaterally recognize civil judgments of Taiwan region courts</li>
                  <li>· Enforcement vehicles—maintain high-pressure enforcement against cross-border telecommunications fraud</li>
                  <li>· Countermeasure tools—apply the Anti-Foreign Sanctions Law, Foreign Relations Law, and Blocking Measures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">V</span>Confronting Challenges: External Interference and &quot;Taiwan Independence&quot; Obstruction
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-bold mb-2">&quot;Taiwan Independence&quot; Legal Obstruction</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Taiwan region imposes &quot;public order&quot; review thresholds on mainland judgments through regulations such as the &quot;Act Governing Relations Between the People of the Taiwan Area and the Mainland Area.&quot; Countermeasures: uphold legal position, unilaterally recognize Taiwan civil judgments as a goodwill gesture, and strengthen enforcement capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">External Force Interference</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The U.S. &quot;Taiwan Relations Act&quot; and similar instruments provide a purported legal basis for interference. Countermeasures: apply anti-sanctions legal instruments for targeted countermeasures, expose illegality at the international law level, and demonstrate the fairness of mainland rule of law through specific cases.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 - Implementation */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              <span className="text-gold-400 mr-2">VI</span>Implementation Recommendations: Three-Phase Strategy
            </h2>
            <p className="text-gray-400 text-sm mb-6">Core risk alert: Non-cooperation by Taiwan authorities, high-intensity external interference, logical gaps requiring time to verify (contingency plans developed)</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-3 px-4 text-gold-400 font-bold w-32">Phase</th>
                    <th className="text-left py-3 px-4 text-gold-400 font-bold">Task</th>
                    <th className="text-left py-3 px-4 text-gold-400 font-bold w-28">Timeline</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4 font-bold text-gold-400" rowSpan={5}>Near-term<br/><span className="text-xs text-gray-400">1–3 years</span></td>
                    <td className="py-3 px-4">Establish specialized cross-strait case tribunals in Beijing, Shanghai, Guangzhou, and Fujian</td>
                    <td className="py-3 px-4 text-gray-400">By 2027</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">SPC and SPP each issue 2–3 batches of guiding cases on cross-strait matters</td>
                    <td className="py-3 px-4 text-gray-400">Annually</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">Handle 20–30 high-impact cases annually focusing on telecommunications fraud and cross-border asset recovery</td>
                    <td className="py-3 px-4 text-gray-400">Ongoing</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">Sign or upgrade judicial cooperation agreements with Myanmar, Cambodia, and the Philippines</td>
                    <td className="py-3 px-4 text-gray-400">2027–2028</td>
                  </tr>
                  <tr className="border-b border-slate-700/50 bg-gold-500/[0.02]">
                    <td className="py-3 px-4">Establish a reporting system for cross-strait case adjudication rules</td>
                    <td className="py-3 px-4 text-gray-400">By 2027</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4 font-bold text-gold-400" rowSpan={5}>Mid-term<br/><span className="text-xs text-gray-400">3–5 years</span></td>
                    <td className="py-3 px-4">Issue SPC judicial interpretation on recognition and enforcement of Taiwan region civil judgments</td>
                    <td className="py-3 px-4 text-gray-400">2028</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">Extend jurisdiction to IP, e-commerce, and financial disputes</td>
                    <td className="py-3 px-4 text-gray-400">2028–2029</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">Establish normalized exchange mechanisms for legal communities across the Strait</td>
                    <td className="py-3 px-4 text-gray-400">Ongoing</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">Train 200+ specialized cross-strait judicial professionals</td>
                    <td className="py-3 px-4 text-gray-400">2029</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 px-4">Draft the Special Procedures Act for Cross-Strait Judicial Assistance</td>
                    <td className="py-3 px-4 text-gray-400">2030</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-gold-400" rowSpan={4}>Long-term<br/><span className="text-xs text-gray-400">5–10 years</span></td>
                    <td className="py-3 px-4">Form a comprehensive cross-strait jurisdictional rule system covering criminal, civil, commercial, and administrative matters</td>
                    <td className="py-3 px-4 text-gray-400">By 2031</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Full coverage of rule-of-law functions across cross-strait economic, social, and cultural domains</td>
                    <td className="py-3 px-4 text-gray-400">By 2031</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Taiwan compatriots form widespread instrumental recognition of mainland rule of law</td>
                    <td className="py-3 px-4 text-gray-400">After 2031</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">As conditions permit, promote cross-strait mutual recognition agreement for civil and commercial judgments</td>
                    <td className="py-3 px-4 text-gray-400">As appropriate</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 7 */}
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              <span className="text-gold-400 mr-2">VII</span>Notes and Disclaimers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This report constitutes a strategic conception and does not constitute a policy commitment. The core logic—from individual cases to universal jurisdiction, from rule-of-law unification to political unification—still contains theoretical gaps requiring practical verification. However, this conception provides a peaceful, progressive, operable, and low-reversibility unification path worthy of serious exploration.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We recommend incorporating rule-of-law unification into the national unification strategic framework as a fifth pillar alongside political negotiation, economic integration, military deterrence, and cultural identity, coordinated centrally with collaboration from the Supreme People&apos;s Court, Supreme People&apos;s Procuratorate, Ministry of Public Security, Ministry of State Security, and Ministry of Foreign Affairs.
            </p>
          </div>

          {/* Footer */}
          <div className="text-center py-8 border-t border-slate-700/50">
            <p className="text-gray-500 text-sm mb-2">Report Nature: Internal Discussion Draft | Date: January 2026</p>
            <p className="text-gray-500 text-sm">Civilian Patriotic Research Group</p>
            <Link href="/resources/" className="inline-block mt-4 text-gold-400 hover:text-gold-300 text-sm">
              ← Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
