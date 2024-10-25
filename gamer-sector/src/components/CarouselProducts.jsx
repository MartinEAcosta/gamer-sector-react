import PropTypes from 'prop-types';
import { CardProduct } from './CardProduct';
import { Arrow } from './Arrow';


export const CarouselProducts = ( { title } ) => {

  return (
    <section className="relative m-10">

        <h1 className="p-8 text-2xl text-center font-kanit text-white">{ title }</h1>
        <div className='bg-slate-200 shadow-2xl rounded-xl flex justify-between'>
          <Arrow direction="back" />

          {/* Map */}
          <div>
            <CardProduct id={ 1 } name={ "Auriculares Hyper X Cloud II" } price={ 300 } reviews={ 3 }/>
          </div>
          {/*  */}
          
          <Arrow direction="forward"/>
        </div>
        
    </section>    
  )
}

CarouselProducts.propTypes = {
  title: PropTypes.string.isRequired
}
