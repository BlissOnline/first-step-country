import React, { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './MDXComponents'

type Props = { slug: string }

export default function CountryInclude({ slug }: Props) {
  const MDXContent = useMemo(
    () =>
      dynamic(
        () => import(`@/posts/${slug}.mdx`).then((mod) => mod.default),
        { ssr: true }
      ),
    [slug]
  )

  return (
    <MDXProvider components={MDXComponents}>
      <MDXContent />
    </MDXProvider>
  )
}
