import { ErrorMessage, useField } from "formik"

interface Props {
    label: string,
    name: string,
    [x: string]: any
}

export const MyCheckboxInput = ( { label, ...props} : Props ) => {

  //Field contiene todo los handlers, como el onChange, onBlur
  const [ field, meta ] = useField( props );

  return (
    <>
        <label>
          <input type="checkbox" {...field} {...props}/>
          { label }
        </label>

        <input className="text-input" type=" text" { ...field} { ...props }/>
        {/* En el meta vienen algunos metadatos del input
        {
            meta.touched && meta.error && (
                <span className="error">{ meta.error }</span>
            )
        } */}

        <ErrorMessage name={props.name} component="span"/>
    </>
  )
}
