import { useContext, useMemo } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = ( { children } ) => {
    
    const { logged } = useContext( AuthContext );
    const { pathname } = useLocation();

    const getLastPath = (pathname) => {
        return pathname;
    };
    
    const lastPath = useMemo( () => getLastPath(pathname) , [pathname]  );
    localStorage.setItem('lastPath' , lastPath);

    return ( logged ) 
    ? children
    : <> < Navigate to="/login" /> </>
    
}

PrivateRoute.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}