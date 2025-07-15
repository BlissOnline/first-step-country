// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function listSlugs() {
  // your existing slug list code
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const file = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(file)
  return {
    frontMatter: data as { title: string; date: string; [key: string]: any },
    // content is now everything *after* the --- frontmatter ---
    content,
  }
}
