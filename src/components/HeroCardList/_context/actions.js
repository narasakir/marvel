export const ACTION_TYPES = {
  SET_ALLOCATION_VALUE: 'SET_ALLOCATION_VALUE',
  SET_KEEP_ALLOCATION: 'SET_KEEP_ALLOCATION'
}

export const setValue = payload => ({
  type: ACTION_TYPES.SET_ALLOCATION_VALUE,
  payload
})

export const setKeep = payload => ({
  type: ACTION_TYPES.SET_KEEP_ALLOCATION,
  payload
})
