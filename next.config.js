/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  compress: true,

  // Redirects: /law-school/library/* -> /library/* etc.
  async redirects() {
    return [
      {
        source: '/law-school/library/:path*',
        destination: '/library/:path*',
        permanent: true,
      },
      {
        source: '/law-school/degree/:path*',
        destination: '/degree/:path*',
        permanent: true,
      },
      {
        source: '/law-school/library',
        destination: '/library',
        permanent: true,
      },
      {
        source: '/law-school/degree',
        destination: '/degree',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
