import React, { createContext, useContext, useReducer } from 'react'
import { node } from 'prop-types'

import { Reducer } from './reducer'

export const ModalAllocationContext = createContext()

export const ModalAllocationContextProvider = ({ children }) => (
  <ModalAllocationContext.Provider value={useReducer(Reducer, Reducer.initialState)}>
    {children}
  </ModalAllocationContext.Provider>
)

export const useModalAllocationContextConsumer = () => useContext(ModalAllocationContext)

ModalAllocationContextProvider.propTypes = {
  children: node.isRequired
}
