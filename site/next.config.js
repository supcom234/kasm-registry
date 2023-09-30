/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Test Kasm Registry',
    description: 'The test environment for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kasm-registry.vp.bigbang.dev/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
