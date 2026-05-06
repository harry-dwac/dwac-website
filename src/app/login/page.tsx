'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Login functionality will be available once our backend system is deployed. Thank you for your patience.')
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-navy text-white pt-[120px] pb-16 lg:pt-[140px] lg:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">Welcome Back</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold mb-4">Sign In</h1>
          <p className="text-slate-300 leading-relaxed">
            Access your DWAC account to participate in community discussions and manage your profile.
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 lg:p-10">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email Address
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

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-gold-500/30 focus:border-gold-500 transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-slate-300 text-gold-500 focus:ring-gold-500/30"
                  />
                  <span className="text-xs text-slate-500">Remember me</span>
                </label>
                <span className="text-xs text-gold-600 hover:text-gold-700 cursor-pointer">
                  Forgot password?
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-6 py-3 bg-gradient-gold text-navy-900 font-bold text-sm tracking-wide rounded-lg hover:shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:-translate-y-0.5 transition-all"
            >
              SIGN IN
            </button>

            <p className="mt-6 text-center text-sm text-slate-500">
              Don&apos;t have an account?{' '}
              <Link href="/register/" className="text-gold-600 hover:text-gold-700 font-medium">
                Create one
              </Link>
            </p>
          </form>

          {/* Anonymous access */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-slate-600 transition-colors"
            >
              ← Continue browsing without an account
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
