import PropTypes from 'prop-types';
import { CardProduct, Arrow } from '../components';
import styles from '../styles/Carousels/CarouselProducts.module.css';

export const CarouselProducts = ( { title } ) => {

  return (
    <section className={styles.sectionCarousel}>

        <h1 className={styles.titleCarousel}>{ title }</h1>
        <div className={styles.containerCarousel}>
          <Arrow direction="back" />

          {/* Map */}
          <div>
            <CardProduct id={ 1 } name={ "Auriculares Hyper X Cloud II" } price={ 300 } reviews={ 3 }/>
          </div>
          {/*  */}
          
          <Arrow direction="forward"/>
        </div>
        
    </section>    
  )
}

CarouselProducts.propTypes = {
  title: PropTypes.string.isRequired
}
