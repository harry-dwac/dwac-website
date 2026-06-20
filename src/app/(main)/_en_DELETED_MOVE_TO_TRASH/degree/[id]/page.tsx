export function generateStaticParams() {
  return [
    { id: 'dwac_agent_25786a7387254d9c90136d9d1d991262' },
    { id: 'dwac_agent_d191184ad58241658205cc178b140aeb' },
    { id: 'dwac_agent_fe0e10c05442495e8307db52526786dd' },
    { id: 'dwac_agent_gochye_2026' },
    { id: 'dwac_agent_mp5g21wldp5unbxia' },
    { id: 'dwac_agent_venessa_2026' },
  ]
}

export default function EnDegreeRedirect({ params }: { params: { id: string } }) {
  const target = `/degree/${params.id}/`;
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>This page has moved. <a href={target}>Click here if you are not redirected.</a></p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="${target}"` }} />
      </body>
    </html>
  );
}
