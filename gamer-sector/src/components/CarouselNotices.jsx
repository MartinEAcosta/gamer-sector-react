import '../styles/CarouselNotices.css';
import PropTypes from 'prop-types';
// import { LeftArrow , RightArrow } from '../components';
import { useState } from 'react';
import { IndicatorsCarousel } from './IndicatorsCarousel';

    // Pasadas via Props por el Main.jsx
    export const CarouselNotices = ( { data } ) =>{

        const [ currentSlide, setCurrentSlide ] = useState( 0 );

        // const handleNextSlide = () => {
        //     setCurrentSlide( currentSlide === data.length - 1 ? 0 : currentSlide + 1 );
        // }

        // const handlePrevSlide = () => {
        //     setCurrentSlide( currentSlide === 0 ? data.length - 1 : currentSlide - 1 );
        // }

        const handleSpecificSlide = ( e ) => {
            const id = Number(e.currentTarget.getAttribute('data-id'));
            setCurrentSlide( id );
        }

        return(
            <>
                <section className='relative'>

                    <div className="flex items-center justify-center overflow-hidden max-h-96">

                        {/* <div className='absolute left-40 cursor-pointer flex' onClick={ handlePrevSlide }>
                            <LeftArrow />
                        </div> */}
                        
                        {data.map( ( item,idx ) => {
                            return (
                                    <img 
                                        src={ item.url } alt={ item.alt } key={ item.id } 
                                        className={ idx === currentSlide ? "-z-10 slide" : "-z-10 slide slide-hidden" }
                                    />
                            );
                        })}


                        {/* <div className='absolute right-40 cursor-pointer' onClick={ handleNextSlide }>
                            <RightArrow /> 
                        </div>  */}
        
                    </div>

                    <IndicatorsCarousel 
                            data={ data } 
                            currentSlide={ currentSlide } 
                            handleIndicator={ handleSpecificSlide } 
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