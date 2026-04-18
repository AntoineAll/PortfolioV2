import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // On n'applique le basePath que si on est en production (build GitHub)
  basePath: isProd ? '/PortfolioV2' : '', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;