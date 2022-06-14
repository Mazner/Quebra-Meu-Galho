import React from "react";
import { Header, Footer, NavigationButton } from "../../components";
import {Button, Container, Typography, Grid} from "@mui/material";
import { BUSCARSERVICO } from "../../routes/routes";

export function Home () {
  return (
    <>
    <div style={{margin:"100px"}}>
      <Header/>
      <Grid direction="row" justifyContent="flex-start" alignItems="stretch" container spacing={1} columns={2}>
        <Grid item xs={8}>
          <div style={{width:"80%", height:"400%", position:"relative", float:"left"}}>
              <Typography
                variant="h1"
                  sx={{ fontSize: "48px", textAlign:"right", width:"50%", height:"7vw"}}>
                    Quebra Meu Galho
              </Typography>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Container fixed>
            <div style={{ textAlign: "left", width:"50%", position:"relative", float:"right"}}>
              <Typography
                variant="h2"
                  sx={{ fontSize: "20px", position:"relative" }}>
Aplicação web que recomenda, e exibe serviços informais, tais como, cozinheiros
locais, confeiteiros locais e construção beleza, a fim de influenciar a economia local,
mostrando a avaliação da pessoa, tal como sua localização e proximidade com o
cliente que vai requisitar o serviço.
<br/>
Mostrar os serviços disponíveis, registrar pessoas as pessoas que vão oferecer
esses serviços, mostrar a localização e a avaliação das mesmas. Mostrar o preço do
serviço oferecido, se possível. Facilitar o contato entre usuário e serviço.              </Typography>
              <div style={{ textAlign: "center"}}>
                <NavigationButton to={BUSCARSERVICO}>
                  <Button color="success" variant="contained">Anunciar Serviço</Button>
                </NavigationButton>
              </div> 
            </div>   
          </Container>
        </Grid>
      </Grid>    
    </div>
    <div style={{marginBottom:"0px"}}>
      <Footer/>
    </div>
    </>
  );
};