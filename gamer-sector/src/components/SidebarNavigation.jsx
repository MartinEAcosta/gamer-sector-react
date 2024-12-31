import styles from '../styles/SidebarNavigation.module.css';
import { Link } from 'react-router-dom';


export const SidebarNavigation = () => {
    return (
        <>
            <aside className={styles.sideBar}>
                <h1 className={styles.titleSection}>Categorias</h1>
                <div className={styles.categoriesContainer}>
                    <Link className={styles.textSection}>Perifericos <small className={styles.smallNumber}>(22)</small></Link>
                    <Link className={styles.textSection}>Motherboards</Link>
                    <Link className={styles.textSection}>Procesadores</Link>
                </div>
            </aside>
        </>
    )
}
