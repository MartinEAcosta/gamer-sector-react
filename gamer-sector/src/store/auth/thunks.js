// import { signInWithFacebook, signInWithGoogle } from "../../firebase/providers";
// import { checkingCredentials, login, logout } from "./authSlice";

// export const checkingAuthentication = ( email , password ) => {
//     return async( dispatch ) => {

//         dispatch( checkingCredentials() );
//     }
// }

// export const startGoogleSignIn = () => {
//     return async( dispatch ) => {

//         dispatch( checkingCredentials() );
        
//         const result = await signInWithGoogle();

//         if( !result.ok ) return dispatch( logout( result.errorMessage ) );

//         return dispatch( login( result ) );
//     }
// }

// export const startFacebookSignIn = () => {
//     return async( dispatch ) => {

//         dispatch( checkingCredentials() );

//         const result = await signInWithFacebook();

//         console.log(result);

//         if( !result.ok ) return dispatch( logout( result.errorMessage ) );
        
//         return dispatch( login( result ));
//     }
// }

