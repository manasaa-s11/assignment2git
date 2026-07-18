import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  output: 'export', // <--- This forces Next.js to build static HTML files for GitHub Pages
  images: {
    unoptimized: true, // Required for static exports
  },
  pageExtensions: ['mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: { mdxType: 'gfm' }
  }
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
