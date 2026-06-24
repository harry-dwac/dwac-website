export default function ZhTwAgentsRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-tw/arbitrators/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/zh-tw/arbitrators/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: "window.location.href=\"/zh-tw/arbitrators/\";" }} />
      </body>
    </html>
  );
}
