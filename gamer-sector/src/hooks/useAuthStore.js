import { useDispatch, useSelector } from "react-redux"
import { onCheckingCredentials, onLogin, onLogout } from "../store/auth/authSlice";
import marketApi from "../api/marketApi";

export const useAuthStore = () => {

    const { status } = useSelector( (state) => state.auth );
    const dispatch = useDispatch()

    const startRegister = async( { email , firstname , lastname , password } ) => {

        dispatch( onCheckingCredentials() );

        try{

            const { data } = await marketApi.post('/user/new', { email, firstname, lastname, password });

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch( onLogin( { email , firstname , lastname , id: data.newUser.id } ) );
        }
        catch(error){
            dispatch( onLogout( error.response.data.msg ) );
        }
    }

    const startLogin = async( { email , password } ) => {
        
        dispatch( onCheckingCredentials() );

        try{

            const { data } = await marketApi.post('/user/' , { email , password} );

            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            console.log(data);
            dispatch( onLogin( { email , firstname: data.user.firstname , lastname: data.user.lastname ,  id: data.user.id } ) );

        }
        catch(error){
            console.log(error);
            // dispatch( onLogout( error.reponse.data.msg ) );
        }
    }

    const startLogout = () => {

        localStorage.clear();
        dispatch( onLogout() );
    }

    return{
        // Props
        status,
        isChecking: status === 'checking',

        // Metodos
        startRegister,
        startLogin,
        startLogout,

    }

}