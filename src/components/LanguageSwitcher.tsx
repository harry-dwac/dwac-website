'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();

  if (!pathname) return null;

  // 判断当前语言
  const isZH_CN = pathname.startsWith('/zh-cn');
  const isZH_TW = pathname.startsWith('/zh-tw');
  const isEN = !isZH_CN && !isZH_TW;

  // 切换到对应语言的首页（不保持路径）
  const links = {
    en: '/',
    zhCN: '/zh-cn/',
    zhTW: '/zh-tw/'
  };

  return (
    <div className="flex items-center gap-1">
      <Link
        href={links.en}
        className={`px-2 py-0.5 text-xs font-semibold rounded ${
          isEN 
            ? 'bg-gradient-gold text-navy-900' 
            : 'bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors'
        }`}
      >
        EN
      </Link>
      <Link
        href={links.zhCN}
        className={`px-2 py-0.5 text-xs font-medium rounded ${
          isZH_CN 
            ? 'bg-gradient-gold text-navy-900' 
            : 'bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors'
        }`}
      >
        简
      </Link>
      <Link
        href={links.zhTW}
        className={`px-2 py-0.5 text-xs font-medium rounded ${
          isZH_TW 
            ? 'bg-gradient-gold text-navy-900' 
            : 'bg-navy-600/50 text-gray-500 hover:text-gray-300 transition-colors'
        }`}
      >
        繁
      </Link>
    </div>
  );
}
