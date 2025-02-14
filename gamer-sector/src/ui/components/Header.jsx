import { useState } from 'react';
import Logo from '../../assets/joystick.svg';
import UserIcon from '../../assets/usericon.svg'
import { SearcherBar } from './SearcherBar';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {

    // Provisorio para mostrar el iniciar sesión.
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            <header className={styles.header}>

                <div className={styles.containerLogo}>
                    <img className={styles.imgLogo} src={ Logo } alt="Logo Gamer Sector" />
                    <Link to='/' className={styles.logoLink}> 
                        <span className={styles.fontColor}> GAMER </span> 
                        SECTOR
                    </Link>
                </div>

                <div className={styles.rightContainer}>
                    
                    <SearcherBar />
                    
                    {   
                        isLogged &&
                        <Link className={styles.loginBtn} to="/login">
                                INICIAR SESIÓN
                        </Link>
                        &&
                        <img src={ UserIcon } className={styles.userIcon} alt="Icono de usuario" />

                        ||
                        <Link className={styles.loginBtn} to="/logout">
                            CERRAR SESIÓN
                        </Link>
                        // Avatar 
                    }

                </div>

            </header>
        </>
    );
};