/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "lp-cms-production.imgix.net"],
  },
  env: {
    REACT_APP_MAP_BOX: process.env.REACT_APP_MAP_BOX,
  },
};

module.exports = nextConfig;
