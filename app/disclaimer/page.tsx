import styles from './disclaimer.module.css'

export default function DisclaimerPage() {
  return (
    <div className={styles.disclaimerBody}>
      {/* Title + underline */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Disclaimer</h1>
        <div className={styles.underline}></div>
      </div>

      {/* Illustration under the title */}
      <div className={styles.imageWrapper}>
        <img
          src="/illustrations/legal-graphic.png"
          alt="Legal illustration"
          className={styles.illustration}
        />
      </div>

      {/* Text content */}
      <div className={styles.textContainer}>
        <p className={styles.disclaimerText}>
          The information provided by First Step Country (“we,” “our,” or “us”) on this website is for general informational and entertainment purposes only.  
          All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
        </p>
        <p className={styles.disclaimerText}>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided.  
          Your use of the site and your reliance on any information is solely at your own risk.
        </p>
        <p className={styles.disclaimerText}>
          This site may contain affiliate links. If you click on these links and make a purchase, we may earn a commission at no additional cost to you.
        </p>
      </div>
    </div>
  )
}
