'use client'

import { useEffect } from 'react'

export default function ZhCnAgentClubRedirect() {
  useEffect(() => {
    window.location.href = '/agent-club/'
  }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <p className="text-slate-500">正在跳转到 Agent Club...</p>
    </div>
  )
}
