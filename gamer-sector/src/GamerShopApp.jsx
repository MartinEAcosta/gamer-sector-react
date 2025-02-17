import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth';


export const GamerShopApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
