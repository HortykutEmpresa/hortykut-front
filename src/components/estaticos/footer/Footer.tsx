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
            <img src="https://st3.depositphotos.com/31445094/36396/v/600/depositphotos_363967856-stock-illustration-green-leaf-ecology-nature-element.jpg" alt="imagem de uma planta generica" style={{width:"20em"}}/>
          </Box>
          <Box>
            <img src="https://st3.depositphotos.com/31445094/36396/v/600/depositphotos_363967856-stock-illustration-green-leaf-ecology-nature-element.jpg" alt="imagem de uma planta generica" style={{width:"20em"}}/>
          </Box>
          <Box>
            <img src="https://st3.depositphotos.com/31445094/36396/v/600/depositphotos_363967856-stock-illustration-green-leaf-ecology-nature-element.jpg" alt="imagem de uma planta generica" style={{width:"20em"}}/>
          </Box>
        </Grid>
        <Grid>
          <img src="https://img.freepik.com/icones-gratis/plantar_318-247366.jpg?q=10&h=200" alt="imagem de uma planta generica" />
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