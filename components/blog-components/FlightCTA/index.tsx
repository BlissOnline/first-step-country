import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './FlightCTA.module.css'

type CTAProps = {
  title: string
  subtitle: string
  buttonText: string
  href: string
}

const FlightCTA: React.FC<CTAProps> = ({ title, subtitle, buttonText, href }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {/* <FaPlane className={styles.icon} /> */}
        <Image src="/icons/airplane-svg.svg" alt="Airplane icon" width={60} height={60} className='icon'/>
        
        {title}
      </h2>

      <hr className={styles.separator} />

      <p className={styles.subtitle}>{subtitle}</p>

      <Link
        href={href}
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

export default FlightCTA
