export const ACTION_TYPES = {
  HEROES_REQUEST: 'HEROES_REQUEST',
  HEROES_REQUEST_BY_NAME: 'HEROES_REQUEST_BY_NAME',
  HEROES_REQUEST_SUCCESS: 'HEROES_REQUEST_SUCCESS',
  HEROES_REQUEST_ERROR: 'HEROES_REQUEST_ERROR'
}

export const get = () => ({
  type: ACTION_TYPES.HEROES_REQUEST
})

export const getByName = () => ({
  type: ACTION_TYPES.HEROES_REQUEST_BY_NAME
})

export const success = payload => ({
  type: ACTION_TYPES.HEROES_REQUEST_SUCCESS,
  payload: payload.data
})

export const errorAction = error => ({
  type: ACTION_TYPES.HEROES_REQUEST_ERROR,
  payload: error
})
