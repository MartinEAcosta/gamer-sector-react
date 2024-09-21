import PropTypes from 'prop-types';
import { CardProduct } from './CardProduct';

export const CarouselProducts = ( { title } ) => {

  return (
    <section className="m-10">
        <h1 className="p-5 text-2xl font-kanit text-white">{ title }</h1>
        <div className='bg-slate-100 rounded-xl border-gray-700 flex justify-between'>
          <CardProduct id={ 1 } name={ "Auriculares Hyper X Cloud II" } price={ 300 }/>
        </div>
        
    </section>    
  )
}

CarouselProducts.propTypes = {
  title: PropTypes.string.isRequired
}
