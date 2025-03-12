import PropTypes from 'prop-types';

import styles from '../styles/ProductDetail.module.css';
import { useMemo } from "react";
import { getProductsById } from "../../helpers/getProductsById";
import { Link, Navigate } from "react-router-dom";
import { Arrow } from '../../ui';
import { SliderButton } from '../../ui/components/SliderButton';
import { IndicatorsCarousel } from './IndicatorsCarousel';


export const ProductDetail = ( { id } ) => {

    const product = useMemo( () => getProductsById(id), [id] );

    if( !product ){
        return <Navigate to="/" />;
    }

    return (
        <>
            <main className={styles.containerMain}>
                <div className={styles.containerCarousel}>
                    <div className={styles.anchorContainer}>
                        <small className={styles.smallText}> <Link to='/'>Home</Link>{'>'} <Link to={`/product/${product.id}`}> {product.name} </Link> </small>
                    </div>
                    <img src={product.image} alt={product.name} />
                    
                </div>
                <div className={styles.containerDetails}>
                    <h1 className={styles.nameProduct}> { product.name } </h1>
                    <p className={styles.simpleText}> Unidades restantes: { product.quantity } </p>
                    <p className={styles.simpleText}> $ { product.price } </p>
                    <button>Comprar</button>
                    <button>Agregar al carrito</button>
                </div>
            </main>
        </>
    )
}


ProductDetail.propTypes = {
    id : PropTypes.number.isRequired,
}