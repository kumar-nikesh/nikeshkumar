import type { NextConfig } from "next";

const fallbackRepoName = "nikeshkumar";
const fallbackOwnerName = "kumar-nikesh";
const isVercelDeployment = process.env.VERCEL === "1";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? fallbackRepoName;
const ownerName = process.env.GITHUB_REPOSITORY?.split("/")[0] ?? fallbackOwnerName;
const expectedUserSiteRepo = `${ownerName.toLowerCase()}.github.io`;
const isUserOrOrgPagesRepo = repoName.toLowerCase() === expectedUserSiteRepo;
const deploymentBasePath = !repoName || isUserOrOrgPagesRepo ? "" : `/${repoName}`;
const basePath = process.env.NODE_ENV === "development" || isVercelDeployment ? "" : deploymentBasePath;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (isVercelDeployment ? "https://nikeshkumar.in" : `https://${ownerName}.github.io${basePath}`);

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
