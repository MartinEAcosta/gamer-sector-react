import { useParams } from "react-router-dom";
import { Footer, Header, Nav } from "../../ui";
import { ProductDetail } from "../components";

export const ProductPage = () => {

    const { id } = useParams();

    return (
        <>
            <Header />
            <Nav />
            <ProductDetail id={ id } />
            <Footer />
        </>
    )
}
