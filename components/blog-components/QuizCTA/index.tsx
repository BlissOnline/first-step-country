import React from 'react'
import Image from 'next/image'
import styles from './QuizCTA.module.css'

const QuizCTA: React.FC = () => {
  const href = 'https://firststepcountry.com/questions/question1'
  const logoSrc = '/lamp 60 sparkle.svg'
  const logoAlt = 'First Step Country Logo'

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeader}>
        <span
          role="img"
          aria-label="thinking"
          className={styles.emojiInline}
        >
          🤔
        </span>
        TOO MANY GREAT CHOICES TO PICK FROM ?!
      </h1>
      <hr className={styles.divider} />

      <p className={styles.subHeader}>
        Take the official{' '}
        <span className={styles.highlight}>First Step Country</span> quiz!
      </p>

      <p className={styles.freeText}>
        free and no sign up{' '}
        <span className={styles.emoji} role="img" aria-label="cool sunglasses">
          😎
        </span>
      </p>

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
    </div>
  )
}

export default QuizCTA
