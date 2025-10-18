import styles from './privacy-policy.module.css'

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.privacyPolicyBody}>
      {/* Title + underline */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Privacy Policy</h1>
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

        <h2 className={styles.policyHeader}>
            Information We Collect
        </h2>
        <p className={styles.privacyPolicyText}>
          We may collect non-personal information such as browser type, operating system, and pages visited. If you
          voluntarily provide personal information (such as your email address when subscribing), we will use it only for
          the purpose you provided it.
        </p>

        <h2 className={styles.policyHeader}>
            Cookies
        </h2>
        <p className={styles.privacyPolicyText}>
          You can disable cookies in your browser settings, though some site features may not work correctly.
        </p>

        <h2 className={styles.policyHeader}>
            Third-Party Services
        </h2>
        <p className={styles.privacyPolicyText}>
          We use third-party analytics and affiliate programs that collect information according to their own privacy
          policies.
        </p>

        <h2 className={styles.policyHeader}>
            Your Consent
        </h2>
        <p className={styles.privacyPolicyText}>
          By using our site, you consent to this Privacy Policy.
        </p>

        {/* <h2>Contact Us</h2>
        <p>
          Questions? Email us at{' '}
          <a href="mailto:you@firststepcountry.com">you@firststepcountry.com</a>.
        </p> */}

      </div>
    </div>
  )
}
