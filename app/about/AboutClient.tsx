"use client";

import Image from "next/image";
import styles from "./about.module.css";
import DiscoverButton from "../../components/Buttons/DiscoverButton/DiscoverButton";

export default function AboutContent() {
  return (
    <div className={styles.aboutBody}>

      {/* Title + underline */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>The First Step Country Mission</h1>
        <div className={styles.underline} />
      </div>

      {/* Hero photo */}
      <div className={styles.imageWrapper}>
        <Image
          src="/portfolioImages/cover-jpg-500kb.jpg"      // ← replace with your actual file
          alt="Travel map and compass"
          width={1200}
          height={400}
          className={styles.missionImage}
        />
      </div>

      {/* Mission & Bio */}
      <div className={styles.textContainer}>
        <p className={styles.aboutText}>
          At <span className={styles.highlight}>First Step Country</span>, our mission is to demystify budget travel. 
          We pair an interactive quiz with real-world cost breakdowns so you can match your goals—whether that’s building a remote career, mastering a new language, or fast-tracking early retirement—with the destinations where it all makes sense.
        </p>
        <p className={styles.aboutText}>
          I’m Wes Laycock. I first fell in love with budget backpacking ten years ago, then life kept me grounded. 
          Now I’m relaunching my travel journey—documenting every win, stumble, and money-saving hack in real time. 
          From five-dollar-a-day meal tests to scouting the best nomad cafés for remote work, I’ll share it all so you can plan smarter and travel freer.
        </p>
      </div>

      {/* CTA + Button */}
      <div className={styles.ctaContainer}>
        <p className={styles.ctaText}>
          {/* Ready to find your next adventure? */}
          Ready To Find Your Next Adventure?!
        </p>
        <DiscoverButton label="Begin" className={styles.beginButton} />
      </div>

    </div>
  );
}
