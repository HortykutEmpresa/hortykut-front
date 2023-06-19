import React from "react";
import './Navbar.css'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="static" style={{background: "#9ef5cf"}}>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" style={{color: "#2a2a2a"}}>
                            Hortykut 
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                Venda
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                Compra
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                transporte
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                cursos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                planos
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                Sobre nós
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                suporte
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                Faça Parte
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" style={{color: "#2a2a2a"}}>
                                    logout
                                </Typography>
                            </Box>
                            
                        </Link>
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
