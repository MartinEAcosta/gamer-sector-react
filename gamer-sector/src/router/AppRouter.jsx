import { Route, Routes } from "react-router-dom"
import { ShopRoutes } from "../market/routes/ShopRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route
                    path="/auth/*" element={ 
                        <AuthRoutes /> 
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
