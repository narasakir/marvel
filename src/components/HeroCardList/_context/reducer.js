import { ACTION_TYPES } from './actions'

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_ALLOCATION_VALUE:
      return {
        ...state,
        tolerance: payload
      }
    case ACTION_TYPES.SET_KEEP_ALLOCATION:
      return {
        ...state,
        keep: payload
      }

    default:
      return state
  }
}

Reducer.initialState = {
  keep: false,
  tolerance: null
}
