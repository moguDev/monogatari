/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 86400,
    domains: ["firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
