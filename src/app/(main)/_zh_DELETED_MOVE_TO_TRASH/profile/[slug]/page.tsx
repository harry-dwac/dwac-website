import { profiles } from '@/data/profiles'

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }))
}

export default function ZhProfileRedirect({ params }: { params: { slug: string } }) {
  const target = `/zh-cn/profile/${params.slug}/`;
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
