import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export type RawFrontMatter = {
  title:           string
  seoTitle?:       string
  displayTitle?:   string
  excerpt?:        string

  // we keep date as an ISO-string in our RawFrontMatter
  date:            string

  category?:       string
  subCategory?:    string

  description?: string
  keywords?:    string[]

  author?:         string
  authorRole?:     string
  authorBio?:       string

  featuredImage?:      string
  showFeaturedImage?:  boolean
  imageCaption?:       string

  
}

export function listSlugs(): string[] {
  function walk(dir: string): string[] {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .flatMap((entry) => {
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
  // force date into an ISO string, defaulting to "now" if missing/invalid
  //
  let dateString = new Date().toISOString()
  if (typeof data.date === 'string') {
    dateString = data.date
  } else if (data.date instanceof Date) {
    dateString = data.date.toISOString()
  }

  //
  // build RawFrontMatter, falling back title to slug if none provided
  //
  const fm: RawFrontMatter = {
    title:           data.title ? String(data.title) : slug,
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
