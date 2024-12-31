import { Route, Routes } from "react-router-dom"
import { HomePage, SupportPage, ProductsPage } from "../pages/"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <HomePage /> } />

                <Route path="/products" element={ <ProductsPage /> } />
                <Route path="/support" element={ <SupportPage /> } />
            </Routes>
        </>
    )
}
