import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import {Link} from "react-router-dom";

export function Footer () {
  return (
    <div style={{backgroundColor:"#747A2A", display:"flex", textAlign:"center", borderTop:"1px solid #333", bottom : "0", height : "130px",position: "fixed", left: "0", width:"100%"}}>
      <ul style={{listStyleType:"none", width:"30%" }}>
        <h2 style={{}}>Quebra Meu Galho</h2>
        <Link to="/home"><li style={{color:"black", textDecoration:"inherit"}}>Página Inicial</li></Link>
        <Link to="/sobre"><li style={{color:"black", textDecoration:"inherit"}}>Quem Somos?</li></Link>
        <Link to="/sobre"><li style={{color:"black", textDecoration:"inherit"}}>Sobre</li></Link>
      </ul>
      <ul style={{listStyleType:"none", width:"30%" }}>
        <h2>Serviços</h2>
        <Link to="/buscarservico"><li style={{color:"black", textDecoration:"inherit"}}>Buscar Serviço</li></Link>
        <Link to="/cadastro"><li style={{color:"black", textDecoration:"inherit"}}>Anunciar Serviço</li></Link>
      </ul>
      <ul style={{listStyleType:"none", width:"30%" }}>
        <h2 style={{}}>Social Media</h2>
        <Link to="/"><li style={{color:"black", textDecoration:"inherit"}}><InstagramIcon/>Instagram</li></Link>
        <Link to="/"><li style={{color:"black", textDecoration:"inherit"}}><FacebookIcon/>Facebook</li></Link>
        <Link to="/"><li style={{color:"black", textDecoration:"inherit"}}><WhatsAppIcon/>WhatsApp</li></Link>
      </ul>
    </div>
  );
};