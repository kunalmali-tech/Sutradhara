import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/elements/:slug",
        destination: "/threads/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
