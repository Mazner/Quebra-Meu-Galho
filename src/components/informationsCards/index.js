import React, { useState } from "react";
import PerfilImage from "../../images/perfil-image.png";
import { Favorite, AddCircle } from "@mui/icons-material";
import ShareIcon from '@mui/icons-material/Share';
import { ModalProject } from "../";
import img1 from '../../images/sasaki.png'
import {
IconButton,
Box,
Button,
Card,
CardMedia,
Grid,
Paper,
TextField,
Typography,
} from "@mui/material";
import { height } from "@mui/system";

export function InformationsCard () {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper elevation={5} sx={{ padding: "20px", marginBottom: "24px", alignItems:"center" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Card elevation={0}>
            <CardMedia component="img" image={img1} height="200" sx={{ maxHeight: "250px" }} />
          </Card>
        </Grid>

        <Grid item xs={10}>
          <Box sx={{ marginBottom: "16px", display:"flex", justifyContent:"space-between" }}>
            <Typography variant="h2" sx={{ fontSize: "24px" }}>TÍTULO DO SERVIÇO</Typography>
              <div>
                <IconButton>
                  <Favorite/>
                </IconButton>
              </div>
          </Box>
          <div style={{display:"flex", marginBottom:"10px" }}>
            <TextField
              disabled
              multiline
              minRows={1}
              label="Nome Anunciante"
              value="Iago Sasaki Ramos"
              sx={{ width: "30%" }}
            />
            
            <TextField
              disabled
              multiline
              minRows={1}
              label="Cidade"
              value="Campo Mourão"
              sx={{ width: "30%" }}
            />
            
            <TextField
              disabled
              multiline
              minRows={1}
              label="Contato"
              value="(18)981277027"
              sx={{ width: "30%" }}
            />
            
            <TextField
              disabled
              multiline
              minRows={1}
              label="Valor"
              value="50,00"
              sx={{ width: "10%", height:"50px" }}
            />
          </div>
          <TextField
              disabled
              multiline
              minRows={2}
              label="DESCRIÇÃO"
              value="Uma vaga muito boa"
              sx={{ width: "100%" }}
            />
          <Box sx={{ display: "flex", marginTop: "16px", justifyContent: "space-evenly", alignItems:"center" }}>
            <Button 
              variant="contained"
              onClick={handleOpen}
              color="success"
              sx={{ width: "30%", height:"50px"}}
            >
              Vizualizar Serviço
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
