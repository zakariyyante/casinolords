/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['api.casinolords.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.casinolords.org',
        pathname: '/files/**',
      },
    ],
    unoptimized: false,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      {
        source: '/files/:path*',
        destination: 'https://api.casinolords.org/files/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
