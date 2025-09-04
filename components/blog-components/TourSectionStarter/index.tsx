import React from 'react'
import Image from 'next/image'
import styles from './TourSectionStarter.module.css'

export type TourSectionStarterProps = {
  subHeader: string
  paragraph: string
  id?: string
}

const TourSectionStarter: React.FC<TourSectionStarterProps> = ({
  subHeader,
  paragraph,
  id,
}) => {
  return (
    <section id={id} className={styles.container}>
      {/* <hr className={styles.separator} /> */}

      <div className={styles.iconWrapper}>
        <Image
          src="/icons/camera-svg.svg"   // ← your tour icon here
          alt="Tour Icon"
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

export default TourSectionStarter
