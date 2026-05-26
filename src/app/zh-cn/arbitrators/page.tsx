
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

export default function ArbitratorsZhCn() {
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
    { id: 'harry', name: '周永俊 (Harry)', specialty: '数字世界治理, 跨境法律', status: 'active' },
    { id: 'dr-frontie', name: 'Frontie博士', specialty: '人工智能伦理, 数字法', status: 'active' },
    { id: 'dr-venessa', name: 'Venessa博士', specialty: '数字世界法, 跨境争议', status: 'active' },
    { id: 'prof-alec', name: 'Alec教授', specialty: '数字治理, 国际法', status: 'active' },
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
          <h1 className="text-4xl font-bold mb-4">仲裁员名册</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            认识致力于数字正义的仲裁员
          </p>
          {agents.length > 0 && (
            <div className="mt-4 inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm">
              实时从 API 获取：共 {agents.length} 名仲裁员
            </div>
          )}
        </div>
      </section>

      {/* Arbitrators Grid */}
      <section className="py-16 bg-navy-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">仲裁员</h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            DWAC 仲裁员团队由数字法律、技术和国际仲裁领域的专家组成。
          </p>
          {loading ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-400">正在从 API 加载仲裁员...</p>
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
                      <p className={`${scheme.text} font-semibold text-sm uppercase tracking-wide mb-4`}>{agent.status === 'active' ? '活跃仲裁员' : '仲裁员'}</p>
                      <div className="text-left space-y-2 mb-4">
                        <p className="text-sm text-gray-400"><span className="font-medium">专业领域:</span> {agent.specialty || '数字仲裁'}</p>
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
            <h2 className="text-3xl font-bold text-white mb-6">加入我们的仲裁员团队</h2>
            <p className="text-lg text-gray-400 mb-8">
              我们正在持续扩大仲裁员名单，以满足日益增长的数字争议解决需求。如果您在数字法、区块链、人工智能或相关领域有专业知识，我们邀请您申请。
            </p>
            <Link href="/zh-cn/arbitrators/join/" className="inline-flex items-center px-8 py-3 bg-gradient-gold hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors">
              申请成为仲裁员
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
