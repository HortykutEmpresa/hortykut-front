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
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{backgroundColor:"antiquewhite"}}>
        <Grid container justifyContent="space-between">
          <Box>
            <img src="https://img.freepik.com/fotos-gratis/agricultor-agronomo-senior-trabalhador-no-campo-de-soja-verificando-as-colheitas-antes-da-colheita_342744-1260.jpg?w=740&t=st=1687223072~exp=1687223672~hmac=89073e06e77cf534ca9dd3784ec8fb8b7a9509e88aa610d76bbfa62e83238b88" alt="Foto de um senhor colhendo verduras em sua plantação" className='imgFooter'/>
          </Box>
          <Box>
            <img src="https://img.freepik.com/fotos-gratis/mulher-asiatica-feliz-escreva-notas-nos-campos-de-arroz_1150-28326.jpg?w=740&t=st=1687223116~exp=1687223716~hmac=eb0cecd93141fe7eb8acf4454a73427670333dbb1b613ea6b94a848b33b4f1f8" alt="Foto de uma mulher em sua plantação" className='imgFooter'/>
          </Box>
          <Box>
            <img src="https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1191&q=80" alt="Homem usando chapéu" className='imgFooter'/>
          </Box>
        </Grid>
        <Grid className='grid'>
          <img src="https://www.svgrepo.com/show/475188/corn.svg" alt="Ilustração de um milho" className='footer2' />
          <img src="https://www.svgrepo.com/show/475232/tomato.svg" alt="Ilustração de um tomate" />
          <img src="https://www.svgrepo.com/show/475178/beet.svg" alt="Ilustração de uma beterraba"  />
        <Typography style={{fontSize: "3em"}}> Entre em contato conosco</Typography>
        </Grid>
        <Grid alignItems="center" item xs={12}>
          <Box paddingTop={1} display={"flex"} alignItems={"center"}justifyContent={"center"} className='caixaFooter'>
            <Typography variant="h5"align="center"gutterBottom style={{ color: "white" }}>
              Siga-nos nas redes sociais:
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <a href="https://linktr.ee/hortykut"target="_blank">
                <FacebookIcon style={{ fontSize: 60, color: "white"}} />
              </a>
              <a href="https://linktr.ee/hortykut"target="_blank">
                <InstagramIcon style={{ fontSize: 60, color: "white"}} />
              </a>
              <a href="https://linktr.ee/hortykut"target="_blank">
                <LinkedInIcon style={{ fontSize: 60, color: "white"}} />
              </a>
              <a href="https://linktr.ee/hortykut"target="_blank">
                <GitHubIcon style={{ fontSize: 60, color: "white"}} />
              </a>
              <a href="https://linktr.ee/hortykut"target="_blank">
                <WhatsAppIcon style={{ fontSize: 60, color: "white"}} />
              </a>
            </Box>
          </Box>
          <Box style={{ backgroundColor: "#ebcb8b", height: "60px" }}>
            <Box paddingTop={1}>
              <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "black" }}>
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