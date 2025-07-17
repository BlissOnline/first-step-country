// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'posts')

export function listSlugs(): string[] {
  // read all filenames in /posts
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.mdx'))
  // strip the .mdx extension
  return files.map((fileName) => fileName.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(POSTS_DIR, `${slug}.mdx`)
  const file = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(file)
  return {
    frontMatter: data as { title: string; date: string },
    content,
  }
}
