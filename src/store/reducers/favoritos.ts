import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritoState = {
  favoritos: Produto[]
}

const initialState: favoritoState = {
  favoritos: []
}

const favoritoSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload
      const jaFavoritado = state.favoritos.find((p) => p.id === item.id)

      if (jaFavoritado) {
        state.favoritos = state.favoritos.filter((p) => p.id !== item.id)
      } else {
        state.favoritos.push(item)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer

// function favoritar(produto: Produto) {
//     if (favoritos.find((p) => p.id === produto.id)) {
//       const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//       setFavoritos(favoritosSemProduto)
//     } else {
//       setFavoritos([...favoritos, produto])
//     }
//   }
