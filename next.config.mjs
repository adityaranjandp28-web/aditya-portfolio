/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allows smooth export / zero configuration on Vercel or static hosting
  },
};

export default nextConfig;
