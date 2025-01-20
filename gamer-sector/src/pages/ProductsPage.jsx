import { Footer } from "../components";
import { Header, Nav } from "../ui";
import { ProductList } from "../components/ProductList";
import { SidebarNavigation } from "../components/SidebarNavigation";
import styles from "../styles/Pages/ProductsPage.module.css";


export const ProductsPage = () => {
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
