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
                            Gestão de Solo Saudável
                        </Typography>
                        <CardMedia
                            component="img"
                            height="200"
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" component="p">
                            Você já parou para pensar na importância do solo para a nossa vida?
                            É ele que nos fornece os alimentos que consumimos diariamente e é fundamental para
                            a manutenção da biodiversidade e do equilíbrio ambiental. Por isso, é essencial que
                            cuidemos dele de forma adequada, adotando práticas de gestão de solos saudável.
                            Mas o que é gestão de solos saudável? Basicamente, é garantir uma produção agrícola
                            sustentável e de qualidade? Pois é, e para te ajudar nessa tarefa, acaba de ser lançado um curso que
                            vai revolucionar a forma como você encara a agricultura.
                            O curso de gestão de solos saudáveis é um guia completo para quem quer aprender a cuidar do solo de
                            forma consciente e eficiente. Com dicas práticas e informações precisas.
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
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" component="p">
                            A gestão de solos saudáveis é fundamental para garantir o sucesso na produção
                            agrícola e, por isso, é importante ter um bom conhecimento sobre o manuseamento de maquinário agrícola.
                            O curso de manuseamento de maquinário agrícola é uma ferramenta essencial para os agricultores que
                            desejam melhorar a qualidade dos seus solos. Com ele, é possível aprender sobre as melhores práticas
                            de manuseamento
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
                            image="/src/assets/imagens/casacampo.png"
                            alt="Foto do curso"
                        />
                        <Typography variant="body2" component="p">
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" component="p">
                            A aplicação de químicos agrícolas é uma prática comum na agricultura moderna.
                            No entanto, é importante lembrar que esses produtos químicos podem ser perigosos
                            se não forem manuseados com segurança. Para garantir a segurança dos trabalhadores
                            e do meio ambiente, é essencial seguir as boas práticas de gestão de solos saudáveis.
                            O curso "Aplicação de Químicos Agrícolas com Segurança" é uma excelente fonte de informações
                            sobre como aplicar produtos químicos agrícolas de maneira segura e eficaz.
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
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" component="p">
                            O curso gestão financeira voltada ao campo é de extrema importância para aqueles
                            que trabalham com a produção agrícola. Afinal, é fundamental que os produtores rurais tenham uma
                            visão clara e estratégica sobre
                            seus investimentos e despesas, para que possam garantir uma gestão de solos saudável e sustentável.
                            Nesse sentido, o curso sobre gestão financeira voltada ao campo tem se mostrado cada vez mais
                            relevante. Oferecendo aos produtores rurais informações valiosas sobre como gerir suas finanças de forma eficiente e eficaz.
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
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" component="p">
                            A gestão e criação de cooperativas é um tema de extrema importância para aqueles que desejam empreender
                            de forma coletiva e sustentável. Para isso, é necessário ter conhecimento
                            sobre as particularidades desse modelo de negócio, bem como sobre as práticas de gestão que podem ser
                            aplicadas para garantir o sucesso da cooperativa.
                            Nesse sentido, o Curso “Gestão e criação de cooperativas” é uma excelente fonte de informação para
                            aqueles que desejam se aprofundar nesse assunto. O curso apresenta uma visão ampla sobre o universo das cooperativas.
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
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" component="p">
                            O mundo está cada vez mais conectado e as cooperativas precisam acompanhar essa tendência para se
                            manterem competitivas. O Marketing Digital é uma das ferramentas mais eficazes para alcançar novos
                            públicos e aumentar a visibilidade da sua cooperativa.
                            Neste Curso, vamos explorar como o Marketing Digital pode ser aplicado em cooperativas e quais são
                            as melhores práticas para se destacar em um mundo online.
                            O que é Marketing Digital para Cooperativas?
                            O Marketing Digital é um conjunto de estratégias e técnicas que visam promover produtos e serviços em
                            plataformas digitais.
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