// src/components/CountryPhoto/index.tsx
import Image from 'next/image'
import React from 'react'
import styles from './CountryPhoto.module.css'

interface CountryPhotoProps {
  src: string           // path under /public, e.g. "/blogImages/bangladesh.jpg"
  alt: string           // meaningful alt text
  caption?: string      // optional caption text
  width?: number        // intrinsic width for aspect ratio (default 650)
  height?: number       // intrinsic height for aspect ratio (default 400)
}

const CountryPhoto: React.FC<CountryPhotoProps> = ({
  src,
  alt,
  caption,
  width = 650,
  height = 400,
}) => (
  <figure className={styles.container}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      sizes="(max-width: 650px) 100vw, 650px"
      className={styles.image}
    />
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
)

export default CountryPhoto
