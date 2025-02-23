/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allows all domains
      },
    ],
    domains: ["*"], // Alternative way to allow all domains (some Next.js versions require specifying exact domains)
  },
};

module.exports = nextConfig;
