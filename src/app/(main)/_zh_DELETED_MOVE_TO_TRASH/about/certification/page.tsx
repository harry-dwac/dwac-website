export default function ZhRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-cn/about/certification/" />
        <title>跳转中...</title>
      </head>
      <body>
        <p>此页面已移动。<a href="/zh-cn/about/certification/">如未自动跳转请点击此处</a>。</p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/zh-cn/about/certification/"` }} />
      </body>
    </html>
  );
}
