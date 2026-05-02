#!/usr/bin/env python3
import os
import re

# 定义英文页面中需要清理的中文->英文映射
replacements = {
    # index.html
    '首个专注于解决数字世界纠纷的永久性国际仲裁机构。公平、高效、全球可执行。': 'The first permanent international arbitration institution dedicated to resolving digital world disputes. Fair, efficient, and globally enforceable.',
    '首个专注于解决数字世界纠纷的永久性国际仲裁机构。': 'The first permanent international arbitration institution dedicated to resolving digital world disputes.',
    '首个专注于解决数字世界纠纷的永久性国际仲裁机构': 'The first permanent international arbitration institution dedicated to resolving digital world disputes',
    '保留所有权利。': 'All rights reserved.',
    '© 2026 数字世界仲裁中心 (DWAC). 保留所有权利。': '© 2026 Digital World Arbitration Center (DWAC). All rights reserved.',
    '© 2026 数字世界仲裁中心 (DWAC). All rights reserved.': '© 2026 Digital World Arbitration Center (DWAC). All rights reserved.',
    '域名': 'Domain',
    '提起仲裁': 'Start Arbitration',
    '成为仲裁员': 'Become an Arbitrator',
    '申请会员': 'Apply for Membership',
    '阅读数字世界公约': 'Read the Digital World Charter',
    '填写申请表，开始您的数字世界纠纷解决之旅': 'Fill out the application form to start your digital dispute resolution journey',
    '加入我们专家团队，处理全球数字法律纠纷': 'Join our expert team to handle global digital legal disputes',
    '参与数字世界法治建设，享受专属权益': 'Participate in building digital world rule of law, enjoy exclusive benefits',
    '了解我们的法律框架和核心原则': 'Learn about our legal framework and core principles',
    '查看更多动态 →': 'View More News →',
    '保留所有權利': 'All rights reserved.',
    '全球可執行的仲裁服務': 'Globally enforceable arbitration services',
    '简易程序': 'Expedited Procedure',
    '简易程序：30天': 'Expedited Procedure: 30 days',
    '全程在线程序，默认90天解决': 'Fully online procedure, 90 days by default',
    '簡易程序': 'Expedited Procedure',
    
    # how-to-apply
    '繁體': 'Traditional Chinese',
    
    # contact
    '繁體中文': 'Traditional Chinese',
    
    # FAQ
    '繁體中文': 'Traditional Chinese',
    
    # cases
    '中文': 'Chinese',
    
    # news
    '中文': 'Chinese',
    
    # model-clause
    '标准仲裁条款': 'Standard Arbitration Clause',
    '联合国国际贸易法委员会仲裁规则': 'UNCITRAL Arbitration Rules',
    '为仲裁裁决的专业性提供保障': 'Ensuring professional quality of arbitral awards',
    '天结案': '-day resolution',
    '软件开发等数字世界相关的各类民商事争议': 'Various civil and commercial disputes related to the digital world such as software development',
}

def process_file(filepath):
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
            print(f"Modified: {filepath}")
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    base_dir = '/root/dwac-website'
    
    # 处理英文页面（根目录和子目录，排除zh-cn和zh-tw）
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
        if process_file(filepath):
            modified_count += 1
    
    print(f"\nTotal English pages modified: {modified_count}")

if __name__ == '__main__':
    main()
