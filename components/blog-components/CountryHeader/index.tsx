// components/CountryHeader.tsx
import React from "react"
import styles from "./CountryHeader.module.css"
// import Image from 'next/image'

type CountryHeaderProps = {
  label: string;    // e.g. "Destination #1"
  name: string;     // e.g. "Bangladesh"
  flagSrc: string;  // path under public/, e.g. "/flags/bangladesh.svg"
};

export default function CountryHeader({
  label,
  name,
  flagSrc,
}: CountryHeaderProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <span className={styles.name}>{name}</span>
      <img
        src={flagSrc}
        alt={`Flag of ${name}`}
        width={32}
        height={24}
        className={styles.flag}
      />
    </div>
  );
}
