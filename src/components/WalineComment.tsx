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

    // Load Waline CSS from CDN
    if (!document.querySelector('link[href*="waline.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/@waline/client@v3/dist/waline.css";
      document.head.appendChild(link);
    }

    // Override CDN dark theme: always force dark regardless of html.dark class
    // This runs before Waline init so it takes precedence
    const overrideStyleId = "waline-theme-override";
    if (!document.getElementById(overrideStyleId)) {
      const style = document.createElement("style");
      style.id = overrideStyleId;
      style.textContent = `
        /* Force all Waline text to dark-friendly colors on light pages */
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
        .wl-nick { color: #f0c040 !important; font-weight: 600 !important; }
        .wl-time { color: #94a3b8 !important; }
        .wl-content { color: #e2e8f0 !important; line-height: 1.6 !important; }
        .wl-content p { color: #e2e8f0 !important; }
        .wl-quote { border-left-color: #b8860b !important; }
        .wl-emoji-popup { background: #1e293b !important; }
        .wl-input { background: #0f172a !important; color: #e2e8f0 !important; border-color: #334155 !important; }
        .wl-textarea { background: #0f172a !important; color: #e2e8f0 !important; border-color: #334155 !important; }
        .wl-header-wrapper { border-color: #334155 !important; }
        .wl-footer { color: #94a3b8 !important; }
        .wl-copyright { color: #475569 !important; }
        .wl-pagination { color: #94a3b8 !important; }
        .wl-avatar { border-color: #334155 !important; }
        .wl-reply-wrapper .wl-card { background: #162032 !important; }
        /* Paginate button text must be legible */
        .wl-pagination .wl-btn { color: #e2e8f0 !important; }
        .wl-count { color: #e2e8f0 !important; }
        .wl-login-info { color: #94a3b8 !important; }
        /* Make the section background dark to match component style */
        .waline-section { background: #0f172a; border-radius: 8px; }
      `;
      document.head.appendChild(style);
    }

    // Remove previous init script if any
    const scriptId = "waline-init-script";
    const existingScript = document.getElementById(scriptId);
    if (existingScript) { existingScript.remove(); }

    // Init Waline: dark=false → uses CSS overrides directly
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
        dark: false,   // We force dark via CSS overrides below — no html.dark needed
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
