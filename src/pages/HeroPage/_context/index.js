import React, { createContext, useContext, useReducer } from 'react'
import { node } from 'prop-types'

import { Reducer } from './reducer'

export const HeroPageContext = createContext()

export const HeroPageContextProvider = ({ children }) => (
  <HeroPageContext.Provider value={useReducer(Reducer, Reducer.initialState)}>
    {children}
  </HeroPageContext.Provider>
)

export const useHeroPageContextConsumer = () => useContext(HeroPageContext)

HeroPageContextProvider.propTypes = {
  children: node.isRequired
}
