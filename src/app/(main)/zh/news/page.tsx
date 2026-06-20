export default function ZhRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-cn/news/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/zh-cn/news/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/zh-cn/news/"` }} />
      </body>
    </html>
  );
}