import { useContext } from 'react'
import { FavoriteContext } from '../store/context/FavoriteContext'

const useStore = () => {
  const { addFavoriteHandler, ids, removeFavoriteHandler, toggleFavorite } =
    useContext(FavoriteContext)
  return { addFavoriteHandler, ids, removeFavoriteHandler, toggleFavorite }
}
export default useStore
