import { useEffect, useCallback } from 'react'
import { useContextConsumer } from 'context'
import { get, success, errorAction } from './_context/actions'
import { getHero } from 'services/heroes'

export const useHeroDetailRequest = ({ noEffects, heroId }) => {
  const [{
    heroes: {
      isFetching,
      isFetched,
      isSuccess,
      isError,
      data,
      error
    }
  }, dispatch] = useContextConsumer()

  const fetchData = useCallback(async () => {
    dispatch(get(heroId))
    try {
      const { data: response } = await getHero(heroId)

      dispatch(success(response))
    } catch (fetchError) {
      dispatch(errorAction(fetchError))
    }
  }, [dispatch])

  useEffect(() => {
    if (noEffects) return
    fetchData()
  }, [fetchData, noEffects])

  return {
    isFetching,
    isFetched,
    isSuccess,
    isError,
    data,
    fetchData,
    error
  }
}
