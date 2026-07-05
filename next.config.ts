import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  /* Ensure trailing slashes are handled consistently */
  trailingSlash: false,
  /* Powered-by header removed for cleaner responses */
  poweredByHeader: false,
};

export default nextConfig;
