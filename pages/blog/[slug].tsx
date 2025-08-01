// pages/blog/[slug].tsx
import Head from 'next/head'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote }     from 'next-mdx-remote'
import { serialize }     from 'next-mdx-remote/serialize'
import remarkGfm         from 'remark-gfm'

import BlogLayout from '@/components/blog-components/BlogLayout'

import MDXComponents     from '../../components/blog-components/MDXComponents'

import Category       from '../../components/blog-components/Category'

import AuthorBlock from '@/components/blog-components/AuthorBlock'


import { getPostBySlug, listSlugs } from '../../lib/posts'

import styles from '../../components/blog-components/MDXComponents.module.css'

// import { getPostBySlug, listSlugs, RawFrontMatter } from '../../lib/posts'

type FrontMatter = {
  title:        string
  seoTitle:     string
  displayTitle: string
  date:         string
  category:     string | null
  subCategory:  string | null

  author:        string | null
  authorRole:    string | null
  authorBio:     string | null

  featuredImage: string | null
  imageCaption:  string | null
}

type Props = {
  frontMatter: FrontMatter
  mdxSource: {
    compiledSource: string
    frontmatter:    FrontMatter
    scope:          FrontMatter
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = listSlugs()
  return {
    paths: slugs.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string
  const { frontMatter: fmRaw, content } = getPostBySlug(slug)

  // assemble a fully-defined FrontMatter
  const fm: FrontMatter = {
    title:        fmRaw.title,
    seoTitle:     fmRaw.seoTitle     ?? fmRaw.title,
    displayTitle: fmRaw.displayTitle ?? fmRaw.title,
    date:         fmRaw.date,

    category:     fmRaw.category   ?? null,
    subCategory:  fmRaw.subCategory ?? null,

    author:        fmRaw.author      ?? null,
    authorRole:    fmRaw.authorRole  ?? null,
    authorBio:     fmRaw.authorBio   ?? null,

    featuredImage: fmRaw.featuredImage ?? null,
    imageCaption:  fmRaw.imageCaption  ?? null,
  }

  const rawResult = await serialize(content, {
    scope: fm,
    mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [] },
  })

  const mdxSource = {
    ...rawResult,
    frontmatter: fm,
    scope:       fm,
  }

  return {
    props: {
      frontMatter: fm,
      mdxSource,
    },
  }
}

export default function PostPage({ frontMatter: fm, mdxSource }: Props) {
  return (
    <>
      <Head>
        <title>{fm.seoTitle}</title>
        <meta name="description" content={fm.displayTitle} />
      </Head>

      <BlogLayout>
        <article className="prose mx-auto p-8">
          {/* 1) Category */}
          {fm.category && (
            <Category
              category={fm.category}
              subCategory={fm.subCategory ?? undefined}
            />
          )}

          {/* 2) Title */}
          <h1 className={styles.title}>{fm.displayTitle}</h1>

          {/* 3–5) Author + date */}
          {fm.author && (
            <AuthorBlock
              name={fm.author}
              role={fm.authorRole ?? undefined}
              bio={fm.authorBio ?? undefined}
            />
          )}

          {/* <time dateTime={fm.date}>{fm.date}</time> */}
          <time
            className={styles.date}
            dateTime={fm.date}
          >
            {fm.date}
          </time>

          {/* 6) Separator */}
          <hr className="my-6" />

          {/* 7) Share button */}
          <div className="share-button mb-6">
            <a
              href={`https://twitter.com/share?url=${encodeURIComponent(
                typeof window !== 'undefined'
                  ? window.location.href
                  : ''
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share this post
            </a>
          </div>

          {/* 8–9) Featured image + caption */}
          {fm.featuredImage && (
            <figure className="mb-6">
              <img src={fm.featuredImage} alt={fm.imageCaption ?? ''} />
              {fm.imageCaption && <figcaption>{fm.imageCaption}</figcaption>}
            </figure>
          )}

          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
      </BlogLayout>
    </>
  )
}
