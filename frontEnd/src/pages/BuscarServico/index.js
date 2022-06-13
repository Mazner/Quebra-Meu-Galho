import React from "react";
import { Header, Footer, Filter } from "../../components";
import { useFormik } from "formik";
import { NavigationButton, InformationsCard } from "../../components"
import { Favorite, Logout, Search } from "@mui/icons-material";
import {
  // AppBar,
  Box,
  // Card,
  CardMedia,
  IconButton,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
  Card
} from "@mui/material";
import { textAlign } from "@mui/system";


export function BuscarServico () {
  return (
    <>
    {/* <div style={{margin:"100px"}} >
      <Header/>
    </div>
    <div style={{display: "flex", justifyContent : "center", flexDirection : "row", justifyContent :"space-around" }}>
      <Box sx={{ background: "#C4C4C4", borderRadius: "4px", display: "flex", alignItems: "center", padding: "4px 10px"}}>
        <form 
          // onSubmit={formik.handleSubmit}
          style={{width: "100%", display: "flex", alignItems: "center", height:"1.5vw" }}>
          <TextField
            name="searchField"
            size="small"
            variant="standard"
            placeholder="Pesquisar"
            sx={{ width: "calc(100% - 40px)", marginTop: "5px" }}
            // onChange={formik.handleChange}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <IconButton type="submit">
            <Search />
          </IconButton>
        </form>
      </Box>
    </div>
    <Grid container sx={{ marginTop: "80px" }}>
      <Grid item xs={2}>
        <Filter />
      </Grid>
    </Grid> */}
    <Header/>
    <Grid container sx={{marginTop: "80px"}}>
      <Grid item xs={2}>
        <Filter/>
      </Grid>

    <Grid item xs={8}>
      <div style={{textAlign:"center", margin:"16px"}}>
        <Typography
          variant="h1"
          sx={{ fontSize:"36px"}}
        >
          Serviços
        </Typography>
      </div>
      <div style={{display: "flex", justifyContent : "center", flexDirection : "row", justifyContent :"space-around" }}>
      <Box sx={{ background: "#C4C4C4", borderRadius: "4px", display: "flex", alignItems: "center", padding: "4px 10px"}}>
        <form 
          // onSubmit={formik.handleSubmit}
          style={{width: "100%", display: "flex", alignItems: "center", height:"1.5vw" }}>
          <TextField
            name="searchField"
            size="small"
            variant="standard"
            placeholder="Pesquisar"
            sx={{ width: "calc(100% - 40px)", marginTop: "5px" }}
            // onChange={formik.handleChange}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <IconButton type="submit">
            <Search />
          </IconButton>
        </form>
      </Box>
    </div>
    <div style={{width:"100%", display:"flex", marginTop:"2vw"}}>
      <InformationsCard/>
    </div>
    </Grid>
    </Grid>
    <Footer/>
    </>
  );
};