export default function EnRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/agent-registry/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/agent-registry/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="/agent-registry/"` }} />
      </body>
    </html>
  );
}