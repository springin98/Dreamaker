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
  sassOptions: {
    // includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "@/styles/common/_variables.module.scss";
      @import "@/styles/common/_mixin.module.scss";`, // prependData 옵션 추가
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
