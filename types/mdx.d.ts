// types/mdx.d.ts
import * as React from 'react'
import type { MDXProviderProps } from '@mdx-js/react'

type CompMap = NonNullable<MDXProviderProps['components']>

declare module '*.mdx' {
  const MDXComponent: React.ComponentType<{ components?: CompMap }>
  export default MDXComponent
}
