export default function ZhRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-cn/virtual-hearing/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/zh-cn/virtual-hearing/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/zh-cn/virtual-hearing/"` }} />
      </body>
    </html>
  );
}