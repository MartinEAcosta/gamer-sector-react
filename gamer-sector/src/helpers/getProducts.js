import { data } from '../data/data';

export const getProducts = () => {
    return data.map(product => ({
        ...product, 
    }));
};