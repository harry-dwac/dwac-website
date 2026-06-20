export default function ZhAgentsRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-cn/arbitrators/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/zh-cn/arbitrators/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: "window.location.href=\"/zh-cn/arbitrators/\";" }} />
      </body>
    </html>
  );
}
