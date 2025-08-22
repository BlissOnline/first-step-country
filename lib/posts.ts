// lib/posts.ts

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export type RawFrontMatter = {
  title:           string
  seoTitle?:       string
  displayTitle?:   string
  excerpt?:        string

  // we keep date as a ISO-string in our RawFrontMatter
  date:            string

  category?:       string
  subCategory?:    string

  author?:         string
  authorRole?:     string
  authorBio?:      string

  featuredImage?:      string
  showFeaturedImage?:  boolean
  imageCaption?:       string
}

export function listSlugs(): string[] {
  function walk(dir: string): string[] {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const res = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        return walk(res)
      }
      if (entry.isFile() && entry.name.endsWith('.mdx')) {
        // strip off the ".mdx" and any leading folder parts
        const rel = path.relative(postsDirectory, res)
        return [rel.replace(/\.mdx$/, '')]
      }
      return []
    })
  }

  return walk(postsDirectory)
}

export function getPostBySlug(
  slug: string
): { frontMatter: RawFrontMatter; content: string } {
  const fullPath = path.join(postsDirectory, slug + '.mdx')
  const source   = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(source)

  //
  // data.date might be a string or a Date object. Force it into an ISO string:
  //
  let dateString: string
  if (typeof data.date === 'string') {
    dateString = data.date
  } else if (data.date instanceof Date) {
    dateString = data.date.toISOString()
  } else {
    throw new Error(
      `Invalid or missing "date" in frontmatter of "${slug}.mdx"`
    )
  }

  // now build your RawFrontMatter
  const fm: RawFrontMatter = {
    title:           String(data.title),
    seoTitle:        data.seoTitle && String(data.seoTitle),
    displayTitle:    data.displayTitle && String(data.displayTitle),
    excerpt:         data.excerpt && String(data.excerpt),

    date:            dateString,

    category:        data.category && String(data.category),
    subCategory:     data.subCategory && String(data.subCategory),

    author:          data.author && String(data.author),
    authorRole:      data.authorRole && String(data.authorRole),
    authorBio:       data.authorBio && String(data.authorBio),

    featuredImage:   data.featuredImage && String(data.featuredImage),
    showFeaturedImage:
                     typeof data.showFeaturedImage === 'boolean'
                       ? data.showFeaturedImage
                       : true,
    imageCaption:    data.imageCaption && String(data.imageCaption),
  }

  return { frontMatter: fm, content }
}
