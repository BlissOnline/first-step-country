// lib/extractHeadings.ts
import { unified }        from 'unified'
import remarkParse        from 'remark-parse'
import remarkMdx          from 'remark-mdx'
import { visit }          from 'unist-util-visit'
import { toString }       from 'mdast-util-to-string'
import Slugger            from 'github-slugger'
import type { Node }      from 'unist'

export type Heading = { 
  id: string
  text: string
  level: number
}

/** Reusable slugify (for non-AST calls like wrappers) */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// All of the custom MDX components that should become ToC entries
const COMPONENTS = new Set<string>([
  'CountryHeader',
  'BudgetBreakdown',
  'FlightCTA',
  'TourSectionStarter',
  'SleepSectionStarter',
])

// Map generic names → display text + heading level
const COMPONENT_MAP: Record<string, { text: string; level: number }> = {
  BudgetBreakdown:    { text: 'Budget breakdown', level: 2 },
  FlightCTA:          { text: 'Cheap flights',   level: 2 },
  TourSectionStarter: { text: 'Tours',           level: 2 },
  SleepSectionStarter:{ text: 'Sleep options',   level: 2 },
}

export function extractHeadings(markdown: string): Heading[] {
  const tree = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .parse(markdown)

  const slugger = new Slugger()
  const headings: Heading[] = []

  // 1) Grab all ## and ### Markdown headings
  visit(tree, 'heading', (node: any) => {
    if (node.depth === 2 || node.depth === 3) {
      const text = toString(node)
      headings.push({
        id: slugger.slug(text),
        text,
        level: node.depth,
      })
    }
  })

  // 2) Detect your MDX section components
  visit(tree, (node: Node) => {
    if ((node as any).type !== 'mdxJsxFlowElement') return
    const elm = node as any
    if (!COMPONENTS.has(elm.name)) return

    let text: string, level: number
    if (elm.name === 'CountryHeader') {
      const attrs = elm.attributes as any[]
      const label = attrs.find(a => a.name === 'label')?.value
      const name  = attrs.find(a => a.name === 'name')?.value
      text  = `${label ?? ''} ${name ?? ''}`.trim()  // e.g. "Discover: Nepal"
      level = 2
    } else {
      ({ text, level } = COMPONENT_MAP[elm.name])
    }

    // For CountryHeader slug off just the country name after the colon
    const base = elm.name === 'CountryHeader'
      ? text.split(':').pop()!.trim()
      : text

    headings.push({
      id: slugger.slug(base),
      text,
      level,
    })
  })

  return headings
}
