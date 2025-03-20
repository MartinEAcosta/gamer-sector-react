import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth';
import { Provider } from 'react-redux';
import { store } from './store';


export const GamerShopApp = () => {
    return (
        <AuthProvider>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </AuthProvider>
    )
}
