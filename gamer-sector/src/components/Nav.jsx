import { useState } from 'react';
import DropDownArrow from '../assets/dropdown-arrow-svgrepo-com.svg'
import styles from '../styles/Header/Nav.module.css'
import { DropDownCategory } from './DropDownCategory';
import { Link } from 'react-router-dom';


export const Nav = () => {

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }


    return (
        <>
            <nav className={styles.navContainer}>
                <div 
                    className={styles.btnDown} 
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave={ handleMouseLeave }
                >

                    <Link className={`${styles.navbarItem} ${styles.dropBtn}`}
                        to="/category">

                        CATEGORIAS 

                        <img 
                            src={ DropDownArrow } 
                            // alt="Flecha desplegable" className={`' ${isHovered ? '' : ''}`} 
                            alt="Flecha desplegable" className={`${styles.arrowDefault} ${!isHovered ? styles.arrowAnimation : ''}`}
                        />
                    </Link>

                    {
                        isHovered 
                        && 
                        <DropDownCategory />
                    }

                </div>
                <Link className={styles.navbarItem} to="/products" >PRODUCTOS</ Link>
                <Link className={styles.navbarItem} to="/support" >SOPORTE</ Link>
            </nav>
        </>
    );
}