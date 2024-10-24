import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default nextConfig;