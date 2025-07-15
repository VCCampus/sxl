/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  skipTrailingSlashRedirect: true,
}

export default nextConfig
