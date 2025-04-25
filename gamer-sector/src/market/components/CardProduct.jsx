import PropTypes from 'prop-types';
import styles from '../styles/CardProduct.module.css';
import { useNavigate } from 'react-router-dom';

export const CardProduct = ( { id, name, price, reviews = 0 , image } ) => {

  const navigate = useNavigate();

  return (
      <div 
        onClick={ () => navigate(`/product/${ id }`) }
        className={styles.cardProduct}
        data-id={ id }>
          <figure className={styles.containerFigure}>
            <img src={image} className={styles.imgProduct} alt={ name } />
          </figure>
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
  reviews: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
}
