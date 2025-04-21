/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.externals = [...(config.externals || []), { 'smartclient-lgpl': 'isc' }];
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: false,
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
      };
    }

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;