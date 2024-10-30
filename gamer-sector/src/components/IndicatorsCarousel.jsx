import PropTypes from 'prop-types';

export const IndicatorsCarousel = ( { data , currentSlide , onIndicator } ) => {

    return (
    <> 
        <div className='w-full h-full flex justify-center space-x-10 z-0'>
        {data.map( ( item , idx ) => {
            return (
                <div 
                    className={ idx === currentSlide ? 'indicator' : 'indicator indicator-inactive' } 
                    data-id={ idx } key={ item.id } onClick={ onIndicator }
                    aria-label='{ `Go to slide ${ idx + 1 ` }'
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

