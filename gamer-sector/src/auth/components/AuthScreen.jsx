import { FormLogin } from "./FormLogin"
import styles from '../styles/AuthScreen.module.css';

export const AuthScreen = () => {
    return (
        <>
            <div className={styles.authContainer}>
                <FormLogin />
            </div>
        </>
    )
}
