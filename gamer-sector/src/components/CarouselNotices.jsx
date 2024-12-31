import PropTypes from 'prop-types';
import { IndicatorsCarousel } from '../components/IndicatorsCarousel';
import { Arrow } from './ArrowButton';
import { useCarousel } from '../hooks/useCarousel';
import styles from '../styles/Carousels/CarouselNotices.module.css';

    // Pasadas via Props por el Main.jsx
    export const CarouselNotices = ( { data } ) =>{

        const { onNextSlide, onPrevSlide, onSpecificSlide, currentSlide } = useCarousel( { data } , 0 );

        return(
            <>
                <section className={styles.carouselContainer}>

                    <div className={styles.sponsorImage}>

                        <div className={styles.btnArrow} onClick={ onPrevSlide }>
                            <Arrow direction="back" />
                        </div>
                        
                        {data.map( ( item,idx ) => {
                            return (
                                    <img 
                                        src={ item.url } alt={ item.alt } key={ item.id } 
                                        className={ idx === currentSlide ? "" : `${styles.slideHidden}` }
                                    />
                            );
                        })}

                        <div className={styles.btnArrow} onClick={ onNextSlide }>
                            <Arrow direction="forward" /> 
                        </div> 
        
                    </div>

                    <IndicatorsCarousel 
                            data={ data } 
                            currentSlide={ currentSlide } 
                            onIndicator={ onSpecificSlide } 
                    />

                </section>
            </>
        );
    };

    CarouselNotices.propTypes = {
        // Especifico la forma en que vendran nuestros parametros.
        data: PropTypes.arrayOf(
            // Desgloso el array, especificando la forma que tendran los obetos
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
            }).isRequired,
        )
    };