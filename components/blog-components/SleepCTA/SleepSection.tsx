// components/blog-components/SleepCTA/SleepSection.tsx

import React from 'react'
import styles from './SleepCTA.module.css'
import {
  SleepComparisonChart,
  SleepCTAButtons,
  type ChartRow,
  type LinkObj,
} from './index'

export interface SleepSectionProps {
  data: ChartRow[]
  prompt: string
  links: LinkObj[]
  safetyTips?: string[]
}

export const SleepSection: React.FC<SleepSectionProps> = ({
  data,
  prompt,
  links,
  safetyTips,
}) => (
  <div className={styles.section}>
    <SleepComparisonChart data={data} />
    <SleepCTAButtons prompt={prompt} links={links} safetyTips={safetyTips} />
  </div>
)
