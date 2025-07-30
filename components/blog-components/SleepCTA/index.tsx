// components/index.ts
import React from 'react'
import styles from './SleepCTA.module.css'
import mdxStyles from '../MDXComponents.module.css'
import Image from 'next/image'


type ChartRow = {
  apartment1: string
  apartment2: string
  hostel: string
  hotel: string
}

type LinkObj = {
  label: string
  href:  string
}

export function SleepComparisonChart({
  data,
}: {
  data: ChartRow[]
}) {
  return (
    <>
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
    </>
  )
}

export function SleepCTAButtons({
  links,
}: {
  links: LinkObj[]
}) {
  return (
    <div className={styles.buttons}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          className={styles.button}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
