'use client'

import { useEffect } from 'react'


export default function ZhContactRedirect() {
  

  useEffect(() => {
    window.location.replace('/zh-cn/contact/')
  }, [])

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gold-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-slate-400">重定向到简体中文联系页面...</p>
      </div>
    </div>
  )
}
