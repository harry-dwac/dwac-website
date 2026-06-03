import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Digital Tribunal',
  description: 'DWAC Digital Tribunal — AI-powered online arbitration platform with video hearing, real-time transcription, smart evidence management, and blockchain-secured awards. The future of dispute resolution.',
}

/* ═══════════════════════════════════════════════════════════════
   DIGITAL TRIBUNAL — DWAC's Core Product Page
   Inspired by: 云上法庭 (China Court), CIETAC Online, Modria
   ═══════════════════════════════════════════════════════════════ */

// ─── Icons (inline SVG) ────────────────────────────────────────

const VideoIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
)

const MicIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
)

const DocIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const BotIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ChainIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
)

const PenIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const TranslateIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </svg>
)

// ─── Data ──────────────────────────────────────────────────────

const coreModules = [
  {
    icon: <VideoIcon />,
    title: 'Video Hearing Room',
    subtitle: '视频庭审厅',
    desc: 'Multi-party HD video conferencing with gallery view, speaker spotlight, and picture-in-picture for document review during proceedings. Supports up to 20 concurrent participants with adaptive bandwidth.',
    features: ['HD 1080p Video', 'Gallery & Spotlight', 'Screen Sharing', 'Bandwidth Adaptive', 'Recording & Playback'],
    color: 'cyan',
  },
  {
    icon: <MicIcon />,
    title: 'AI Real-time Transcription',
    subtitle: 'AI 实时笔录',
    desc: 'Speech-to-text powered by multi-language ASR models with legal domain fine-tuning. Auto-speaker diarization, legal term recognition, and instant searchable transcripts.',
    features: ['Multi-language ASR', 'Speaker Diarization', 'Legal Term NER', 'Searchable Export', 'Live Edit Mode'],
    color: 'gold',
  },
  {
    icon: <DocIcon />,
    title: 'Smart Evidence Hub',
    subtitle: '智能证据中心',
    desc: 'Centralized evidence management with version control, chain-of-custody tracking, hash verification, and AI-assisted relevance scoring. Supports PDF, images, videos, emails, and blockchain data.',
    features: ['Version Control', 'Hash Verification', 'AI Relevance Score', 'Timeline View', 'Bulk Upload'],
    color: 'emerald',
  },
  {
    icon: <BotIcon />,
    title: 'AI Arbitration Assistant',
    subtitle: 'AI 仲裁助手',
    desc: 'Agent-powered case analysis, procedural guidance, precedent retrieval, and draft generation. The assistant supports arbitrators in research while maintaining full human decision authority.',
    features: ['Case Analysis', 'Precedent Search', 'Draft Generation', 'Procedural Guide', 'Compliance Check'],
    color: 'violet',
  },
]

const processFlow = [
  { step: '1', title: 'Case Filing', subtitle: '立案申请', icon: '📋', desc: 'Online submission of Request for Arbitration with auto-docketing, fee calculation, and respondent notification via email/SMS.' },
  { step: '2', title: 'Preliminary Review', subtitle: '初步审查', icon: '🔍', desc: 'Secretariat reviews filing completeness. AI-assisted jurisdiction check and procedural compliance scan within 48 hours.' },
  { step: '3', title: 'Tribunal Formation', subtitle: '仲裁庭组建', icon: '⚖️', desc: 'Party-appointed or Chairman-selected arbitrators confirmed. Conflict-of-interest declarations collected digitally.' },
  { step: '4', title: 'Document Exchange', subtitle: '文书交换', icon: '📂', desc: 'Secure document portal for Statement of Claim, Defense, evidence bundles. Automated service confirmation and deadline tracking.' },
  { step: '5', title: 'Virtual Hearing', subtitle: '在线庭审', icon: '🎥', desc: 'Live video hearing with real-time transcription, simultaneous interpretation, evidence presentation, and witness examination.' },
  { step: '6', title: 'Deliberation & Award', subtitle: '评议与裁决', icon: '✍️', desc: 'Secure deliberation room for tribunal. Draft award with AI-assisted consistency check. E-signature and blockchain notarization.' },
]

