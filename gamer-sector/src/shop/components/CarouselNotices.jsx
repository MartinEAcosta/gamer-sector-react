import PropTypes from 'prop-types';
import { IndicatorsCarousel } from './IndicatorsCarousel';
import { useCarousel } from '../../hooks/useCarousel';
import styles from '../styles/CarouselNotices.module.css';
import { SliderButton } from '../../ui/components/SliderButton';

// Pasadas via Props por el Main.jsx
export const CarouselNotices = ( { data } ) =>{

    const { onNextSlide, onPrevSlide, onSpecificSlide, currentSlide } = useCarousel( { data } , 0 );

    return(
        <>
            <section className={styles.carouselContainer}>
                
                <div className={styles.sponsorImage}>
                    
                    <div 
                        onClick={ onNextSlide }>
                        <SliderButton 
                            direction="back" />
                    </div>
                    
                    {data.map( ( item,idx ) => {
                        return (
                                <img 
                                    src={ item.url } alt={ item.alt } key={ item.id } 
                                    className={ idx === currentSlide ? "" : `${styles.slideHidden}` }
                                />
                        );
                    })}

                    <div 
                        onClick={ onPrevSlide }>
                        <SliderButton 
                            direction="forward" />
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