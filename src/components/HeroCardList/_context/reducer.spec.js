import {
  setValue,
  setKeep
} from './actions'

import { Reducer } from './reducer'

describe('Reducer: ModalAllocation', () => {
  it('Should handle with default reduce state', () => {
    expect(
      Reducer(Reducer.initialState, { type: undefined })
    ).toEqual(Reducer.initialState)
  })

  it('Should handle with SET_ALLOCATION_VALUE reduce state', () => {
    expect(Reducer(Reducer.initialState, setValue(3000))).toEqual({
      keep: false,
      tolerance: 3000
    })
  })

  it('Should handle with SET_KEEP_ALLOCATION reduce state', () => {
    expect(Reducer(Reducer.initialState, setKeep(true))).toEqual({
      keep: true,
      tolerance: null
    })
  })
})
