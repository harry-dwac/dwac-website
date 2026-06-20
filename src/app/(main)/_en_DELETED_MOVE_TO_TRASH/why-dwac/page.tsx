export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/why-dwac/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/why-dwac/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/why-dwac/"` }} />
      </body>
    </html>
  );
}