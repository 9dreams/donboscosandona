/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ],
  },
}

module.exports = nextConfig
