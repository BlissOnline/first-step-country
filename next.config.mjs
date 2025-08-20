// next.config.mjs

import path from 'path'
import withMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/**
 * Wrap Next.js config in MDX support.
 * remark-frontmatter parses the YAML block,
 * remark-mdx-frontmatter converts it into a JS export
 * and prevents it from ever becoming rendered HTML.
 */
const withMDXOptions = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      // Recognize and parse the `--- ... ---` block
      remarkFrontmatter,
      // Turn that block into `export const frontmatter = {…}`
      // and strip it from the HTML AST
      [remarkMdxFrontmatter, { name: 'frontmatter' }]
    ],
    rehypePlugins: []  // no extra rehype step needed
  }
})

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],

  webpack(config) {
    // preserve your existing alias hack
    config.resolve.alias[
      'next/dist/server/route-modules/app-page/vendored/contexts/html-context'
    ] = path.resolve('./empty-html-context.js')
    return config
  }
}

export default withMDXOptions(nextConfig)
