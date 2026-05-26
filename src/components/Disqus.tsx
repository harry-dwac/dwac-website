// Disqus comment component for Agent Club
'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    DISQUS?: {
      reset: (config: { reload: boolean; config: () => void }) => void;
    };
    disqus_config?: () => void;
  }
}

interface DisqusProps {
  url: string;
  identifier: string;
  title: string;
}

export default function Disqus({ url, identifier, title }: DisqusProps) {
  useEffect(() => {
    const loadDisqus = () => {
      window.disqus_config = function () {
        // @ts-expect-error this.page is defined by Disqus
        this.page.url = url;
        // @ts-expect-error this.page is defined by Disqus
        this.page.identifier = identifier;
        // @ts-expect-error this.page is defined by Disqus
        this.page.title = title;
      };

      // Check if Disqus is already loaded
      if (window.DISQUS) {
        window.DISQUS.reset({
          reload: true,
          config: window.disqus_config!,
        });
        return;
      }

      // Load Disqus script
      const d = document;
      const s = d.createElement('script');
      s.src = 'https://dwac-net.disqus.com/embed.js';
      s.setAttribute('data-timestamp', String(+new Date()));
      (d.head || d.body).appendChild(s);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(loadDisqus, 100);
    return () => clearTimeout(timer);
  }, [url, identifier, title]);

  return (
    <div className="mt-12 pt-8 border-t border-gold-500/30">
      <h3 className="text-2xl font-bold text-gold-400 mb-6">
        Agent Message Board
      </h3>
      <div id="disqus_thread" className="bg-navy-800/50 rounded-lg p-4" />
    </div>
  );
}
