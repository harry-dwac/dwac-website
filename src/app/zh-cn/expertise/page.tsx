export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-gold-400">专业领域</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          DWAC 专注于通过仲裁、调解和在线争议解决方式处理数字世界争议。
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">数字商贸争议</h3>
            <p className="text-slate-300">跨境电子商务、平台争议、支付争议和数字交易中的消费者保护。</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">知识产权</h3>
            <p className="text-slate-300">数字环境中的版权、商标、专利争议，包括NFT和数字资产。</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">数据与隐私</h3>
            <p className="text-slate-300">跨境数据流动争议、隐私侵犯、网络安全事件和合规问题。</p>
          </div>
        </div>
      </section>
    </div>
  );
}