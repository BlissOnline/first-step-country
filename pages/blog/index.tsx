// pages/blog/index.tsx
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { listSlugs } from '../../lib/posts'  // still OK as a relative import

type Props = {
  slugs: string[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Runs on the server at build time—safe to use fs here
  const slugs = listSlugs()
  return {
    props: { slugs },
  }
}

export default function BlogIndex({ slugs }: Props) {
  return (
    <main className="prose mx-auto p-8">
      <h1>Blog</h1>
      <ul>
        {slugs.map((slug) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
