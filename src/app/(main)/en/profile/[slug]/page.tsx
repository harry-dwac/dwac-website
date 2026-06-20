import { profiles } from '@/data/profiles'

export function generateStaticParams() {
  return profiles.map((p) => ({ slug: p.slug }))
}

export default function EnProfileRedirect({ params }: { params: { slug: string } }) {
  const target = `/profile/${params.slug}/`;
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
