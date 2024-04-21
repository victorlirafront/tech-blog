/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io', 'lh3.googleusercontent.com'], // Add domains for external images
    // deviceSizes: [320, 640, 768, 1024, 1600],   Specify device sizes for automatic responsive images
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
