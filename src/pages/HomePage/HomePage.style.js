import styled from 'styled-components'
import ToggleActive from 'assets/toggle/active.svg'
import ToggleUnactive from 'assets/toggle/unactive.svg'

export const Container = styled.div`
    display: block;
    width: 960px;
`
export const Header = styled.header`
    display: block;
    text-align: center;
    margin: ${({ theme }) => theme.space.regular} 0;
`

export const HeaderTitle = styled.h3`
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.space.thin};
    text-transform: uppercase;
`

export const HeaderSubtitle = styled.h4`
    color: ${({ theme }) => theme.color.grey};
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.space.large};
`

export const SearchContainer = styled(Container)`
    margin: 0 auto ${({ theme }) => theme.space.large};
    width: 720px;
`

export const CardContainer = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 48px;
    row-gap: 24px;
    margin: 0 auto;
`

export const Footer = styled.div`
    display: block;
    height: ${({ theme }) => theme.space.large};
    background: ${({ theme }) => theme.color.red};
`

export const CardFiltersContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: ${({ theme }) => theme.space.preLarge};
`

export const FiltersContainer = styled.div`
    display: flex;
`
export const FilterText = styled.p`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.red};
    font-size: ${({ theme }) => theme.fontSize.thin};
    > svg {
        margin-right: ${({ theme }) => theme.space.thin};
    }
`

export const FilterTextButton = styled(FilterText)`
    cursor: pointer;
`

export const Toggle = styled.div`
    background: url(${({ active }) => active ? ToggleUnactive : ToggleActive}) no-repeat;
    background-size: contain;
    height: 30px;
    width: 55px;
    margin: 0 ${({ theme }) => theme.space.thin};
    cursor: pointer;
`