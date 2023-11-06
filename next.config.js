/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        port: '',
        pathname: '**',
      },
    ],
  },
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
};

module.exports = nextConfig;
