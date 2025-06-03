/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
};
export default nextConfig;
