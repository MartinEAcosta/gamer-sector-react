import { CarouselNotices, CarouselProducts, Footer } from "../components";
import { Header, Nav } from "../ui";
import { data } from '../helpers/dataCarouselImages';


export const HomePage = () => {
    return (
        <>
            <Header />
            <Nav />
            <CarouselNotices data={ data } />
            <CarouselProducts title={ "Ultimas Novedades" }/>
            <CarouselProducts title={ "Mejores Valorados" }/>
            <Footer />
        </>
    )
}
