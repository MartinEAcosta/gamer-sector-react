import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { PublicRoute } from "./PublicRoute";
import { ShopRoutes } from "./ShopRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route
                    path="/login" element={ 
                        <PublicRoute >
                            <LoginPage />
                        </PublicRoute > 
                    } 
                />
                
                <Route
                    path="/*" element={
                        <ShopRoutes />
                    }
                />


            {/* 
                <Route
                    path="/*" element={
                        <PrivateRoute>
                        </PrivateRoute>
                    }
                /> */}

            </Routes>
        </>
    )
}
