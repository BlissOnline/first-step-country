// src/components/CountryPhoto/index.tsx
import Image from 'next/image'
import React from 'react'
import styles from './CountryPhoto.module.css'

interface CountryPhotoProps {
  src: string
  alt: string
  caption?: string
  width?: number   // default 650
  height?: number  // default 400
}

const CountryPhoto: React.FC<CountryPhotoProps> = ({
  src,
  alt,
  caption,
  width = 650,
  height = 400,
}) => {

  return (
    <figure
      className={styles.container}
      style={{ maxWidth: `${width}px` }}
    >
      <div
        className={styles.imageWrapper}
        style={{
          aspectRatio: `${width} / ${height}`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`(max-width: ${width}px) 100vw, ${width}px`}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

export default CountryPhoto
