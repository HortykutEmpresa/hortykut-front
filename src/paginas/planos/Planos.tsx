import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Planos.css'

function Planos() {
    return (
        <>

            <Box mx={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/imagens/fazenda.png"
                    />
                </Card>
            </Box>

            <Box mx={2}>
                <Typography variant="h6">
                    Planos de Assinatura
                </Typography>
            </Box>
            <Box m={2} display="flex">
                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/imagens/fazenda.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PLANO SEMENTE
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            1 produto ou serviço
                            por R$ 49,90/mês
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Button variant="contained" size='small' color="primary" >
                                Adquirir
                            </Button>
                        </Box>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/imagens/fazenda.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PLANO FRUTO
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            2 produtos ou serviços
                            por R$ 99,90/mês
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Button variant="contained" size='small' color="primary" >
                                Adquirir
                            </Button>
                        </Box>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345 }} variant="outlined">
                    <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/imagens/fazenda.png"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            PLANO ARVORE
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            3 produtos ou serviços
                            por R$ 149,90/mês
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="center" mb={1.5}>
                            <Button variant="contained" size='small' color="primary" >
                                Adquirir
                            </Button>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            <Box mx={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="src/assets/imagens/fazenda.png"
                    />
                </Card>
            </Box>

        </>
    );
}

export default Planos;