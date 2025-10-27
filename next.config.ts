import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: process.env.SKIP_LINT_CHECK === 'true',
  },
  typescript: {
    ignoreBuildErrors: process.env.SKIP_TYPESCRIPT_CHECK === 'true',
  },
  images: {
    domains: ['s3.gamatecha.space'],
  },
};

export default nextConfig;
