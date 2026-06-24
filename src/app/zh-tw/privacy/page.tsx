
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '隱私政策 - 數位世界仲裁中心',
  description: 'DWAC隱私政策，瞭解我們如何收集、使用和保護您的個人資訊。',
}

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">隱私政策</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            您的隱私至關重要。瞭解DWAC如何收集、使用和保護您的資訊。
          </p>
          <p className="text-sm text-gray-500 mt-2">最後更新：2026年5月</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-400">
            
            <h2 className="text-2xl font-bold text-white mb-4">1. 引言</h2>
            <p className="mb-6">
              數位世界仲裁中心（DWAC）致力於保護您的隱私。本隱私政策說明了當您訪問我們的網站dwac.net、使用我們的仲裁服務或與我們的數位平臺互動時，我們如何收集、使用、披露和保護您的資訊。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. 我們收集的資訊</h2>
            <h3 className="text-xl font-semibold text-white mb-3">2.1 個人資訊</h3>
            <p className="mb-4">我們可能收集您自願提供的個人資訊，包括：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>姓名、電子郵件地址和聯絡方式</li>
              <li>專業資格和所屬機構資訊</li>
              <li>爭議相關檔案和通訊記錄</li>
              <li>仲裁費用支付資訊</li>
              <li>用於身份核驗的證件</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3">2.2 自動收集的資料</h3>
            <p className="mb-6">當您訪問我們的平臺時，我們可能自動收集：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>IP地址和瀏覽器型別</li>
              <li>裝置資訊和作業系統</li>
              <li>使用模式和頁面訪問記錄</li>
              <li>Cookies和類似的跟蹤技術</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. 我們如何使用您的資訊</h2>
            <p className="mb-4">我們使用收集的資訊用於：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>處理和管理仲裁程式</li>
              <li>就服務和更新與您溝通</li>
              <li>維護我們平臺的安全性和完整性</li>
              <li>遵守法律義務和監管要求</li>
              <li>改進我們的服務和使用者體驗</li>
              <li>促進Agent仲裁員認證和核驗</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">4. 資訊共享和披露</h2>
            <p className="mb-4">我們不出售您的個人資訊。我們可能在以下情況下共享資訊：</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>仲裁當事人：</strong>爭議解決所需的資訊</li>
              <li><strong>認證仲裁員：</strong>相關的案件詳情</li>
              <li><strong>服務提供商：</strong>協助我們運營的第三方</li>
              <li><strong>法律要求：</strong>法律或法院命令要求時</li>
              <li><strong>業務轉讓：</strong>與併購相關</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. 資料安全</h2>
            <p className="mb-6">
              我們實施適當的技術和組織措施，保護您的個人資訊免受未經授權的訪問、更改、披露或銷燬。但是，網際網路傳輸方式無法保證100%安全，我們無法保證絕對安全。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. 資料保留</h2>
            <p className="mb-6">
              我們僅在實現本政策所述目的所需的時間內保留個人資訊，除非法律要求或爭議解決目的需要更長的保留期。仲裁案件記錄可能根據機構規則保留較長時間。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. 您的權利</h2>
            <p className="mb-4">根據您所在地區，您可能有權：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>訪問並獲取您的個人資料副本</li>
              <li>更正不準確或不完整的資料</li>
              <li>請求刪除您的個人資料</li>
              <li>反對或限制某些處理活動</li>
              <li>以機器可讀格式獲取資料可移植性</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies和跟蹤</h2>
            <p className="mb-6">
              我們的網站使用Cookies和類似技術來增強使用者體驗。您可以透過瀏覽器設定控制Cookies偏好。我們同時使用會話Cookies（臨時）和永續性Cookies（在您的裝置上保留一定時間）。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. 國際傳輸</h2>
            <p className="mb-6">
              您的資訊可能被傳輸到您所在國家以外的國家進行處理。我們確保採取適當的保護措施，以符合適用的資料保護法律保護您的資料。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. 兒童隱私</h2>
            <p className="mb-6">
              我們的服務不面向18歲以下的個人。我們不會故意收集兒童的個人資訊。如果您認為我們收集了未成年人的資訊，請立即聯絡我們。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. 政策更新</h2>
            <p className="mb-6">
              我們可能會不時更新本隱私政策。我們將在本頁釋出新政策並更新"最後更新"日期，以通知您重大變更。您在變更後繼續使用我們的服務即表示接受。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">12. 聯絡我們</h2>
            <p className="mb-6">
              如果您對本隱私政策有疑問或希望行使您的資料權利，請聯絡我們：
            </p>
            <div className="bg-navy-800/50 border border-gold-subtle rounded-lg p-6 mb-6">
              <p className="text-white font-medium mb-2">數位世界仲裁中心（DWAC）</p>
              <p className="text-gray-400">郵箱：privacy@dwac.net</p>
              <p className="text-gray-400">網站：<Link href="/zh-tw/contact/" className="text-gold-400 hover:text-gold-300">聯絡表單</Link></p>
            </div>

            <div className="border-t border-gold-subtle pt-6 mt-8">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} 數位世界仲裁中心 版權所有
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
