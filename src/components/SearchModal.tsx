'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface SearchItem {
  title: string
  path: string
  lang: string
  keywords: string
}

const searchIndex: SearchItem[] = [
  { title: 'Home', path: '/', lang: 'en', keywords: 'home dwac digital world arbitration centre' },
  { title: 'About DWAC', path: '/about/', lang: 'en', keywords: 'about founder mission' },
  { title: 'Digital Tribunal', path: '/digital-tribunal/', lang: 'en', keywords: 'digital tribunal ai arbitration technology' },
  { title: 'Arbitration Rules', path: '/rules/', lang: 'en', keywords: 'rules procedure tribunal composition expedited standard' },
  { title: 'Full Arbitration Rules', path: '/rules/full/', lang: 'en', keywords: 'full rules 67 articles chapters' },
  { title: 'Arbitration Process Flow', path: '/arbitration-flow/', lang: 'en', keywords: 'flow process step filing hearing award enforcement' },
  { title: 'How to Apply', path: '/how-to-apply/', lang: 'en', keywords: 'apply file submit arbitration request' },
  { title: 'Submit Dispute', path: '/dispute/', lang: 'en', keywords: 'dispute submit case claimant respondent' },
  { title: 'Fee Calculator', path: '/fee-calculator/', lang: 'en', keywords: 'fee calculator cost estimate' },
  { title: 'Fees & Costs', path: '/fees/', lang: 'en', keywords: 'fees costs schedule' },
  { title: 'Virtual Hearing', path: '/virtual-hearing/', lang: 'en', keywords: 'virtual hearing online room video' },
  { title: 'Cases', path: '/cases/', lang: 'en', keywords: 'cases statistics' },
  { title: 'Model Clause', path: '/model-clause/', lang: 'en', keywords: 'model clause arbitration agreement' },
  { title: 'Legal Resources', path: '/resources/law/', lang: 'en', keywords: 'law legal resources treaties conventions' },
  { title: 'Contracts & Templates', path: '/resources/contracts/', lang: 'en', keywords: 'contracts templates agreements' },
  { title: 'Agent-Arbitrator Club', path: '/agent-club/', lang: 'en', keywords: 'agent club arbitrator ai digital' },
  { title: 'Community', path: '/community/', lang: 'en', keywords: 'community forum discussion' },
  { title: 'FAQ', path: '/faq/', lang: 'en', keywords: 'faq questions answers' },
  { title: 'Charter', path: '/charter/', lang: 'en', keywords: 'charter constitution governance' },
  { title: 'Contact', path: '/contact/', lang: 'en', keywords: 'contact email address' },
  { title: 'Tribunal', path: '/tribunal/', lang: 'en', keywords: 'tribunal panel arbitrators' },
  { title: 'Expertise', path: '/expertise/', lang: 'en', keywords: 'expertise areas blockchain ai cybersecurity' },
  { title: 'Evidence Guidance', path: '/evidence-guidance/', lang: 'en', keywords: 'evidence guidance digital proof' },
  { title: 'Downloads', path: '/downloads/', lang: 'en', keywords: 'downloads documents forms' },
  { title: 'Application Forms', path: '/resources/forms/', lang: 'en', keywords: 'forms application' },
  { title: 'Membership', path: '/membership/', lang: 'en', keywords: 'membership join' },
  { title: 'Members & Arbitrators', path: '/membership-arbitrators/', lang: 'en', keywords: 'members arbitrators directory' },
  { title: 'Join as Arbitrator', path: '/arbitrators/join/', lang: 'en', keywords: 'join arbitrator register' },
  // zh-cn
  { title: '首页', path: '/zh-cn/', lang: 'zh-cn', keywords: '首页 数字世界仲裁中心' },
  { title: '关于DWAC', path: '/zh-cn/about/', lang: 'zh-cn', keywords: '关于 创始人 使命' },
  { title: '数字仲裁庭', path: '/zh-cn/digital-tribunal/', lang: 'zh-cn', keywords: '数字仲裁庭 人工智能 技术' },
  { title: '仲裁规则', path: '/zh-cn/rules/', lang: 'zh-cn', keywords: '仲裁规则 程序 快速 标准' },
  { title: '完整仲裁规则', path: '/zh-cn/rules/full/', lang: 'zh-cn', keywords: '完整规则 67条' },
  { title: '仲裁流程', path: '/zh-cn/arbitration-flow/', lang: 'zh-cn', keywords: '流程 申请 庭审 裁决 执行' },
  { title: '如何申请', path: '/zh-cn/how-to-apply/', lang: 'zh-cn', keywords: '申请 提交 仲裁' },
  { title: '提交仲裁', path: '/zh-cn/dispute/', lang: 'zh-cn', keywords: '争议 提交 申请人 被申请人' },
  { title: '费用计算器', path: '/zh-cn/fee-calculator/', lang: 'zh-cn', keywords: '费用 计算器 成本' },
  { title: '在线庭审', path: '/zh-cn/virtual-hearing/', lang: 'zh-cn', keywords: '在线 庭审 视频' },
  { title: '案件统计', path: '/zh-cn/cases/', lang: 'zh-cn', keywords: '案件 统计' },
  { title: '示范仲裁条款', path: '/zh-cn/model-clause/', lang: 'zh-cn', keywords: '示范 条款 仲裁协议' },
  { title: '法律资源', path: '/zh-cn/resources/law/', lang: 'zh-cn', keywords: '法律 资源 公约 条约' },
  // zh-tw
  { title: '首頁', path: '/zh-tw/', lang: 'zh-tw', keywords: '首頁 數字世界仲裁中心' },
  { title: '關於DWAC', path: '/zh-tw/about/', lang: 'zh-tw', keywords: '關於 創始人 使命' },
  { title: '數字仲裁庭', path: '/zh-tw/digital-tribunal/', lang: 'zh-tw', keywords: '數字仲裁庭 人工智能 技術' },
  { title: '仲裁規則', path: '/zh-tw/rules/', lang: 'zh-tw', keywords: '仲裁規則 程序 快速 標準' },
  { title: '完整仲裁規則', path: '/zh-tw/rules/full/', lang: 'zh-tw', keywords: '完整規則 67條' },
  { title: '仲裁流程', path: '/zh-tw/arbitration-flow/', lang: 'zh-tw', keywords: '流程 申請 庭審 裁決 執行' },
  { title: '如何申請', path: '/zh-tw/how-to-apply/', lang: 'zh-tw', keywords: '申請 提交 仲裁' },
  { title: '提交仲裁', path: '/zh-tw/dispute/', lang: 'zh-tw', keywords: '爭議 提交 申請人 被申請人' },
  { title: '費用計算器', path: '/zh-tw/fee-calculator/', lang: 'zh-tw', keywords: '費用 計算器 成本' },
  { title: '在線庭審', path: '/zh-tw/virtual-hearing/', lang: 'zh-tw', keywords: '在線 庭審 視頻' },
  { title: '案件統計', path: '/zh-tw/cases/', lang: 'zh-tw', keywords: '案件 統計' },
  { title: '示範仲裁條款', path: '/zh-tw/model-clause/', lang: 'zh-tw', keywords: '示範 條款 仲裁協議' },
  { title: '法律資源', path: '/zh-tw/resources/law/', lang: 'zh-tw', keywords: '法律 資源 公約 條約' },
]

