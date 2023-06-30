import React from "react";
import { Typography, Grid, Box } from '@material-ui/core';
import { typography } from '@material-ui/system';
import Servicos from "../servicos/Servicos";
import './Home.css';
import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalProdutos/ModalProdutos";

function Home() {
    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20}>
                        <Typography  gutterBottom color="textPrimary"  align="center" className='titulo'>Aumente seus contatos e sua formação como pequeno produtor</Typography>
                        <Typography  gutterBottom color="textPrimary"  align="center" className='titulo' >Esteja você comprando, anunciando ou alugando, podemos ajudá-lo</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="/src/assets/imagens/Country-side-cuate.png" alt="Ilustração de fazendeiro, vestido de camisa vermelha e com uma ferramenta na mão" style={{ width: '53em' }} />
                </Grid>
                <Grid xs={12} className='produtos'>
                    <ListaProdutos />
                </Grid>
                <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalProduto />
                        </Box>
                        
                    </Box>
            </Grid>

            <Servicos />



        </>
    );
}

export default Home;