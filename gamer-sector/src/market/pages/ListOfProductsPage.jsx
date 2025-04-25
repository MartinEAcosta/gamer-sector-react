import { Header, Nav , Footer } from "../../ui";
import { ProductList } from "../components/ProductList";
import { SidebarNavigation } from "../components/SidebarNavigation";
import styles from "../styles/ListOfProductsPage.module.css";


export const ListOfProductsPage = () => {

    
    return (
        <>
            <Header />
            <Nav />
            <div className={styles.mainContainer}>
                <SidebarNavigation />
                <ProductList />
            </div>
            <Footer />
        </>
    )
}
