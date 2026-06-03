'use client'

import { useEffect } from 'react'

export default function ForumPage() {
  useEffect(() => {
    window.location.replace('/community/')
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-navy-900">
      <p className="text-slate-300 text-lg">Redirecting to Community Forum...</p>
    </div>
  )
}