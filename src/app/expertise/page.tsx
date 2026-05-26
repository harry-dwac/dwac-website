export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <section className="py-20 text-center">
        <h1 className="text-4xl font-serif font-bold text-gold-400">Our Expertise</h1>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          DWAC specializes in resolving digital world disputes through arbitration, mediation, and online dispute resolution.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">Digital Commerce Disputes</h3>
            <p className="text-slate-300">Cross-border e-commerce, platform disputes, payment disputes, and consumer protection in digital transactions.</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">Intellectual Property</h3>
            <p className="text-slate-300">Copyright, trademark, patent disputes in the digital environment, including NFTs and digital assets.</p>
          </div>
          <div className="bg-navy-800 p-6 rounded-lg border border-gold-500/20">
            <h3 className="text-xl font-serif text-gold-400 mb-3">Data & Privacy</h3>
            <p className="text-slate-300">Cross-border data flow disputes, privacy violations, cybersecurity incidents, and compliance issues.</p>
          </div>
        </div>
      </section>
    </div>
  );
}