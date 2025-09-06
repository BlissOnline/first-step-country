"use client"
// 1) Module‐level log: runs as soon as this file is imported
// console.log('🔧 [TourCTA] real component module loaded');

import { FC } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import styles from './TourCTA.module.css'

interface TourCTAProps {
  partnerId: string
  widgetRef: string
  toursLink: string
  destination: string 
  title?: string
  subtitle?: string
  buttonText?: string
}

const TourCTA: FC<TourCTAProps> = ({
  partnerId,
  widgetRef,
  toursLink,
  destination,
  title = 'Want to Explore the Most Popular Attractions?!',
  subtitle = `Discover what makes ${destination} unforgettable.`,
  buttonText = 'Popular Tours',
}) => {

  const computedSubtitle =
    subtitle ??
    `Discover what makes ${destination} unforgettable.`
  return (
    <div className={styles.container}>
      {/* 1) Viator widget placeholder */}
      <div
        className={styles.widget}
        data-vi-partner-id={partnerId}
        data-vi-widget-ref={widgetRef}
      />

      {/* 2) Load the Viator script once on the client */}
      <Script
        src="https://www.viator.com/orion/partner/widget.js"
        strategy="lazyOnload"
      />

      {/* 3) CTA header, separator & subtitle */}
      <div className={styles.header}>
        <Image
          src="/icons/camera-svg.svg"
          alt="Tour icon"
          width={80}
          height={80}
          className={styles.icon}
        />
        <h2 className={styles.title}>{title}</h2>
      </div>

      <hr className={styles.separator} />

      <p className={styles.subtitle}>{computedSubtitle}</p>

      {/* 4) Action button */}
      <Link
        href={toursLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        aria-label={buttonText}
      >
        {buttonText}
      </Link>
    </div>
  )
}

export default TourCTA
