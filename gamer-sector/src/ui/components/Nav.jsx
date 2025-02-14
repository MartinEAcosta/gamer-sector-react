import { useState } from 'react';
import DropDownArrow from '../../assets/dropdown-arrow-svgrepo-com.svg';
import styles from '../styles/Nav.module.css';
import { DropDownCategory } from './DropDownCategory';
import { Link } from 'react-router-dom';


export const Nav = () => {

    const [isHovered, setIsHovered] = useState(false);
    let timeoutId = null;

    const handleMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => {
            setIsHovered(false);
        }, 200);
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
                    
                    { isHovered &&    
                        <div 
                            className={`${styles.dropDownContainer}`}
                            >
                            
                                <DropDownCategory />
                        </div>
                    }
                    
                </div>

                <Link className={styles.navbarItem} to="/products" >PRODUCTOS</ Link>
                <Link className={styles.navbarItem} to="/support" >SOPORTE</ Link>

            </nav>
        </>
    );
}