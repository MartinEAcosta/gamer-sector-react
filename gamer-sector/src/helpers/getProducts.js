export const getProducts = async( id ) => {

    const url =  `https://6384e1793fa7acb14f039590.mockapi.io/Products?id=${ id }`;
    const res = await fetch ( url );
    const data  = await res.json();

    console.log(data);

    const products = data.map( product => ({
        id: product.id,
        name: product.name,
        image: product.image
    }));

    console.log(data);
    return products;
}