import '../styles/CarouselNotices.css';
import PropTypes from 'prop-types';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import { useState } from 'react';


export const CarouselNotices = ( { data } ) =>{

    const [ currentSlide, setCurrentSlide ] = useState( 0 );

    // const [ slide, setSlide ] = useState( 0 );

    const handleNextSlide = () => {
        setCurrentSlide( currentSlide === data.length - 1 ? 0 : currentSlide + 1 );
    }

    const handlePrevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? data.length - 1 : currentSlide - 1 );
    }



    return(
        <>
            <section className='z-0 relative'>
                <div className="px-10 h-96 overflow-hidden relative flex items-center justify-center">
                    <div className='absolute left-0 mx-11' onClick={ handlePrevSlide }>
                        <LeftArrow />
                    </div>
                    
                    {data.map( ( item,idx ) => {
                        return (
                                <img src={ item.url } alt={ item.alt } key={ item.id } className={ idx === currentSlide ? "slide max-w-full h-auto" : "slide slide-hidden" }/>
                        );
                    })}
                    
                    <div className='w-full h-full flex justify-center space-x-10 absolute'>
                        {data.map( ( item ) => {
                            return (
                                <div className='indicator' key={ item.id }></div>
                            );
                        })}
                    </div>
                        

                    <div className='absolute right-0 mx-11' onClick={ handleNextSlide }>
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