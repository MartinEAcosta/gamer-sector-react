import { signInWithGoogle } from "../../firebase/providers";
import { login } from "./authSlice";

export const checkingAuthentication = ( email , password ) => {
    return async( dispatch ) => {

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        const result = await signInWithGoogle();
    }
}