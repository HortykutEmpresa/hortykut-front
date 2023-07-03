import react from 'react'
import { Typography } from '@material-ui/core'
import { Container, Box } from '@mui/material'
import './Depoimentos.css'
import CardMedia from '@mui/material/CardMedia';

function Depoimentos() {

    return (
        <>
            <Container>
                <Box>
                    <Typography variant="h1" component="h2">
                        Depoimentos
                    </Typography>
                    <CardMedia
                        component="img"
                        height="100"
                        image="/src/assets/imagens/Farmer-amico.png"
                        alt="Foto do curso"
                    />
                </Box>
                <Box>
                    <Typography>
                        "Desde que concluí o curso de agricultura, minha vida profissional e pessoal mudou significativamente. O curso me proporcionou uma base sólida de conhecimento e habilidades que me ajudaram a ser mais eficiente e eficaz em minha carreira como agricultor.
                        O curso de agricultura foi uma experiência única que me ajudou a entender melhor a ciência por trás da agricultura. Eu aprendi sobre os diferentes tipos de solos, as condições climáticas ideais para o cultivo de diferentes plantas, as técnicas de irrigação e fertilização, bem como a importância da preservação do solo e da água."
                    </Typography>
                    <Typography>
                        José da Silva
                    </Typography>
                    <CardMedia
                        component="img"
                        height="100"
                        image="/src/assets/imagens/Farmer-amico.png"
                        alt="Foto do curso"
                    />
                </Box>
                <Box>
                    <Typography>
                        "Eu recentemente participei de um curso de agricultura na plataforma Hortykut, que me ajudou muito a melhorar minha plantação. Gostaria de agradecer a todos os envolvidos na organização do curso por me proporcionar essa oportunidade."
                    </Typography>
                    <Typography>
                        Maria Aparecida de Sousa
                    </Typography>
                    <CardMedia
                        component="img"
                        height="100"
                        image="/src/assets/imagens/Farmer-amico.png"
                        alt="Foto do curso"
                    />
                </Box>
                <Box>
                    <CardMedia
                        component="img"
                        height="100"
                        image="/src/assets/imagens/Farmer-amico.png"
                        alt="Foto do curso"
                    />
                </Box>
            </Container>
        </>

    )
}

export default Depoimentos;