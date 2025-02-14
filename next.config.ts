/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/my-portfolio", // Must match your GitHub repo name
  assetPrefix: "/my-portfolio/", // Ensures CSS and assets load correctly
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
