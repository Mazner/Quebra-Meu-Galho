import React from "react";
import './Index.css'
import CriaAnuncioForm from "../../components/CriaAnuncioForm";
import { useFormik } from 'formik'
import { Header, Footer } from "../../components";


export function Cadastro () {

  const formik = useFormik({})

  return (
    <>
    <Header/>
    <div style={{margin:"100px", marginBottom: "100px", display:"flex",  flexDirection : "row", justifyContent :"space-around",justifyContent : "center"}}>
      <CriaAnuncioForm/>
    </div>
    <Footer/>
    </>
  )
};

export default Cadastro