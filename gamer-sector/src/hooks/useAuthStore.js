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


    return{
        // Props
        status,

        // Metodos
        startRegister
    }

}