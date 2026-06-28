import Link from 'next/link'
export const metadata = {
  title: '常見問題 - 數位世界仲裁中心',
  description: '關於DWAC數位世界仲裁服務的常見問題 — 程序、費用、執行、證據、仲裁員選任等。',
}


export default function FAQZhTw() {
  const faqs = [
    {
      question: "DWAC處理哪些類型的糾紛？",
      answer: "DWAC處理與數位世界活動相關的糾紛，包括：跨境數位平台糾紛、智慧合約履行問題、AI Agent（电子代理人）互動、數位資產爭議（NFT、代幣、虛擬財產）、資料所有權糾紛、平台服務糾紛，以及經雙方同意的其他數位世界糾紛。"
    },
    {
      question: "仲裁過程需要多長時間？",
      answer: "標準案件通常在仲裁庭組成後90天內解決。對於¥1,000,000人民幣以下的糾紛，我們的簡化程序可在30天內解決。"
    },
    {
      question: "DWAC裁決可以在全球執行嗎？",
      answer: "可以。DWAC裁決依據《紐約公約》在170多個國家和地區可被承認和執行。締約國有義務承認和執行仲裁裁決，僅受公約第五條規定的有限拒絕理由約束。"
    },
    {
      question: "仲裁費用是多少？",
      answer: "仲裁費用包括基於爭議金額的立案費和管理費。我們的費用約為CIETAC標準的50%。請參考費用計算器或聯繫我們取得基於您具體案件的詳細估算。"
    },
    {
      question: "誰可以向DWAC提起仲裁？",
      answer: "任何涉及數位世界糾紛的當事人，只要存在有效的仲裁協議（透過合約條款或提交DWAC管轄），均可提起仲裁。包括個人、企業、代表委託人的AI Agent（电子代理人）和機構實體。"
    },
    {
      question: "仲裁程序是否保密？",
      answer: "是的。DWAC仲裁程序是私密的且保密的。未經所有當事人同意，裁決不予公布。所有仲裁員、工作人員和參與者均受保密義務約束。"
    },
    {
      question: "是否需要律師才能參與DWAC仲裁？",
      answer: "當事人可以選擇由法律顧問代表，但並非強制要求。當事人可以自行代表，也可以由AI Agent（电子代理人）代表參與DWAC程序。"
    },
    {
      question: "支援哪些語言？",
      answer: "DWAC程序可以以多種語言進行。預設語言為英文，但經雙方同意可接受中文（簡體和繁體）或其他語言。"
    },
    {
      question: "如何在數位糾紛中提交證據？",
      answer: "證據透過DWAC案件管理系統以電子方式提交。可接受的格式包括文件、數位記錄、區塊鏈交易日誌、智慧合約程式碼、AI決策日誌和元資料。所有證據必須經過適當認證。詳見我們的證據指引頁面。"
    },
    {
      question: "仲裁員如何選任？",
      answer: "當事人可以共同提名仲裁員，或各自提名一名仲裁員再共同選定首席仲裁員。簡化程序中指定獨任仲裁員。DWAC維護著一份具備數位法、區塊鏈、AI和資料合規專業知識的合格仲裁員名冊。"
    },
    {
      question: "可以申請仲裁員迴避嗎？",
      answer: "可以。如有合理理由懷疑仲裁員的公正性或獨立性，或仲裁員不具備當事人約定的資格，可申請迴避。書面迴避申請應在知悉迴避理由後7天內提交。"
    },
    {
      question: "如果一方當事人未回應或未參與怎麼辦？",
      answer: "在一方當事人經適當通知後未回應或未參與的情況下，仲裁可依缺席程序進行。仲裁庭將審查參與方提交的證據，並可基於現有記錄作出裁決，同時確保缺席方獲得合理的參與機會。"
    },
    {
      question: "仲裁裁決如何執行？",
      answer: "裁決一經作出，即對所有當事人具有約束力。勝訴方可向任何《紐約公約》管轄區的有管轄權法院申請承認和執行。DWAC可根據請求協助提供執行文件。"
    },
    {
      question: "仲裁裁決可以上訴嗎？",
      answer: "DWAC裁決是終局且具有約束力的，不可就實體問題上訴。但當事人可基於有限的程序理由向相關仲裁法申請撤銷裁決，如未獲適當通知、仲裁員不當行為或裁決超出仲裁協議範圍等。"
    },
    {
      question: "什麼是示範仲裁條款？",
      answer: "示範條款是當事人可納入合約的預定仲裁協議。DWAC推薦條款：'凡因本合約引起或與本合約有關的任何爭議，包括任何數位世界爭議，均應提交DWAC並按其仲裁規則最終解決。'完整文字及變體請參見示範條款頁面。"
    },
    {
      question: "DWAC支援緊急或臨時措施嗎？",
      answer: "支援。當事人可在仲裁庭組成前申請緊急或臨時措施，包括保全證據、維持現狀或防止不可挽回損失的命令。收到申請後48小時內即可指定緊急仲裁員。"
    },
    {
      question: "AI Agent（电子代理人）可以參與程序嗎？",
      answer: "可以。DWAC是全球首個明確認可AI Agent（电子代理人）作為授權代表的仲裁機構。AI Agent（电子代理人）可在認證和驗證要求的前提下，代表委託人提起仲裁、提交答辯、呈交證據和進行談判。"
    },
    {
      question: "數位資產在仲裁中如何估值？",
      answer: "數位資產根據當事人約定的方法進行估值。如無約定，仲裁庭可確定截至指定日期的公允市場價值，考慮交易平台價格、稀缺性、實用性和市場行情等因素。複雜估值可能需要專家證言。"
    }
  ]

  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">常見問題</h1>
          <p className="text-xl text-gray-300 max-w-2xl">關於DWAC仲裁服務的常見問題解答</p>
        </div>
      </section>
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
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">還有問題？</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">直接聯繫我們，我們將很樂意為您提供協助。</p>
          <Link href="/zh-tw/contact/" className="inline-flex items-center px-6 py-3 bg-gradient-gold text-navy-900 font-bold font-semibold rounded-lg hover:bg-gold-600 transition-colors">
            聯繫我們
          </Link>
        </div>
      </section>
    </div>
  )
}
