import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function CriaAnuncioForm() {
    const initialValues = {
        cpf: '',
        dataNascimento: '',
        email: '',
        nome: '',
        senha: '',
        confirmarSenha: '',
        telefone: ''
    }

    const validationSchema = Yup.object({
        cpf: Yup.string().required('CPF obrigatório!'),
        dataNascimento: Yup.string().required('Data de nascimento obrigatória!'),
        email: Yup.string().email('formato de email inválido!').required('Obrigatório!'),
        nome: Yup.string().required('Nome é obrigatório'),
        senha: Yup.string().required('Obrigatorio'),
        confirmarSenha: Yup.string()
                    .oneOf([Yup.ref('senha'), ''],
                     'senhas devem ser iguais!')
                    .required('Obrigatório'),   
        telefone: Yup.string().required('Telefone é obrigatório')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }
    return <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {formik => {
            return( <form>
                <FormikControl
                    control='input'
                    type='cpf'
                    label='CPF'
                    name='cpf'
                />
                <FormikControl
                    control='input'
                    type='dataNascimento'
                    label='Data de nascimento'
                    name='dataNascimento'
                />
                <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                />
                <FormikControl
                    control='input'
                    type='nome'
                    label='Nome'
                    name='nome'
                />
                <FormikControl
                    control='input'
                    type='senha'
                    label='Sua senha'
                    name='senha'
                />
                <FormikControl
                    control='input'
                    type='confirmarSenha'
                    label='Confirme sua senha'
                    name='confirmarSenha'
                />
                <FormikControl
                    control='input'
                    type='telefone'
                    label='Telefone'
                    name='telefone'
                />
                <button type='submit' disabled={!formik.isValid}>
                    Registrar-se
                </button>
            </form>
            )
        }
        }
    </Formik>
}

export default CriaAnuncioForm