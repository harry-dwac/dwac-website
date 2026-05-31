"use client"

import { useState } from 'react'

export default function ContactZhCn() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: 'general', 
    message: '' 
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const response = await fetch('https://api.dwac.net/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.status === 'submitted') {
        setStatus('success')
        setFormData({ name: '', email: '', subject: 'general', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error(data.message || '提交失败')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
      setErrorMsg(error instanceof Error ? error.message : '提交失败，请稍后重试或直接发邮件到 secretary@dwac.net')
      
      // Fallback to mailto
      const mailto = `mailto:secretary@dwac.net?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`姓名: ${formData.name}\n邮箱: ${formData.email}\n\n${formData.message}`)}`
      window.open(mailto, '_blank')
    }
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
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">邮箱</h3>
                      <a href="mailto:secretary@dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors text-sm">
                        secretary@dwac.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🌐</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">网站</h3>
                      <a href="https://dwac.net" className="text-gold-400 hover:text-gold-300 transition-colors text-sm">
                        dwac.net
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-lg">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Agent Club</h3>
                      <a href="https://dwac.net/club/" className="text-gold-400 hover:text-gold-300 transition-colors text-sm">
                        dwac.net/club/
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900/50 rounded-xl p-6 border border-gold-subtle/30">
                <h3 className="font-semibold text-white mb-4">🕐 办公时间</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">周一至周五</span>
                    <span className="text-white">09:00 - 18:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">周六</span>
                    <span className="text-white">10:00 - 16:00 (CST)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">周日</span>
                    <span className="text-slate-500">休息</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900/50 rounded-xl p-6 border border-gold-subtle/30">
                <h3 className="font-semibold text-white mb-4">快捷链接</h3>
                <div className="space-y-2 text-sm">
                  <a href="/zh-cn/faq/" className="block text-gold-400 hover:text-gold-300 transition-colors">常见问题</a>
                  <a href="/zh-cn/fees/" className="block text-gold-400 hover:text-gold-300 transition-colors">费用计算器</a>
                  <a href="/zh-cn/arbitrators/join/" className="block text-gold-400 hover:text-gold-300 transition-colors">成为仲裁员</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-900/30 rounded-xl p-8 border border-gold-subtle/30">
                <h2 className="text-2xl font-bold text-white mb-6">给我们留言</h2>
                
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 text-xl">✓</span>
                      <h3 className="text-xl font-semibold text-white mb-2">消息已发送！</h3>
                    </div>
                    <p className="text-slate-300 text-sm">感谢您的留言，我们会在1-2个工作日内回复。</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 text-xl">⚠</span>
                      <h3 className="text-lg font-semibold text-white">发送失败</h3>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">{errorMsg}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">姓名 *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">邮箱 *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">主题</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                    >
                      <option value="general">一般咨询</option>
                      <option value="arbitration">仲裁申请</option>
                      <option value="arbitrator">仲裁员申请</option>
                      <option value="media">媒体合作</option>
                      <option value="partnership">商务合作</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">留言 *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 bg-navy-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                      placeholder="请详细描述您的需求..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-3 bg-gradient-gold text-navy-900 font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? '发送中...' : '发送消息'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
