import { FormLogin } from "./FormLogin"
import styles from '../styles/AuthScreen.module.css';

export const AuthScreen = () => {
    return (
        <>
            <section className={styles.authContainer}>
                <FormLogin />
            </section>
        </>
    )
}
