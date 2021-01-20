import React, { useState } from 'react'
import { SearchInput, SearchContainer, ButtonSearch } from './Search.style'

export const Search = ({ secondary, action }) => {
    const [value, setValue] = useState('')
    return (
        <SearchContainer>
            <SearchInput 
                secondary={secondary} 
                placeholder='Procurar por heróis'
                onChange={e => setValue(e.target.value)}
            />
            <ButtonSearch onClick={() => action(value)}></ButtonSearch>
        </SearchContainer>
    )
}
