export default function EnAgentsRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/arbitrators/" />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href="/arbitrators/">Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: "window.location.href=\"/arbitrators/\";" }} />
      </body>
    </html>
  );
}
