import React, { useEffect } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Sobre.css';
import Navbar from '../../components/estaticos/navbar/Navbar';
import { typography } from '@material-ui/system';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useNavigate } from 'react-router-dom';

function Sobre() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixaSobre'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography className='titulo'>Sobre nós</Typography>
                        <br />
                        <Typography className='texto'> Hortykut é um projeto inovador que tem como objetivo facilitar a conexão entre agricultores 👨‍🌾, transportadores 🚚 e comerciantes 🛒 no setor agrícola. A plataforma oferece um ambiente digital onde esses três atores-chave podem interagir de maneira eficiente e benéfica para todos.
                        <br />
                        Por meio do Hortykut, os agricultores têm a oportunidade de encontrar transportadores confiáveis e eficientes para levar seus produtos até os comerciantes. Da mesma forma, os comerciantes podem encontrar agricultores que oferecem produtos de qualidade para suprir suas demandas. Além disso, os transportadores podem encontrar agricultores e comerciantes para oferecer seus serviços de transporte.
                        <br />
                        Uma característica importante do Hortykut é a possibilidade de especialização. Oferecemos:
                        <br />
                        <br />
                        🍇 Pacotes de assinatura personalizados, nos quais os usuários podem escolher áreas específicas para se especializar, como transporte refrigerado, agricultura orgânica, entre outros.
                        <br />
                        <br /> 
                        🍇 Ao se especializar, os usuários têm acesso a benefícios exclusivos, como maior visibilidade na plataforma, suporte técnico especializado e oportunidades de networking.
                        <br />
                        <br />
                        O Hortykut está revolucionando a forma como os profissionais do setor agrícola se conectam e colaboram, proporcionando eficiência, segurança e oportunidades de crescimento para todos os envolvidos. Junte-se a nós e faça parte dessa comunidade agrícola conectada!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="src/assets/imagens/Farmer-amico.png" alt="Ilustração de um fazendeiro com uma caixa de maçãs nas mãos e galinhas ao solo." style={{ width: '1000px' }} />
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;