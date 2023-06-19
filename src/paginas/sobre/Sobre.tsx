
import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Sobre.css';


function Sobre() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Sobre nós!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto'>Hortykut é um projeto inovador que visa facilitar a conexão entre agricultores, transportadores e comerciantes no setor agrícola. A plataforma oferece um ambiente digital onde esses três atores-chave podem interagir de maneira eficiente e benéfica para todos.
Por meio do Hortykut, os agricultores têm a oportunidade de encontrar transportadores confiáveis e eficientes para levar seus produtos até os comerciantes. Da mesma forma, os comerciantes podem encontrar agricultores que oferecem produtos de qualidade para suprir suas demandas. Além disso, os transportadores podem encontrar agricultores e comerciantes para oferecer seus serviços de transporte.
Uma característica importante do Hortykut é a possibilidade de especialização. Oferecemos pacotes de assinatura personalizados, nos quais os usuários podem escolher áreas específicas para se especializar, como transporte refrigerado, agricultura orgânica, entre outros. Ao se especializar, os usuários têm acesso a benefícios exclusivos, como maior visibilidade na plataforma, suporte técnico especializado e oportunidades de networking.
O Hortykut está revolucionando a forma como os profissionais do setor agrícola se conectam e colaboram, proporcionando eficiência, segurança e oportunidades de crescimento para todos os envolvidos. Junte-se a nós e faça parte dessa comunidade agrícola conectada!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <img src="https://img.freepik.com/vetores-gratis/agricultores-segurando-produtos-diferentes_23-2148525754.jpg" alt="" width="500px" height="500px"/>  
                </Grid>
                
            </Grid>
        </>
    );
}

export default Sobre;