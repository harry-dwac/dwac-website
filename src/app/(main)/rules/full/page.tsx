import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DWAC Arbitration Rules (Full Text) | Digital World Arbitration Centre",
  description: "Complete text of the Digital World Arbitration Centre (DWAC) Arbitration Rules",
  keywords: ["DWAC", "arbitration rules", "full text", "procedural rules"],
};

export default function RulesFull() {
  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">DWAC Arbitration Rules</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Complete procedural rules for digital world arbitration
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-8">
              <li><a href="#section1" className="text-gold-400 hover:underline">General Provisions</a></li>
              <li><a href="#section2" className="text-gold-400 hover:underline">Commencement of Arbitration</a></li>
              <li><a href="#section3" className="text-gold-400 hover:underline">The Tribunal</a></li>
              <li><a href="#section4" className="text-gold-400 hover:underline">The Proceedings</a></li>
              <li><a href="#section5" className="text-gold-400 hover:underline">The Award</a></li>
              <li><a href="#section6" className="text-gold-400 hover:underline">Costs</a></li>
            </ol>

            <div className="prose prose-invert max-w-none">
              <h3 id="section1" className="text-xl font-bold text-white mt-8 mb-4">Section 1: General Provisions</h3>
              <p className="text-gray-300 mb-4">
                <strong>Rule 1.1</strong> — These Rules govern the arbitration of disputes before the Digital World Arbitration Centre (DWAC).
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 1.2</strong> — Parties may agree to modify or supplement these Rules, except where such modification conflicts with mandatory provisions of the applicable law.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 1.3</strong> — The official language of arbitration shall be English, unless the parties agree otherwise.
              </p>

              <h3 id="section2" className="text-xl font-bold text-white mt-8 mb-4">Section 2: Commencement of Arbitration</h3>
              <p className="text-gray-300 mb-4">
                <strong>Rule 2.1</strong> — Arbitration shall commence when the Claimant submits a Request for Arbitration to DWAC.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 2.2</strong> — The Request shall include: (a) names and contact details of parties; (b) statement of facts; (c) relief sought; (d) proposed arbitrator.
              </p>

              <h3 id="section3" className="text-xl font-bold text-white mt-8 mb-4">Section 3: The Tribunal</h3>
              <p className="text-gray-300 mb-4">
                <strong>Rule 3.1</strong> — The tribunal shall consist of one or three arbitrators, as agreed by the parties.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 3.2</strong> — If parties cannot agree on arbitrator number, DWAC shall appoint a sole arbitrator.
              </p>

              <h3 id="section4" className="text-xl font-bold text-white mt-8 mb-4">Section 4: The Proceedings</h3>
              <p className="text-gray-300 mb-4">
                <strong>Rule 4.1</strong> — The tribunal may conduct proceedings in any manner it deems appropriate, subject to party agreement.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 4.2</strong> — Virtual hearings may be conducted via DWAC Virtual Hearing Centre.
              </p>

              <h3 id="section5" className="text-xl font-bold text-white mt-8 mb-4">Section 5: The Award</h3>
              <p className="text-gray-300 mb-4">
                <strong>Rule 5.1</strong> — The tribunal shall issue the award in writing, signed by all arbitrators.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 5.2</strong> — The award shall state reasons, unless parties agree otherwise.
              </p>

              <h3 id="section6" className="text-xl font-bold text-white mt-8 mb-4">Section 6: Costs</h3>
              <p className="text-gray-300 mb-4">
                <strong>Rule 6.1</strong> — The costs of arbitration shall be borne by the parties as determined by the tribunal.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Rule 6.2</strong> — Fees shall be calculated according to the DWAC Fee Schedule.
              </p>
            </div>

            <div className="mt-8 p-4 bg-gold-500/[0.06] border-l-4 border-gold-subtle rounded-r-lg">
              <p className="text-gold-400 text-sm">
                <strong>Note:</strong> This is a summary of the DWAC Arbitration Rules. For the complete and authoritative text, please contact <a href="mailto:secretary@dwac.net" className="underline">secretary@dwac.net</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
