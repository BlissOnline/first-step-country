// components/Layout/Layout.tsx
'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname() || ''

  const isBlog         = pathname.startsWith('/blog')
  const isAbout        = pathname.startsWith('/about')

  const isQuestions    = pathname.startsWith('/questions')
  const isResults      = pathname.startsWith('/results')
  const isCountryIndex = pathname.startsWith('/country-index')
  

  const wrapperClass = [
    'layout',
    isBlog         && 'layout--blog',
    isAbout        && 'layout--about',


    isQuestions    && 'layout--questions',
    isResults      && 'layout--results',
    isCountryIndex && 'layout--country-index',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClass}>
      <Header />
      <main>{children}</main>
    </div>
  )
}
