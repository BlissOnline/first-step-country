// components/BlogLayout.tsx
import { ReactNode } from 'react'
import styles from './BlogLayout.module.css'
import Footer from '@/components/blog-components/Footer'
// export default function BlogLayout({ children }: { children: ReactNode }) {
//   return <div className={styles.container}>{children}</div>
// }

// components/BlogLayout.tsx
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.pageBg}>
      <div className={styles.container}>{children}</div>

      {/* Footer lives here once for every page using BlogLayout */}
      <Footer />
    </div>

    
  )
}

