export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/api-docs/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/api-docs/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/api-docs/"` }} />
      </body>
    </html>
  );
}