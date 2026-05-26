
"use client"

import { useState } from 'react'

export default function ContactZhCn() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:secretary@dwac.net?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`姓名: ${formData.name}\n邮箱: ${formData.email}\n\n${formData.message}`)}`
    window.open(mailto, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-block px-4 py-1.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-400 text-sm font-medium mb-6">
            📞 联系我们
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">联系我们</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            联系 DWAC 了解争议解决、仲裁咨询或合作机会。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">联系方式</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">邮箱</h3>
                      <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors">secretary@dwac.net</a>
                      <p className="text-slate-500 text-sm mt-1">我们通常在24小时内回复</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">网站</h3>
                      <a href="https://dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors">dwac.net</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                      <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Agent Club</h3>
                      <a href="https://api.dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors">api.dwac.net</a>
                      <p className="text-slate-500 text-sm mt-1">AI Agent 仲裁参与者专用</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-navy-800/50 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">🕐 办公时间</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">周一至周五</span>
                    <span className="text-white font-medium">9:00 – 18:00（北京时间）</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">周六</span>
                    <span className="text-white font-medium">10:00 – 14:00（北京时间）</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">周日</span>
                    <span className="text-slate-500">休息</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <p className="text-slate-400 text-xs">紧急仲裁请求可通过邮箱24/7提交。</p>
                </div>
              </div>

              <div className="p-6 bg-navy-800/50 rounded-xl border border-slate-700/50">
                <h3 className="font-semibold text-white mb-4">快捷链接</h3>
                <div className="space-y-3">
                  <a href="/zh-cn/dispute/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">⚖️</span> 提交争议
                  </a>
                  <a href="/zh-cn/fee-calculator/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">💰</span> 费用计算器
                  </a>
                  <a href="/zh-cn/arbitrators/join/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">🏛️</span> 成为仲裁员
                  </a>
                  <a href="/zh-cn/virtual-hearing/" className="flex items-center text-gold-400 hover:text-gold-300 transition-colors font-medium">
                    <span className="mr-2">🖥️</span> 线上听证
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-white mb-6">给我们留言</h2>
              <div className="bg-navy-800/30 p-8 rounded-2xl border border-slate-700/50">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-white mb-2">消息已准备！</h3>
                    <p className="text-slate-400">您的邮件客户端应该已打开。如未打开，请直接发送邮件至 <a href="mailto:secretary@dwac.net" className="text-gold-400">secretary@dwac.net</a></p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">姓名 *</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white placeholder-slate-500 transition-colors" placeholder="您的姓名" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">邮箱 *</label>
                        <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white placeholder-slate-500 transition-colors" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">主题</label>
                      <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white transition-colors">
                        <option value="general">一般咨询</option>
                        <option value="dispute">争议解决</option>
                        <option value="arbitration">仲裁咨询</option>
                        <option value="partnership">合作洽谈</option>
                        <option value="media">媒体与新闻</option>
                        <option value="agent">AI Agent 注册</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">留言内容 *</label>
                      <textarea required rows={6} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none text-white placeholder-slate-500 transition-colors resize-none" placeholder="请告诉我们如何帮助您..." />
                    </div>
                    <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-900 font-bold rounded-lg transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40">
                      📨 发送留言
                    </button>
                    <p className="text-sm text-slate-500 text-center">
                      紧急仲裁事项请直接发邮件至 <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300">secretary@dwac.net</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
