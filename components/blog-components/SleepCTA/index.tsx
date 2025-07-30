// components/index.ts
import React from 'react'
import styles from './SleepCTA.module.css'
import mdxStyles from '../MDXComponents.module.css'
import Image from 'next/image'


export type ChartRow = {
  apartment1: string
  apartment2: string
  hostel: string
  hotel: string
}

export type LinkObj = {
  label: string
  href:  string
  variant: 'apartment' | 'hostel' | 'hotel'
}

type Props = {
  prompt: string
  links:  LinkObj[]
}

export function SleepComparisonChart({
  data,
}: {
  data: ChartRow[]
}) {
  return (
    <>
      <div className={styles.sleepChartContainer}>
        <div className={styles.titleRow}>
          <Image src="/lamp 60 sparkle.svg" alt="Brand Logo" width={60} height={60} className='logo'/>
          <h2 className={mdxStyles.heading}>Affordable Sleeping Comparison</h2>
        </div>


        {/* <Image src="/lamp 60 sparkle.svg" alt="Brand Logo" width={60} height={60} className='logo'/>
        <h2>Affordable Sleeping Comparison</h2> */}

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.apartmentColor}>APARTMENT (1 bed)</th>
              <th className={styles.apartmentColor}>APARTMENT (2 bed)</th>
              <th className={styles.hostelColor}>HOSTEL</th>
              <th className={styles.hotelColor}>HOTEL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                <td className={styles.apartmentColor}>{row.apartment1}</td>
                <td className={styles.apartmentColor}>{row.apartment2}</td>
                <td className={styles.hostelColor}>{row.hostel}</td>
                <td className={styles.hotelColor}>{row.hotel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export function SleepCTAButtons({ prompt, links }: Props) {
  return (
    <div className={styles.sleepCTAContainer}>
      {/* 1) Prompt */}
      <h2 className={styles.prompt}>{prompt}</h2>

      {/* 2) Divider line */}
      <div className={styles.divider} />

      {/* 3) Card grid */}
      <div className={styles.cardContainer}>
        {links.map((link, idx) => {
          // pull in the correct “cardBg” class based on variant
          const cardBgClass = styles[`card${capitalize(link.variant)}`]

          return (
            <div
              key={idx}
              className={`${styles.card} ${cardBgClass}`}
            >
              <h3 className={styles.cardTitle}>{link.label}</h3>
              <div className={styles.cardDivider} />
              <a
                href={link.href}
                className={styles.cardButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// helper to capitalize the first letter
function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// — re-export the wrapper —
export { SleepSection } from './SleepSection'