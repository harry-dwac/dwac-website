'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    organization: '',
    title: '',
    realName: '',
    isRealName: false,
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('注册已提交！此功能将在后端系统部署后开放。感谢您的关注。')
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">加入DWAC</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">创建您的账户</h1>
          <p className="text-slate-300 leading-relaxed">
            注册以访问独家资源、参与社区讨论，并随时了解数字世界仲裁的最新发展。
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 lg:p-10">
            {/* Basic Info */}
            <h2 className="font-serif text-lg font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100">基本信息</h2>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                  显示名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                  placeholder="您希望如何被称呼"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  电子邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                    密码 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                    placeholder="至少8个字符"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1.5">
                    确认密码 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                    placeholder="再次输入密码"
                  />
                </div>
              </div>
            </div>

            {/* Real Name Section */}
            <div className="mt-8">
              <h2 className="font-serif text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">实名认证 <span className="text-xs font-normal text-slate-400 ml-2">可选</span></h2>

              <div className="bg-gold-500/[0.04] border border-gold-subtle rounded-lg p-4 mb-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isRealName"
                    checked={formData.isRealName}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-gold-500 focus:ring-gold-500/30"
                  />
                  <div>
                    <span className="text-sm font-medium text-slate-900">实名注册</span>
                    <p className="text-xs text-slate-500 mt-0.5">
                      提供您的真实姓名和专业资质，以获取增强的访问权限和可信度。
                    </p>
                  </div>
                </label>
              </div>

              {formData.isRealName && (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <label htmlFor="realName" className="block text-sm font-medium text-slate-700 mb-1.5">
                      真实姓名
                    </label>
                    <input
                      type="text"
                      id="realName"
                      name="realName"
                      value={formData.realName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                      placeholder="证件上的真实姓名"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-1.5">
                        所在机构
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                        placeholder="律师事务所、大学等"
                      />
                    </div>
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1.5">
                        职务
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                        placeholder="律师、教授等"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terms and Submit */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <label className="flex items-start gap-3 cursor-pointer mb-6">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-gold-500 focus:ring-gold-500/30"
                />
                <span className="text-xs text-slate-500">
                  我同意数字世界仲裁中心的{' '}
                  <Link href="/zh-cn/rules/" className="text-gold-600 hover:text-gold-700 underline">服务条款</Link>
                  {' '}和{' '}
                  <Link href="/zh-cn/charter/" className="text-gold-600 hover:text-gold-700 underline">隐私政策</Link>
                  。
                </span>
              </label>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
              >
                创建账户
              </button>
            </div>

            {/* Login link */}
            <p className="mt-6 text-center text-sm text-slate-500">
              已有账户？{' '}
              <Link href="/zh-cn/login/" className="text-gold-600 hover:text-gold-700 font-medium">
                登录
              </Link>
            </p>
          </form>

          {/* Anonymous access note */}
          <div className="mt-6 bg-white border border-slate-200 rounded-xl p-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm font-semibold text-slate-900">无需注册即可浏览</span>
            </div>
            <p className="text-xs text-slate-500">
              所有页面和资源均可免费访问，无需注册。注册后可解锁社区功能和个性化更新。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
