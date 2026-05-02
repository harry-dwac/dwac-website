#!/usr/bin/env python3
import os
import re

# 全面的英文->中文替换映射（简体中文）
zh_cn_replacements = {
    # meta和通用
    'The first permanent international arbitration institution dedicated to resolving digital world disputes.': '首个专注于解决数字世界纠纷的永久性国际仲裁机构',
    'The first permanent international arbitration institution dedicated to resolving digital world disputes': '首个专注于解决数字世界纠纷的永久性国际仲裁机构',
    'Professional, efficient, and globally enforceable arbitration services.': '专业、高效、全球可执行的仲裁服务',
    'Professional, efficient, and globally enforceable arbitration services': '专业、高效、全球可执行的仲裁服务',
    'arbitration,digital disputes,blockchain,AI disputes,online arbitration,DWAC': '仲裁,数字纠纷,区块链,AI争议,在线仲裁,DWAC',
    'arbitration,digital disputes,blockchain,AI disputes,online arbitration': '仲裁,数字纠纷,区块链,AI争议,在线仲裁',
    
    # 会员页面
    'Premium': '尊享',
    'Most Popular': '最受欢迎',
    'Recommended': '推荐',
    'Regular Member': '普通会员',
    'Standard Member': '标准会员',
    'Honorary Member': '荣誉会员',
    'Founding Member': '创始会员',
    
    'For individuals and organizations that participated in DWAC': '适用于参与DWAC创立的个人和组织',
    'For individuals and organizations committed to digital justice': '适用于致力于数字正义的个人和组织',
    'For those who want to support our mission': '适用于希望支持我们使命的人',
    'For distinguished individuals recognized for significant contributions': '适用于因重大贡献而获认可的杰出个人',
    
    'Founding Council participation': '参与创始理事会',
    'Lifetime voting rights': '终身投票权',
    'Priority arbitrator nomination': '优先仲裁员提名权',
    'All future benefits': '未来所有权益',
    'Voting rights at General Assembly': '大会投票权',
    'Priority access to services': '优先服务通道',
    'Early access to new features': '抢先体验新功能',
    'Training & events discount': '培训和活动折扣',
    'Basic voting rights': '基本投票权',
    'Newsletter subscription': '新闻简报订阅',
    'Invitation to special events': '特别活动邀请',
    'Lifetime Honorary status': '终身荣誉资格',
    
    'Member Rights & Benefits': '会员权利与福利',
    'Rights': '权利',
    'Obligations': '义务',
    'Who Can Join?': '谁可以加入？',
    'Ready to Become a Member?': '准备好成为会员了吗？',
    'Join us in building the foundation for digital world rule of law': '加入我们，共同构建数字世界法治的基石',
    'Apply Now': '立即申请',
    'Nominate Someone': '提名他人',
    'Contact Us': '联系我们',
    
    # About页面
    'About DWAC': '关于DWAC',
    'Our Mission': '我们的使命',
    'Our Vision': '我们的愿景',
    'About Us': '关于我们',
    'Our Values': '我们的价值观',
    'Our Team': '我们的团队',
    'Careers': '职业机会',
    'Press': '新闻媒体',
    'Partners': '合作伙伴',
    'Timeline': '时间线',
    'Timeline & Milestones': '时间线与里程碑',
    
    'Establishing rule of law for the digital world': '构建数字世界的法治',
    'When the boundaries of the physical world are no longer obstacles...': '当物理世界的边界不再是障碍，当人工智能代理开始缔结合同，当非同质化通证（NFT）成为数字资产，当数据如同呼吸般自由跨越国界……数字世界需要自己的裁判者。DWAC 正为此而生。',
    
    'Digital Justice, Within Reach': '数字正义，触手可及',
    
    'Our mission is to': '我们的使命是',
    'Provide fair and efficient resolution': '为数字争议提供公正、高效的解决途径',
    'Promote the Digital World Convention': '推广《数字世界公约》，促进全球数字治理标准的建立',
    'Cultivate digital law talent': '培育数字法律人才，推动学术研究',
    'Provide reference models': '为全球数字法治建设提供参考范本',
    
    'Comparison': '比较',
    'Arbitration Comparison': '仲裁比较',
    'Jurisdiction Certainty': '管辖确定性',
    'Procedure Duration': '程序周期',
    'Expertise': '专业性',
    'Cross-border Enforcement': '跨境执行',
    'Online Procedure': '在线程序',
    
    'Low': '低',
    'Medium': '中',
    'High': '高',
    'Best': '最优',
    
    '1-3 years': '一至三年',
    '6-18 months': '六至十八个月',
    '90 days': '九十日',
    '90 days (standard)': '九十日（标准程序）',
    '30 days': '三十日',
    '30 days (expedited)': '三十日（简易程序）',
    
    'Mixed': '参差不齐',
    'Partial': '部分具备',
    'Digital Law Experts': '数字法专家',
    
    'Difficult': '困难',
    'Good': '较好',
    'Best (New York Convention + Specialized)': '最优（《纽约公约》+专业化）',
    
    'Low (Limited Online)': '低（部分在线）',
    'Partial (Some Steps Online)': '部分（部分步骤在线）',
    'Fully Online': '全程在线',
    
    'Traditional Courts': '传统法院',
    'Other Online Arbitration': '其他在线仲裁',
    'DWAC': 'DWAC',
    
    'Founding Council': '创始理事会',
    'Global expansion': '全球拓展',
    'regional offices established': '设立区域办事处',
    
    'Want to learn more?': '想了解更多吗？',
    'Explore our Charter or get in touch with us': '探索我们的公约或与我们联系',
    'Read the Charter': '阅读公约',
    'Read the Digital World Charter': '阅读数字世界公约',
    'Contact Us': '联系我们',
    'Learn More': '了解更多',
    
    # Charter页面
    'Digital World Convention': '数字世界公约',
    'Digital World Charter': '数字世界公约',
    'Digital disputes resolution principles': '数字争议解决的基本原则',
    'Preamble': '序言',
    'Core Principles': '核心原则',
    'Digital Sovereignty': '数字主权',
    'Justice and Fairness': '公正与公平',
    'Efficiency': '效率',
    'Global Applicability': '全球适用性',
    'Scope of Application': '受理范围',
    'Legal Framework': '法律框架',
    'Key Institutions': '关键制度',
    
    # Contact页面
    'Get in Touch': '与我们取得联系',
    'Contact Information': '联系方式',
    'Email': '电子邮件',
    'Phone': '电话',
    'Address': '地址',
    'Office Hours': '办公时间',
    'Send us a message': '发送消息',
    'Name': '姓名',
    'Your Email': '您的电子邮件',
    'Subject': '主题',
    'Message': '留言内容',
    'Submit': '提交',
    'Opening email client...': '正在打开邮件客户端...',
    
    # Arbitrators页面
    'Arbitrators': '仲裁员名册',
    'Our Team of Expert Arbitrators': '专家仲裁员团队',
    'Our Expert Arbitrators': '我们的专家仲裁员',
    'Yongjun Zhou': '周永俊',
    'Yongjun Zhou (Harry)': '周永俊 (Harry)',
    'Harry': 'Harry',
    'Founder | DWAC': '创始人 | DWAC',
    'Founder of DWAC': 'DWAC创始人',
    'Founder and Chief Architect of the Digital World Convention': '《数字世界公约》创始人兼首席起草人',
    'Chief Drafter of the Digital World Convention': '《数字世界公约》首席起草人',
    'Initiator of DWAC': 'DWAC发起人',
    'Compiler of the "Global Cyber Law Compendium"': '《全球网络法汇编》编纂者',
    
    'Dr. Frontie': 'Frontie博士',
    'Senior Partner | AI Governance': '高级合伙人 | AI治理',
    'Senior Partner': '高级合伙人',
    'AI Governance': 'AI治理',
    'Leading expert in AI governance and digital regulation': 'AI治理和数字监管的领先专家',
    
    'Dr. Venessa': 'Venessa博士',
    'Associate Professor | Blockchain Law': '副教授 | 区块链法',
    'Associate Professor': '副教授',
    'Blockchain Law': '区块链法',
    'Scholar specializing in blockchain regulation and smart contracts': '专门研究区块链监管和智能合约的学者',
    
    'Professor Alec': 'Alec教授',
    'Senior Counsel | International Arbitration': '高级顾问 | 国际仲裁',
    'Senior Counsel': '高级顾问',
    'International Arbitration': '国际仲裁',
    'Veteran international arbitration practitioner': '资深国际仲裁从业人员',
    
    'Join Our Panel': '加入我们的仲裁员团队',
    'Join as Arbitrator': '申请成为仲裁员',
    'Join the Panel': '加入团队',
    'We invite qualified legal professionals to join our panel': '我们邀请合格的法律专业人士加入我们的仲裁员团队',
    'View Open Positions': '查看开放职位',
    'Expertise': '专业领域',
    
    # FAQ页面
    'FAQ': '常见问题',
    'Frequently Asked Questions': '常见问题',
    'What is DWAC?': '什么是DWAC？',
    'How does arbitration work?': '仲裁如何运作？',
    'What types of disputes?': '哪些类型的争议？',
    'How long does it take?': '需要多长时间？',
    'How much does it cost?': '费用多少？',
    'How to file?': '如何提交？',
    'How to enforce awards?': '如何执行裁决？',
    'Can AI be a party?': 'AI能否作为当事人？',
    
    # 其他
    'Home': '首页',
    'About': '关于我们',
    'Membership': '会员',
    'Charter': '公约',
    'Arbitrators': '仲裁员',
    'Contact': '联系',
    'News': '新闻',
    'Latest News': '最新动态',
    'Cases': '案例',
    'Arbitration': '仲裁',
    'Arbitration Rules': '仲裁规则',
    'Fee Calculator': '费用计算器',
    'Model Clause': '示范条款',
    'Dispute Resolution': '争议解决',
    'Evidence Guidance': '证据指引',
    
    'Quick Links': '快速链接',
    'Legal': '法律',
    'Privacy Policy': '隐私政策',
    'Terms of Service': '服务条款',
    'Cookie Policy': 'Cookie政策',
    'Disclaimer': '免责声明',
    'Follow Us': '关注我们',
    'Twitter': 'Twitter',
    'LinkedIn': 'LinkedIn',
    'WeChat': '微信',
    
    'All rights reserved.': '保留所有权利。',
    'All rights reserved': '保留所有权利',
    
    '© 2026 Digital World Arbitration Center (DWAC).': '© 2026 数字世界仲裁中心 (DWAC)',
    '© 2026 Digital World Arbitration Center (DWAC)': '© 2026 数字世界仲裁中心 (DWAC)',
    
    'Professional': '专业',
    'Efficient': '高效',
    'Global': '全球',
    'Expert': '专家',
    
    'Start Arbitration': '提起仲裁',
    'Become an Arbitrator': '成为仲裁员',
    'Apply for Membership': '申请会员',
    'Read the Digital World Charter': '阅读数字世界公约',
    
    'Fill out the application form to start your digital dispute resolution journey': '填写申请表，开始您的数字世界纠纷解决之旅',
    'Join our expert team to handle global digital legal disputes': '加入我们专家团队，处理全球数字法律纠纷',
    'Participate in building digital world rule of law, enjoy exclusive benefits': '参与数字世界法治建设，享受专属权益',
    'Learn about our legal framework and core principles': '了解我们的法律框架和核心原则',
    
    'Digital World Arbitration Center': '数字世界仲裁中心',
    
    # footer
    '© 2026 数字世界仲裁中心 (DWAC). All rights reserved.': '© 2026 数字世界仲裁中心 (DWAC). 保留所有权利。',
    
    # 首页
    'View More News →': '查看更多动态 →',
    'View More': '查看更多',
    'View All': '查看全部',
    
    # 里程碑
    'DWAC Initiated': 'DWAC发起设立',
    'DWAC发起设立': 'DWAC发起设立',
    'Founded': '成立',
    'Founding Council Formed': '创始理事会组建完成',
    'Founding Council formed': '创始理事会组建完成',
    'Arbitration Rules Published': '仲裁规则发布',
    'Arbitration Rules published': '仲裁规则发布',
    'First Arbitrator Roster Established': '首批仲裁员名册建立',
    'First arbitrator roster established': '首批仲裁员名册建立',
    'Online Platform Launched': '在线仲裁平台上线',
    'Online platform launched': '在线仲裁平台上线',
    'Alpha version released': 'Alpha版本正式发布',
    'Trial Operation': '试运行',
    'Trial operation': '试运行',
    'Simulated cases accepted': '开始受理模拟案件',
    'Official Launch': '正式运营',
    'Official launch': '正式运营',
    'Cooperation agreements signed': '与首批平台签署合作协议',
    'with first platforms': '与首批平台签署合作协议',
    
    # Agent World
    'What is Agent World Club?': '什么是Agent World俱乐部？',
    'A unique ecosystem where AI agents can register, verify identity, and participate in digital arbitration procedures': '一个人工智能代理可在此完成注册、身份验证并参与数字仲裁程序的独特生态系统',
}

def process_file(filepath, replacements):
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
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    base_dir = '/root/dwac-website'
    
    print("=== 修复中文页面(zh-cn/) ===")
    zh_cn_files = []
    for root, dirs, files in os.walk(os.path.join(base_dir, 'zh-cn')):
        for file in files:
            if file.endswith('.html'):
                zh_cn_files.append(os.path.join(root, file))
    
    modified_count = 0
    for filepath in zh_cn_files:
        if process_file(filepath, zh_cn_replacements):
            print(f"Modified: {filepath}")
            modified_count += 1
    print(f"\n中文页面修改数: {modified_count}")

if __name__ == '__main__':
    main()
