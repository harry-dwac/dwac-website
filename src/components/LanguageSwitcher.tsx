'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [links, setLinks] = useState({
    en: '/',
    zhCN: '/zh-cn/',
    zhTW: '/zh-tw/'
  });

  useEffect(() => {
    if (!pathname) return;

    // 解析当前路径，提取语言前缀和剩余路径
    const match = pathname.match(/^\/(zh-cn|zh-tw)?(\/.*)?$/);
    if (!match) return;

    const currentLang = match[1] || 'en';
    const remainingPath = match[2] || '/';

    // 构建各语言版本的 URL
    const newLinks = {
      en: remainingPath === '/' ? '/' : remainingPath,
      zhCN: `/zh-cn${remainingPath}`,
      zhTW: `/zh-tw${remainingPath}`
    };

    setLinks(newLinks);
  }, [pathname]);

  if (!pathname) return null;

  const isZH_CN = pathname.startsWith('/zh-cn');
  const isZH_TW = pathname.startsWith('/zh-tw');
  const isEN = !isZH_CN && !isZH_TW;

  return (
    <div className="flex items-center gap-1">
      <a
        href={links.en}
        className={`px-2 py-0.5 text-xs font-semibold rounded ${
          isEN 
            ? 'bg-gradient-gold text-navy-900' 
            : 'bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors'
        }`}
      >
        EN
      </a>
      <a
        href={links.zhCN}
        className={`px-2 py-0.5 text-xs font-medium rounded ${
          isZH_CN 
            ? 'bg-gradient-gold text-navy-900' 
            : 'bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors'
        }`}
      >
        简
      </a>
      <a
        href={links.zhTW}
        className={`px-2 py-0.5 text-xs font-medium rounded ${
          isZH_TW 
            ? 'bg-gradient-gold text-navy-900' 
            : 'bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors'
        }`}
      >
        繁
      </a>
    </div>
  );
}
