/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domain: ["localhost:3000/api/photos", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
