// components/BlogLayout.tsx
import { ReactNode } from 'react'
import styles from './BlogLayout.module.css'
import Footer from '@/components/blog-components/Footer'
import { Heading } from '@/lib/extractHeadings'




// export default function BlogLayout({ children }: { children: ReactNode }) {
//   return (
//     <div className={styles.pageBg}>
//       <div className={styles.container}>{children}</div>

      
//       <Footer />
//     </div>

    
//   )
// }

interface BlogLayoutProps {
  children: ReactNode
  headings: Heading[]
}

export default function BlogLayout({ children, headings }: BlogLayoutProps) {
  return (
    <div className={styles.pageBg}>

      {/* 1) Disclaimer */}
      <div className={styles.disclaimer}>
        <p>
          Disclaimer: The information in these blog posts is for educational
          and planning purposes only. Always verify details before booking or traveling.
        </p>
      </div>

      {/* 2) Server-side Table of Contents */}
      {headings.length > 0 && (
        <nav className={styles.toc}>
          <strong>On this page</strong>
          <ul>
            {headings.map((h) => (
              <li key={h.id} className={styles[`lvl${h.level}`]}>
                <a href={`#${h.id}`}>{h.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* 3) Your MDX content */}
      <div className={styles.container}>{children}</div>

      {/* 4) Blog footer */}
      <Footer />
    </div>
  )
}

