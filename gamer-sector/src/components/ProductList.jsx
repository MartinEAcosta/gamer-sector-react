import { CardProduct } from "./CardProduct"
import styles from '../styles/ProductList.module.css';

export const ProductList = () => {
    return (
        <>
            <section className={styles.containerCards}>
                <CardProduct />
            </section>
        </>
    )
}
