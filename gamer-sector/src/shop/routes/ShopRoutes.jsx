import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage , ProductPage, ListOfProductsPage } from "../pages/"

export const ShopRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={ <HomePage /> } />
                <Route path="product/:id" element={ <ProductPage /> } />
                <Route path="products" element={ <ListOfProductsPage /> } />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </>
    )
}
