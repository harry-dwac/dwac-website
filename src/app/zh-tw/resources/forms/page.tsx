'use client'
import { useEffect } from 'react'

export default function FormsRedirect() {
  useEffect(() => {
    window.location.replace('/zh-tw/how-to-apply/')
  }, [])
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <p className="text-gray-400">Redirecting to <a href="/zh-tw/how-to-apply/" className="text-gold-400 hover:underline">Application Forms</a>...</p>
    </div>
  )
}
