import React, { createContext, useContext, useReducer } from 'react'
import { func, node, object } from 'prop-types'

export const StateContext = createContext()

export const StateContextProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useContextConsumer = () => useContext(StateContext)

StateContextProvider.propTypes = {
  reducer: func.isRequired,
  initialState: object.isRequired,
  children: node.isRequired
}
