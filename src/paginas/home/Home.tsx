import React, { useEffect } from "react";
import { Typography, Grid, Box } from '@material-ui/core';
import { typography } from '@material-ui/system';
import Servicos from "../servicos/Servicos";
import './Home.css';
import ListaProdutos from "../../components/produtos/listaprodutos/ListaProdutos";
import ModalProduto from "../../components/produtos/modalProdutos/ModalProdutos";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])
    return (
        <>

            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={22} className="caixaTexto">
                        <Typography  gutterBottom color="textPrimary"  align="center" className='titulo'>Aumente seus contatos e sua formação como pequeno produtor</Typography>
                        <Typography  gutterBottom color="textPrimary"  align="center" className='titulo2' >Quando você compra ou anuncia o seu produto, podemos te ajudar</Typography>
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