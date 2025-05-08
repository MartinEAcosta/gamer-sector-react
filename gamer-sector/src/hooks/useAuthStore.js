import { useDispatch, useSelector } from "react-redux"
import { onCheckingCredentials } from "../store/auth/authSlice";
import marketApi from "../api/marketApi";

export const useAuthStore = () => {

    const { status } = useSelector( (state) => state.auth );
    const dispatch = useDispatch()

    const startRegister = async( { email , firstname , lastname , password } ) => {

        dispatch( onCheckingCredentials() );

        try{

            const { data } = await marketApi.post('/user/new', { email, firstname, lastname, password });

            console.log(data);

        }
        catch(error){
            console.log(error);
        }
    }


    return{
        // Props
        status,

        // Metodos
        startRegister
    }

}