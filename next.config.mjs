/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/monogatari-afb5f.appspot.com/**",
      },
    ],
  },
};

export default nextConfig;
