import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

  const  { formData, isValidEmail, onChange, resetForm } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  });

  const { name, email, password1, password2 } = formData;

  const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    console.log( formData )
  }

  return (
    <div>
        <form noValidate onSubmit={(e) => onSubmit(e)}>
            <input 
                type="name"
                name="name"
                placeholder="Name"
                value={ name }
                onChange={ onChange }
                className={`${ name.trim().length && 'has-error'}`}
            />
            { name.trim().length <= 0 && <span>El nombre es obligatorio.</span> }

            <input 
                type="email"
                name="email"
                placeholder="Email"
                value={ email }
                onChange={ onChange }
                className={ `${!isValidEmail(email) && 'has-error'}`}
            />
            { !isValidEmail(email) && <span>Email no es valido</span>}

            <input 
                type="password"
                name="password1"
                placeholder="Password"
                value={ password1 }
                onChange={ onChange }
            />
            { password1.trim().length <= 0 && <span>El password es obligatorio.</span> }
            { password1.trim().length > 0 && password1.trim().length < 5 && <span>El password debe ser mayor a 5.</span> }

            <input 
                type="password"
                name="password2"
                placeholder="Repeat Password"
                value={ password2 }
                onChange={ onChange }
            />
            { password2.trim().length <= 0 && <span>Este campo es obligatorio.</span> }
            { password2.trim().length > 0 && password1 !== password2 && <span>Las contrasenas deben ser iguales</span>}

            <button type="submit">Create</button>
            <button onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}
