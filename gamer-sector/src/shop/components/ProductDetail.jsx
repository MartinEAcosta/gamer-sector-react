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
            <div className={styles.anchorContainer}>
                <small className={styles.smallText}> <Link to='/'>Home</Link>{'>'} <Link to={`/product/${product.id}`}> {product.name} </Link> </small>
            </div>
            
            <div className={styles.containerCarousel}>
                <img src={product.image} alt={product.name} />
                
            </div>
            <div className={styles.containerDetails}>

            </div>
        </>
    )
}


ProductDetail.propTypes = {
    id : PropTypes.number.isRequired,
}