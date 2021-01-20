import styled from 'styled-components'
import Lupa from 'assets/busca/Lupa/Shape@1,5x.svg'

export const SearchInput = styled.input`
    display: block;
    background: ${({ theme, secondary }) => !secondary ? theme.color.lightred : theme.color.white};
    border-radius: ${({ theme }) => theme.space.large};
    margin-bottom: ${({ theme }) => theme.space.regular};
    height: 44px;
    border: none;
    width: 100%;
    padding-left: ${({ theme }) => theme.space.superLarge};
    color: ${({ theme, secondary }) => !secondary ? theme.color.red : theme.color.black};
    
    &:focus{
        outline: none;
    }

    &::placeholder{
        color: ${({ theme, secondary }) => !secondary ? theme.color.red : theme.color.black};
    }
`

export const SearchContainer = styled.div`
    display: block;
    position: relative;
`

export const ButtonSearch = styled.button`
    background: url(${Lupa}) no-repeat center center;
    width: 55px;
    height: 44px;
    position: absolute;
    border: none;
    left: 0; 
    top: 0;
    cursor: pointer;
`