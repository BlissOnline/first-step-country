// pages/blog/index.tsx
import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { listSlugs, getPostBySlug } from '../../lib/posts'
import styles from '@/components/blog-components/BlogSelector.module.css'

type PostCard = {
  slug: string
  displayTitle: string
  featuredImage: string
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
    }
  })
  return { props: { posts } }
}

export default function BlogIndex({ posts }: Props) {
  return (
    <main className="mx-auto p-8">
      <h1>Budget Travel Blogs</h1>

      <div className={styles.blogGrid}>
        {posts.map(({ slug, displayTitle, featuredImage }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className={styles.card}
          >
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
