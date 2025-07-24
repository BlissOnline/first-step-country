/** @type {import('next').NextConfig} */

// next.config.mjs
import path from 'path';

export default {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],

  webpack(config) {
    config.resolve.alias[
      'next/dist/server/route-modules/app-page/vendored/contexts/html-context'
    ] = path.resolve('./empty-html-context.js');
    return config;
  },
}

