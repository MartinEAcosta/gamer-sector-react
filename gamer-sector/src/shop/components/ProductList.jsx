import { CardProduct } from "./CardProduct"
import styles from '../styles/ProductList.module.css';
import { data } from "../../data/data";

export const ProductList = () => {
    return (
        <>
            <section className={styles.containerCards}>
                {data.map( product => (
                    <div key={product.id} className={styles.cardContainer}>
                        <CardProduct 
                            key={product.id}
                            {...product}
                        />
                    </div>
                ))}
            </section>
        </>
    )
}
