import PropTypes from 'prop-types';
import styles from '../styles/IndicatorsCarousel.module.css'

export const IndicatorsCarousel = ( { data , currentSlide , onIndicator } ) => {

    return (
    <> 
        <div className={styles.containerIndicators}>
            {data.map( ( item , idx ) => {
                return (
                    <div 
                        className={`${styles.indicator} ${ idx === currentSlide ? '' : styles.indicatorInactive } }`}
                        data-id={ idx } key={ item.id } onClick={ onIndicator }
                        aria-label={`Go to slide ${idx}`}
                    />
                );
            })}
        </div>
    </>
    );
    
};

IndicatorsCarousel.propTypes = {
    // Especifico la forma en que vendran nuestros parametros.
    data: PropTypes.arrayOf(
        // Desgloso el array, especificando la forma que tendran los obetos
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        }).isRequired,
        ),
    currentSlide: PropTypes.number.isRequired,
    onIndicator: PropTypes.func.isRequired,
};

