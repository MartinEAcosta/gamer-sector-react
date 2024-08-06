import PropTypes from 'prop-types';

export const CardFooter = ( { title, desc } ) => {
    return (
        <>
            <section className='text-center text-white w-1/4'>
                <h1 className='my-5 font-bold text-xl'>{title}</h1>
                <p className='my-5 text-m'>{desc}</p>
            </section>
        </>
    );
}

CardFooter.propTypes = {
    data : PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ),
}