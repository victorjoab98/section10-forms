import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckboxInput, MySelectInput, MyTextInput } from "../components";
import "../styles/styles.css";

export const FormikAbstract= () => {

  return (
    <div>
        <h1>Formil Yup Tutorial</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit= { ( values ) => { console.log(values) }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                    lastName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                    email:  Yup.string().email('Ingrese un email valido').required('Requerido'),
                    terms:  Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones.'),
                    jobType: Yup.string().notOneOf(['it-junior'], 'Esta opcion no es permitida.').required('Requerido')
                })
            }
        >
            {
                ( formik ) => (
                    <Form>

                        <MyTextInput
                            label="First Name" 
                            name="firstName"
                            placeholder="First Name"/>

                        <MyTextInput 
                            label="Last Name" 
                            name="lastName"
                            placeholder="Last Name"/>

                        <MyTextInput 
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="Email Adress"/>


                        <MyCheckboxInput label={"Terms and Conditions"} name={"terms"}/>
                        

                        <MySelectInput label={"Job Type"} name={"jobType"}>
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelectInput>
                        
                        <button type="submit">Submit</button>
                    </Form>
                )
            }

        </Formik>
    </div>
  )
}
