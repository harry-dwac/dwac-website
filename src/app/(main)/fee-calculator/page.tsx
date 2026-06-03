'use client'

import { useState } from 'react'

export default function FeeCalculator() {
  const [amount, setAmount] = useState<string>('')
  const [arbitrators, setArbitrators] = useState<string>('1')
  const [procedure, setProcedure] = useState<string>('standard')
  const [showResults, setShowResults] = useState<boolean>(false)
  const [fees, setFees] = useState<{ filing: number; arbitrator: number; admin: number; total: number }>({
    filing: 0,
    arbitrator: 0,
    admin: 0,
    total: 0
  })

  const calculateFees = () => {
    const amountNum = parseFloat(amount) || 0
    const arbitratorCount = parseInt(arbitrators)
    
    // 费用计算（RMB）
    let filingFee: number
    if (amountNum <= 70000) filingFee = 700
    else if (amountNum <= 350000) filingFee = 1750
    else if (amountNum <= 700000) filingFee = 3500
    else if (amountNum <= 3500000) filingFee = 7000
    else if (amountNum <= 7000000) filingFee = 14000
    else filingFee = 21000
    
    let arbitratorFeeBase: number
    if (amountNum <= 350000) arbitratorFeeBase = 8750
    else if (amountNum <= 1400000) arbitratorFeeBase = 24500
    else if (amountNum <= 3500000) arbitratorFeeBase = 52500
    else if (amountNum <= 7000000) arbitratorFeeBase = 105000
    else arbitratorFeeBase = amountNum * 0.015
    
    const arbitratorFee = arbitratorCount === 3 ? arbitratorFeeBase * 2.5 : arbitratorFeeBase
    
    let adminFee = 3500
    if (procedure === 'expedited') adminFee += 10500
    
    const total = filingFee + arbitratorFee + adminFee
    
    setFees({
      filing: filingFee,
      arbitrator: Math.round(arbitratorFee),
      admin: adminFee,
      total: Math.round(total)
    })
    setShowResults(true)
  }

  return (
    <div className="flex flex-col">
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">费用计算器 | Fee Calculator</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            使用人民币（RMB）估算您的仲裁费用 | Estimate arbitration costs in RMB
          </p>
        </div>
      </section>

      <section className="py-16 bg-navy-800/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-800/30 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-white mb-6">计算费用 | Calculate Fees</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block font-medium text-white mb-2">争议金额（人民币 RMB）</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="输入金额（例如：500000）"
                  className="w-full px-4 py-3 border-2 border-gold-subtle/50 rounded-lg focus:border-gold-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-medium text-white mb-2">仲裁员人数 | Number of Arbitrators</label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="arbitrators"
                      value="1"
                      checked={arbitrators === '1'}
                      onChange={(e) => setArbitrators(e.target.value)}
                      className="w-4 h-4 text-gold-500 mr-2"
                    />
                    <span className="text-gray-300">独任仲裁员 | Single Arbitrator</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="arbitrators"
                      value="3"
                      checked={arbitrators === '3'}
                      onChange={(e) => setArbitrators(e.target.value)}
                      className="w-4 h-4 text-gold-500 mr-2"
                    />
                    <span className="text-gray-300">三名仲裁员 | Three Arbitrators</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-medium text-white mb-2">程序类型 | Procedure Type</label>
                <div className="flex gap-6">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="procedure"
                      value="standard"
                      checked={procedure === 'standard'}
                      onChange={(e) => setProcedure(e.target.value)}
                      className="w-4 h-4 text-gold-500 mr-2"
                    />
                    <span className="text-gray-300">标准程序 | Standard</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="procedure"
                      value="expedited"
                      checked={procedure === 'expedited'}
                      onChange={(e) => setProcedure(e.target.value)}
                      className="w-4 h-4 text-gold-500 mr-2"
                    />
                    <span className="text-gray-300">快速程序 | Expedited (+¥10,500)</span>
                  </label>
                </div>
              </div>

              <button
                onClick={calculateFees}
                className="w-full py-4 bg-gradient-gold text-navy-900 font-bold hover:shadow-[0_0_20px_rgba(201,168,76,0.25)] font-semibold rounded-lg transition-colors text-lg"
              >
                计算费用 | Calculate Fees
              </button>

              {showResults && (
                <div className="bg-navy-800/20 rounded-xl p-6 mt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">费用估算 | Fee Estimate</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-gray-400">立案费 | Filing Fee</span>
                      <span className="font-semibold text-white">¥{fees.filing.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-gray-400">仲裁员费 | Arbitrator Fee</span>
                      <span className="font-semibold text-white">¥{fees.arbitrator.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-gray-400">管理费 | Administrative Fee</span>
                      <span className="font-semibold text-white">¥{fees.admin.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-3 bg-slate-900 rounded-lg px-4 -mx-4 mt-4">
                      <span className="text-white font-semibold">预估总计 | Estimated Total</span>
                      <span className="text-gold-400 font-bold text-xl">¥{fees.total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 bg-gold-500/[0.06] border-l-4 border-gold-subtle p-4 rounded-r-lg">
            <p className="text-gold-400 text-sm">
              <strong>注意 | Note:</strong> 此为参考估算。实际费用可能因案件复杂程度、仲裁员选择等因素而异。获取精确报价请联系 <a href="mailto:secretary@dwac.net" className="underline">secretary@dwac.net</a>。
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div className="bg-navy-800/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white mb-4">立案费表 | Filing Fee Schedule</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-navy-800/40">
                      <th className="text-left px-4 py-3 font-semibold text-white">争议金额 | Dispute Amount</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">立案费 | Filing Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-4 py-3">¥70,000 或以下 | or less</td><td className="px-4 py-3">¥700</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥70,001 - ¥350,000</td><td className="px-4 py-3">¥1,750</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥350,001 - ¥700,000</td><td className="px-4 py-3">¥3,500</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥700,001 - ¥3,500,000</td><td className="px-4 py-3">¥7,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥3,500,001 - ¥7,000,000</td><td className="px-4 py-3">¥14,000</td></tr>
                    <tr><td className="px-4 py-3">¥7,000,000 以上 | Over ¥7,000,000</td><td className="px-4 py-3">¥21,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-navy-800/20 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-white mb-4">仲裁员费指南 | Arbitrator Fee Guide</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-navy-800/40">
                      <th className="text-left px-4 py-3 font-semibold text-white">争议金额 | Dispute Amount</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">独任仲裁员 | Single</th>
                      <th className="text-left px-4 py-3 font-semibold text-white">三名仲裁员 | Three</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="px-4 py-3">¥350,000 或以下 | or less</td><td className="px-4 py-3">¥3,500 - ¥14,000</td><td className="px-4 py-3">¥8,750 - ¥35,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥350,001 - ¥1,400,000</td><td className="px-4 py-3">¥14,000 - ¥35,000</td><td className="px-4 py-3">¥35,000 - ¥87,500</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥1,400,001 - ¥3,500,000</td><td className="px-4 py-3">¥35,000 - ¥70,000</td><td className="px-4 py-3">¥87,500 - ¥175,000</td></tr>
                    <tr className="border-b"><td className="px-4 py-3">¥3,500,001 - ¥7,000,000</td><td className="px-4 py-3">¥70,000 - ¥140,000</td><td className="px-4 py-3">¥175,000 - ¥350,000</td></tr>
                    <tr><td className="px-4 py-3">¥7,000,000 以上 | Over ¥7,000,000</td><td className="px-4 py-3">争议金额的1-2% | 1-2% of amount</td><td className="px-4 py-3">争议金额的2.5-5% | 2.5-5% of amount</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
