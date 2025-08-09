import React, { ComponentProps } from 'react'
import Category from './Category'
import AuthorBlock from './AuthorBlock' 
import ShareBlog from './ShareBlog'
import FeaturedImage from './FeaturedImage'
import CountryHeader from './CountryHeader'
import CountryPhoto from './CountryPhoto'
import BudgetBreakdown from './ExpenseBreakdown'
import FlightCTA from './FlightCTA'
import CTA from './CTA'
import { SleepComparisonChart, SleepCTAButtons, SleepSection } from '@/components/blog-components/SleepCTA'
import styles from './MDXComponents.module.css'

type MDXMap = {
  h2: React.ComponentType<ComponentProps<'h2'>>
  p:  React.ComponentType<ComponentProps<'p'>>
  CTA: typeof CTA
  [key: string]: React.ComponentType<any>
}

const MDXComponents: MDXMap = {
  h1: (props) => <h1 className={styles.title} {...props} />,
  h2: (props) => <h2 className={styles.heading} {...props} />,
  h3: (props) => <h3 className={styles.subheading} {...props} />,
  p:  (props) => <p className={styles.paragraph} {...props} />,
  Category,
  AuthorBlock,
  ShareBlog,
  FeaturedImage,

  CountryHeader,
  CountryPhoto,
  BudgetBreakdown,
  FlightCTA,
  CTA,
  SleepComparisonChart, 
  SleepCTAButtons,
  SleepSection,

}

export default MDXComponents