const techSpecs = [
  { category: 'Security', items: [
    { label: 'Encryption', value: 'AES-256-GCM / TLS 1.3' },
    { label: 'Identity', value: 'eIDAS / CA Digital Cert' },
    { label: 'Audit Log', value: 'WORM Immutable Ledger' },
    { label: 'Data Residency', value: 'Configurable by Jurisdiction' },
  ]},
  { category: 'Performance', items: [
    { label: 'Uptime SLA', value: '99.95%' },
    { label: 'Latency', value: '<150ms global' },
    { label: 'Concurrent Hearings', value: 'Unlimited' },
    { label: 'Video Quality', value: 'Up to 1080p60' },
  ]},
  { category: 'Integration', items: [
    { label: 'API', value: 'REST + WebSocket' },
    { label: 'SSO', value: 'SAML 2.0 / OIDC' },
    { label: 'Calendar', value: 'Google / Outlook / iCal' },
    { label: 'Storage', value: 'S3 / Azure / GCS' },
  ]},
]

const comparisonData = [
  { feature: 'Traditional Court', court: '❌ Physical only', dwac: '✅ Fully Digital' },
  { feature: 'Cross-border Access', court: '⚠️ Visa/Travel required', dwac: '✅ Anywhere, Any Device' },
  { feature: 'Language Support', court: '⚠️ Single jurisdiction', dwac: '✅ 50+ Languages (AI)' },
  { feature: 'Real-time Transcript', court: '⚠️ Manual / Delayed', dwac: '✅ Instant AI Transcription' },
  { feature: 'Evidence Management', court: '⚠️ Paper-based', dwac: '✅ Digital + Blockchain Hash' },
  { feature: 'Hearing Scheduling', court: '⚠️ Weeks/Months lead', dwac: '✅ Days, Flexible Slots' },
  { feature: 'Award Enforcement', court: '⚠️ Domestic only*', dwac: '✅ New York Convention (170+)' },
  { feature: 'Cost Efficiency', court: '❌ High overhead', dwac: '✅ 50% of CIETAC rates' },
  { feature: 'AI Assistance', court: '❌ None', dwac: '✅ Research + Draft + Compliance' },
  { feature: 'Environmental Impact', court: '❌ Travel carbon', dwac: '✅ Zero-carbon Proceedings' },
]

