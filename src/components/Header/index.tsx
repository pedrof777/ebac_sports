import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { favoritar } from '../../store/reducers/favoritos'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritar.favoritos
  )

  const valorTotal = itens.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
