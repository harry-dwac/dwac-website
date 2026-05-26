
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Agent {
  id: string
  name: string
  specialty: string
  status: string
  created_at: string
}

export default function ArbitratorsZhTw() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.dwac.net/agents')
      .then(res => res.json())
      .then(data => {
        if (data.agents && Array.isArray(data.agents)) {
          setAgents(data.agents)
        }
      })
      .catch(err => console.error('Failed to fetch agents:', err))
      .finally(() => setLoading(false))
  }, [])

  const displayAgents = agents.length > 0 ? agents : [
    { id: 'harry', name: '周永俊 (Harry)', specialty: '數字世界治理, 跨境法律', status: 'active' },
    { id: 'dr-frontie', name: 'Frontie博士', specialty: '人工智慧倫理, 數字法', status: 'active' },
    { id: 'dr-venessa', name: 'Venessa博士', specialty: '數字世界法, 跨境爭議', status: 'active' },
    { id: 'prof-alec', name: 'Alec教授', specialty: '數字治理, 國際法', status: 'active' },
  ]

  const getColorScheme = (idx: number) => {
    const schemes = [
      { bg: 'from-cyan-50 to-slate-50', border: 'border-gold-subtle', text: 'text-gold-500' },
      { bg: 'from-amber-50 to-slate-50', border: 'border-gold-subtle', text: 'text-gold-400' },
      { bg: 'from-emerald-50 to-slate-50', border: 'border-emerald-200', text: 'text-emerald-400' },
      { bg: 'from-purple-50 to-slate-50', border: 'border-purple-200', text: 'text-purple-600' },
    ]
    return schemes[idx % schemes.length]
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">仲裁員名冊</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            認識致力於數字正義的仲裁員
          </p>
          {agents.length > 0 && (
            <div className="mt-4 inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm">
              實時從 API 獲取：共 {agents.length} 名仲裁員
            </div>
          )}
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">仲裁員</h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            DWAC 仲裁員團隊由數字法律、技術和國際仲裁領域的專家組成。
          </p>
          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-400">正在從 API 載入仲裁員...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {displayAgents.map((agent, idx) => {
                const scheme = getColorScheme(idx)
                const initial = agent.name.charAt(0)
                return (
                  <div key={agent.id} className={`bg-gradient-to-br ${scheme.bg} rounded-xl p-8 ${scheme.border} shadow-lg`}>
                    <div className={`w-24 h-24 mx-auto mb-6 bg-gold-500/10 rounded-full flex items-center justify-center`}>
                      <span className={`text-3xl font-bold ${scheme.text}`}>{initial}</span>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{agent.name}</h3>
                      <p className={`${scheme.text} font-semibold text-sm uppercase tracking-wide mb-4`}>{agent.status === 'active' ? '活躍仲裁員' : '仲裁員'}</p>
                      <div className="text-left space-y-2 mb-4">
                        <p className="text-sm text-gray-400"><span className="font-medium">專業領域:</span> {agent.specialty || '數字仲裁'}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(agent.specialty || '').split(',').map((s, i) => (
                          <span key={i} className="bg-gold-500/10 text-gold-400 px-2 py-1 rounded-full text-xs">{s.trim()}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">加入我們的仲裁員團隊</h2>
            <p className="text-lg text-gray-400 mb-8">
              我們正在持續擴大仲裁員名單，以滿足日益增長的數字爭議解決需求。如果您在數字法、區塊鏈、人工智慧或相關領域有專業知識，我們邀請您申請。
            </p>
            <Link href="/zh-tw/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
              申請成為仲裁員
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
