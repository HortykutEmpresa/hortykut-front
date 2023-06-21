import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import './ListaProdutos.css';

function ListaProdutos() {

    return (
        <>
            <Box m={2} >
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Cursos
                        </Typography>
                        <Typography variant="h5" component="h2">
                        Gestão de Solo Saudavel
                        </Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descricao do Curso
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
                        Manuseamento de maquinario agricola
                        </Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descricao do Curso
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
                        Aplicação de quimicos agricolas com segurança
                        </Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descricao do Curso
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
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descricao do Curso
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
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descricao do Curso
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
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descricao do Curso
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
        </>)
}

export default ListaProdutos;