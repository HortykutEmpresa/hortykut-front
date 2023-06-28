import React from "react";
import {Typography, Grid} from '@material-ui/core';
import {Box} from '@mui/material';
import TabProdutos from "../../components/tabprodutos/TabProdutos";

import Servicos from "../servicos/Servicos";

import Depoimentos from "../depoimentos/Depoimentos";
import Footer from "../../components/estaticos/footer/Footer";

import './Home.css';
import Navbar from "../../components/estaticos/navbar/Navbar";

import ListaProdutos from "../../components/listaprodutos/ListaProdutos";


function Home() {
    return (
        <>
            <Navbar />
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Aumente seus contatos e sua formação como pequeno produtor</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Esteja você comprando, anunciando ou alugando, podemos ajudá-lo</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src="/src/assets/imagens/Country-side-cuate.png" alt="Ilustração de fazendeiro, vestido de camisa vermelha e com uma ferramenta na mão" style={{width: '53em'}} />  
                </Grid>
                <Grid xs={12} className='produtos'>
                    <ListaProdutos />
                </Grid>
            </Grid>

            <Servicos />

            <Footer />

        </>
    );
}

export default Home;