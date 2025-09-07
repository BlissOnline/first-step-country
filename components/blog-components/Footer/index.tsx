// components/Footer.tsx
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* About */}
        <section className={styles.about}>
          <h4>About First Step Country</h4>
          <p>Budget travel tips, city guides, and resources for budget travelers.</p>
        </section>

        {/* Quick Links */}
        <section className={styles.links}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About</Link></li>
            {/* <li><Link href="/contact">Contact</Link></li> */}
            <li><Link href="/sitemap.xml">Sitemap</Link></li>
          </ul>
        </section>

        {/* Legal */}
        <section className={styles.legal}>
          <h4>Legal</h4>
          <ul>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use">Terms of Use</Link></li>
          </ul>
        </section>

        {/* Social */}
        <section className={styles.social}>
          <h4>Follow Us</h4>
          <ul>
            <li>coming soon...</li>
            {/* <li><a href="https://twitter.com/yourhandle">Twitter</a></li>
            <li><a href="https://instagram.com/yourhandle">Instagram</a></li>
            <li><a href="https://youtube.com/yourchannel">YouTube</a></li> */}
          </ul>
        </section>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} First Step Country. All rights reserved.</p>
        <p>Affiliate Disclosure: We may earn commissions for purchases made through links on this site.</p>
      </div>
    </footer>
  )
}
