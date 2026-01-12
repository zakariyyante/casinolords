/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['api.britwager.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.britwager.org',
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
        destination: 'https://api.britwager.org/files/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
