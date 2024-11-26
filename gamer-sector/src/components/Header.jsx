import { useState } from 'react';
import Logo from '../assets/joystick.svg';
import { SearcherBar } from './SearcherBar';
import styles from '../styles/Header/Header.module.css';

export const Header = () => {

    // Provisorio para mostrar el iniciar sesión.
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            <header className={styles.header}>

                <div className={styles.containerLogo}>
                    <img className={styles.imgLogo} src={ Logo } alt="Logo Gamer Sector" />
                    <a href='' className={styles.logoLink}> 
                        <span className={styles.fontColor}> GAMER </span> 
                        SECTOR
                    </a>
                </div>

                <div className={styles.rightContainer}>
                    
                    <SearcherBar />

                    {/* Modal sesión actualmente hardcodeado */}
                    {
                        !isLogged 
                        && 
                        <a className={styles.loginBtn} href="/login">
                                INICIAR SESIÓN
                        </a>
                    }
                    
                </div>

            </header>
        </>
    );
};