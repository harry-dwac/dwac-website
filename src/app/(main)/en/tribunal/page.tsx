export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/tribunal/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/tribunal/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/tribunal/"` }} />
      </body>
    </html>
  );
}