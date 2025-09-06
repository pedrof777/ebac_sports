import Produto from '../components/Produto'
import { useGetProdutoQuery } from '../service/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produto, isLoading } = useGetProdutoQuery()

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produto?.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
