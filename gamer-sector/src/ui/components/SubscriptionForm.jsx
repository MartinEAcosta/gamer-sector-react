import styles from '../styles/SubscriptionForm.module.css';

export const SubscriptionForm = () => {
    return (
        <>

            <article className={styles.containerForm}>

                <h4 className={styles.titleForm}>¡Mantenme al tanto!</h4>

                <p className={styles.textForm}>Ingresa tu mail para suscríbirte a nuestro Boletín. Donde te llegarán nuestras mejores ofertas.</p>

                <form className={styles.form} action="" method="get">

                    <input type="email" name="" id="" placeholder="example@gmail.com" className={styles.inputEmail}/>
                    <button type="submit" className={styles.btnSumbit}>Suscribirse</button>

                </form>

            </article>
            
        </>
    )
}
