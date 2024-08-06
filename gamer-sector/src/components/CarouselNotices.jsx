import '../styles/CarouselNotices.css';
import PropTypes from 'prop-types';
import { LeftArrow } from './LeftArrow';
import { RightArrow } from './RightArrow';
import { useState } from 'react';


export const CarouselNotices = ( { data } ) =>{

    const [ slide, setSlide ] = useState( 0 );

    const nextSlide = () => {
        setSlide( slide === data.length - 1 ? 0 : slide + 1 );
    }

    const prevSlide = () => {
        setSlide( slide === 0 ? data.length - 1 : slide - 1 );
    }



    return(
        <>
            <section>
                <div className="px-10 h-full overflow-hidden relative flex items-center justify-center">
                    <div className='absolute left-0 mx-5' onClick={prevSlide}>
                        <LeftArrow />
                    </div>
                    
                    {data.map((item,idx) => {
                        return(
                            <img src={item.url} alt={item.alt} key={item.id} className={slide === idx ? "slide max-w-full h-auto" : "slide slide-hidden"}/>
                        );
                    })}

                    <div className='absolute right-0 mx-5' onClick={nextSlide}>
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