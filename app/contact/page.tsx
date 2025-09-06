// app/contact/page.tsx
import ContactForm from '../../components/Forms/ContactForm' // we'll create this
import styles from './contact.module.css'

export const metadata = {
  title: 'Contact Us | Get in Touch with First Step Country',
  description:
    "Help us improve! Share your thoughts and feedback on First Step Country. We'd love to hear from you!",
  alternates: {
    canonical: 'https://firststepcountry.com/contact',
  },
  openGraph: {
    title: "Contact First Step Country – Let's Connect!",
    description:
      'Have suggestions to make First Step Country even better? Send us your feedback!',
    url: 'https://firststepcountry.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Contact First Step Country – Let's Connect!",
    description:
      'Your input matters! Help us improve by sharing your thoughts and feedback.',
  },
}

export default function Contact() {
  return (
    <div className={styles.contactBody}>
      <ContactForm />
    </div>
  )
}
