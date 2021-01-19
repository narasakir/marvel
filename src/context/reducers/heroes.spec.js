import {
  get,
  success,
  errorAction
} from 'context/actions/heroes'

import { HeroesReducer } from './heroes'

describe('REDUCER: HeroesReducer', () => {
  it('Should handle with default reduce state', () => {
    expect(
      HeroesReducer({ patrimony: HeroesReducer.initialState }, { type: undefined })
    ).toEqual(HeroesReducer.initialState)
  })

  it('Should handle with HEROES_REQUEST reduce state', () => {
    expect(HeroesReducer({ patrimony: HeroesReducer.initialState }, get())).toEqual({
      isFetching: true,
      isFetched: false,
      isSuccess: false,
      isError: false,
      error: null,
      data: null
    })
  })

  it('Should handle with HEROES_REQUEST_SUCCESS reduce state', () => {
    expect(HeroesReducer({
      patrimony: HeroesReducer.initialState
    }, success({data: 'data'}))).toEqual({
      isFetching: false,
      isFetched: true,
      isSuccess: true,
      isError: false,
      error: null,
      data: 'data'
    })
  })

  it('Should handle with HEROES_REQUEST_ERROR reduce state', () => {
    expect(HeroesReducer(
      HeroesReducer.initialState,
      errorAction('error message')
    )).toEqual({
      isFetching: false,
      isFetched: true,
      isSuccess: false,
      isError: true,
      error: 'error message'
    })
  })
})
