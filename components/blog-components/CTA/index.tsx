import styles from './CTA.module.css'

type CTAProps = {
    title: string
    text: string
    link:string
    btnText: string
}

export default function CTA({ title, text, link, btnText}: CTAProps) {
    return (
        <div className={styles.cta}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            <a href={link} className={styles.button}>
                {btnText}
            </a>
        </div>
    )
}