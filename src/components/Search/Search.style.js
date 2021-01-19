import styled from 'styled-components'
import Lupa from 'assets/busca/Lupa/Shape@1,5x.svg'

export const SearchInput = styled.input`
    display: block;
    background: url(${Lupa}) ${({ theme, secondary }) => !secondary ? theme.color.lightred : theme.color.white} no-repeat 15px 12px;
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