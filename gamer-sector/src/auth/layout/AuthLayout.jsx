import PropTypes from 'prop-types';

import styles from '../styles/AuthScreen.module.css';

export const AuthLayout = ( { children , title = '' } ) => {
    
    return (
        <>
            <div className={styles.authContainer}>
                <section className={styles.loginContainer}>
                    <div className={styles.leftContainer}>
                        <h2 className={styles.subtitle}>{ title }</h2>

                    { children }

                    </div>

                    <div className={styles.rightContainer}>
                        <h2 className={` ${styles.subtitle} ${styles.welcomeMessage}`}>
                        ¡Bienvenido a Gamer Sector!
                        </h2>
                    </div>

                </section>
            </div>
        </>
    );
}

AuthLayout.propTypes = {
    children : PropTypes.node.isRequired,
    title : PropTypes.string.isRequired,
}
