import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import global from '../styles/FormGlobal.module.css';
import styles from '../styles/FormRegister.module.css';
import FacebookSVG from '../../assets/facebook-white.svg';
import GoogleSVG from '../../assets/google-color.svg';
import { useAuthStore } from "../../hooks/useAuthStore";

export const FormRegister = () => {

  const { status , startRegister } = useAuthStore();

  const { email , firstname , lastname , password , onInputChange } = useForm({
      email            : '',
      firstname        : '',
      lastname         : '',
      password         : '',
  });

  const onRegister = (e) => {
    e.preventDefault();
    startRegister({ email, firstname, lastname, password });
  }

    return (
      <>
        <form onSubmit={onRegister} className={global.form}>
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

          <div
            className={`${global.inputContainer} ${styles.fullNameContainer}`}
          >
            <div className={global.inputContainer}>
              <input
                type="text"
                autoComplete="off"
                name="firstname"
                id="firstname"
                value={firstname}
                placeholder="Charles"
                className={global.inputForm}
                onChange={onInputChange}
                required
              />
              <label htmlFor="firstname" className={global.labelText}>
                Nombre
              </label>
            </div>
            <div className={global.inputContainer}>
              <input
                type="text"
                autoComplete="off"
                name="lastname"
                id="lastname"
                value={lastname}
                placeholder="Darwin"
                className={global.inputForm}
                onChange={onInputChange}
                required
              />
              <label htmlFor="lastname" className={global.labelText}>
                Apellido
              </label>
            </div>
          </div>
          <div className={global.inputContainer}>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              value={password}
              placeholder="@contraseñainteligente_"
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
              Registrarse con Google
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
              Registrarse con Facebook
            </button>
          </div>
          <Link to="/auth/login">
            <small className={global.smallText}>
              ¿Ya tienes tu cuenta? Ingresa pulsando aquí.
            </small>
          </Link>

          <input
            type="submit"
            value="Registrarse"
            className={` ${global.btnSumbit} `}
          />
        </form>
      </>
    );
}
