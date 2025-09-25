/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio2", // remove if deploying at root (MasaSN.github.io)
  images: {
    unoptimized: true,
  },
};

export default nextConfig; // ✅ ESM export
