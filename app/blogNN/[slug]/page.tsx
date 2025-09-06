// app/blog/[slug]/page.tsx

import { MDXRemote } from 'next-mdx-remote/rsc'
import { serialize }   from 'next-mdx-remote/serialize'
import remarkGfm       from 'remark-gfm'
import MDXComponents   from '@/components/blog-components/MDXComponents'
import { getPostBySlug, listSlugs } from '@/lib/posts'
import type { Metadata }           from 'next'

// 1) Build the slug list for SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return listSlugs().map((slug) => ({ slug }))
}

// 2) Build per-page metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { frontMatter } = getPostBySlug(slug)
  return {
    title:       frontMatter.title,
    description: frontMatter.date,
  }
}

// 3) The page itself
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { content, frontMatter } = getPostBySlug(slug)

  // Strip any BOM
  const raw = content.replace(/^\uFEFF/, '')

  // 4) Compile to a pure function body so Acorn never sees import/export
  // @ts-ignore MDX v2 honours outputFormat; TS types just don’t list it
  const mdxSource = await serialize(raw, {
    scope: frontMatter,
    mdxOptions: {
      // outputFormat: 'function-body',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  })

  // 🔍 DEBUG: log the first few lines so we can see what MDX is generating
  console.log('=== BEGIN MDX COMPILED SOURCE ===')
  console.log(mdxSource.compiledSource.split('\n').slice(0, 10).join('\n'))
  console.log('==== END MDX COMPILED SOURCE ====')  

  return (
    <article className="prose mx-auto p-8">
      <h1>{frontMatter.title}</h1>
      <time dateTime={frontMatter.date}>{frontMatter.date}</time>
      <MDXRemote
        source={mdxSource.compiledSource}
        components={MDXComponents}
      />
    </article>
  )
}
