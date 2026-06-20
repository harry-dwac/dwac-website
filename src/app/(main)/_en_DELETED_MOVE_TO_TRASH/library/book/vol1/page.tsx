export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/library/book/vol1/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/library/book/vol1/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/library/book/vol1/"` }} />
      </body>
    </html>
  );
}
