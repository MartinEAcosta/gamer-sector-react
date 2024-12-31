import PropTypes from 'prop-types';
import styles from '../styles/Cards/CardProduct.module.css';

export const CardProduct = ( { id, name, price, reviews = 0 }) => {

  return (
    <div 
      className={styles.cardProduct}
      data-id={ id }>
        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_888876-MLA48554544372_122021-F.webp" className="" alt={ name } />
        <div className={styles.descContainer}>
          <h2 className={styles.nameProduct}>{ name }</h2>
          <h2 className={styles.priceText} > ${ price }</h2>
          <p className={styles.numberOfReviews}>{ reviews } reseñas.</p>
        </div>
    </div>
  )
}

CardProduct.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired
}
