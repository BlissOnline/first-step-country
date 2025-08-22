import React, { 
  ComponentProps,
  ReactNode,
  HTMLAttributes,
} from 'react'
import Category from './Category'
import AuthorBlock from './AuthorBlock' 
import ShareBlog from './ShareBlog'
import FeaturedImage from './FeaturedImage'
import CountryHeader from './CountryHeader'
import CountryPhoto from './CountryPhoto'
import BudgetBreakdown from './ExpenseBreakdown'
import FlightCTA from './FlightCTA'
// import TourCTA from './TourCTA'
import TourSectionStarter from './TourSectionStarter'
import TourCTA from './TourCTA/TourCTA.client'

import CTA from './CTA'
import SleepSectionStarter from './SleepSectionStarter'
import { SleepComparisonChart, SleepCTAButtons, SleepSection } from '@/components/blog-components/SleepCTA'
import QuizCTA from './QuizCTA'


import CountryInclude from './CountryInclude'

import styles from './MDXComponents.module.css'

// import Bangladesh from '@/posts/bangladesh.mdx'

type PreProps = {
  children: ReactNode
} & HTMLAttributes<HTMLPreElement>

type MDXMap = {
  h1: React.ComponentType<ComponentProps<'h1'>>
  h2: React.ComponentType<ComponentProps<'h2'>>
  h3: React.ComponentType<ComponentProps<'h3'>>
  p:  React.ComponentType<ComponentProps<'p'>>
  pre: React.ComponentType<any>
  CTA: typeof CTA
  [key: string]: React.ComponentType<any>
}

const MDXComponents: MDXMap = {
  // 1) Hide YAML front-matter blocks
  pre: ({ children, ...props }: PreProps) => {
    // MDX spits out front-matter as a single <code class="language-yaml">…</code>
    const onlyChild = React.Children.only(children)

    if (
      React.isValidElement<{ className?: string }>(onlyChild) &&
      onlyChild.props.className === 'language-yaml'
    ) {
      // Keep it in the HTML for SEO but hide it from users
      return <div hidden>{children}</div>
    }

    // Otherwise render a normal <pre>
    return <pre {...props}>{children}</pre>
  },

  //
  // 2) Hide stray front-matter lines that got rendered as <p>
  //
  p: ({ children, ...props }: ComponentProps<'p'>) => {
    // front-matter lines look like "key: value"
    if (
      typeof children === 'string' &&
      /^[\w]+\s*:\s*.+$/.test(children.trim())
    ) {
      return <p hidden>{children}</p>
    }

    return (
      <p className={styles.paragraph} {...props}>
        {children}
      </p>
    )
  },

  h1: (props) => <h1 className={styles.title} {...props} />,
  h2: (props) => <h2 className={styles.heading} {...props} />,
  h3: (props) => <h3 className={styles.subheading} {...props} />,
  // p:  (props) => <p className={styles.paragraph} {...props} />,

  Category,
  AuthorBlock,
  ShareBlog,
  FeaturedImage,

  CountryHeader,
  CountryPhoto,
  BudgetBreakdown,
  FlightCTA,
  TourSectionStarter,
  TourCTA,
  CTA,
  SleepSectionStarter,
  SleepComparisonChart, 
  SleepCTAButtons,
  SleepSection,
  QuizCTA,

  CountryInclude,

  // Bangladesh,



}

export default MDXComponents

