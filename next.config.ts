import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Next.js 16: swcMinify is enabled by default

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  // ✅ For Next.js 16, use turbopack config
  turbopack: {
    // ✅ Configure resolve aliases if needed
    resolveAlias: {
      // Example: alias imports
      // '@components': './components',
    },
    // ✅ Configure custom extensions if needed
    // resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },

  // ✅ Experimental features that are still valid
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
    // optimizeCss is already in root level in Next.js 16
  },

  // ✅ Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;
