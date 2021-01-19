import * as AllReducers from './reducers'

export const ReducerList = Object.keys(AllReducers).map(item => AllReducers[item])

export const InitialState = ReducerList.reduce((aggr, current) => {
  return { ...aggr, [current.key]: current.initialState }
}, {})

export const StateReducer = (state = InitialState, action) => {
  return ReducerList.reduce((aggr, current) => {
    return {
      ...aggr,
      [current.key]: current(state, action)
    }
  }, {})
}
