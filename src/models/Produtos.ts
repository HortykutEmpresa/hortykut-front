import Categoria from './Categoria'

interface Produto {
    id: number;
    produto: string;
    valor: number;
    responsavel: string;
    texto: string;
    categoria?: Categoria | null
}

export default Produto;