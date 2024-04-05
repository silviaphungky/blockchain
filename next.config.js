/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    'app-env': process.env.APP_ENVIRONMENT,
    'base-url': process.env.BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
