import React from 'react'
import styles from './Category.module.css'

export type CategoryProps = {
    category: string
    subCategory?: string
}

export default function Category({
    category,
    subCategory,
}: CategoryProps) {
    return (
        <div className={styles.wrapper}>
            <span className={styles.main}>{category.toUpperCase()}</span>
            {subCategory && (
                <>
                    <span className={styles.separator}>|</span>
                    <span className={styles.sub}>{subCategory}</span>
                </>
            )}
        </div>
    )
}