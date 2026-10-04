/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build autosufficiente per l'immagine Docker (Coolify): vedi Dockerfile.
  output: 'standalone',
  // Regole ESLint già presenti nel codice legacy: non bloccare la build di produzione.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig

