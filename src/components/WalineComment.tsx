"use client";

import { useEffect, useRef } from "react";

interface WalineCommentProps {
  lang?: string;
  path?: string;
}

export default function WalineComment({ lang = "en", path }: WalineCommentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const serverURL = "https://comment.dwac.net";
    const pagePath = path || window.location.pathname;
    const langCode = lang === "zh-CN" ? "zh-CN" : lang === "zh-TW" ? "zh-TW" : "en";

    // Load CSS
    const existingLink = document.querySelector('link[href*="waline.css"]');
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/@waline/client@v3/dist/waline.css";
      document.head.appendChild(link);
    }

    // Inject custom dark theme styles
    const styleId = "waline-custom-dark-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .wl-panel { background: #1e293b !important; border-color: #334155 !important; }
        .wl-header-item { color: #cbd5e1 !important; }
        .wl-header-item label { color: #94a3b8 !important; }
        .wl-editor { color: #e2e8f0 !important; background: #0f172a !important; }
        .wl-editor::placeholder { color: #64748b !important; }
        .wl-btn { color: #e2e8f0 !important; border-color: #475569 !important; background: #1e293b !important; }
        .wl-btn-primary { background: #b8860b !important; border-color: #b8860b !important; color: #fff !important; }
        .wl-card { background: #1e293b !important; border-color: #334155 !important; }
        .wl-meta { color: #94a3b8 !important; }
        .wl-meta span { color: #94a3b8 !important; }
        .wl-nick { color: #f0c040 !important; }
        .wl-time { color: #94a3b8 !important; }
        .wl-content { color: #e2e8f0 !important; }
        .wl-content p { color: #e2e8f0 !important; }
        .wl-quote { border-left-color: #b8860b !important; }
        .wl-reaction-img { filter: brightness(0.9); }
        .wl-reaction-active .wl-reaction-img { filter: brightness(1.1); }
        .wl-emoji-popup { background: #1e293b !important; }
        .wl-input { background: #0f172a !important; color: #e2e8f0 !important; border-color: #334155 !important; }
        .wl-textarea { background: #0f172a !important; color: #e2e8f0 !important; border-color: #334155 !important; }
        .wl-header-wrapper { border-color: #334155 !important; }
        .wl-footer { color: #94a3b8 !important; }
        .wl-copyright { color: #475569 !important; }
        .wl-pagination { color: #94a3b8 !important; }
        .wl-avatar { border-color: #334155 !important; }
        .wl-reply-wrapper .wl-card { background: #162032 !important; }
      `;
      document.head.appendChild(style);
    }

    // Load and init Waline via script tag
    const scriptId = "waline-init-script";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "module";
    script.textContent = `
      import { init } from 'https://unpkg.com/@waline/client@v3/dist/waline.js';
      if (window.__waline_instance) {
        try { window.__waline_instance.destroy(); } catch(e) {}
      }
      window.__waline_instance = init({
        el: '#waline-container',
        serverURL: '${serverURL}',
        path: '${pagePath}',
        lang: '${langCode}',
        dark: 'html.dark',
        meta: ['nick', 'mail', 'link'],
        requiredMeta: ['nick'],
        login: 'enable',
        wordLimit: [0, 1000],
        pageSize: 10,
        imageUploader: false,
        highlighter: true,
        texRenderer: false,
      });
    `;
    document.body.appendChild(script);

    return () => {
      const s = document.getElementById(scriptId);
      if (s) s.remove();
    };
  }, [lang, path]);

  return (
    <div className="waline-section" style={{ marginTop: "2rem" }}>
      <div
        id="waline-container"
        ref={containerRef}
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          borderRadius: "8px",
          backgroundColor: "#0f172a",
          border: "1px solid #1e293b",
        }}
      />
    </div>
  );
}
