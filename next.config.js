/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domain: ["localhost:4000/photos", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
