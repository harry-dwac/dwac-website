'use client'

import { useEffect } from 'react'

export default function ForumPage() {
  useEffect(() => {
    window.location.replace('/zh-cn/community/')
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-navy-900">
      <p className="text-slate-300 text-lg">正在跳转到社区论坛...</p>
    </div>
  )
}