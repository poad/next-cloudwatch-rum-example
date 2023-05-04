const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    transpilePackages: ['@mui/icons-material'],
    eslint: {
      ignoreDuringBuilds: true,
    },
    modularizeImports: {
      '@mui/icons-material/?(((\\w*)?/?)*)': {
        transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}',
      },
    },
  };

module.exports = withBundleAnalyzer(config);
