/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'singlecolorimage.com',
      },
    ],
  },
};

export default nextConfig;
