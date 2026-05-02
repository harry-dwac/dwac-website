#!/usr/bin/env python3
import os
import re

# 定义所有需要替换的英文->中文映射
replacements = {
    # meta标签
    'The first permanent international arbitration institution dedicated to resolving digital world disputes. 专业, efficient, and globally enforceable arbitration services.': '首个专注于解决数字世界纠纷的永久性国际仲裁机构。专业、高效、全球可执行的仲裁服务。',
    
    # 会员页面
    'Premium': '尊享',
    '創始人 Member': '創始會員',
    'For individuals and organizations that participated in DWAC&#x27;s founding.': '適用於參與DWAC創立的個人和組織。',
    'Founding Council participation': '參與創始理事會',
    'Lifetime voting rights': '終身投票權',
    'Priority arbitrator nomination': '優先仲裁員提名權',
    'All future benefits': '未來所有權益',
    'RECOMMENDED': '推薦',
    'Most Popular': '最受歡迎',
    'Regular Member': '普通會員',
    'For individuals and organizations committed to digital justice.': '適用於致力於數字正義的個人和組織。',
    'Voting rights at General Assembly': '大會投票權',
    'Priority access to services': '優先服務通道',
    'Early access to new features': '搶先體驗新功能',
    'Standard Member': '標準會員',
    'For those who want to support our mission.': '適用於希望支持我們使命的人。',
    'Basic voting rights': '基本投票權',
    'Newsletter subscription': '新聞簡報訂閱',
    'Honorary Member': '榮譽會員',
    'For distinguished individuals recognized for significant contributions.': '適用於因重大貢獻而獲認可的傑出個人。',
    'Invitation to special events': '特別活動邀請',
    'Lifetime Honorary status': '終身榮譽資格',
    'Nominate Someone': '提名他人',
    'Member Rights & Benefits': '會員權利與福利',
    'Rights': '權利',
    '• Vote at General Assembly meetings': '• 在會員大會投票',
    '• Recommend arbitrator candidates': '• 推薦仲裁員候選人',
    '• Participate in Center\'s training and events': '• 參與中心的培訓和活動',
    '• Access services at preferential rates': '• 以優惠費率使用服務',
    '• Propose suggestions and oversight': '• 提出建議和監督',
    'Obligations': '義務',
    '• Abide by DWAC Constitution and Rules': '• 遵守DWAC章程和規則',
    '• Pay membership fees on time': '• 按時繳納會員費',
    '• Maintain reputation and interests': '• 維護聲譽和利益',
    '• Support digital rule of law initiatives': '• 支持數字法治倡議',
    'Who Can Join?': '誰可以加入？',
    'Individuals': '個人',
    'Legal professionals, academics, and digital law enthusiasts': '法律專業人士、學者和數字法律愛好者',
    'Law Firms': '律師事務所',
    'Corporate members from law firms and legal service providers': '來自律師事務所和法律服務機構的企業會員',
    'Organizations': '組織',
    'Digital platforms, enterprises, universities, and NGOs': '數字平台、企業、大學和非政府組織',
    'Ready to Become a Member?': '準備好成為會員了嗎？',
    'Join us in building the foundation for digital world rule of law.': '加入我們，共同構建數字世界法治的基石。',
    'Apply Now': '立即申請',
    
    # footer翻译
    '快速連結': '快速链接',
    'The first permanent international arbitration institution dedicated to resolving digital world disputes.': '首个专注于解决数字世界纠纷的永久性国际仲裁机构。',
    'All rights reserved.': '保留所有权利。',
    '© 2026 数字世界仲裁中心 (DWAC). All rights reserved.': '© 2026 数字世界仲裁中心 (DWAC). 保留所有权利。',
    
    # Arbitrators页面
    'Arbitrators': '仲裁員名冊',
    'Our Team of Expert Arbitrators': '專家仲裁員團隊',
    'Yongjun Zhou (Harry)': '周永俊 (Harry)',
    'Founder | DWAC': '創始人 | DWAC',
    'Founder and Chief Architect of the Digital World Convention.': '《數字世界公約》創始人兼首席起草人。',
    'Dr. Frontie': 'Frontie博士',
    'Senior Partner | AI Governance': '高級合夥人 | AI治理',
    'Leading expert in AI governance and digital regulation.': 'AI治理和數字監管的領先專家。',
    'Dr. Venessa': 'Venessa博士',
    'Associate Professor | Blockchain Law': '副教授 | 區塊鏈法',
    'Scholar specializing in blockchain regulation and smart contracts.': '專門研究區塊鏈監管和智能合約的學者。',
    'Professor Alec': 'Alec教授',
    'Senior Counsel | International Arbitration': '高級顧問 | 國際仲裁',
    'Veteran international arbitration practitioner.': '資深國際仲裁從業人員。',
    'Join Our Panel': '加入我們的仲裁員團隊',
    'Expertise': '專業領域',
    'Join as Arbitrator': '申請成為仲裁員',
    'We invite qualified legal professionals to join our panel.': '我們邀請合格的法律專業人士加入我們的仲裁員團隊。',
    'View Open Positions': '查看開放職位',
    
    # 通用按钮和链接
    'Contact Us': '聯繫我們',
    'Learn More': '了解更多',
    'Get Started': '開始使用',
    'Submit': '提交',
    'Apply': '申請',
    'Download': '下載',
    'View Details': '查看詳情',
    'Explore': '探索',
    'Read More': '閱讀更多',
    
    # 导航相关
    'Home': '首頁',
    'About': '關於我們',
    'Membership': '會員',
    'Charter': '公約',
    'Arbitrators': '仲裁員',
    'Contact': '聯繫',
    'Contact Us': '聯繫我們',
    
    # About页面
    'About DWAC': '關於DWAC',
    'Our Mission': '我們的使命',
    'Our Vision': '我們的願景',
    'Our Values': '我們的價值觀',
    'Our Team': '我們的團隊',
    'Careers': '職業機會',
    'Press': '新聞媒體',
    'Partners': '合作夥伴',
    'Timeline': '時間線',
    'Timeline & Milestones': '時間線與里程碑',
    'Comparison': '比較',
    'Arbitration Comparison': '仲裁比較',
    'Jurisdiction Certainty': '管轄確定性',
    'Procedure Duration': '程序週期',
    'Expertise': '專業性',
    'Cross-border Enforcement': '跨境執行',
    'Online Procedure': '在線程序',
    'Low': '低',
    'Medium': '中',
    'High': '高',
    'Best': '最優',
    '1-3 years': '一至三年',
    '6-18 months': '六至十八個月',
    '90 days': '九十日',
    '30 days': '三十日',
    'Mixed': '參差不齊',
    'Partial': '部分具備',
    'Digital Law Experts': '數字法專家',
    'Difficult': '困難',
    'Good': '較好',
    'Best (New York Convention + Specialized)': '最優（《紐約公約》+專業化）',
    'Low (Limited Online)': '低（部分在線）',
    'Partial (Some Steps Online)': '部分（部分步驟在線）',
    'Fully Online': '全程在線',
    'Traditional Courts': '傳統法院',
    'Other Online Arbitration': '其他在線仲裁',
    'DWAC': 'DWAC',
    'Founding Council': '創始理事會',
    'Founding Members': '創始會員',
    
    # FAQ页面
    'FAQ': '常見問題',
    'Frequently Asked Questions': '常見問題',
    'What is DWAC?': '什麼是DWAC？',
    'How does arbitration work?': '仲裁如何運作？',
    'What types of disputes?': '哪些類型的爭議？',
    'How long does it take?': '需要多長時間？',
    'How much does it cost?': '費用多少？',
    'How to file?': '如何提交？',
    'How to enforce awards?': '如何執行裁決？',
    'Can AI be a party?': 'AI能否作為當事人？',
    
    # Charter页面
    'Digital World Convention': '數字世界公約',
    'Preamble': '序言',
    'Core Principles': '核心原則',
    'Digital Sovereignty': '數字主權',
    'Justice and Fairness': '公正與公平',
    'Efficiency': '效率',
    'Global Applicability': '全球適用性',
    'Scope of Application': '受理範圍',
    'Legal Framework': '法律框架',
    'Key Institutions': '關鍵制度',
    
    # Contact页面
    'Contact DWAC': '聯繫DWAC',
    'Get in Touch': '與DWAC取得聯繫',
    'Contact Information': '聯繫方式',
    'Email': '電子郵件',
    'Phone': '電話',
    'Address': '地址',
    'Office Hours': '辦公時間',
    'Send us a message': '發送消息',
    'Name': '姓名',
    'Your Email': '您的電子郵件',
    'Subject': '主題',
    'Message': '留言內容',
    'Submit': '提交',
    
    # Footer
    'Quick Links': '快速链接',
    'Legal': '法律',
    'Privacy Policy': '隱私政策',
    'Terms of Service': '服務條款',
    'Cookie Policy': 'Cookie政策',
    'Disclaimer': '免責聲明',
    'Follow Us': '關注我們',
    'Twitter': 'Twitter',
    'LinkedIn': 'LinkedIn',
    'WeChat': '微信',
    
    # 其他
    'Digital World Charter': '數字世界公約',
    'Digital World Arbitration Center': '數字世界仲裁中心',
    'All rights reserved.': '保留所有權利。',
    '© 2026 Digital World Arbitration Center (DWAC). All rights reserved.': '© 2026 數字世界仲裁中心 (DWAC). 保留所有權利。',
    'Arbitration': '仲裁',
    'Arbitration Rules': '仲裁規則',
    'Fee Calculator': '費用計算器',
    'Model Clause': '示範條款',
    'Dispute Resolution': '爭議解決',
    'Cases': '案例',
    'News': '新聞',
    'Latest News': '最新動態',
}

def process_file(filepath):
    """处理单个HTML文件"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 按键长度降序排序，避免部分替换问题
        sorted_keys = sorted(replacements.keys(), key=len, reverse=True)
        
        for eng in sorted_keys:
            chn = replacements[eng]
            content = content.replace(eng, chn)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Modified: {filepath}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    base_dir = '/root/dwac-website'
    
    # 处理zh-cn目录下的所有HTML文件
    zh_cn_files = []
    for root, dirs, files in os.walk(os.path.join(base_dir, 'zh-cn')):
        for file in files:
            if file.endswith('.html'):
                zh_cn_files.append(os.path.join(root, file))
    
    modified_count = 0
    for filepath in zh_cn_files:
        if process_file(filepath):
            modified_count += 1
    
    print(f"\nTotal files modified in zh-cn: {modified_count}")

if __name__ == '__main__':
    main()
