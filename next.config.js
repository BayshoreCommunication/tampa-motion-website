/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bayshore.nyc3.digitaloceanspaces.com",
        // hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
