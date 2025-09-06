"use client";

// components/SharePopover.tsx
import { useState } from 'react'
import styles from './ShareBlog.module.css'
import Image from 'next/image'

// import ShareSvg from '/icons/share-svg.svg'

export default function SharePopover({ title }: { title: string }) {
  const [open, setOpen] = useState(false)
  const currentUrl =
    typeof window !== 'undefined' ? window.location.href : ''

  // copy link feedback
  const [copied, setCopied] = useState(false)
  async function copyLink() {
    await navigator.clipboard.writeText(currentUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={styles.toggle}
      >
        <Image
          src="/icons/share-svg.svg"
          alt="Share icon"
          width={167}
          height={35}
          // unoptimized
          className={styles.icon}
        />

        <span className={styles.label}>SHARE</span>

      </button>

      {open && (
        <div className={styles.popover}>
          <button onClick={copyLink} className={styles.item}>
            {copied ? 'Link copied!' : 'Copy Link'}
          </button>

          <a
            href={`mailto:?subject=${encodeURIComponent(
              title
            )}&body=${encodeURIComponent(currentUrl)}`}
            className={styles.item}
          >
            Email
          </a>

          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            Facebook
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            Twitter
          </a>

          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            LinkedIn
          </a>

          <a
            href={`https://www.reddit.com/submit?url=${encodeURIComponent(
              currentUrl
            )}&title=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            Reddit
          </a>

          <a
            href={`https://share.flipboard.com/bookmarklet/popout/v1/?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            Flipboard
          </a>
        </div>
      )}
    </div>
  )
}
