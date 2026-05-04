import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * images.unoptimized = true lets us use local images without
   * Next.js image optimization (which requires sharp on the server).
   * We'll switch this off when we deploy to production.
   */
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["dell-precision-7740.tail76ac79.ts.net"],
};

export default nextConfig;
