// pages/blog/[slug].tsx
import Head from 'next/head'
import { useRouter } from 'next/router'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote }     from 'next-mdx-remote'
import { serialize }     from 'next-mdx-remote/serialize'
import remarkGfm         from 'remark-gfm'

import BlogLayout from '@/components/blog-components/BlogLayout'

import MDXComponents     from '../../components/blog-components/MDXComponents'

import Category       from '../../components/blog-components/Category'

import AuthorBlock from '@/components/blog-components/AuthorBlock'
import ShareBlog from '@/components/blog-components/ShareBlog'
import FeaturedImage from '@/components/blog-components/FeaturedImage'

import { getPostBySlug, listSlugs } from '../../lib/posts'

import styles from '../../components/blog-components/MDXComponents.module.css'

// import { getPostBySlug, listSlugs, RawFrontMatter } from '../../lib/posts'

type FrontMatter = {
  title:        string
  seoTitle:     string
  displayTitle: string
  excerpt?:     string    
  date:         string
  category:     string | null
  subCategory:  string | null

  author:        string | null
  authorRole:    string | null
  authorBio:     string | null

  featuredImage: string | null
  showFeaturedImage?: boolean
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
    // excerpt:       fmRaw.excerpt,           // grab excerpt if you added it
    date:         fmRaw.date,

    category:     fmRaw.category   ?? null,
    subCategory:  fmRaw.subCategory ?? null,

    author:        fmRaw.author      ?? null,
    authorRole:    fmRaw.authorRole  ?? null,
    authorBio:     fmRaw.authorBio   ?? null,

    featuredImage: fmRaw.featuredImage ?? null,
    showFeaturedImage: fmRaw.showFeaturedImage ?? true,
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
  const router  = useRouter()
  // replace with your real domain in .env.local
  const siteUrl    = process.env.NEXT_PUBLIC_SITE_URL || 'https://firststepcountry.com/'
  const postUrl    = `${siteUrl}${router.asPath}`
  const description = fm.excerpt || fm.displayTitle

  // parse the ISO string into a Date…
  const dateObj = new Date(fm.date)

  // …then format it with the full month name:
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  })  // → "June 30, 2025"

  // 3) pull the new flag out
  const {
    featuredImage,
    imageCaption,
    showFeaturedImage = true,  // default
  } = fm

  return (
    <>
      {/* <Head>
        <title>{fm.seoTitle}</title>
        <meta name="description" content={fm.displayTitle} />
      </Head> */}

      <Head>
        {/* Basic SEO */}
        <title>{fm.seoTitle}</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type"        content="article" />
        <meta property="og:title"       content={fm.seoTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url"         content={postUrl} />
        {fm.featuredImage && showFeaturedImage && (
          <meta
            property="og:image"
            content={`${siteUrl}${featuredImage}`}
          />
        )}

        {/* Twitter Card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={fm.seoTitle} />
        <meta
          name="twitter:description"
          content={description}
        />
        {fm.featuredImage && showFeaturedImage && (
          <meta
            name="twitter:image"
            content={`${siteUrl}${featuredImage}`}
          />
        )}
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

          {/*  Replace the inner text with your formatted string: */}
          <time
            className={styles.date}
            dateTime={fm.date}           // keep the raw ISO for accessibility/SEO
          >
            Published {formattedDate}
          </time>

          {/* 6) Separator */}
          {/* <hr className="my-6" /> */}

          {/* 6) Separator */}
          <hr className={styles.introSeparator} />

          {/* 7) Share button */}
          <div className="mb-6">
            <ShareBlog title={fm.displayTitle} />
          </div>

          {/* 8–9) Featured image + caption */}
          {showFeaturedImage && featuredImage && (
            <FeaturedImage
              src={featuredImage}
              alt={imageCaption ?? undefined}
              caption={imageCaption ?? undefined}
            />
          )}

          <MDXRemote {...mdxSource} components={MDXComponents} />
        </article>
      </BlogLayout>
    </>
  )
}
