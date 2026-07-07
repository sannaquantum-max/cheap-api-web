import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 移除 output: "export"，让 Railway 可以运行 Next.js 服务器
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
