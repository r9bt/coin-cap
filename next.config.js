const withInterceptStdout = require('next-intercept-stdout')

/** @type {import('next').NextConfig} */
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    pageExtensions: ['tsx', 'api.ts'],
  },
  // https://github.com/facebookexperimental/Recoil/issues/733#issuecomment-729255961
  (text) => (text.includes('Duplicate atom key') ? '' : text)
)

module.exports = nextConfig
