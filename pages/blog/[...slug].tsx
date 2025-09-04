// pages/blog/[...slug].tsx

import Head from 'next/head'
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'

import { extractHeadings, type Heading } from '@/lib/extractHeadings'

import BlogLayout from '@/components/blog-components/BlogLayout'
import MDXComponents from '@/components/blog-components/MDXComponents'
import Category from '@/components/blog-components/Category'
import AuthorBlock from '@/components/blog-components/AuthorBlock'
import ShareBlog from '@/components/blog-components/ShareBlog'
import FeaturedImage from '@/components/blog-components/FeaturedImage'
import TableOfContents from '@/components/blog-components/TableOfContents'

import { getPostBySlug, listSlugs, RawFrontMatter } from '@/lib/posts'

// This import needs to be the file where you defined .noImageTOC
import layoutStyles from '@/components/blog-components/BlogLayout.module.css'

import styles from '@/components/blog-components/MDXComponents.module.css'




type FrontMatter = {
  title:            string
  seoTitle:         string
  displayTitle:     string
  excerpt:          string | null
  date:             string
  category:         string | null
  subCategory:      string | null

  description:      string | null
  keywords:         string[] | null

  author:           string | null
  authorRole:       string | null
  authorBio:        string | null

  featuredImage:    string | null
  showFeaturedImage:boolean
  imageCaption:     string | null
}

type Props = {
  frontMatter: FrontMatter
  mdxSource: {
    compiledSource: string
    frontmatter:    FrontMatter
    scope:          FrontMatter
  }
  headings: Heading[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = listSlugs()
  return {
    paths: slugs.map((slug) => ({
      params: { slug: slug.split('/') },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slugArray = params?.slug as string[]
  const slug = slugArray.join('/')
  const { frontMatter: fmRaw, content } = getPostBySlug(slug) as {
    frontMatter: RawFrontMatter
    content: string
  }

  // extract ToC data
  const headings: Heading[] = extractHeadings(content)

  const fm: FrontMatter = {
    title:            fmRaw.title,
    seoTitle:         fmRaw.seoTitle     ?? fmRaw.title,
    displayTitle:     fmRaw.displayTitle ?? fmRaw.title,
    excerpt:          fmRaw.excerpt      ?? null,
    date:             fmRaw.date,

    category:         fmRaw.category      ?? null,
    subCategory:      fmRaw.subCategory   ?? null,

    description:      fmRaw.description   ?? fmRaw.excerpt ?? null,
    keywords:         fmRaw.keywords      ?? null,

    author:           fmRaw.author        ?? null,
    authorRole:       fmRaw.authorRole    ?? null,
    authorBio:        fmRaw.authorBio     ?? null,

    featuredImage:    fmRaw.featuredImage ?? null,
    showFeaturedImage:fmRaw.showFeaturedImage ?? true,
    imageCaption:     fmRaw.imageCaption ?? null,
  }

  const rawResult = await serialize(content, {
    scope: fm,
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        remarkSlug,
        remarkAutolinkHeadings
      ],
      rehypePlugins: []
    },
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
      headings,
    },
  }
}

export default function PostPage({ frontMatter: fm, mdxSource, headings }: Props) {
  const router      = useRouter()
  const siteUrl     = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://firststepcountry.com'
  const postUrl     = `${siteUrl}${router.asPath}`
  const description = fm.description ?? fm.excerpt ?? fm.displayTitle

  const dateObj = new Date(fm.date)
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  })
  const hasImage = Boolean(fm.showFeaturedImage && fm.featuredImage)

  return (
    <>
      <Head>
        <title>{fm.seoTitle}</title>
        <meta name="description" content={description} />

        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={fm.seoTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url"         content={postUrl} />
        {fm.featuredImage && fm.showFeaturedImage && (
          <meta property="og:image" content={`${siteUrl}${fm.featuredImage}`} />
        )}

        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={fm.seoTitle} />
        <meta name="twitter:description" content={description} />
        {fm.featuredImage && fm.showFeaturedImage && (
          <meta name="twitter:image" content={`${siteUrl}${fm.featuredImage}`} />
        )}
      </Head>

      {/* pass headings into your layout */}
      <BlogLayout>
        <article className="prose mx-auto p-8">
          {fm.category && (
            <Category
              category={fm.category}
              subCategory={fm.subCategory || undefined}
            />
          )}

          <h1 className={styles.title}>{fm.displayTitle}</h1>

          {fm.author && (
            <AuthorBlock
              name={fm.author}
              role={fm.authorRole || undefined}
              bio={fm.authorBio || undefined}
            />
          )}

          <time dateTime={fm.date} className={styles.date}>
            Published {formattedDate}
          </time>

          <hr className={styles.introSeparator} />

          <div className="mb-6">
            <ShareBlog title={fm.displayTitle} />
          </div>

          {fm.showFeaturedImage && fm.featuredImage && (
            <FeaturedImage
              src={fm.featuredImage}
              alt={fm.imageCaption || undefined}
              caption={fm.imageCaption || undefined}
            />
          )}

          <TableOfContents 
            headings={headings}
            className={!hasImage ? layoutStyles.noImageTOC : ''}
          />

          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
      </BlogLayout>
    </>
  )
}
