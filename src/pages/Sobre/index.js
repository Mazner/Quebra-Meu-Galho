import React from "react";
import { Header, Footer, Perfil } from "../../components";
import {Container, Typography, Grid, CardActionArea, Card, CardMedia, CardContent} from "@mui/material";
import img1 from '../../images/sasaki.png'
import img2 from '../../images/mazner.png'
import img3 from '../../images/gui.png'

export function Sobre () {
  return(
    <>
    <div style={{ margin:"100px"}}>
      <Header/>
      <h1 style={{textAlign:"center", fontSize:"60px"}}>Quem Somos?</h1>
      <Grid direction="row" justifyContent="flex-start" alignItems="stretch" container spacing={1} columns={2}>
        <Grid item xs={8}>
          <div style={{width:"80%", height:"400%", position:"relative", float:"left"}}>
          </div>
        </Grid>
        <Grid item xs={10}>
          <Container fixed>
            <div style={{ textAlign: "left", width:"50%", position:"relative", float:"right"}}>
            </div>   
          </Container>

    <div style={{display: "flex", justifyContent : "center", flexDirection : "row", justifyContent :"space-around" }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img2}
          alt="Marcos Bezner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Marcos Bezner
          </Typography>
          <Typography variant="body2" color="text.secondary">
          21 anos, 4° período do curso de Ciência da Computação, da UTFPR.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img1}
          alt="Iago Sasaki"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Iago Sasaki
          </Typography>
          <Typography variant="body2" color="text.secondary">
            21 anos, 4° período do curso de Ciência da Computação, da UTFPR. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img3}
          alt="Guilherme Fernandes"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Guilherme Fernandes
          </Typography>
          <Typography variant="body2" color="text.secondary">
          21 anos, 4° período do curso de Ciência da Computação, da UTFPR.<br/><br/><br/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </Grid>
      </Grid>
      <Footer style={{}} />   
    </div>
    
    </>
  );
};
