import { ACTION_TYPES } from 'context/actions/heroes'

export const HeroesReducer = ({ heroes }, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.HEROES_REQUEST:
      return {
        ...heroes,
        isFetching: true,
        isFetched: false,
        isError: false,
        data: []
      }
    case ACTION_TYPES.HEROES_REQUEST_SUCCESS:
      return {
        ...heroes,
        isFetching: false,
        isFetched: true,
        isError: false,
        data: payload
      }
    case ACTION_TYPES.HEROES_REQUEST_ERROR:
      return {
        ...heroes,
        isFetching: false,
        isFetched: true,
        isError: true,
        data: [],
        error: payload
      }
    default:
      return heroes
  }
}

HeroesReducer.key = 'heroes'

HeroesReducer.initialState = {
  isFetching: true,
  isFetched: false,
  isError: false,
  error: null,
  data: []
}
