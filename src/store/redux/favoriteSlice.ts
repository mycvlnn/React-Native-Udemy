//https://redux-toolkit.js.org/tutorials/typescript#define-slice-state-and-action-types
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IFavorite {
  ids: string[]
  addFavoriteHandler?: (id: string) => void
  removeFavoriteHandler?: (id: string) => void
  toggleFavorite?: (id: string) => void
}

// Define the initial state using that type
const initialState: IFavorite = {
  ids: []
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteHandler: (state, action: PayloadAction<string>) => {
      const idFavorite = action.payload
      state.ids.push(idFavorite)
    },
    removeFavoriteHandler: (state, action: PayloadAction<string>) => {
      const idFavorite = action.payload
      const index = state.ids.indexOf(idFavorite)
      state.ids.splice(index, 1)
    }
  }
})

export const { addFavoriteHandler, removeFavoriteHandler } =
  favoriteSlice.actions

export default favoriteSlice.reducer
