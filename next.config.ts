import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/estrategia-de-vida',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

