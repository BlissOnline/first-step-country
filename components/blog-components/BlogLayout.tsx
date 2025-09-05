// components/BlogLayout.tsx
import { ReactNode } from 'react'
import styles from './BlogLayout.module.css'
import Footer from '@/components/blog-components/Footer'
// import { Heading } from '@/lib/extractHeadings'




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
}

// components/BlogLayout.tsx
export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className={styles.pageBg}>
      
      {/* single container that holds disclaimer, ToC, and content */}
      <div className={styles.container}>
        {/* 3) Your MDX content */}
        {children}
      </div>

      {/* 4) Blog footer */}
      <Footer />
    </div>
  )
}

