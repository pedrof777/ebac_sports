import { configureStore } from '@reduxjs/toolkit'

import api from '../service/api'
import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,
    favoritar: favoritarReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
