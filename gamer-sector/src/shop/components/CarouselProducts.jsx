import PropTypes from 'prop-types';
import { CardProduct } from '../components';
import { Arrow } from '../../ui/components/ArrowButton';
import styles from '../styles/CarouselProducts.module.css';
import { getProducts } from '../../helpers/getProducts';

export const CarouselProducts = ( { title } ) => {

  // provisorio
  const products = getProducts();  
 

  return (
    <section className={styles.sectionCarousel}>

        <h1 className={styles.titleCarousel}>{ title }</h1>
        <div className={styles.containerCarousel}>
          <Arrow direction="back" />

          {/* Map */}
          {
            products.map( product => (
                <CardProduct 
                  key={product.id} 
                  id={ product.id } 
                  name={ product.name } 
                  price={ product.price } 
                  reviews={ 3 } 
                  imgURL={product.image} 
                />
            ))
          }
          {/*  */}
          
          <Arrow direction="forward"  />
        </div>
        
    </section>    
  )
}

CarouselProducts.propTypes = {
  title: PropTypes.string.isRequired
}
