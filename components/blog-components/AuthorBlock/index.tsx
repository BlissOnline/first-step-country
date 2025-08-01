import React from 'react'
import styles from './AuthorBlock.module.css'

type Props = {
  name: string
  role?: string
  bio?:  string
}

export default function AuthorBlock({ name, role, bio }: Props) {
  return (
    <div className={styles.authorBlock}>
      <p className={styles.authorName}>
        By {name}{role && `, ${role}`}
      </p>
      {bio && <p className={styles.authorBio}>{bio}</p>}
    </div>
  )
}
