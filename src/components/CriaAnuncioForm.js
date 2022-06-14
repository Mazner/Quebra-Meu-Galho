import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import {Button, Checkbox, FormGroup, FormControlLabel, FormControl, Paper, TextField} from '@mui/material';

function CriaAnuncioForm() {
    const initialValues = {
        cpf: '',
        dataNascimento: '',
        email: '',
        nome: '',
        senha: '',
        confirmarSenha: '',
        telefone: '',
        descricao:'',
        cidade:'',
        estado:'',
        nome_servico:'',
        valor:'',
        categoria:''
    }

    const validationSchema = Yup.object({
        cpf: Yup.number().required('CPF obrigatório!'),
        dataNascimento: Yup.number().required('Data de nascimento obrigatória!'),
        email: Yup.string().email('Formato de email inválido!').required('Obrigatório!'),
        nome: Yup.string().required('Nome é obrigatório'),
        descricao: Yup.string().required('descrição é obrigatório'),
        nome_servico: Yup.string().required('Nome do Serviço é obrigatório'),
        valor: Yup.number().required('Valor é Obrigatório'),
        categoria: Yup.string().required('Categoria do Servico é obrigatória'),
        cidade: Yup.string().required('Cidade é Obrigatório'),
        estado: Yup.string().required('Estado é obrigatório'),  
        telefone: Yup.number().required('Telefone é obrigatório')
    })

    const onSubmit = values => {
        console.log('Form data', values)
    }
    return <Formik initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {formik => {
            return( <form>
                <Paper  elevation={6} sx={{width: "830px", padding: "16px", marginBottom: "100px" }}>
                  <h1 style={{display:"flex",justifyContent : "center"}}>Cadastre-se</h1>
                  <div style={{display: "flex"}}>
                <FormikControl
                    control='input'
                    type='nome'
                    label="Nome"
                    name='nome'
                />
                <div style = {{marginLeft: "20px"}}></div>
                <FormControl component="fieldset">
                 <FormGroup aria-label="position" row>
                 <FormControlLabel
                 value="end"
                control={<Checkbox />}
                label="Masculino"
                labelPlacement="end"   
                />
                </FormGroup>
                </FormControl> 
                <FormControl component="fieldset">
                 <FormGroup aria-label="position" row>
                 <FormControlLabel
                 value="end"
                control={<Checkbox />}
                label="Feminino"
                labelPlacement="end"    
        />
                </FormGroup>
          </FormControl>
          <FormControl component="fieldset">
                 <FormGroup aria-label="position" row>
                 <FormControlLabel
                 value="end"
                control={<Checkbox />}
                label="Outro"
                labelPlacement="end"    
        />
         </FormGroup>
          </FormControl>
          </div>
                <FormikControl
                    label = "Data de Nascimento"
                    control='input'
                    type='dataNascimento'
                    name='dataNascimento'
                    l
                />
                 <div style={{display: "flex" }}>
                 <FormikControl
                    placeholder = "CPF"
                    label = "CPF"
                    control='input'
                    type='cpf'
                    name='cpf'
                />
                <div style = {{marginLeft: "10px"}}></div>
                 <FormikControl 
                    control='input'
                    type='telefone'
                    label='Telefone'
                    name='telefone'
                />
                </div>
                <div style={{display: "flex" }}>
                <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                />
                <div style = {{marginLeft: "10px"}}></div>
                <FormikControl
                    control='input'
                    type='estado'
                    label='Estado'
                    name='estado'
                />
                <div style = {{marginLeft: "10px"}}></div>
                <FormikControl
                    control='input'
                    type='cidade'
                    label='Cidade'
                    name='cidade'
                />
                </div>
                <div style={{display: "flex" }}>
                <FormikControl
                     
                    control='input'
                    type='nome_servico'
                    label='Nome do Seviço'
                    name='nome_servico'
                />
                <div style = {{marginLeft: "10px"}}></div>
                <FormikControl 
                    control='input'
                    type='valor'
                    label='Valor'
                    name='valor'
                />
                </div>
                 <FormikControl
                    control='input'
                    type='categoria'
                    label='Categoria'
                    name='categoria'
                />
                 <FormikControl
                    control='input'
                    type='descricao'
                    label='Descrição'
                    name='descricao'
                />
                <Button color="success" variant="contained" type='submit' disabled={!formik.isValid}>
                    Anunciar Seviço
                </Button>
                </Paper>
            </form>
            )
        }
        }
    </Formik>
}

export default CriaAnuncioForm