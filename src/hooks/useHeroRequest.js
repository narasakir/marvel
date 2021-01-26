import { useEffect, useCallback } from 'react'
import { useContextConsumer } from 'context'
import { get, success, errorAction } from 'context/actions/heroes'
import { get as getHeroes } from 'services/heroes'

export const useHeroRequest = ({ noEffects }) => {
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

  const fetchData = useCallback(async orderBy => {
    dispatch(get())
    try {
      const { data: response } = await getHeroes(orderBy)

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
