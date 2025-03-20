import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/FormLogin.module.css';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import FacebookSVG from '../../assets/facebook-white.svg';
import GoogleSVG from '../../assets/google-color.svg';

export const FormLogin = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const { email , password ,onInputChange } = useForm({
    email : '',
    password : '',
  });

  const onLogin = ( e ) => {
    e.preventDefault();
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    console.log(email, password);

    login(email);

    navigate( lastPath , {
      replace: true
    });

  }

  return (
    <>
      <section className={styles.loginContainer}>
        <div className={styles.leftContainer}>
          <h2 className={styles.subtitle}>Iniciar sesión</h2>

          <form className={styles.form} onSubmit={ onLogin }>

            <div className={styles.inputGroup}>
              <input type="email" autoComplete='off' name="email" id="email" value={email} placeholder="example@gmail.com" className={styles.inputForm} onChange={onInputChange} required />
              <label htmlFor="email" className={styles.labelText}>Email</label>
            </div>

            <div className={styles.inputGroup}>
              <input type="password" name="password" id="password" value={password} placeholder="••••••••" className={styles.inputForm} onChange={onInputChange} required/>
              <label htmlFor="password" className={styles.labelText}>Contraseña</label>
            </div>

            <div className={styles.containerSocialMedia}>
              <button className={styles.btnGoogle}>
                <img src={ GoogleSVG } alt="Google Icon" className={styles.socialMediaSVG} />
                Continuar con Google
              </button>

              <button className={styles.btnFacebook}>
                <img src={ FacebookSVG } alt="Facebook Icon" className={styles.socialMediaSVG} />
                Continuar con Facebook
              </button>

            </div>

            <Link to="/forgot-password">
              <small className={styles.smallText}>¿Olvidaste tu contraseña?</small>
            </Link>
            <Link to="/register">
              <small className={styles.smallText}>¿No tenés cuenta? Registrate</small>
            </Link>

            <input type="submit" 
                   value="Ingresar"  
                   className={` ${styles.btnSumbit} `}
            />
          </form>
        </div>
        <div className={styles.rightContainer}>
          <h2 className={` ${styles.subtitle} ${styles.welcomeMessage}`}>¡Bienvenido a Gamer Sector!</h2>
        </div>
      </section>
    </>
  )

}
