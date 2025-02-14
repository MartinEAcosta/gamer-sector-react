import styles from '../styles/DropDownCategory.module.css'

export const DropDownCategory = (  ) => {
    return (
        <>
            <ul className={`${styles.dropDownContent} ${styles.dropDownItem}`}>
                <li className={styles.categoryName}>PERIFERICOS</li>
            </ul>
        </>
    )
}
