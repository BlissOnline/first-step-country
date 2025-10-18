import styles from './terms-of-use.module.css'

export default function TermsPage() {
  return (
    <div className={styles.termsBody}>
      {/* Title + underline */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Terms of Use</h1>
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

        <h2 className={styles.termsHeader}>
            Acceptance of Terms
        </h2>
        <p className={styles.termsText}>
          By accessing and using this website, you accept and agree to be bound by these Terms of Use. If you do not
          agree, please do not use the site.
        </p>

        <h2 className={styles.termsHeader}>
            Intellectual Property
        </h2>
        <p className={styles.termsText}>
          All content on this site is the property of First Step Country unless otherwise noted. You may not reproduce,
          distribute, or exploit any content without permission.
        </p>

        <h2 className={styles.termsHeader}>
            User Responsibilities
        </h2>
        <p className={styles.termsText}>
          You agree to use this site for lawful purposes only and not to engage in any activity that could harm the site
          or its users.
        </p>

        <h2 className={styles.termsHeader}>
            External Links
        </h2>
        <p className={styles.termsText}>
          This site may link to third-party websites. We are not responsible for their content or practices.
        </p>

        <h2 className={styles.termsHeader}>
            Limitation of Liability
        </h2>
        <p className={styles.termsText}>
          We are not liable for any damages arising from your use of the site.
        </p>

        <h2 className={styles.termsHeader}>
            Changes to Terms
        </h2>
        <p className={styles.termsText}>
          We reserve the right to modify these Terms at any time. Continued use of the site constitutes acceptance of the
          updated Terms.
        </p>


      </div>
    </div>
  )
}
