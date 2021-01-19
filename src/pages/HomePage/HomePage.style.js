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
    margin-bottom: ${({ theme }) => theme.space.thin};
`