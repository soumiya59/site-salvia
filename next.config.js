/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
}

// module.exports = nextConfig
module.exports = {
  i18n,nextConfig
};
