import React from "react";
import { Button } from "./style";
import { Logo } from "../../images";
import { NavigationButton } from "../../components"
import { AppBar, Box, Card } from "@mui/material";
import { CADASTRO} from "../../routes/routes";


export function Header () {
  return (
    <AppBar sx={{ background:"#AA8989", height: "75px", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
      <Card sx={{ width: "20%", background: "inherit"}} elevation={1}>
        <h1>LOGO</h1>
      </Card>

      <Box sx={{ mx:"auto", display: "flex", justifyContent: "center", marginRight:"20px" }}>
        <NavigationButton to="#" style={{ textDecoration: "none" }}>
          <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <NavigationButton to={CADASTRO}>
              <Button color="success" variant="contained">Anunciar Serviço</Button>
            </NavigationButton>
          </Box>
        </NavigationButton>
      </Box>
    </AppBar>
  );
};