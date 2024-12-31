// Decidido realizarse de forma estatica ya que no seria la idea ser modificado.

import { SubscriptionForm } from "./SubscriptionForm";
import styles from "../styles/Footer/Footer.module.css";

export const Footer = () => {
    return (
        <>
            <footer className={styles.footerContainer}>

                <div className={styles.gridContent}>
                    
                    <section className={styles.aboutSection}>

                        <h3 className={styles.titleAbout}>Sobre Nosotros</h3>

                        <p className={styles.textAbout}>
                            Somos una tienda en línea especializada en la venta de productos tecnológicos de alta calidad. 
                            Ofrecemos una amplia gama de gadgets y dispositivos para satisfacer todas tus necesidades tecnológicas.
                        </p>

                    </section>

                    <article className={styles.formContainer}>
                        <SubscriptionForm />
                    </article>

                    <div className={styles.map}>

                        <div className={styles.colFooter}>
                            <a href="" className={styles.textMap}>Instagram</a>
                            <a href="" className={styles.textMap}>Facebook</a>
                            <a href="" className={styles.textMap}>Twitter</a>
                        </div>

                        <div className={styles.colFooter}>
                            <p className={styles.textMap}>Telefono: (123) 456-7890</p>
                            <p className={styles.textMap}>Email: gamersector@tutienda.com</p>
                            <p className={styles.textMap}>Dirección: Blessed 444, Tandil, Argentina</p>
                        </div>
                        <div className={styles.colFooter}>
                            <a href="" className={styles.textMap}>Soporte</a>
                            <a href="" className={styles.textMap}>Ayuda</a>
                            <a href="" className={styles.textMap}>FAQ</a>
                        </div>
                    </div>
                
                </div>

            </footer>
        </>
    );
}