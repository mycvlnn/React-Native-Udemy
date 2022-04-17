import { useContext } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from './../store/redux/store'
import { FavoriteContext } from '../store/context/FavoriteContext'

const useStore = () => {
  const { addFavoriteHandler, ids, removeFavoriteHandler, toggleFavorite } =
    useContext(FavoriteContext)
  return { addFavoriteHandler, ids, removeFavoriteHandler, toggleFavorite }
}
export default useStore

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// https://redux-toolkit.js.org/tutorials/typescript#define-typed-hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
