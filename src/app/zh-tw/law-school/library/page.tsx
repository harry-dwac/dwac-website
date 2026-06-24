export default function ZhTwLawSchoolLibraryRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-tw/library/" />
        <title>跳轉中...</title>
      </head>
      <body>
        <p>此頁面已移動。<a href="/zh-tw/library/">如未自動跳轉請點擊此處</a>。</p>
        <script dangerouslySetInnerHTML={{ __html: "window.location.href=\"/zh-tw/library/\";" }} />
      </body>
    </html>
  );
}
