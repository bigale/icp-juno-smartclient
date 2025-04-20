import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/isomorphic/:path*',
        destination: '/public/isomorphic/:path*',
      },
    ];
  }
}

export default nextConfig;
