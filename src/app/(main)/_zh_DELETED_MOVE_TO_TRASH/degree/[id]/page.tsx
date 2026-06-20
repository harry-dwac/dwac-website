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

export default function ZhDegreeRedirect({ params }: { params: { id: string } }) {
  const target = `/zh-cn/degree/${params.id}/`;
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <title>跳转中...</title>
      </head>
      <body>
        <p>此页面已移动。<a href={target}>如未自动跳转请点击此处</a>。</p>
        <script dangerouslySetInnerHTML={{ __html: `window.location.href="${target}"` }} />
      </body>
    </html>
  );
}
