import PropTypes from 'prop-types';

import { useReducer } from "react";
import { AuthContext  } from "./AuthContext";
import { authReducer } from "./authReducer";

import { types } from '../types/types'

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged : !!user,
        user : user,
    }
}

export const AuthProvider = ( { children } ) => {
    
    const [ authState, dispatch ] = useReducer( authReducer, { }, init );

    const login = ( email = '' ) => {

        const user = {
            email : email,
        };

        const action = {
            type : types.login,
            payload : user,
        };
        
        localStorage.setItem( 'user' , JSON.stringify(user) );
        
        dispatch(action);
    }

    const logout = ( ) => {

        localStorage.removeItem( 'user' );
        
        const action = {
            type : types.logout,
            payload : {

            }
        };


        dispatch(action);
    }

    
    return (
        <AuthContext.Provider 
            value={ 
                { 
                    ...authState,
                    login : login,
                    logout : logout,
                } 
            }>
            { children }
        </AuthContext.Provider>
            
    )
}

AuthProvider.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}