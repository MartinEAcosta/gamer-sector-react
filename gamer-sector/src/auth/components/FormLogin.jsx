import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../styles/FormLogin.module.css';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context/AuthContext';
import FacebookSVG from '../../assets/facebook-white.svg';
import GoogleSVG from '../../assets/google-color.svg';
import { useDispatch, useSelector } from 'react-redux';
import { startFacebookSignIn, startGoogleSignIn } from '../../store/auth/thunks';

export const FormLogin = () => {

  const { } = useSelector( (state) => state.auth );
  const dispatch = useDispatch();

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const { email , password ,onInputChange } = useForm({
    email : '',
    password : '',
  });

  const onGoogleSignIn = ( e ) => {
    e.preventDefault();
    
    dispatch( startGoogleSignIn() );

  }

  const onFacebookSignIn = ( e ) => {
    e.preventDefault();

    dispatch( startFacebookSignIn() );
  }

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
      <form className={styles.form} onSubmit={onLogin}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            value={email}
            placeholder="example@gmail.com"
            className={styles.inputForm}
            onChange={onInputChange}
            required
          />
          <label htmlFor="email" className={styles.labelText}>
            Email
          </label>
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="••••••••"
            className={styles.inputForm}
            onChange={onInputChange}
            required
          />
          <label htmlFor="password" className={styles.labelText}>
            Contraseña
          </label>
        </div>

        <div className={styles.containerSocialMedia}>
          <button 
            className={styles.btnGoogle} 
            onClick={ onGoogleSignIn }
          >
            <img
              src={GoogleSVG}
              alt="Google Icon"
              className={styles.socialMediaSVG}
            />
            Continuar con Google
          </button>

          <button 
            className={styles.btnFacebook}
            onClick={ onFacebookSignIn } 
          >
            <img
              src={FacebookSVG}
              alt="Facebook Icon"
              className={styles.socialMediaSVG}
            />
            Continuar con Facebook
          </button>
        </div>

        <Link to="/forgot-password">
          <small className={styles.smallText}>¿Olvidaste tu contraseña?</small>
        </Link>
        <Link to="/register">
          <small className={styles.smallText}>
            ¿No tenés cuenta? Registrate
          </small>
        </Link>

        <input
          type="submit"
          value="Ingresar"
          className={` ${styles.btnSumbit} `}
        />
      </form>
    </>
  );

}
