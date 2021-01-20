import { useEffect, useCallback } from 'react'
import { useContextConsumer } from 'context'
import { getByName, success, errorAction } from 'context/actions/heroes'
import { getHeroesByName } from 'services/heroes'

export const useSearchHero = ({ noEffects }) => {
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

  const fetchData = useCallback(async (name) => {
    dispatch(getByName())
    try {
      const { data: response } = await getHeroesByName(name)

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
