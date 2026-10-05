/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build autosufficiente per l'immagine Docker (Coolify): vedi Dockerfile.
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
