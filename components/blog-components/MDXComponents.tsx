// components/blog-components/MDXComponents.tsx
import React, { ComponentProps, ReactNode, HTMLAttributes } from 'react'
import { slugify } from '@/lib/extractHeadings'

import Category               from './Category'
import AuthorBlock            from './AuthorBlock'
import ShareBlog              from './ShareBlog'
import FeaturedImage          from './FeaturedImage'
import CountryHeader          from './CountryHeader'
import CountryPhoto           from './CountryPhoto'
import BudgetBreakdown        from './ExpenseBreakdown'
import FlightCTA              from './FlightCTA'
import TourSectionStarter     from './TourSectionStarter'
import TourCTA                from './TourCTA/TourCTA.client'
import CTA                    from './CTA'
import SleepSectionStarter    from './SleepSectionStarter'
import { SleepComparisonChart, SleepCTAButtons, SleepSection } from './SleepCTA'
import QuizCTA                from './QuizCTA'
import CountryInclude         from './CountryInclude'

import styles from './MDXComponents.module.css'

type PreProps = { children: ReactNode } & HTMLAttributes<HTMLPreElement>
type MDXMap = Record<string, React.ComponentType<any>>

const MDXComponents: MDXMap = {
  // 1) Hide YAML front-matter blocks
  pre: ({ children, ...props }: PreProps) => {
    const onlyChild = React.Children.only(children)
    if (
      React.isValidElement<{ className?: string }>(onlyChild) &&
      onlyChild.props.className === 'language-yaml'
    ) {
      return <div hidden>{children}</div>
    }
    return <pre {...props}>{children}</pre>
  },

  // 2) Hide stray "key: value" lines
  p: ({ children, ...props }: ComponentProps<'p'>) => {
    if (
      typeof children === 'string' &&
      /^[\w]+\s*:\s*.+$/.test(children.trim())
    ) {
      return <p hidden>{children}</p>
    }
    return <p className={styles.paragraph} {...props}>{children}</p>
  },

  // 3) Standard MDX headings
  h1: props => <h1 className={styles.title} {...props} />,
  h2: props => <h2 className={styles.heading} {...props} />,
  h3: props => <h3 className={styles.subheading} {...props} />,

  // 4) Unwrapped components
  Category,
  AuthorBlock,
  ShareBlog,
  FeaturedImage,
  CountryPhoto,
  TourCTA,
  CTA,
  SleepComparisonChart,
  SleepCTAButtons,
  SleepSection,
  QuizCTA,
  CountryInclude,

  // 5) Wrapped components with matching slugs
  CountryHeader: (props: ComponentProps<typeof CountryHeader> & { name: string }) => {
    const id = slugify(props.name)
    return <CountryHeader {...props} id={id} />
  },

  BudgetBreakdown: (props: ComponentProps<typeof BudgetBreakdown>) => {
    const id = slugify('Budget breakdown')
    return <BudgetBreakdown {...props} id={id} />
  },

  FlightCTA: (props: ComponentProps<typeof FlightCTA>) => {
    const id = slugify('Cheap flights')
    return <FlightCTA {...props} id={id} />
  },

  TourSectionStarter: (props: ComponentProps<typeof TourSectionStarter>) => {
    const id = slugify('Tours and Activities')
    return <TourSectionStarter {...props} id={id} />
  },

  SleepSectionStarter: (props: ComponentProps<typeof SleepSectionStarter>) => {
    const id = slugify('Sleeping')
    return <SleepSectionStarter {...props} id={id} />
  },
}

export default MDXComponents
