export default function ZhCnLawSchoolLibraryRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-cn/library/" />
        <title>跳转中...</title>
      </head>
      <body>
        <p>此页面已移动。<a href="/zh-cn/library/">如未自动跳转请点击此处</a>。</p>
        <script dangerouslySetInnerHTML={{ __html: "window.location.href=\"/zh-cn/library/\";" }} />
      </body>
    </html>
  );
}
