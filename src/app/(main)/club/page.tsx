'use client'

import { useEffect } from 'react'

export default function ClubRedirect() {
  useEffect(() => {
    window.location.href = '/agent-club/'
  }, [])
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <p className="text-slate-500">Redirecting to Agent Club...</p>
    </div>
  )
}
