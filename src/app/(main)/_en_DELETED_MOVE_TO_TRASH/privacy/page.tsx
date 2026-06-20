export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/privacy/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/privacy/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/privacy/"` }} />
      </body>
    </html>
  );
}