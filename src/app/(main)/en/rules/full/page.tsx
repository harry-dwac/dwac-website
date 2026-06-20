export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/rules/full/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/rules/full/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/rules/full/"` }} />
      </body>
    </html>
  );
}
