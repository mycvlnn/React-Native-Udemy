import { createContext, useState } from 'react'

interface IFavorite {
  ids: string[]
  addFavoriteHandler: (id: string) => void
  removeFavoriteHandler: (id: string) => void
  toggleFavorite: (id: string) => void
}

export const FavoriteContext = createContext<IFavorite>({
  ids: [],
  addFavoriteHandler: (id: string) => {},
  removeFavoriteHandler: (id: string) => {},
  toggleFavorite: (id: string) => {}
})

const FavoriteProvider: React.FC = ({ children }) => {
  const [ids, setIds] = useState<string[]>([])
  const addFavoriteHandler = (id: string) => {
    setIds([id, ...ids])
  }
  const removeFavoriteHandler = (id: string) => {
    setIds((prevIds) => {
      return prevIds.filter((idFavorite) => idFavorite !== id)
    })
  }

  const toggleFavorite = (id: string) => {
    const index = ids.indexOf(id)
    if (index > -1) {
      removeFavoriteHandler(id)
    } else {
      addFavoriteHandler(id)
    }
  }

  const valueFavorite: IFavorite = {
    ids,
    addFavoriteHandler,
    removeFavoriteHandler,
    toggleFavorite
  }

  return (
    <FavoriteContext.Provider value={valueFavorite}>
      {children}
    </FavoriteContext.Provider>
  )
}
export default FavoriteProvider
