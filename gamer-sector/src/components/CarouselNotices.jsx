import '../styles/CarouselNotices.css';
import PropTypes from 'prop-types';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import { useState } from 'react';


export const CarouselNotices = ( { data } ) =>{

    const [ currentSlide, setCurrentSlide ] = useState( 0 );

    const handleNextSlide = () => {
        setCurrentSlide( currentSlide === data.length - 1 ? 0 : currentSlide + 1 );
    }

    const handlePrevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? data.length - 1 : currentSlide - 1 );
    }

    const handleSpecificSlide = ( e ) => {
        const id = Number(e.currentTarget.getAttribute('data-id'));
        setCurrentSlide( id );
    }


    return(
        <>
            <section className='z-0 relative'>

                <div className="h-96 overflow-hidden relative flex items-center justify-center">

                    <div className='absolute left-40' onClick={ handlePrevSlide }>
                        <LeftArrow />
                    </div>
                    
                    {data.map( ( item,idx ) => {
                        return (
                                <img src={ item.url } alt={ item.alt } key={ item.id } className={ idx === currentSlide ? "slide max-w-full h-auto" : "slide slide-hidden" }/>
                        );
                    })}
                    
                    <div className='w-full h-full flex justify-center space-x-10 absolute'>
                        {data.map( ( item , idx ) => {
                            return (
                                <div className={ idx === currentSlide ? 'indicator' : 'indicator indicator-inactive' } data-id={ idx } key={ item.id } onClick={ handleSpecificSlide }></div>
                            );
                        })}
                    </div>
                        

                    <div className='absolute right-40' onClick={ handleNextSlide }>
                        <RightArrow /> 
                    </div> 

                </div>

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