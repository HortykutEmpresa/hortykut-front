import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Footer.css";
import { Box, Grid, Typography } from "@material-ui/core";

function Footer() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{backgroundColor:"9ef5cf" }}>
        <Grid container justifyContent="space-between" >
          <Box>
            <img src="https://img.freepik.com/fotos-gratis/agricultor-agronomo-senior-trabalhador-no-campo-de-soja-verificando-as-colheitas-antes-da-colheita_342744-1260.jpg?w=740&t=st=1687223072~exp=1687223672~hmac=89073e06e77cf534ca9dd3784ec8fb8b7a9509e88aa610d76bbfa62e83238b88" alt="Foto de um senhor colhendo verduras em sua plantação" style={{width:"20em"}}/>
          </Box>
          <Box>
            <img src="https://img.freepik.com/fotos-gratis/mulher-asiatica-feliz-escreva-notas-nos-campos-de-arroz_1150-28326.jpg?w=740&t=st=1687223116~exp=1687223716~hmac=eb0cecd93141fe7eb8acf4454a73427670333dbb1b613ea6b94a848b33b4f1f8" alt="Foto de uma mulher em sua plantação" style={{width:"20em"}}/>
          </Box>
          <Box>
            <img src="https://img.freepik.com/fotos-gratis/caixa-de-madeira-cheia-de-vegetais-frescos_329181-8749.jpg?w=740&t=st=1687223180~exp=1687223780~hmac=17f44efc1440903bea4a83df6db2578f28dd7031e1ee62e57632f561f93c94c8" alt="Caixa de madeira cheia de vegetais frescos" style={{width:"20em"}}/>
          </Box>
        </Grid>
        <Grid>
          <img src="src/assets/imagens/fazendeira.png" alt="imagem de uma planta generica" />
        <Typography style={{fontSize: "3em"}}> Entre em contato conosco</Typography>
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box paddingTop={1} display={"flex"} alignItems={"center"}justifyContent={"center"} style={{backgroundColor:"#9ef5cf"}}>
            <Typography variant="h5"align="center"gutterBottom style={{ color: "2a2a2a" }}>
              Siga-nos nas redes sociais{" "}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://www.facebook.com/generationbrasil"target="_blank">
                <FacebookIcon style={{ fontSize: 60, color: "#2a2a2a" }} />
              </a>
              <a href="https://www.instagram.com/generationbrasil/"target="_blank">
                <InstagramIcon style={{ fontSize: 60, color: "#2a2a2a" }} />
              </a>
              <a href="https://www.linkedin.com/school/generationbrasil/"target="_blank">
                <LinkedInIcon style={{ fontSize: 60, color: "#2a2a2a" }} />
              </a>
              <a href="https://www.linkedin.com/school/generationbrasil/"target="_blank">
                <GitHubIcon style={{ fontSize: 60, color: "2a2a2a" }} />
              </a>
              <a href="https://www.linkedin.com/school/generationbrasil/"target="_blank">
                <WhatsAppIcon style={{ fontSize: 60, color: "2a2a2a" }} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#9ef5cf", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "2a2a2a" }}>
                © 2023 Copyright:
              </Typography>
            </Box>
            <Box>
              <a target="_blank" href="https://brasil.generation.org">
                <Typography variant="subtitle2"gutterBottom style={{ color: "2a2a2a" }} align="center">
                  Grupo 4 
                </Typography>
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default Footer;