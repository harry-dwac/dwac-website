#!/usr/bin/env python3
import os
import re

# 全面的中文->英文替换映射
en_replacements = {
    # 数字世界仲裁中心相关
    '数字世界仲裁中心': 'Digital World Arbitration Center',
    '數字世界仲裁中心': 'Digital World Arbitration Center',
    '首个专注于解决数字世界纠纷的永久性国际仲裁机构': 'The first permanent international arbitration institution dedicated to resolving digital world disputes',
    '首個專注於解決數字世界糾紛的永久性國際仲裁機構': 'The first permanent international arbitration institution dedicated to resolving digital world disputes',
    '专业、高效、全球可执行的仲裁服务': 'Professional, efficient, and globally enforceable arbitration services',
    '專業、高效、全球可執行的仲裁服務': 'Professional, efficient, and globally enforceable arbitration services',
    
    # 会员相关
    '尊享': 'Premium',
    '最受歡迎': 'Most Popular',
    '推薦': 'Recommended',
    '普通會員': 'Regular Member',
    '標準會員': 'Standard Member',
    '榮譽會員': 'Honorary Member',
    '創始會員': 'Founding Member',
    
    '會員權利與福利': 'Member Rights & Benefits',
    '會員權利與福利': 'Member Rights & Benefits',
    '權利': 'Rights',
    '義務': 'Obligations',
    '誰可以加入？': 'Who Can Join?',
    '準備好成為會員了嗎？': 'Ready to Become a Member?',
    '加入我們，共同構建數字世界法治的基石': 'Join us in building the foundation for digital world rule of law',
    '立即申請': 'Apply Now',
    '提名他人': 'Nominate Someone',
    '聯繫我們': 'Contact Us',
    
    # About相关
    '關於DWAC': 'About DWAC',
    '我們的使命': 'Our Mission',
    '我們的願景': 'Our Vision',
    '關於我們': 'About Us',
    '我們的價值觀': 'Our Values',
    '我們的團隊': 'Our Team',
    '職業機會': 'Careers',
    '新聞媒體': 'Press',
    '合作夥伴': 'Partners',
    '時間線': 'Timeline',
    '時間線與里程碑': 'Timeline & Milestones',
    
    '構建數字世界的法治': 'Establishing rule of law for the digital world',
    
    '數字正義，觸手可及': 'Digital Justice, Within Reach',
    
    '比較': 'Comparison',
    '仲裁比較': 'Arbitration Comparison',
    '管轄確定性': 'Jurisdiction Certainty',
    '程序週期': 'Procedure Duration',
    '專業性': 'Expertise',
    '跨境執行': 'Cross-border Enforcement',
    '在線程序': 'Online Procedure',
    
    '低': 'Low',
    '中': 'Medium',
    '高': 'High',
    '最優': 'Best',
    
    '一至三年': '1-3 years',
    '六至十八個月': '6-18 months',
    '九十日': '90 days',
    '三十日': '30 days',
    
    '參差不齊': 'Mixed',
    '部分具備': 'Partial',
    '數字法專家': 'Digital Law Experts',
    
    '困難': 'Difficult',
    '較好': 'Good',
    
    '傳統法院': 'Traditional Courts',
    '其他在線仲裁': 'Other Online Arbitration',
    
    '創始理事會': 'Founding Council',
    '全球拓展': 'Global expansion',
    '設立區域辦事處': 'regional offices established',
    
    '想了解更多嗎？': 'Want to learn more?',
    '探索我們的公約或與我們聯繫': 'Explore our Charter or get in touch with us',
    '閱讀公約': 'Read the Charter',
    '了解更多': 'Learn More',
    
    # Charter相关
    '數字世界公約': 'Digital World Charter',
    '數字爭議解決的基本原則': 'Digital disputes resolution principles',
    '序言': 'Preamble',
    '核心原則': 'Core Principles',
    '數字主權': 'Digital Sovereignty',
    '公正與公平': 'Justice and Fairness',
    '效率': 'Efficiency',
    '全球適用性': 'Global Applicability',
    '受理範圍': 'Scope of Application',
    '法律框架': 'Legal Framework',
    '關鍵制度': 'Key Institutions',
    
    # Contact相关
    '與DWAC取得聯繫': 'Get in Touch',
    '聯繫方式': 'Contact Information',
    '電子郵件': 'Email',
    '電話': 'Phone',
    '地址': 'Address',
    '辦公時間': 'Office Hours',
    '發送消息': 'Send us a message',
    '姓名': 'Name',
    '您的電子郵件': 'Your Email',
    '主題': 'Subject',
    '留言內容': 'Message',
    '提交': 'Submit',
    
    # Arbitrators相关
    '仲裁員名冊': 'Arbitrators',
    '專家仲裁員團隊': 'Our Team of Expert Arbitrators',
    '周永俊': 'Yongjun Zhou',
    '創始人 | DWAC': 'Founder | DWAC',
    'DWAC創始人': 'Founder of DWAC',
    '《數字世界公約》創始人兼首席起草人': 'Founder and Chief Architect of the Digital World Convention',
    '《數字世界公約》首席起草人': 'Chief Drafter of the Digital World Convention',
    'DWAC發起人': 'Initiator of DWAC',
    '《全球網絡法彙編》編纂者': 'Compiler of the "Global Cyber Law Compendium"',
    
    'Frontie博士': 'Dr. Frontie',
    '高級合夥人 | AI治理': 'Senior Partner | AI Governance',
    'AI治理和數字監管的領先專家': 'Leading expert in AI governance and digital regulation',
    
    'Venessa博士': 'Dr. Venessa',
    '副教授 | 區塊鏈法': 'Associate Professor | Blockchain Law',
    '專門研究區塊鏈監管和智能合約的學者': 'Scholar specializing in blockchain regulation and smart contracts',
    
    'Alec教授': 'Professor Alec',
    '高級顧問 | 國際仲裁': 'Senior Counsel | International Arbitration',
    '資深國際仲裁從業人員': 'Veteran international arbitration practitioner',
    
    '加入我們的仲裁員團隊': 'Join Our Panel',
    '申請成為仲裁員': 'Join as Arbitrator',
    '加入團隊': 'Join the Panel',
    '我們邀請合格的法律專業人士加入我們的仲裁員團隊': 'We invite qualified legal professionals to join our panel',
    '查看開放職位': 'View Open Positions',
    '專業領域': 'Expertise',
    
    # 导航
    '首頁': 'Home',
    '關於我們': 'About',
    '會員': 'Membership',
    '會員資格': 'Membership',
    '會員資格': 'Membership',
    '會員資格': 'Membership',
    '會員': 'Membership',
    '會員': 'Membership',
    '公約': 'Charter',
    '仲裁員': 'Arbitrators',
    '聯繫': 'Contact',
    '聯繫我們': 'Contact',
    '聯繫我們': 'Contact Us',
    '新聞': 'News',
    '最新動態': 'Latest News',
    '案例': 'Cases',
    '仲裁': 'Arbitration',
    '仲裁規則': 'Arbitration Rules',
    '費用計算器': 'Fee Calculator',
    '示範條款': 'Model Clause',
    '爭議解決': 'Dispute Resolution',
    '證據指引': 'Evidence Guidance',
    
    # 通用
    '快速連結': 'Quick Links',
    '法律': 'Legal',
    '隱私政策': 'Privacy Policy',
    '服務條款': 'Terms of Service',
    'Cookie政策': 'Cookie Policy',
    '免責聲明': 'Disclaimer',
    '關注我們': 'Follow Us',
    
    '保留所有權利': 'All rights reserved.',
    '保留所有權利。': 'All rights reserved.',
    '© 2026 數字世界仲裁中心 (DWAC). 保留所有權利。': '© 2026 Digital World Arbitration Center (DWAC). All rights reserved.',
    '© 2026 數字世界仲裁中心 (DWAC). 保留所有權利': '© 2026 Digital World Arbitration Center (DWAC). All rights reserved',
    
    '提起仲裁': 'Start Arbitration',
    '成為仲裁員': 'Become an Arbitrator',
    '申請會員': 'Apply for Membership',
    '閱讀數字世界公約': 'Read the Digital World Charter',
    
    '填寫申請表，開始您的數字世界糾紛解決之旅': 'Fill out the application form to start your digital dispute resolution journey',
    '加入我們專家團隊，處理全球數字法律糾紛': 'Join our expert team to handle global digital legal disputes',
    '參與數字世界法治建設，享受專屬權益': 'Participate in building digital world rule of law, enjoy exclusive benefits',
    '了解我們的法律框架和核心原則': 'Learn about our legal framework and core principles',
    
    # 首页
    '查看更多動態 →': 'View More News →',
    '查看更多': 'View More',
    '查看全部': 'View All',
    
    # 里程碑
    'DWAC發起設立': 'DWAC Initiated',
    '创始理事会组建完成': 'Founding Council Formed',
    '创始理事会组建完成': 'Founding Council Formed',
    '首批仲裁員名冊建立': 'First Arbitrator Roster Established',
    '首批仲裁员名册建立': 'First Arbitrator Roster Established',
    '在线仲裁平台上线': 'Online Platform Launched',
    'Alpha版本正式发布': 'Alpha version released',
    '试运行': 'Trial Operation',
    '开始受理模拟案件': 'Simulated cases accepted',
    '正式运营': 'Official Launch',
    '与首批平台签署合作协议': 'Cooperation agreements signed with first platforms',
    
    # FAQ
    '常見問題': 'FAQ',
    '常見問題': 'Frequently Asked Questions',
    '什麼是DWAC？': 'What is DWAC?',
    '仲裁如何運作？': 'How does arbitration work?',
    '哪些類型的爭議？': 'What types of disputes?',
    '需要多長時間？': 'How long does it take?',
    '費用多少？': 'How much does it cost?',
    '如何提交？': 'How to file?',
    '如何執行裁決？': 'How to enforce awards?',
    'AI能否作為當事人？': 'Can AI be a party?',
    
    # model-clause
    '标准仲裁条款': 'Standard Arbitration Clause',
    '联合国国际贸易法委员会仲裁规则': 'UNCITRAL Arbitration Rules',
    '为仲裁裁决的专业性提供保障': 'Ensuring professional quality of arbitral awards',
    '软件开发等数字世界相关的各类民商事争议': 'Various civil and commercial disputes related to the digital world such as software development',
    '天结案': '-day resolution',
    
    # 其他需要清理的
    '繁體': 'Traditional Chinese',
    '繁體中文': 'Traditional Chinese',
    '中文': 'Chinese',
    '简体中文': 'Simplified Chinese',
    
    # model clause
    '仲裁条款': 'Arbitration Clause',
    '示范条款': 'Model Clause',
    '软件': 'Software',
    '开发': 'Development',
    '合同': 'Contract',
    '争议': 'Dispute',
}

def process_file(filepath, replacements):
    """处理单个HTML文件"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # 按键长度降序排序，避免部分替换问题
        sorted_keys = sorted(replacements.keys(), key=len, reverse=True)
        
        for chn in sorted_keys:
            eng = replacements[chn]
            content = content.replace(chn, eng)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    base_dir = '/root/dwac-website'
    
    print("=== 修复英文页面 ===")
    en_files = []
    for root, dirs, files in os.walk(base_dir):
        # 跳过非英文目录
        if '/zh-cn' in root or '/zh-tw' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                en_files.append(os.path.join(root, file))
    
    modified_count = 0
    for filepath in en_files:
        if process_file(filepath, en_replacements):
            print(f"Modified: {filepath}")
            modified_count += 1
    print(f"\n英文页面修改数: {modified_count}")

if __name__ == '__main__':
    main()
