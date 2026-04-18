/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disk webpack cache (.pack.gz) often breaks on Windows; memory cache avoids ENOENT races.
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
