/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/my-portfolio" : "", // Only apply for GitHub Pages
  assetPrefix: isProd ? "/my-portfolio/" : "", // Only apply for GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
