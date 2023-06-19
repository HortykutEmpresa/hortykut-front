import React from "react";
import {Typography, Grid} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Aumente seus contatos e sua formação como pequeno produtor</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Esteja você comprando, anunciando ou alugando, podemos ajudá-lo</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src="/src/assets/imagens/agricultor.avif" alt="" width="500px" height="500px"/>  
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;