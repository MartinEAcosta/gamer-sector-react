import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try{

        const result = await signInWithPopup( FirebaseAuth ,  googleAuthProvider );

        const { displayName , email , photoURL , uid } = result.user;

        return {
            ok: true,
            displayName , email , photoURL , uid
        };
    }
    catch(error){
        const errorCode =  error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}