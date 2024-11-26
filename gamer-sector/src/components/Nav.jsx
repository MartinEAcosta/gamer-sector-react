import { useState } from 'react';
import DropDownArrow from '../assets/dropdown-arrow-svgrepo-com.svg'
import styles from '../styles/Header/Nav.module.css'
import '../styles/Nav.css';
import { DropDownCategory } from './DropDownCategory';


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

                    <a className={`${styles.navbarItem} ${styles.dropBtn}`}
                        href="">

                        CATEGORIAS 

                        <img 
                            src={ DropDownArrow } 
                            // alt="Flecha desplegable" className={`' ${isHovered ? '' : ''}`} 
                            alt="Flecha desplegable" className={`${styles.arrowDefault} ${!isHovered ? styles.arrowAnimation : ''}`}
                        />
                    </a>

                    {isHovered && 
                        <DropDownCategory />
                    }

                </div>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">PRODUCTOS</a>
                <a className="font-roboto font-bold hover:text-amber-500 hover:opacity-85" href="">SOPORTE</a>
            </nav>
        </>
    );
}