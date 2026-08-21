import type { NextConfig } from "next";

// Static export for the GitHub Pages preview build (npm run build:pages).
// Local dev and a real Vercel/Hetzner deploy run without GITHUB_PAGES set,
// so basePath stays empty there.
const isPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isPagesBuild ? "export" : undefined,
  basePath: isPagesBuild ? "/company-brain" : undefined,
  images: { unoptimized: isPagesBuild },
};

export default nextConfig;
