import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/cheap-api-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
