import PropTypes from 'prop-types';

export const CardProduct = ( { id, name, price }) => {

  return (
    <div 
      className="bg-white my-5 mx-10 flex-col font-kanit font-semibold max-w-48 border p-5 rounded-xl shadow-2xl hover:scale-105 transition-transform"
      data-id={ id }>
        <img src="https://http2.mlstatic.com/D_NQ_NP_2X_888876-MLA48554544372_122021-F.webp" className="" alt={ name } />
        <div className='my-2'>
          <h2 className='whitespace-nowrap text-ellipsis overflow-hidden'>{ name }</h2>
          <h3 className='text-green-600' > ${ price }</h3>

        </div>
    </div>
  )
}

CardProduct.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
