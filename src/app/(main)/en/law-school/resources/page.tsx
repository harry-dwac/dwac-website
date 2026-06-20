export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/law-school/resources/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/law-school/resources/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/law-school/resources/"` }} />
      </body>
    </html>
  );
}
