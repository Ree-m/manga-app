/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  webpack(config,{ isServer }) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
   

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cm.blazefast.co"
      },
      {
        protocol: "https",
        hostname: "cdn.myanimelist.net"
      },
      
    ],
  },
};

module.exports = nextConfig;
