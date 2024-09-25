import PropTypes from 'prop-types';

export const CardProduct = ( { id, name, price, reviews = 0 }) => {

  return (
    <div 
      className="bg-white my-8 mx-12 flex-col font-kanit font-semibold max-w-48 border p-5 rounded-xl shadow-2xl hover:scale-105 hover:-rotate-1 transition-transform"
      data-id={ id }>
        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_888876-MLA48554544372_122021-F.webp" className="" alt={ name } />
        <div className='my-2'>
          <h2 className='whitespace-nowrap text-ellipsis overflow-hidden'>{ name }</h2>
          <h2 className='text-green-600' > ${ price }</h2>
          <p className='text-gray-600 text-right'>{ reviews } reseñas.</p>
        </div>
    </div>
  )
}

CardProduct.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired
}
