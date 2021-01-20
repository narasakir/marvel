import { ACTION_TYPES } from './actions'

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.HERO_DETAILS_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        isError: false
      }
    case ACTION_TYPES.HERO_DETAILS_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isError: false,
        data: payload
      }
    case ACTION_TYPES.HERO_DETAILS_REQUEST_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        isError: true,
        error: payload
      }
    default:
      return state
  }
}

Reducer.initialState = {
  isFetching: true,
  isFetched: false,
  isError: false,
  error: null,
  data: null
}