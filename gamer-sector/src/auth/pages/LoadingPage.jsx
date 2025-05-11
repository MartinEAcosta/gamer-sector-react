import styles from '../styles/LoadingPage.module.css';

export const LoadingPage = () => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.bgGradient}></div>
                <h1 className={styles.loaderTitle}> Cargando, por favor espere un momento </h1>
                <span className={styles.loader}></span>
            </div>
        </>
    );

}