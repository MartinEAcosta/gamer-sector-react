import { Route, Routes } from "react-router-dom"
import { ShopRoutes } from "../market/routes/ShopRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {

    const { status } = useAuthStore();

    return (
        <>
            <Routes>

            {
                (status === 'not-authenticated' || status === 'checking') &&
                <Route
                    path="/auth/*" element={ 
                        <AuthRoutes /> 
                    } 
                />
                

            }

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
