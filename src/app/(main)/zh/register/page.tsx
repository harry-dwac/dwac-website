export default function ZhRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/zh-cn/register/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/zh-cn/register/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/zh-cn/register/"` }} />
      </body>
    </html>
  );
}