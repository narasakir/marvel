import { useEffect, useCallback } from 'react'
import {
    getAction, errorAction, successAction
} from './_context/actions'
import { useHeroPageContextConsumer } from './_context'
import { getHero } from 'services/heroes'

export const useHeroPage = ({ noEffects, heroId }) => {
    console.log({ heroId })
  const [{
    isFetching,
    isFetched,
    isSuccess,
    isError,
    data,
    error
  }, dispatch] = useHeroPageContextConsumer()

  const fetchData = useCallback(async () => {
    dispatch(getAction(heroId))
    try {
      const { data: response } = await getHero(heroId)

      dispatch(successAction(response))
    } catch (fetchError) {
      dispatch(errorAction(fetchError))
    }
  }, [heroId, dispatch])

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
