import withBundleAnalyzer from '@next/bundle-analyzer';

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

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(config);
