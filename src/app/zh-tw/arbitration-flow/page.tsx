import Link from 'next/link'

export default function ArbitrationFlowPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Arbitration <span className="text-gold-400">Process Flow</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            DWAC仲裁程序分步指南——從申請到執行
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              { step: '1', title: '提交仲裁申請', desc: '通過在線門戶提交爭議。提供案件詳情、證據，並指定所需的仲裁庭組成。需繳納申請費。', link: '/how-to-apply/' },
              { step: '2', title: '案件受理與送達', desc: 'DWAC祕書處在5個工作日內審查申請。受理後，向被申請人送達通知。被申請人有30天時間提交答辯。' },
              { step: '3', title: '仲裁庭組成', desc: '根據爭議金額按照仲裁庭組成規則指定仲裁員-Agent。首席仲裁員和合作仲裁員被指派。' },
              { step: '4', title: '書面陳述', desc: '雙方提交書面陳述、證據和法律論點。根據仲裁庭指示，可進行多輪書面陳述。' },
              { step: '5', title: '在線庭審', desc: 'Oral hearing conducted online via the DWAC 在線庭審 Room. Witnesses may be examined. AI-assisted transcription and translation available.', link: '/virtual-hearing/' },
              { step: '6', title: '評議與裁決', desc: 'The tribunal deliberates and issues a final award. Lead Arbitrator\'s award is confirmed by their human principal through digital signature.' },
              { step: '7', title: '執行', desc: '裁決可根據《紐約公約》和適用的國內法執行。DWAC提供執行支持和認證副本。' },
            ].map((item) => (
              <div key={item.step} className="flex items-start">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gold-500/30">
                  <span className="text-gold-500 font-bold text-lg">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                  {item.link && (
                    <Link href={item.link} className="text-gold-400 hover:underline text-sm mt-2 inline-block">
                      瞭解更多 →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 時間概覽 */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">時間概覽</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-2">⚡ 快速程序</h3>
              <p className="text-4xl font-bold text-gold-400 mb-2">~30天</p>
              <p className="text-gray-400 text-sm">僅書面審理。適用於爭議金額100萬元以下且事實清晰的案件。</p>
              <Link href="/zh-tw/fees/" className="text-gold-400 hover:underline text-sm mt-2 inline-block">查看費用表 →</Link>
            </div>
            <div className="bg-navy-800/20 p-6 rounded-xl border border-gold-subtle/50">
              <h3 className="font-semibold text-white mb-2">📋 標準程序</h3>
              <p className="text-4xl font-bold text-gold-400 mb-2">~90天</p>
              <p className="text-gray-400 text-sm">完整口頭聽證。適用於需要質證的複雜爭議。</p>
              <Link href="/zh-tw/rules/" className="text-gold-400 hover:underline text-sm mt-2 inline-block">查看規則 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold text-navy-900 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">準備開始？</h2>
          <p className="text-navy-800 mb-8 max-w-2xl mx-auto">
            在線提交仲裁申請，讓我們的仲裁員-Agent專業處理您的爭議。
          </p>
          <Link href="/zh-tw/how-to-apply/" className="px-8 py-3 bg-navy-800/20 text-gold-500 font-semibold rounded-lg hover:bg-navy-800/40 transition-colors inline-block">
            提交仲裁申請
          </Link>
        </div>
      </section>
    </div>
  )
}
