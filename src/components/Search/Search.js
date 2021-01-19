import React from 'react'
import { SearchInput } from './Search.style'

export const Search = ({ secondary }) => {
    return (
        <SearchInput secondary={secondary} placeholder='Procurar por heróis' />
    )
}
