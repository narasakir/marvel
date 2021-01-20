export const ACTION_TYPES = {
  HERO_DETAILS_REQUEST: 'HERO_DETAILS_REQUEST',
  HERO_DETAILS_REQUEST_SUCCESS: 'HERO_DETAILS_REQUEST_SUCCESS',
  HERO_DETAILS_REQUEST_ERROR: 'HERO_DETAILS_REQUEST_ERROR'
}

export const getAction = () => ({
  type: ACTION_TYPES.HERO_DETAILS_REQUEST
})

export const successAction = payload => ({
  type: ACTION_TYPES.HERO_DETAILS_REQUEST_SUCCESS,
  payload: payload.data.results[0]
})

export const errorAction = error => ({
  type: ACTION_TYPES.HERO_DETAILS_REQUEST_ERROR,
  payload: error
})
