import { Navigate, useParams } from "react-router-dom"
import { Footer, Header, Nav } from "../../ui"
import { getProductsById } from "../../helpers/getProductsById";
import { useMemo } from "react";

export const ProductPage = () => {

    const { id } = useParams();

    const product = useMemo( () => getProductsById(id), [id] );

    if( !product ){
        return <Navigate to="/" />;
    }

    return (
        <>
            <Header />
            <Nav />
            <div>
                <h1>{product.name}</h1>
                <img src={product.image} alt="" />
            </div>
            <Footer />

        </>
    )
}
