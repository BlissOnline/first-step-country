// pages/blog/[slug].tsx

import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote }                    from 'next-mdx-remote'
import { serialize }                    from 'next-mdx-remote/serialize'
import remarkGfm                        from 'remark-gfm'
import MDXComponents                    from '../../components/blog-components/MDXComponents'
import { getPostBySlug, listSlugs }     from '../../lib/posts'

type FrontMatter = {
  title: string
  date:  string
}

type Props = {
  frontMatter: FrontMatter
  mdxSource: {
    compiledSource: string
    frontmatter:    FrontMatter
    scope:          FrontMatter
  }
}

// 1) Pre-generate all blog slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = listSlugs()
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

// 2) Fetch & serialize a single post
export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string
  const { frontMatter: fmOriginal, content } = getPostBySlug(slug)

  // 3) We know fmOriginal.date is already a string—no Date objects here
  const frontMatter: FrontMatter = {
    title: fmOriginal.title,
    date:  String(fmOriginal.date),
  }

  // 4) Compile the MDX to a function-body snippet
  const rawResult = await serialize(content, {
    scope: frontMatter,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  })

  // 5) Spread in frontMatter so MDXRemote has everything it needs
  const mdxSource = {
    ...rawResult,
    frontmatter: frontMatter,
    scope:       frontMatter,
  }

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  }
}

// 6) Render the MDX post
export default function PostPage({ frontMatter, mdxSource }: Props) {
  return (
    <article className="prose mx-auto p-8">
      <h1>{frontMatter.title}</h1>
      <time dateTime={frontMatter.date}>{frontMatter.date}</time>

      <MDXRemote {...mdxSource} components={MDXComponents} />
    </article>
  )
}
