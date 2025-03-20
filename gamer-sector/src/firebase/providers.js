import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try{

        const result = await signInWithPopup( FirebaseAuth ,  googleAuthProvider );
        console.log(result);
        
    }
    catch(error){
        console.log(error);
    }
}