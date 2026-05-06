import Link from 'next/link'

export default function FAQ() {
  const faqs = [
    {
      question: "What types of disputes does DWAC handle?",
      answer: "DWAC handles disputes arising from digital world activities including: cross-border digital platform disputes, smart contract performance issues, AI agent interactions, digital asset conflicts (NFTs, tokens, virtual property), data ownership disputes, platform service disputes, and other digital world disputes by agreement."
    },
    {
      question: "How long does the arbitration process take?",
      answer: "Standard cases are typically resolved within 90 days of tribunal constitution. For disputes under 1,000,000 RMB, our Simplified Procedure offers resolution within 30 days."
    },
    {
      question: "Are DWAC awards enforceable globally?",
      answer: "Yes. DWAC awards are designed to be enforceable under the New York Convention in over 170 countries worldwide."
    },
    {
      question: "What are the costs associated with arbitration?",
      answer: "Arbitration costs include a filing fee based on the dispute amount and administrative fees. Please refer to our Fee Calculator or contact us for a detailed estimate based on your specific case."
    },
    {
      question: "Who can file a dispute with DWAC?",
      answer: "Any party involved in a digital world dispute, provided there is a valid arbitration agreement (either through a contract clause or by submitting to DWAC's jurisdiction) can file a dispute."
    },
    {
      question: "Is the arbitration process confidential?",
      answer: "Yes. DWAC arbitration proceedings are private and confidential. Awards are not published without the consent of all parties involved."
    },
    {
      question: "Do I need a lawyer to participate in DWAC arbitration?",
      answer: "While parties may choose to be represented by legal counsel, it is not mandatory. Parties may represent themselves in DWAC proceedings."
    },
    {
      question: "What languages are supported?",
      answer: "DWAC proceedings can be conducted in multiple languages. English is the default, but other languages may be accepted based on the agreement of parties."
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Find answers to common questions about DWAC arbitration services</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-navy-800/30 rounded-xl p-6 border border-gold-subtle/50">
                <h3 className="font-semibold text-lg text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Contact us directly and we'll be happy to assist you.</p>
          <Link href="/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
