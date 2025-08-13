import React from 'react'
// import Link from 'next/link'
import Image from 'next/image'
import styles from './QuizCTA.module.css'

const QuizCTA: React.FC = () => {
  // static values
  const href = 'https://firststepcountry.com/questions/question1'
  const logoSrc = '/lamp 60 sparkle.svg'
  const logoAlt = 'First Step Country Logo'

  return (
    // <Link
    //   href={href}
    //   className={styles.quizCta}
    //   aria-label="First Step Country – Take the Quiz"
    // >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.quizCta}
      aria-label="First Step Country – Take the Quiz"
    >
      <div className={styles.inner}>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={250}
          height={250}
          className={styles.logo}
        />
        <h2 className={styles.title}>First Step Country</h2>
        <span className={styles.button}>Take the Quiz</span>
      </div>
    </a>
  )
}

export default QuizCTA

