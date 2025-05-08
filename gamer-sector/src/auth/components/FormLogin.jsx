import { Link, useNavigate } from 'react-router-dom';
import global from '../styles/FormGlobal.module.css';
import { useForm } from '../../hooks/useForm';
import FacebookSVG from '../../assets/facebook-white.svg';
import GoogleSVG from '../../assets/google-color.svg';
// import { useDispatch, useSelector } from 'react-redux';

export const FormLogin = () => {

  // const { } = useSelector( (state) => state.auth );
  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email , password ,onInputChange } = useForm({
    email : '',
    password : '',
  });

  // const onGoogleSignIn = ( e ) => {
  //   e.preventDefault();
    
  //   dispatch( startGoogleSignIn() );

  // }

  // const onFacebookSignIn = ( e ) => {
  //   e.preventDefault();

  //   dispatch( startFacebookSignIn() );
  // }

  const onLogin = ( e ) => {
    e.preventDefault();
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    console.log(email, password);


    navigate( lastPath , {
      replace: true
    });
  }

  return (
    <>
      <form 
        className={ global.form } 
        onSubmit={ onLogin }>
        <div className={global.inputContainer}>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            value={email}
            placeholder="example@gmail.com"
            className={global.inputForm}
            onChange={onInputChange}
            required
          />
          <label htmlFor="email" className={global.labelText}>
            Email
          </label>
        </div>

        <div className={global.inputContainer}>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="••••••••"
            className={global.inputForm}
            onChange={onInputChange}
            required
          />
          <label htmlFor="password" className={global.labelText}>
            Contraseña
          </label>
        </div>

        <div className={global.containerSocialMedia}>
          <button 
            className={global.btnGoogle} 
            // onClick={ onGoogleSignIn }
          >
            <img
              src={GoogleSVG}
              alt="Google Icon"
              className={global.socialMediaSVG}
            />
            Continuar con Google
          </button>

          <button 
            className={global.btnFacebook}
            // onClick={ onFacebookSignIn } 
          >
            <img
              src={FacebookSVG}
              alt="Facebook Icon"
              className={global.socialMediaSVG}
            />
            Continuar con Facebook
          </button>
        </div>

        <Link to="/auth/forgot-password">
          <small className={global.smallText}>¿Olvidaste tu contraseña?</small>
        </Link>
        <Link to="/auth/register">
          <small className={global.smallText}>
            ¿No tenés cuenta? Registrate
          </small>
        </Link>

        <input
          type="submit"
          value="Ingresar"
          className={` ${global.btnSumbit} `}
        />
      </form>
    </>
  );

}
