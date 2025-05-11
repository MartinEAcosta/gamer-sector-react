import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { SearcherBar } from './SearcherBar';
import Logo from '../../assets/joystick.svg';
import UserIcon from '../../assets/usericon.svg'

export const Header = () => {

    const navigate = useNavigate();

    const onLogout = () => {

        navigate('/login', {
            replace: true
        });
    }

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
                        !localStorage.getItem('user') &&
                        <Link className={styles.btnSesion} to="/auth/login">
                                INICIAR SESIÓN
                        </Link>
                        
                        ||

                        <Link className={styles.btnSesion} onClick={ onLogout } >
                            CERRAR SESIÓN
                        </Link>
                        
                    }
                    <div className={styles.profileContainer}>
                        <img src={UserIcon}  alt="User icon" />
                    </div>
                </div>

            </header>
        </>
    );
};