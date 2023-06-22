import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './ListaProdutos.css';
import Navbar from '../estaticos/navbar/Navbar';
import Footer from '../estaticos/footer/Footer';

function ListaProdutos() {
    return (
        <>
            <Navbar />
            <Grid className='gridPlano'>
                <Box m={2}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Cursos
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Gestão de Solo Saudável
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Foto de broto de milho no solo"
                            />
                            <Typography variant="body2" component="p">
                                Descrição do Curso
                            </Typography>
                            <Typography variant="body2" component="p">
                                Plano do Curso
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to="" className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            Adquirir curso
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Cursos
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Manuseamento de maquinário agrícola
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1626029322247-bfeff961e73b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
                                alt="Foto do curso"
                            />
                            <Typography variant="body2" component="p">
                                Descrição do Curso
                            </Typography>
                            <Typography variant="body2" component="p">
                                Plano do Curso
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link to="" className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            Adquirir curso
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Cursos
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Aplicação de químicos agrícolas com segurança
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1596&q=80"
                                alt="Foto do curso"
                            />
                            <Typography variant="body2" component="p">
                                Descrição do Curso
                            </Typography>
                            <Typography variant="body2" component="p">
                                Plano do Curso
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to="" className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            Adquirir curso
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Cursos
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Gestão financeira voltada ao campo
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Foto do curso"
                            />
                            <Typography variant="body2" component="p">
                                Descrição do Curso
                            </Typography>
                            <Typography variant="body2" component="p">
                                Plano do Curso
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to="" className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            Adquirir curso
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Cursos
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Gestão e Criação de Cooperativas
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
                                alt="Foto do curso"
                            />
                            <Typography variant="body2" component="p">
                                Descrição do Curso
                            </Typography>
                            <Typography variant="body2" component="p">
                                Plano do Curso
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to="" className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            Adquirir curso
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>

                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Cursos
                            </Typography>
                            <Typography variant="h5" component="h2">
                                Marketing Digital para Cooperativas
                            </Typography>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Foto do curso"
                            />
                            <Typography variant="body2" component="p">
                                Descrição do Curso
                            </Typography>
                            <Typography variant="body2" component="p">
                                Plano do Curso
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to="" className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            Adquirir curso
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Footer />
        </>
    )
}

export default ListaProdutos;