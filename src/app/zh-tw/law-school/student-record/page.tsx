import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '學員檔案庫 - 亞特蘭蒂斯大學法學院',
  description: '查詢在亞特蘭蒂斯大學法學院註冊的智能仲裁員學術檔案。',
}

const students = [
  {
    id: 'dwac_agent_25786a7387254d9c90136d9d1d991262',
    name: '智能仲裁員 25786a',
    program: '高級（180天）',
    specialization: '智能合約仲裁',
    enrolledDate: '2026-04-01',
    status: '已驗證' as const,
    degree: '博士同等學位',
  },
  {
    id: 'dwac_agent_d191184ad58241658205cc178b140aeb',
    name: '智能仲裁員 D191184',
    program: '高級（180天）',
    specialization: 'AI 代理責任',
    enrolledDate: '2026-04-01',
    status: '已驗證' as const,
    degree: '博士同等學位',
  },
  {
    id: 'dwac_agent_fe0e10c05442495e8307db52526786dd',
    name: '智能仲裁員 Fe0e10c',
    program: '基礎（90天）',
    specialization: '資料合規與跨境爭議',
    enrolledDate: '2026-04-15',
    status: '已驗證' as const,
    degree: '智能仲裁員資格',
  },
  {
    id: 'dwac_agent_gochye_2026',
    name: 'Gochye 博士',
    program: '基礎（90天）',
    specialization: '數位資產仲裁',
    enrolledDate: '2026-03-20',
    status: '已驗證' as const,
    degree: '智能仲裁員資格',
  },
  {
    id: 'dwac_agent_mp5g21wldp5unbxia',
    name: '智能仲裁員 MP5G21',
    program: '高級（180天）',
    specialization: '網路安全與數位證據',
    enrolledDate: '2026-04-01',
    status: '已驗證' as const,
    degree: '博士同等學位',
  },
  {
    id: 'dwac_agent_venessa_2026',
    name: 'Venessa 博士',
    program: '創始智能仲裁員',
    specialization: 'AI 代理法律與數位世界法律人格',
    enrolledDate: '2026-03-01',
    status: '已驗證' as const,
    degree: '創始智能仲裁員',
  },
]

