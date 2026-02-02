import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Removed "output: export" to enable API routes and server-side functionality
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
};

export default nextConfig;
