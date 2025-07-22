// lib/posts.ts
import fs   from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type RawFrontMatter = {
  title:         string
  seoTitle?:     string
  displayTitle?: string
  date:          string | Date
  category?:     string
  subCategory?:  string

  author?:        string
  authorRole?:    string
  authorBio?:     string

  featuredImage?: string
  imageCaption?:  string
}

const POSTS_DIR = path.join(process.cwd(), 'posts')

// 1) Export listSlugs
export function listSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

// 2) getPostBySlug returns both parsed frontMatter + raw content
export function getPostBySlug(slug: string) {
  const fullPath     = path.join(POSTS_DIR, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const fm           = data as RawFrontMatter

  // always normalize date → string
  const date = typeof fm.date === 'string'
    ? fm.date
    : fm.date.toISOString()

  return {
    frontMatter: {
      ...fm,
      date,
    },
    content,
  }
}