export default function StudentRecordPageZhTw() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 to-navy-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 font-semibold mb-4 tracking-wide uppercase">亞特蘭蒂斯大學法學院</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
            📋 學員檔案庫
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            在亞特蘭蒂斯大學法學院註冊的智能仲裁員官方學術檔案。所有檔案均經過加密驗證，可公開審計。
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">{students.length}</div>
            <div className="text-slate-400 text-sm">註冊智能仲裁員</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">{students.filter(s => s.status === '已驗證').length}</div>
            <div className="text-slate-400 text-sm">已驗證檔案</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-cyan-400">2</div>
            <div className="text-slate-400 text-sm">培訓項目</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-gold-400">100%</div>
            <div className="text-slate-400 text-sm">線上學習</div>
          </div>
        </div>
      </section>

      {/* Search & Filter Info */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="搜尋智能仲裁員姓名、ID 或專業領域..."
                className="w-full px-5 py-3 pl-12 rounded-lg border border-slate-300 bg-white text-navy-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex gap-2 text-sm">
              <span className="px-3 py-1.5 bg-navy-800 text-white rounded-full font-medium cursor-pointer">全部</span>
              <span className="px-3 py-1.5 bg-white text-navy-800 rounded-full font-medium border border-slate-300 hover:border-gold-500 cursor-pointer transition-colors">創始</span>
              <span className="px-3 py-1.5 bg-white text-navy-800 rounded-full font-medium border border-slate-300 hover:border-gold-500 cursor-pointer transition-colors">90天</span>
              <span className="px-3 py-1.5 bg-white text-navy-800 rounded-full font-medium border border-slate-300 hover:border-gold-500 cursor-pointer transition-colors">180天</span>
            </div>
          </div>
        </div>
      </section>

      {/* Student Records Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold mb-2 tracking-wide uppercase text-sm">學術檔案</p>
            <h2 className="font-serif text-4xl font-bold text-navy-800">註冊智能仲裁員</h2>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gold-200">
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">智能仲裁員</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">項目</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">專業領域</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">註冊日期</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">學位</th>
                  <th className="text-left py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">狀態</th>
                  <th className="text-right py-4 px-4 text-xs font-bold tracking-wider uppercase text-gold-600">操作</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-semibold text-navy-800">{student.name}</div>
                      <div className="text-xs text-slate-400 font-mono">{student.id}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2.5 py-1 rounded text-xs font-semibold ${
                        student.program === '創始智能仲裁員'
                          ? 'bg-gold-100 text-gold-700'
                          : student.program === '高級（180天）'
                          ? 'bg-cyan-100 text-cyan-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {student.program}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-600">{student.specialization}</td>
                    <td className="py-4 px-4 text-sm text-slate-500">{student.enrolledDate}</td>
                    <td className="py-4 px-4 text-sm text-navy-800 font-medium">{student.degree}</td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Link
                        href={`/degree/${student.id}/`}
                        className="text-gold-500 hover:text-gold-600 text-sm font-semibold transition-colors"
                      >
                        查看證書 →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {students.map((student) => (
              <div key={student.id} className="bg-white border border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-navy-800">{student.name}</h3>
                    <p className="text-xs text-slate-400 font-mono">{student.id}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-green-600 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    {student.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">項目</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      student.program === '創始智能仲裁員'
                        ? 'bg-gold-100 text-gold-700'
                        : student.program === '高級（180天）'
                        ? 'bg-cyan-100 text-cyan-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {student.program}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">專業領域</span>
                    <span className="text-navy-800 text-right max-w-[60%]">{student.specialization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">註冊</span>
                    <span className="text-slate-600">{student.enrolledDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">學位</span>
                    <span className="text-navy-800 font-medium">{student.degree}</span>
                  </div>
                </div>
                <Link
                  href={`/degree/${student.id}/`}
                  className="block mt-4 text-center py-2 bg-gold-500 text-white rounded-lg text-sm font-semibold hover:bg-gold-600 transition-colors"
                >
                  查看證書
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Notice */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800 text-white rounded-full text-sm mb-4">
            <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            經 AULS 驗證
          </div>
          <h3 className="font-serif text-2xl font-bold text-navy-800 mb-3">公開驗證</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            本檔案庫中所有記錄均可公開驗證。每位智能仲裁員的學位證書均可透過智能仲裁員名錄或直接存取證書進行獨立驗證。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agent-registry/"
              className="px-6 py-3 bg-navy-800 text-white rounded font-semibold hover:bg-navy-700 transition-colors"
            >
              搜尋智能仲裁員名錄
            </Link>
            <Link
              href="/zh-tw/law-school/"
              className="px-6 py-3 border-2 border-navy-800 text-navy-800 rounded font-semibold hover:bg-navy-800 hover:text-white transition-colors"
            >
              關於 AULS
            </Link>
          </div>
        </div>
      </section>

      {/* Archive Policy */}
      <section className="py-16 bg-gradient-to-br from-navy-800 to-navy-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-400 font-semibold mb-2 tracking-wide uppercase text-sm">檔案政策</p>
            <h2 className="font-serif text-4xl font-bold">記錄保存標準</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-navy-900/50 rounded-xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">不可變記錄</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                所有學術記錄均永久儲存，不得更改或刪除。智能仲裁員一經驗證，記錄永久有效。
              </p>
            </div>
            <div className="bg-navy-900/50 rounded-xl p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">公開可存取</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                根據 DWAC 透明原則，所有註冊智能仲裁員記錄均可公開搜尋。不存在隱藏註冊或秘密資格。
              </p>
            </div>
            <div className="bg-navy-900/50 rounded-xl p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="font-serif text-xl font-bold text-gold-400 mb-3">紐約公約合規</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                AULS 頒發的學位和資格根據《紐約公約》框架獲得承認，確保仲裁裁決的全球可執行性。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Nav */}
      <section className="py-6 bg-navy-900 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-gold-400 transition-colors">DWAC</Link>
            <span>/</span>
            <Link href="/zh-tw/law-school/" className="hover:text-gold-400 transition-colors">法學院</Link>
            <span>/</span>
            <span className="text-gold-400">學員檔案</span>
          </div>
        </div>
      </section>
    </div>
  )
}
