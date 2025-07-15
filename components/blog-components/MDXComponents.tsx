import React, { ComponentProps } from 'react'
import CTA from './CTA'
import styles from './MDXComponents.module.css'

type MDXMap = {
  h2: React.ComponentType<ComponentProps<'h2'>>
  p:  React.ComponentType<ComponentProps<'p'>>
  CTA: typeof CTA
  [key: string]: React.ComponentType<any>
}

const MDXComponents: MDXMap = {
  h2: (props) => <h2 className={styles.heading} {...props} />,
  p:  (props) => <p className={styles.paragraph} {...props} />,
  CTA,
}

export default MDXComponents

