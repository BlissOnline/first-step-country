import React, { useMemo } from "react"
import dynamic from 'next/dynamic'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from './MDXComponents'

// import { countries } from "../../lib/goldObject";
// import { countries } from "@/lib/goldObject"  
import countries from "@/lib/goldObject";
import { SafetyWarning } from "./SafetyWarning";
import type { Country } from "@/lib/types"


type Props = { slug: string }

export default function CountryInclude({ slug }: Props) {
  // 1. Lazy-load the MDX content
  const MDXContent = useMemo(
    () =>
      dynamic(
        () => import(`@/posts/${slug}.mdx`).then((mod) => mod.default),
        { ssr: true }
      ),
    [slug]
  )

   // 2. Extract the last segment, e.g. "nepal" or "sri-lanka"
  const slugKey = slug.split("/").pop() || ""

  // 3) Find matching country by normalizing `name` to the same slug style
  const countryMatch = useMemo<Country | undefined>(() => {
    return (countries as Country[]).find((c: Country) => {
      const key = c.name.toLowerCase().replace(/\s+/g, "-")
      return key === slugKey
    })
  }, [slugKey])

  return (
    <div>
      {/* 4. Show warning if unsafe */}
      {countryMatch?.unsafe && (
        <SafetyWarning countryName={countryMatch.name} />
      )}

      {/* 5. Render the MDX content */}
      <MDXProvider components={MDXComponents}>
        <MDXContent />
      </MDXProvider>
    </div>
  )
}
