const withBundleAnalyzer = require('@next/bundle-analyzer');

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  reactStrictMode: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    //   swcPlugins: [['typewind/swc', {}]],
  },
};

module.exports = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(config);
