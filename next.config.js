/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Build autosufficiente per l'immagine Docker (Coolify): vedi Dockerfile.
  output: 'standalone',
  // Regole ESLint già presenti nel codice legacy: non bloccare la build di produzione.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Le vecchie pagine del progetto educativo sono state sostituite dal PDF
  // aggiornato (lo stesso del riquadro «Progetto educativo» in home).
  // Active Storage ignora il nome del file in fondo all'URL: lo teniamo senza
  // parentesi né spazi, che nella destination di un redirect danno errore 500.
  async redirects() {
    const progettoEducativoPdf =
      'https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBamdEIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d34762c0a87f0670457a8db5239124cbc77efa99/Progetto-Educativo.pdf'
    return [
      { source: '/progetto', destination: progettoEducativoPdf, permanent: false },
      { source: '/progetto/:path*', destination: progettoEducativoPdf, permanent: false },
      { source: '/progetto_educativo', destination: progettoEducativoPdf, permanent: false },
    ]
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