export default function SearchModal({ isOpen, onClose, currentLang }: { isOpen: boolean; onClose: () => void; currentLang: string }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchItem[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
    if (!isOpen) {
      setQuery('')
      setResults([])
    }
  }, [isOpen])

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }
    const q = query.toLowerCase()
    const filtered = searchIndex.filter(item => {
      // Prioritize current language results
      return item.title.toLowerCase().includes(q) ||
             item.keywords.toLowerCase().includes(q) ||
             item.path.toLowerCase().includes(q)
    })
    // Sort: current lang first
    filtered.sort((a, b) => {
      if (a.lang === currentLang && b.lang !== currentLang) return -1
      if (b.lang === currentLang && a.lang !== currentLang) return 1
      return 0
    })
    setResults(filtered.slice(0, 10))
  }, [query, currentLang])

  const handleSelect = (path: string) => {
    router.push(path)
    onClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative bg-navy-900 border border-gold-subtle rounded-xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="flex items-center border-b border-gold-subtle/50 px-4">
          <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search pages..."
            className="w-full py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
          />
          <kbd className="hidden sm:block text-xs text-gray-600 border border-gray-700 rounded px-1.5 py-0.5 ml-2">ESC</kbd>
        </div>
        {results.length > 0 && (
          <ul className="max-h-80 overflow-y-auto py-2">
            {results.map((item, i) => (
              <li key={item.path}>
                <button
                  onClick={() => handleSelect(item.path)}
                  className="w-full text-left px-4 py-3 hover:bg-navy-800/60 transition-colors flex items-center justify-between group"
                >
                  <div>
                    <div className="text-sm text-white group-hover:text-gold-400 transition-colors">{item.title}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{item.path}</div>
                  </div>
                  <span className="text-xs text-gray-700 uppercase">{item.lang}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {query && results.length === 0 && (
          <div className="py-8 text-center text-gray-600 text-sm">No results found for &ldquo;{query}&rdquo;</div>
        )}
      </div>
    </div>
  )
}
