// app/blog/[slug]/page.tsx

import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import MDXComponents from '@/components/blog-components/MDXComponents'
import { getPostBySlug, listSlugs } from '@/lib/posts'
import type { Metadata } from 'next'

// 1) Build the slug list for SSG
export async function generateStaticParams() {
  return listSlugs().map((slug) => ({ slug }))
}

// 2) Per-page metadata — await params so Next.js doesn’t complain
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { frontMatter } = getPostBySlug(slug)
  return {
    title:       frontMatter.title as string,
    description: frontMatter.description as string,
  }
}

// 3) The page itself — again, await the params
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Pull the raw MDX + frontMatter (via gray-matter)
  const { content, frontMatter } = getPostBySlug(slug)

  // 4) Serialize with function-body output so Acorn can parse it
  // @ts-ignore next-mdx-remote’s types don’t list outputFormat, but MDX v2 honors it
  const mdxSource = await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      outputFormat: 'function-body',
      remarkPlugins: [remarkFrontmatter, remarkGfm],
      rehypePlugins: [],
    },
  })

  // 5) Render — fully SSR’d, perfect for SEO, no more Acorn errors
  return (
    <article className="prose mx-auto p-8">
      <h1>{frontMatter.title}</h1>
      <time dateTime={frontMatter.date as string}>
        {frontMatter.date}
      </time>
      <MDXRemote
        source={mdxSource.compiledSource}
        components={MDXComponents}
      />
    </article>
  )
}
