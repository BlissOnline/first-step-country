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
  expenses: Expense[]
}

interface BudgetBreakdownProps {
  cards: CardData[]
}

const IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  'Budget Tourist': {
    src: '/questionImages/ppm-graphic.png',
    alt: 'Backpacker on a budget',
  },
  'YOLO Traveler': {
    src: '/questionImages/luxury-travel-orange.png',
    alt: 'Fine dining traveler',
  },
  'Digital Nomad': {
    src: '/questionImages/nomad-visa-graphic.png',
    alt: 'Working from a café',
  },
}

const CHART_CLASS_MAP: Record<string, string> = {
  'Budget Tourist': styles.chartBudget,
  'YOLO Traveler':  styles.chartYolo,
  'Digital Nomad':  styles.chartNomad,
}

const BudgetBreakdown: FC<BudgetBreakdownProps> = ({ cards }) => (
  <section
    className={styles.container}
    aria-labelledby="expense-breakdown-comparison-title"
  >
    <h2
      id="expense-breakdown-comparison-title"
      className={styles.sectionTitle}
    >
      Daily Expense Breakdown Comparison
    </h2>

    <hr className={styles.designLine} />

    <div className={styles.grid}>
      {cards.map((card) => {
        const total = card.expenses.reduce((sum, e) => sum + e.cost, 0)
        const imageData = IMAGE_MAP[card.title] || {
          src: '/images/default.svg',
          alt: card.title,
        }

        const key = card.title.trim()
        const chartClass = CHART_CLASS_MAP[key] || styles.chartBudget

        return (
          <article key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.imageWrapper}>
              <Image
                src={imageData.src}
                alt={imageData.alt}
                width={120}
                height={120}
                loading="lazy"
              />
            </div>

            <div className={`${styles.chart} ${chartClass}`}>
              <dl className={styles.breakdown}>
                {card.expenses.map((e) => (
                  <div key={e.category} className={styles.row}>
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

              <footer className={styles.totalLine}>
                <span>Total per Day: ${total}</span>
              </footer>
            </div>
          </article>
        )
      })}
    </div>

    <hr className={styles.designLineBottom} />
  </section>
)

export default BudgetBreakdown
