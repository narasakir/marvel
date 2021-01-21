import { useCallback } from 'react'
import { useContextConsumer } from 'context'
import { setOrderByNameAction, setFavoriteAction, setOnlyFavoriteAction } from 'context/actions/filters'
import { useHeroRequest } from './useHeroRequest'

export const useFilters = () => {
  const [{
        filters: {
            favorites,
            orderByName,
            showOnlyFavorites
        }
    }, dispatch] = useContextConsumer()

    const { fetchData } = useHeroRequest({ noEffects: true })

    const setOrderByName = useCallback(async () => {
        const orderBy = orderByName ? 'name' : '-modified' 
        dispatch(setOrderByNameAction(!orderByName))
        await fetchData(orderBy)
    }, [fetchData, orderByName, dispatch])

    const setIsFavorite = useCallback((heroId) => {
        dispatch(setFavoriteAction(heroId))
    }, [dispatch])

    const setShowOnlyFavorites = useCallback(() => {
        dispatch(setOnlyFavoriteAction(!showOnlyFavorites))
    }, [dispatch, showOnlyFavorites])


  return {
    favorites,
    orderByName,
    showOnlyFavorites,
    setOrderByName,
    setIsFavorite,
    setShowOnlyFavorites
  }
}
