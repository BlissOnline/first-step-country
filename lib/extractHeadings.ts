// lib/extractHeadings.ts
import { unified }        from 'unified'
import remarkParse        from 'remark-parse'
import remarkMdx          from 'remark-mdx'
import { visit }          from 'unist-util-visit'
import { toString }       from 'mdast-util-to-string'
import Slugger            from 'github-slugger'
import type { Node }      from 'unist'

// reuse your Heading type
export type Heading = { id: string; text: string; level: number }

// list of your custom section–creating components
const COMPONENTS = new Set([
  'BudgetBreakdown',
  'FlightCTA',
  'TourSectionStarter',
  'SleepSectionStarter',
  'CountryHeader',
])

export function extractHeadings(markdown: string): Heading[] {
  const tree = unified()
    .use(remarkParse)
    .use(remarkMdx)
    .parse(markdown)

  const slugger = new Slugger()
  const headings: Heading[] = []

  // 1) Standard H2/H3 from markdown
  visit(tree, 'heading', (node: any) => {
    if (node.depth === 2 || node.depth === 3) {
      const text = toString(node)
      const id   = slugger.slug(text)
      headings.push({ id, text, level: node.depth })
    }
  })

  // 2) JSX components like <BudgetBreakdown /> etc.
  visit(tree, (node: Node) => {
    // MDX-components appear as mdxJsxFlowElement in the AST
    if ((node as any).type === 'mdxJsxFlowElement') {
      const name = (node as any).name as string
      if (!COMPONENTS.has(name)) return

      // derive text & level
      let text: string, level: number
      if (name === 'CountryHeader') {
        // pick up label + name props
        const attrs = (node as any).attributes as any[]
        const labelAttr = attrs.find(a => a.name === 'label')?.value
        const nameAttr  = attrs.find(a => a.name === 'name')?.value
        text  = `${labelAttr ?? ''} ${nameAttr ?? ''}`.trim()
        level = 2
      } else {
        // generic mapping
        const map: Record<string, { text: string; level: number }> = {
          BudgetBreakdown:    { text: 'Budget breakdown', level: 2 },
          FlightCTA:          { text: 'Cheap flights',   level: 2 },
          TourSectionStarter: { text: 'Tours',           level: 2 },
          SleepSectionStarter:{ text: 'Sleep options',   level: 2 },
        }
        ;({ text, level } = map[name])
      }

      const id = slugger.slug(
        name === 'CountryHeader'
          ? // slug off the actual country name, e.g. “Bangladesh”
            text.split(':').pop()?.trim() || text
          : text
      )

      headings.push({ id, text, level })
    }
  })

  return headings
}
