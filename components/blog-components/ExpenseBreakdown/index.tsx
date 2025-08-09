import Image from 'next/image'
import { FC } from 'react'
import styles from './BudgetBreakdown.module.css'

interface Expense {
  category: string
  cost: number
  color?: string
}

interface CardData {
  title: string
  expenses: Expense[]   // exactly five items
}

interface BudgetBreakdownProps {
  cards: CardData[]     // three cards, each with five expenses
}

const IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  'Budget Tourist': {
    src: '/questionImages/ppm-graphic.png',
    alt: 'Backpacker on a budget',
  },
  'Yolo Tourist': {
    src: '/questionImages/luxury-travel-orange.png',
    alt: 'Fine dining traveler',
  },
  'Digital Nomad': {
    src: '/questionImages/nomad-visa-graphic.png',
    alt: 'Working from a café',
  },
}

const BudgetBreakdown: FC<BudgetBreakdownProps> = ({ cards }) => (
  <>
    <section
      className={styles.container}
      aria-labelledby="expense-breakdown-comparison-title"
    >
      <h2
        id="expense-breakdown-comparison-title"
        className={styles.sectionTitle}
      >
        Expense Breakdown Comparison
      </h2>

      <hr className={styles.designLine} />

      <div className={styles.grid}>
        {cards.map((card, idx) => {
          const total = card.expenses.reduce((sum, e) => sum + e.cost, 0)
          const imageData = IMAGE_MAP[card.title] || {
            src: '/images/default.svg',
            alt: card.title,
          }

          return (
            <article 
              key={idx} 
              className={`${styles.card} ${
                card.title === 'Budget Tourist'
                  ? styles.cardBudget
                  : card.title === 'Yolo Tourist'
                  ? styles.cardYolo
                  : styles.cardNomad
              }`}
            >
              {/* Approach Title */}
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {/* Fixed Illustration */}
              <div className={styles.imageWrapper}>
                <Image
                  src={imageData.src}
                  alt={imageData.alt}
                  width={120}
                  height={120}
                  loading="lazy"
                />
              </div>

              {/* Expense Bars */}
              <dl className={styles.breakdown}>
                {card.expenses.map((e, i) => (
                  <div key={i} className={styles.row}>
                    <dt className={styles.label}>{e.category}</dt>
                    <dd className={styles.barWrapper}>
                      <div
                        className={styles.bar}
                        style={{
                          width: `${((e.cost / total) * 100).toFixed(1)}%`,
                          backgroundColor: e.color ?? '#ccc',
                        }}
                      />
                      <span className={styles.cost}>${e.cost}</span>
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Total Line */}
              <footer className={styles.totalLine}>
                <hr />
                <span>Total per Day: ${total}</span>
              </footer>
            </article>
            
          )
        })}
      </div>
      
    </section>
    <hr className={styles.designLineBottom} /> 

  </> 
)


export default BudgetBreakdown
