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
  // Disable all ESLint checks during build
  eslint: {
    ignoreDuringBuilds: true
  },
  // Suppress specific build warnings and errors
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;