import Categoria from './Categoria'

interface Produto {
    id: number;
    produto: string;
    valor: number;
    responsavel: string;
    descricao: string;
    foto: string;
    categoria?: Categoria | null
}

export default Produto;