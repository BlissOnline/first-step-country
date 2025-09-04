import React from 'react'
import Image from 'next/image'
import styles from './SleepSectionStarter.module.css'

export type SleepSectionStarterProps = {
  subHeader: string
  paragraph: string
  id?: string
}

const SleepSectionStarter: React.FC<SleepSectionStarterProps> = ({
  subHeader,
  paragraph,
  id,
}) => {
  return (
    <section id={id} className={styles.container}>
      <hr className={styles.separator} />  
      
      <div className={styles.iconWrapper}>
        <Image
            src="/icons/hotel-svg.svg"
            alt="Sleep Icon"
            width={64}
            height={64}
            priority
        />
      </div>

      <h2 className={styles.subHeader}>{subHeader}</h2>
      <p className={styles.paragraph}>{paragraph}</p>

      <div className={styles.divider} />

    </section>
  )
}

export default SleepSectionStarter
