import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutoQuery } from '../service/api'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, favoritos, favoritar }: Props) => {
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  const { data: produto, isLoading } = useGetProdutoQuery()

  if (isLoading) <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
