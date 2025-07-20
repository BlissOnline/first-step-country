// lib/posts.ts
import fs   from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'posts')

export function listSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`)
  const file     = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)

  // Normalize date into an ISO string
  const dateValue = data.date instanceof Date
    ? data.date.toISOString()
    : String(data.date)

  return {
    frontMatter: {
      ...data,
      date: dateValue,
    } as { title: string; date: string },
    content,
  }
}
