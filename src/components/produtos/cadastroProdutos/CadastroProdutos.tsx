import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProdutos.css';
import { useNavigate, useParams } from 'react-router-dom'
import { busca, buscaId, post, put } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import Categoria from '../../../models/Categoria';
import Produtos from '../../../models/Produtos';

function CadastroProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            descricao: ''
        })
    const [produto, setProduto] = useState<Produtos>({
        id: 0,
        produto: '',
        valor: 0,
        responsavel: '',
        texto: '',
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProdutos(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProdutos(id: string) {
        await buscaId(`/produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto atualizado com sucesso');
        } else {
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/produto')
    }

    return (
        <>
            <Container maxWidth="sm" className="topo">
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro postagem</Typography>
                    <TextField value={produto.produto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="produto" label="produto" variant="outlined" name="produto" margin="normal" fullWidth />
                    <TextField value={produto.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="valor" label="valor" variant="outlined" name="valor" margin="normal" fullWidth />
                    <TextField value={produto.responsavel} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="responsavel" label="responsavel" variant="outlined" name="responsavel" margin="normal" fullWidth />
                    <TextField value={produto.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="texto" label="texto" name="texto" variant="outlined" margin="normal" fullWidth />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>
                            {
                                categorias.map(categoria => (
                                    <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Escolha um tema para o produto</FormHelperText>
                        <Button type="submit" variant="contained" color="primary">
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </>
    );
}

export default CadastroProdutos;