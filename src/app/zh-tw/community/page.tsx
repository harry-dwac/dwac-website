
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '社群 - 數字世界仲裁中心',
  description: '加入DWAC社群，討論數字仲裁，分享見解，與專家交流。',
}

import WalineComment from '@/components/WalineComment'

const discussionCategories = [
  {
    emoji: '🏛️',
    name: '公告',
    description: 'DWAC 官方新聞、更新和重要通知',
  },
  {
    emoji: '💬',
    name: '綜合討論',
    description: '開放討論、自我介紹和社區交流',
  },
  {
    emoji: '💡',
    name: '創意想法',
    description: '功能請求、建議和創新提案',
  },
  {
    emoji: '❓',
    name: '問答',
    description: '關於仲裁程序和 DWAC 流程的問題',
  },
  {
    emoji: '📊',
    name: '投票',
    description: '社區調查和集體決策',
  },
  {
    emoji: '🙌',
    name: '成果展示',
    description: '分享您的工作、成就和案例經驗',
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* ===== HERO — Dark ===== */}
      <section className="relative bg-gradient-navy py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-gold opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-[3px] uppercase text-gold-500 mb-3 block">社群</span>
          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-5">社群論壇</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            DWAC 成員交流思想、分享案例見解、協作推進數位世界仲裁實踐的專屬空間。
          </p>
        </div>
      </section>

      {/* ===== Categories — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">討論主題</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              加入討論
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              按分類瀏覽討論，提出問題，分享專業知識，或發起新話題。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {discussionCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-2xl mb-3 block">{cat.emoji}</span>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Waline Comments ===== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold tracking-[3px] uppercase text-gold-600 mb-3 block">論壇</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              討論區
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              分享您的想法、提出問題或發起新討論。無需 GitHub 帳號！
            </p>
          </div>
          <WalineComment lang="zh-TW" />
        </div>
      </section>

      {/* ===== Guidelines — Light ===== */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <svg className="w-6 h-6 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              社群準則
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                在所有互動中保持尊重和專業
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                圍繞主題進行建設性討論
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                分享案例前匿名化處理 — 保護機密性
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                引用他人成果時註明出處
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                將討論放在適當的分類下
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
