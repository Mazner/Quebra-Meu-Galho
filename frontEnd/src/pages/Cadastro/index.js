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
    <div style={{display: "flex", justifyContent : "center", flexDirection : "row", justifyContent :"space-around" }}>
      <CriaAnuncioForm/>
    </div>
    <Footer/>
    </>
  )
};

export default Cadastro