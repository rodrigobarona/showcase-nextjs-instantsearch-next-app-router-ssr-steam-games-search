/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.portadafrente.com",
      },
    ],
  },
};

export default nextConfig;
