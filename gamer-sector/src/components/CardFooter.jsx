import PropTypes from 'prop-types';

export const CardFooter = ( { title, desc } ) => {
    return (
        <>
            <section className='text-white w-1/4'>
                <h1 className='text-center my-5 font-bold text-xl'>{title}</h1>
                {desc.map((item,idx) => { 
                    return(
                        <p className='text-center my-1 text-m' key={idx}>{item}</p>
                    );
                })}
            </section>
        </>
    );
}

CardFooter.propTypes = {
    data : PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ),
}