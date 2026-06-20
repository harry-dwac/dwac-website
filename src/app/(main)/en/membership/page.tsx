export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/membership/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/membership/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/membership/"` }} />
      </body>
    </html>
  );
}