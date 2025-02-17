import styles from '../styles/FormLogin.module.css';

import { useForm } from '../../hooks/useForm';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
            <label htmlFor="email" className={styles.labelText}>Email</label>
            <input type="email" name="email" id="email" value={email} placeholder="example@gmail.com" className={styles.inputForm} onChange={onInputChange} required />
            <label htmlFor="password" className={styles.labelText}>Contraseña</label>
            <input type="password" name="password" id="password" value={password} placeholder="••••••••" className={styles.inputForm} onChange={onInputChange} required/>
            <small className={styles.smallText}>¿Olvidaste tu contraseña?</small>
            <input type="submit" 
                   value="Ingresar"  
                   className={` ${styles.btnSumbit} `}
            />
          </form>
        </div>
        <div className={styles.rightContainer}>
          <h2 className={` ${styles.subtitle} ${styles.welcomeMessage}`}>¡ Bienvenido a Gamer Sector !</h2>
        </div>
      </section>
    </>
  )

}
