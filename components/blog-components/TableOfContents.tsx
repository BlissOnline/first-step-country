// components/blog-components/TableOfContents.tsx
import { Heading } from '@/lib/extractHeadings'
import styles from './BlogLayout.module.css'

type Props = {
  headings: Heading[]
  className?: string
}

export default function TableOfContents({ headings, className = '' }: Props) {
  if (!headings.length) return null

  return (
    <nav className={`${styles.toc} ${className}`}>
      <strong>TABLE OF CONTENTS</strong>
      <ul>
        {headings.map(h => (
          <li key={h.id} className={styles[`lvl${h.level}`]}>
            <a href={`#${h.id}`}>{h.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
