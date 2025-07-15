
// app/blog/page.tsx
import Link from 'next/link'
import { listSlugs } from '@/lib/posts'

export default function BlogIndex() {
  const slugs = listSlugs()
  console.log('⚡️ slugs:', slugs)

  return (
    <main
      style={{
        background: 'lightyellow',
        color: 'black',
        padding: '2rem',
        border: '2px dashed red',
      }}
    >
      <h1>Blog</h1>
      <pre>{JSON.stringify(slugs, null, 2)}</pre>
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
