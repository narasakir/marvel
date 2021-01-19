import styled from 'styled-components'

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

export const SearchContainer = styled.div`
    display: block;
    margin: 0 auto ${({ theme }) => theme.space.large};
    width: 720px;
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    column-gap: 48px;
    row-gap: 24px;
    width: 960px;
    margin: 0 auto;
`

export const Footer = styled.div`
    display: block;
    height: ${({ theme }) => theme.space.large};
    background: ${({ theme }) => theme.color.red};
`