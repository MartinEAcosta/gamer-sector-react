import PropTypes from 'prop-types';

export const CardFooter = ( { id, title, desc } ) => {

    return (
        <>
            <section
                data-id={ id } 
                className='py-5 text-white w-1/4 hover:backdrop-blur-s hover:bg-slate-800 rounded-xl hover:origin-top-left hover:rotate-1 hover:skew-y-1 transition-all hover:shadow-2xl'>
                <h1 className='text-amber-500 text-center font-bold text-2xl my-2'>{title}</h1>
                {desc.map((item,idx) => { 
                    return(
                        <p className='text-center my-2 text-m underline-offset-2 underline cursor-pointer' key={idx}>{item}</p>
                    );
                })}
            </section>
        </>
    );
}

CardFooter.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
}