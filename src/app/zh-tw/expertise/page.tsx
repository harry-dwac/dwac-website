export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-gold-400">專業領域</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          DWAC 專注於通過仲裁、調解和在線爭議解決方式處理數位世界爭議。
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">數位商貿爭議</h3>
            <p className="text-slate-300">跨境電子商務、平台爭議、支付爭議和數位交易中的消費者保護。</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">知識產權</h3>
            <p className="text-slate-300">數位環境中的版權、商標、專利爭議，包括NFT和數位資產。</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">數據與隱私</h3>
            <p className="text-slate-300">跨境數據流動爭議、隱私侵犯、網絡安全事件和合規問題。</p>
          </div>
        </div>
      </section>
    </div>
  );
}