// components/index.tsx
import React from 'react'
import styles from './SleepCTA.module.css'
import mdxStyles from '../MDXComponents.module.css'
import Image from 'next/image'

export type ChartRow = {
  apartment1: string
  apartment2: string
  hostel:     string
  hotel:      string
}

export type LinkObj = {
  label:   string
  href:    string
  variant: 'apartment' | 'hostel' | 'hotel'
  comingSoon?: boolean
}

export type Props = {
  prompt: string
  links:  LinkObj[]
  safetyTips?: string[]
}

export function SleepComparisonChart({
  data,
}: {
  data: ChartRow[]
}) {
  return (
    <div className={styles.sleepChartContainer}>
      <div className={styles.titleRow}>
        <Image
          src="/lamp 60 sparkle.svg"
          alt="Brand Logo"
          width={60}
          height={60}
          className="logo"
        />
        <h2 className={mdxStyles.heading}>
          Affordable Sleeping Comparison
        </h2>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.apartmentColor}>
              APARTMENT (1 bed)
            </th>
            <th className={styles.apartmentColor}>
              APARTMENT (2 bed)
            </th>
            <th className={styles.hostelColor}>HOSTEL</th>
            <th className={styles.hotelColor}>HOTEL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td
                className={styles.apartmentColor}
                data-label="APARTMENT (1 bed)"
              >
                {row.apartment1}
              </td>
              <td
                className={styles.apartmentColor}
                data-label="APARTMENT (2 bed)"
              >
                {row.apartment2}
              </td>
              <td
                className={styles.hostelColor}
                data-label="HOSTEL"
              >
                {row.hostel}
              </td>
              <td
                className={styles.hotelColor}
                data-label="HOTEL"
              >
                {row.hotel}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SleepCTAButtons({ prompt, links, safetyTips, }: Props) {
  return (
    <div className={styles.sleepCTAContainer}>
      {/* 1) Prompt */}
      <h2 className={styles.prompt}>{prompt}</h2>

      {/* 2) Divider line */}
      <div className={styles.divider} />

      {/* 2a) Optional Safety Tip */}
      {safetyTips && safetyTips.length > 0 && (
        <aside className={styles.safetyTip}>
          <strong>Safety Tip:</strong>
          <ul>
            {safetyTips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </aside>
      )}

      {/* 3) Card grid */}
      <div className={styles.cardContainer}>
        {links.map((link, idx) => {
          const cardBgClass = styles[
            `card${capitalize(link.variant)}`
          ]
          const isComingSoon = link.comingSoon || !link.href

          return (
            <div
              key={idx}
              className={`${styles.card} ${cardBgClass}`}
            >
              <h3 className={styles.cardTitle}>
                {link.label}
              </h3>

              <div className={styles.cardDivider} />

              {/* coming soon */}
              {isComingSoon ? (
                <button
                  className={styles.cardButtonDisabled}
                  disabled
                >
                  Coming Soon
                </button>
              ) : (
                <a
                  href={link.href}
                  className={styles.cardButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Book Now
               </a>
              )}
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
