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
  // ensure we never send null to <Image>
  const safeAlt = alt ?? ''

  return (
    <figure className={`${styles.container} ${className}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={safeAlt}
          layout="responsive"
          width={800}
          height={500}
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
