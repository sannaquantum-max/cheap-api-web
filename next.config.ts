import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // 移除 basePath，适配 cheap-api.io 域名
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
