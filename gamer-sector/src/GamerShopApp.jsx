import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';


export const GamerShopApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
