'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './question2.module.css'

export interface Q2Props {
  value?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Q2Client: React.FC<Q2Props> = ({ value = 0, onChange }) => {
  const router = useRouter()

  // track whether the user has interacted
  const [touched, setTouched] = useState(false)
  // the string we actually render in the input
  const [display, setDisplay] = useState('')

  // whenever `value` changes (e.g. coming back with a non-zero), sync it
  useEffect(() => {
    if (!touched) {
      if (value > 0) {
        setDisplay(value.toString())
      } else {
        setDisplay('')
      }
    }
  }, [value, touched])

  const handleFocus = () => {
    // on first focus, if still the "0 default", clear out
    if (!touched && value === 0) {
      setDisplay('')
    }
    setTouched(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTouched(true)
    setDisplay(e.target.value)
    onChange?.(e)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/questions/question3')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.qTwoBody}>
      <label className={styles.qTwoButtonContainer}>
        $
        <input
          name="ppm"
          type="number"
          value={display}
          onFocus={handleFocus}
          onChange={handleChange}
          placeholder="0"
          aria-label="Max monthly budget for living expenses"
        />
      </label>

      <div className={styles.qTwoSubButtonContainer}>
        <button type="submit" className={styles.qTwoButton}>
          submit number
        </button>
      </div>
    </form>
  )
}

export default Q2Client
