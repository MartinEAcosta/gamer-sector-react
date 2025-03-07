import { data } from '../data/data';

export const getProductsById = ( id ) => {
    return data.find( product => product.id === Number(id) );       
}