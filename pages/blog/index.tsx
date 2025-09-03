// pages/blog/index.tsx
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { listSlugs, getPostBySlug } from '../../lib/posts'
import styles from '@/components/blog-components/BlogSelector.module.css'

type PostCard = {
  slug: string
  displayTitle: string
  featuredImage: string
  category:      string | null
  subCategory:   string | null
}

type Props = {
  posts: PostCard[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slugs = listSlugs()
  const posts = slugs.map((slug) => {
    const { frontMatter } = getPostBySlug(slug)
    return {
      slug,
      displayTitle: frontMatter.displayTitle ?? frontMatter.title,
      featuredImage: frontMatter.featuredImage || '/default.jpg',
      category:      frontMatter.category   ?? null,
      subCategory:   frontMatter.subCategory ?? null,
    }
  })
  return { props: { posts } }
}

export default function BlogIndex({ posts }: Props) {

  // 1. Filter out your country‐deep‐dive posts
  const countryDives = posts.filter(
    (p) => p.category === 'COUNTRY' && p.subCategory === 'DEEP DIVE'
  )

  // 2. Everything else becomes your budget blogs
  const budgetBlogs = posts.filter(
    (p) => !(p.category === 'COUNTRY' && p.subCategory === 'DEEP DIVE')
  )

  return (
    <main className="mx-auto p-8">
      {/* ───────── Budget Travel Blogs ───────── */}
      <h2 className={styles.blogCategoryTitle}>Budget Travel Blogs</h2>
      <div className={styles.blogGrid}>
        {budgetBlogs.map(({ slug, displayTitle, featuredImage }) => (
          <Link key={slug} href={`/blog/${slug}`} className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${featuredImage})` }}
            />
            <div className={styles.cardTitle}>{displayTitle}</div>
            <div className={styles.frame} />
          </Link>
        ))}
      </div>

      {/* ───────── Country Deep Dives ───────── */}
      <h2 className={styles.blogCategoryTitle}>Country Deep Dives</h2>
      <div className={styles.blogGrid}>
        {countryDives.map(({ slug, displayTitle, featuredImage }) => (
          <Link key={slug} href={`/blog/${slug}`} className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${featuredImage})` }}
            />
            <div className={styles.cardTitle}>{displayTitle}</div>
            <div className={styles.frame} />
          </Link>
        ))}
      </div>
    </main>
  )
}
