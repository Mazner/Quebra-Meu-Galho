import react from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {
    const initialValues = {}
    const validationSchema = Yup.object({})
    const onSubmit = values => console.log('form data', values)
    return(
        <Formik initialValues = {initialValues}
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}
        >
            {formik => (
                <form>
                    <submit type='submit'>Registrar-se</submit>
                </form>
            )}

        </Formik>
    )
}  

export default FormikContainer