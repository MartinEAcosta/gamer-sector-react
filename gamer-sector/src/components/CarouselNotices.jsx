import '../styles/CarouselNotices.css';
import PropTypes from 'prop-types';
import { IndicatorsCarousel } from '../components/IndicatorsCarousel';
import { Arrow } from './Arrow';
import { useCarousel } from '../hooks/useCarousel';

    // Pasadas via Props por el Main.jsx
    export const CarouselNotices = ( { data } ) =>{

        const { onNextSlide, onPrevSlide, onSpecificSlide, currentSlide } = useCarousel( { data } , 0 );

        return(
            <>
                <section className='relative drop-shadow-2xl'>

                    <div className="flex items-center justify-center">

                        <div className='absolute left-10 cursor-pointer flex' onClick={ onPrevSlide }>
                            <Arrow direction="back" />
                        </div>
                        
                        {data.map( ( item,idx ) => {
                            return (
                                    <img 
                                        src={ item.url } alt={ item.alt } key={ item.id } 
                                        className={ idx === currentSlide ? "" : "slide-hidden" }
                                    />
                            );
                        })}

                        <div className='absolute right-10 cursor-pointer' onClick={ onNextSlide }>
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