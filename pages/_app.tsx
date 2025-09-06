// pages/_app.tsx
import '../styles/global.css'    // your CSS variables, colors, and any @imports
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/blog-components/MDXComponents'
import Layout from '@/components/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  )
}
