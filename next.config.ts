import type { NextConfig } from "next";

const fallbackRepoName = "nikeshkumar.github.io";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? fallbackRepoName;
const ownerName = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? "nikeshksingh";
const expectedUserSiteRepo = `${ownerName.toLowerCase()}.github.io`;
const isUserOrOrgPagesRepo = repoName.toLowerCase() === expectedUserSiteRepo;
const basePath = !repoName || isUserOrOrgPagesRepo ? "" : `/${repoName}`;
const siteUrl = `https://${ownerName}.github.io${basePath}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
