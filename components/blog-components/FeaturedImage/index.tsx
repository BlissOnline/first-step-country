// components/blog-components/FeaturedImage/index.tsx
import Image from 'next/image'
import styles from './FeaturedImage.module.css'

type Props = {
  src: string
  alt?: string | null
  caption?: string | null
  className?: string
}

export default function FeaturedImage({
  src,
  alt,
  caption,
  className = '',
}: Props) {
  const safeAlt = alt ?? ''

  return (
    <figure className={`${styles.container} ${className}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={safeAlt}
          // — use the image’s real pixel size here:
          width={650}
          height={366}
          sizes="(max-width: 650px) 100vw, 650px"
          style={{
            width: '100%',     // fluid
            height: 'auto',    // preserve ratio
            objectFit: 'cover',
          }}
          className={styles.image}
          priority
        />
      </div>
      {caption && (
        <figcaption className={styles.caption}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