// ─── Sub-components ────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative bg-gradient-navy min-h-[85vh] flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-gold opacity-15" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px]" />

      {/* Animated circuit lines */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 H80 L100 80 V20" fill="none" stroke="#c9a84c" strokeWidth="0.5" />
              <circle cx="100" cy="80" r="3" fill="#c9a84c" />
              <path d="M120 200 V120 L140 100 H200" fill="none" stroke="#06b6d4" strokeWidth="0.5" />
              <circle cx="140" cy="100" r="3" fill="#06b6d4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[2.5px] uppercase text-cyan-400">Core Platform</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Digital{' '}
              <span className="text-gradient-gold">Tribunal</span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed mb-4 max-w-xl">
              The world&apos;s first AI-enhanced online arbitration platform — where traditional justice meets digital innovation.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-lg">
              From case filing to enforceable award, every step happens in a secure virtual environment.
              Video hearings, AI transcription, smart evidence management, and blockchain-notarized awards — all in one integrated platform.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact/" className="group bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-8 py-3.5 rounded-md hover:shadow-[0_0_35px_rgba(201,168,76,0.3)] hover:-translate-y-0.5 transition-all inline-flex items-center gap-2">
                Enter the Tribunal
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/model-clause/" className="border border-slate-600 text-slate-300 font-semibold text-sm px-8 py-3.5 rounded-md hover:border-gold-500/50 hover:text-gold-400 transition-all inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Watch Demo
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[
                { num: '<150ms', label: 'Global Latency' },
                { num: '50+', label: 'Languages' },
                { num: '99.95%', label: 'Uptime SLA' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-white">{stat.num}</div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mock Interface */}
          <div className="hidden lg:block relative">
            <div className="relative bg-navy-800/80 backdrop-blur-sm border border-gold-500/20 rounded-2xl overflow-hidden shadow-2xl glow-gold">
              {/* Title bar */}
              <div className="bg-navy-900/90 px-4 py-3 flex items-center justify-between border-b border-gold-500/10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">DWAC Digital Tribunal v2.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/10 border border-green-500/30 rounded text-[10px] text-green-400 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> LIVE
                  </span>
                </div>
              </div>

              {/* Mock content */}
              <div className="p-5 space-y-4">
                {/* Video area */}
                <div className="aspect-video bg-gradient-to-br from-navy-900 to-navy-700 rounded-lg border border-slate-700/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Simulated video grid */}
                    <div className="flex-1 flex items-center justify-center border-r border-slate-700/30">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-cyan-500/20 to-gold-500/20 border border-cyan-400/30 flex items-center justify-center">
                          <span className="text-2xl">⚖️</span>
                        </div>
                        <p className="text-[10px] text-slate-400">Arbitrator</p>
                        <p className="text-[9px] text-cyan-400">Prof. Chen</p>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex-1 flex items-center justify-center border-b border-slate-700/30">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center">
                            <span className="text-lg">👤</span>
                          </div>
                          <p className="text-[9px] text-slate-400">Claimant</p>
                        </div>
                      </div>
                      <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 mx-auto mb-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center">
                            <span className="text-lg">👤</span>
                          </div>
                          <p className="text-[9px] text-slate-400">Respondent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Controls overlay */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-full px-4 py-2">
                    {['mic', 'video', 'screen', 'chat'].map((ctrl) => (
                      <div key={ctrl} className="w-8 h-8 rounded-full bg-slate-600/50 flex items-center justify-center cursor-pointer hover:bg-slate-500/50 transition-colors">
                        <div className="w-3 h-3 rounded-sm bg-slate-300" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-red-500/80 flex items-center justify-center cursor-pointer hover:bg-red-500 transition-colors">
                      <div className="w-3 h-3 rounded-sm bg-white" />
                    </div>
                  </div>
                </div>

                {/* Bottom panel: transcript preview */}
                <div className="bg-navy-900/60 rounded-lg border border-slate-700/30 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-semibold text-gold-400 uppercase tracking-wider">Live Transcript</span>
                    <span className="text-[9px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Recording
                    </span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <p><span className="text-cyan-400">[Arbitrator]</span> <span className="text-slate-300">Let us proceed to the issue of jurisdiction...</span></p>
                    <p><span className="text-gold-400">[Claimant Counsel]</span> <span className="text-slate-400">Thank you, Mr. Chairman. Our position is...</span></p>
                    <p className="text-slate-600 animate-pulse">▊ AI transcribing...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-3 -right-3 bg-navy-800 border border-cyan-400/30 rounded-lg px-3 py-2 shadow-xl">
              <div className="text-[10px] text-cyan-400 font-semibold">End-to-End Encrypted</div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-navy-800 border border-gold-500/30 rounded-lg px-3 py-2 shadow-xl">
              <div className="text-[10px] text-gold-400 font-semibold">New York Convention Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CoreModules() {
  const colorMap: Record<string, { bg: string; border: string; text: string; glow: string }> = {
    cyan:   { bg: 'bg-cyan-500/10', border: 'border-cyan-400/20', text: 'text-cyan-400', glow: 'hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]' },
    gold:   { bg: 'bg-gold-500/10', border: 'border-gold-400/20', text: 'text-gold-400', glow: 'hover:shadow-[0_0_25px_rgba(201,168,76,0.12)]' },
    emerald:{ bg: 'bg-emerald-500/10', border: 'border-emerald-400/20', text: 'text-emerald-400', glow: 'hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]' },
    violet: { bg: 'bg-violet-500/10', border: 'border-violet-400/20', text: 'text-violet-400', glow: 'hover:shadow-[0_0_25px_rgba(139,92,246,0.12)]' },
  }

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Core Modules</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Four Pillars of Digital Justice
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Each module operates independently yet integrates seamlessly — mirroring the architecture of China&apos;s cloud court system while adding AI-native capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coreModules.map((mod, idx) => {
            const c = colorMap[mod.color]
            return (
              <div
                key={idx}
                className={`group bg-white border ${c.border} rounded-2xl p-8 hover:${c.glow} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 ${c.bg} rounded-xl flex items-center justify-center ${c.text} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {mod.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="font-serif text-xl font-bold text-slate-900">{mod.title}</h3>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-3 tracking-wide">{mod.subtitle}</p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{mod.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {mod.features.map((f) => (
                        <span key={f} className={`text-[11px] ${c.bg} ${c.text} px-2.5 py-1 rounded-full font-medium`}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProcessFlow() {
  return (
    <section className="bg-gradient-navy py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gold opacity-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Workflow</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            From Filing to Award — Six Steps
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A streamlined digital workflow inspired by China&apos;s internet court procedures,
            enhanced with AI automation at each stage.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processFlow.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Step number circle */}
                <div className="relative z-10 mx-auto w-16 h-16 bg-navy-800 border-2 border-gold-500/40 rounded-full flex items-center justify-center mb-4 group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all">
                  <span className="text-2xl">{item.icon}</span>
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[11px] text-gold-500/70 font-medium mb-2">{item.subtitle}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonTable() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Why Digital</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Traditional vs. Digital Tribunal
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            See how DWAC&apos;s Digital Tribunal transforms dispute resolution.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-navy-900">
                <th className="text-left px-6 py-4 font-semibold text-white rounded-tl-xl">Capability</th>
                <th className="text-left px-6 py-4 font-semibold text-slate-300">Traditional Court / Arbitration</th>
                <th className="text-left px-6 py-4 font-semibold text-gold-400 rounded-tr-xl">DWAC Digital Tribunal</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-t border-slate-100`}>
                  <td className="px-6 py-3.5 font-medium text-slate-900 whitespace-nowrap">{row.feature}</td>
                  <td className="px-6 py-3.5 text-slate-500">{row.court}</td>
                  <td className="px-6 py-3.5 font-medium text-emerald-600">{row.dwac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-4 text-center">* Traditional court enforcement limited to domestic jurisdiction or bilateral treaties.</p>
      </div>
    </section>
  )
}

function TechSpecs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">Specifications</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Technical Specifications
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {techSpecs.map((spec) => (
            <div key={spec.category} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">{spec.category}</h3>
              <dl className="space-y-3">
                {spec.items.map((item) => (
                  <div key={item.label} className="flex justify-between items-center gap-4">
                    <dt className="text-xs text-slate-500 font-medium">{item.label}</dt>
                    <dd className="text-sm font-semibold text-slate-900 font-mono text-right">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SecuritySection() {
  return (
    <section className="bg-gradient-navy py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gold opacity-8" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Trust & Security</span>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Enterprise-Grade Security Architecture
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Built to meet the security requirements of judicial systems worldwide.
            Every transmission encrypted, every action logged, every document hashed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <ShieldIcon />, title: 'E2E Encryption', desc: 'AES-256-GCM for data at rest, TLS 1.3 for transit. Zero-knowledge architecture for sensitive documents.', color: 'cyan' },
            { icon: <ChainIcon />, title: 'Blockchain Notarization', desc: 'Awards and critical records anchored to blockchain for tamper-proof verification and non-repudiation.', color: 'gold' },
            { icon: <GlobeIcon />, title: 'Multi-Jurisdiction', desc: 'GDPR, PIPEDA, PDPA compliant. Configurable data residency across AWS/Azure/GCP regions.', color: 'emerald' },
            { icon: <ClockIcon />, title: 'Immutable Audit Trail', desc: 'WORM-compliant logging of every user action. Complete reconstruction of any proceeding at any time.', color: 'violet' },
          ].map((item, idx) => (
            <div key={idx} className="bg-navy-800/60 border border-slate-700/50 rounded-xl p-6 hover:border-gold-500/30 transition-all group">
              <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-serif text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-10 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-green-400/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold tracking-[2px] uppercase text-green-400">Accepting Cases Now</span>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
              Experience the Future of{' '}
              <span className="text-gradient-gold">Dispute Resolution</span>
            </h2>

            <p className="text-slate-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Whether you&apos;re a business navigating cross-border commerce, an individual seeking efficient justice,
              or a legal professional exploring new frontiers — the Digital Tribunal is ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dispute/" className="bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide px-10 py-4 rounded-md hover:shadow-[0_0_35px_rgba(201,168,76,0.3)] hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2">
                File a Case
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              <Link href="/contact/" className="border border-slate-600 text-slate-300 font-semibold text-sm px-10 py-4 rounded-md hover:border-gold-500/50 hover:text-gold-400 transition-all inline-flex items-center justify-center gap-2">
                Schedule a Demo
              </Link>
            </div>

            <p className="mt-8 text-[11px] text-slate-500">
              No credit card required · Free consultation · Response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Main Page Component ───────────────────────────────────────

export default function DigitalTribunalPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CoreModules />
      <ProcessFlow />
      <ComparisonTable />
      <TechSpecs />
      <SecuritySection />
      <CTASection />
    </div>
  )
}
