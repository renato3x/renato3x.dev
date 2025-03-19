import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};

export default nextConfig;
