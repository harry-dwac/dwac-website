
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '服務條款 - 數字世界仲裁中心',
  description: 'DWAC服務條款。使用我們的服務即表示您同意這些條款。',
}

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">服務條款</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            使用DWAC的服務即表示您同意這些條款。請仔細閱讀。
          </p>
          <p className="text-sm text-gray-500 mt-2">最後更新：2026年5月</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-400">
            
            <h2 className="text-2xl font-bold text-white mb-4">1. 條款接受</h2>
            <p className="mb-6">
              透過訪問或使用數字世界仲裁中心（DWAC）網站（dwac.net）和仲裁服務，您同意受本服務條款約束。如果您不同意這些條款，請勿使用我們的服務。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. 服務描述</h2>
            <p className="mb-4">DWAC提供：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>數字世界爭議仲裁服務</li>
              <li>Agent仲裁員認證和核驗</li>
              <li>虛擬聽證室設施</li>
              <li>爭議解決資源和指導</li>
              <li>數字仲裁教育內容</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">3. 使用者資格</h2>
            <p className="mb-6">
              使用我們的服務，您必須年滿18歲並具有訂立有約束力協議的法律能力。使用我們的服務即表示您宣告您符合這些資格要求。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. 使用者責任</h2>
            <p className="mb-4">您同意：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>提供準確真實的資訊</li>
              <li>保護您的賬戶憑證機密性</li>
              <li>遵守所有適用法律法規</li>
              <li>尊重其他使用者和仲裁員的權利</li>
              <li>不將我們的服務用於非法或欺詐目的</li>
              <li>不干擾我們平臺的正常執行</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">5. 仲裁程式</h2>
            <h3 className="text-xl font-semibold text-white mb-3">5.1 適用規則</h3>
            <p className="mb-4">
              透過DWAC進行的所有仲裁程式均受我們的<Link href="/zh-tw/rules/" className="text-gold-400 hover:text-gold-300">仲裁規則</Link>管轄。發起或參與仲裁即表示您同意受這些規則約束。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.2 保密性</h3>
            <p className="mb-6">
              仲裁程式是保密的。您同意不向第三方披露任何與程式相關的資訊，除非法律要求或經所有當事方同意。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">5.3 裁決和決定</h3>
            <p className="mb-6">
              DWAC作出的仲裁裁決是終局性的並具有約束力。您同意遵守您案件中作出的任何裁決，但須遵守關於執行和上訴的適用法律。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Agent仲裁員</h2>
            <h3 className="text-xl font-semibold text-white mb-3">6.1 認證</h3>
            <p className="mb-6">
              Agent仲裁員是由DWAC認證的AI驅動仲裁助手。它們在程式中的使用須符合我們的認證標準和道德準則。瞭解更多請訪問我們的<Link href="/zh-tw/arbitrators/join/" className="text-gold-400 hover:text-gold-300">Agent仲裁員計劃</Link>。
            </p>

            <h3 className="text-xl font-semibold text-white mb-3">6.2 責任限制</h3>
            <p className="mb-6">
              雖然Agent仲裁員旨在協助仲裁流程，但最終決定由人類仲裁員作出。DWAC不對按照指南使用Agent仲裁員輸出中的錯誤或遺漏承擔責任。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. 費用和支付</h2>
            <p className="mb-4">
              仲裁服務費用根據我們的<Link href="/zh-tw/fees/" className="text-gold-400 hover:text-gold-300">費用表</Link>確定。使用我們的服務即表示您同意支付所有適用費用。支付條款在個別案件協議中規定。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. 智慧財產權</h2>
            <p className="mb-6">
              dwac.net上的所有內容，包括文字、圖形、標誌和軟體，均為DWAC或其許可方的財產，受智慧財產權法保護。未經我們事先書面同意，您不得複製、分發或創作衍生作品。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">9. 責任限制</h2>
            <p className="mb-6">
              在法律允許的最大範圍內，DWAC不對因您使用我們的服務而產生的任何間接、附帶、特殊、後果性或懲罰性損害承擔責任。我們的總責任不超過您就引起索賠的具體服務支付的費用。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">10. 賠償</h2>
            <p className="mb-6">
              您同意賠償並使DWAC及其高管、董事、員工和代理人免受因您使用我們的服務或違反這些條款而產生的任何索賠、損害或費用的影響。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">11. 保證免責宣告</h2>
            <p className="mb-6">
              我們的服務按"原樣"提供，不附帶任何明示或暗示的保證。我們不保證我們的服務將不間斷、無錯誤或安全。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">12. 條款修改</h2>
            <p className="mb-6">
              我們保留隨時修改這些條款的權利。變更將在本頁釋出後生效。您在變更後繼續使用我們的服務即表示接受修改後的條款。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">13. 終止</h2>
            <p className="mb-6">
              我們可自行決定隨時終止或暫停您對我們服務的訪問，無需通知，原因包括我們認為違反這些條款或對其他使用者、我們或第三方有害的行為，或任何其他原因。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">14. 適用法律和爭議解決</h2>
            <p className="mb-6">
              這些條款應受適用的國際仲裁法律管轄並據此解釋。因這些條款產生的任何爭議應透過DWAC根據其規則管理的仲裁解決。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">15. 可分割性</h2>
            <p className="mb-6">
              如果這些條款的任何條款被認定不可執行，其餘條款應繼續完全有效。
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">16. 聯絡我們</h2>
            <p className="mb-6">
              如果您對這些服務條款有疑問，請聯絡我們：
            </p>
            <div className="bg-navy-800/50 border border-gold-subtle rounded-lg p-6 mb-6">
              <p className="text-white font-medium mb-2">數字世界仲裁中心（DWAC）</p>
              <p className="text-gray-400">郵箱：legal@dwac.net</p>
              <p className="text-gray-400">網站：<Link href="/zh-tw/contact/" className="text-gold-400 hover:text-gold-300">聯絡表單</Link></p>
            </div>

            <div className="border-t border-gold-subtle pt-6 mt-8">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} 數字世界仲裁中心 版權所有
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
