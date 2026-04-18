import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Active l'exportation statique pour générer le dossier /out
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;