import { Route, Routes } from "react-router-dom"
import { ShopRoutes } from "../market/routes/ShopRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useAuthStore } from "../hooks/useAuthStore";
import { useEffect } from "react";
import { LoadingPage } from "../auth/pages/LoadingPage";

export const AppRouter = () => {

    const { status  , checkAuthToken} = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if ( status === 'checking' ){
        return (
            <LoadingPage />
        );
    }

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
