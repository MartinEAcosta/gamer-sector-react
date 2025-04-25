import { useForm } from "../../hooks/useForm";
import global from '../styles/FormGlobal.module.css';
import styles from '../styles/FormRegister.module.css';

export const FormRegister = () => {


    const { email , name , surname , password , repeatedPassword ,onInputChange } = useForm({
        email            : '',
        name             : '',
        surname          : '',
        password         : '',
        repeatedPassword : '',
    });

    const onRegister = () => {

    }

    return (
        <>
            <form 
                onSubmit={ onRegister }
                className={ global.form }>
                <div className={ global.inputContainer }>

                    <input 
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        value={ email }
                        placeholder="example@gmail.com"
                        className={ global.inputForm }
                        onChange={ onInputChange }
                        required
                    />
                    <label 
                        htmlFor="email" 
                        className={ global.labelText }
                    >
                        Email
                    </label>
                </div>

                <div className={ global.inputContainer }>

                    <input 
                        type="text"
                        autoComplete="off"
                        name="name"
                        id="name"
                        value={ name }
                        placeholder="Martín"
                        className={ global.inputForm }
                        onChange={ onInputChange }
                        required
                    />
                    <label
                        htmlFor="name"
                        className={ global.labelText }    
                    >
                        Nombre
                    </label>
                </div>
                <div className={global.inputContainer}>
                    <input 
                        type="text"
                        autoComplete="off"
                        name="surname"
                        id="surname"
                        value={ surname }
                        placeholder="Martín"
                        className={ global.inputForm }
                        onChange={ onInputChange }
                        required
                    />
                    <label
                        htmlFor="name"
                        className={ global.labelText }    
                    >
                        Apellido
                    </label>


                </div>

            </form>
        </>
    );
}
