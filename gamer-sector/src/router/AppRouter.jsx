import { Route, Routes } from "react-router-dom"
import { ShopRoutes } from "../market/routes/ShopRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {

    const { status  , checkAuthToken} = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

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

            </Routes>
        </>
    )
}
