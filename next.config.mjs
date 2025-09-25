// @ts-nocheck
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // static export
  images: { unoptimized: true },
  basePath: "", // leave empty for local preview
  assetPrefix: "", // leave empty for local preview
};

export default nextConfig;
