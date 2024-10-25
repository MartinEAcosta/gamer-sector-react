import { useState } from "react";

export const useCarousel = ( { data } , initialSlide ) => {

    const [currentSlide, setCurrentSlide] = useState( initialSlide );

    const onNextSlide = () => {
        setCurrentSlide( currentSlide === data.length - 1 ? 0 : currentSlide + 1 );
    }

    const onPrevSlide = () => {
        setCurrentSlide( currentSlide === 0 ? data.length - 1 : currentSlide - 1 );
    }

    const onSpecificSlide = ( e ) => {
        const id = Number(e.currentTarget.getAttribute('data-id'));
        setCurrentSlide( id );
    }

    return {
        onNextSlide,
        onPrevSlide,
        onSpecificSlide,
        currentSlide,
    }
}
