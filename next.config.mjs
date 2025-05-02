/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages uses a subdirectory based on your repo name
  // If your repo is named "passive-income-tracker", uncomment and update this:
  // basePath: '/passive-income-tracker',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable server components since GitHub Pages is static
  experimental: {
    appDir: true,
  },
  // Ensure trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
