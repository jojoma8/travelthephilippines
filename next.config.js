/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "lp-cms-production.imgix.net"],
  },
};

module.exports = nextConfig;
