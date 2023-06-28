import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid, AppBar, Tabs, Tab } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import Produtos from '../../../models/Produtos';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([])
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    async function getProdutos() {
        await busca("/produto", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProdutos()

    }, [produtos.length])
    return (
        <>
            <AppBar position="static" style={{ background: "#ffa200" }}>
                <Tabs centered indicatorColor="secondary">
                    <Tab label="Lista de todos os cursos" value="1" />
                </Tabs>
            </AppBar>
            {
                produtos.map(produto => (
                    <Grid className='gridPlano'>
                        <Box m={2}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Produtos
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {produto.produto}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.valor}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.responsavel}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.texto}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.categoria?.descricao}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>
                                        <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    Atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    Deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))
            }
        </>
    )
}

export default ListaProdutos;