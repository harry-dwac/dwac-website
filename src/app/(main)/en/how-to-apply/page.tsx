export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/how-to-apply/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/how-to-apply/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/how-to-apply/"` }} />
      </body>
    </html>
  );
}