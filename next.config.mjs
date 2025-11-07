import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Keep true for static export
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 2678400, // 31 days cache
  },
  // Experimental optimizations
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion", "lucide-react"],
  },
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Add empty turbopack config to enable Turbopack optimizations
  turbopack: {},
};

export default withBundleAnalyzer(nextConfig);
