import styled from 'styled-components'

export const Container = styled.div`
    width: 960px;
    margin: 0 auto;
`
export const Page = styled.div`
    background: ${({theme}) => theme.color.lightgreen};
`
export const HeroPageHeaderContainer = styled(Container)`
    display: flex;
    margin-bottom: ${({ theme }) => theme.space.large};
    align-items: center;
    width: 1280px;

`
export const LogoContainer = styled.div`
    max-width: 250px;
    > svg {
        width: 100%;
    }
`
export const SearchContainer = styled.div`
    margin-left: 48px;
    width: 100%;
    max-width: 600px;
`

export const ContentContainer = styled(Container)`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.space.large};
`
export const Content = styled.div`
    display: block;
    max-width: 340px;
    margin-right: ${({ theme }) => theme.space.large};
`
export const HeroName = styled.h2`
    font-size: ${({ theme }) => theme.fontSize.large};
    color: ${({ theme }) => theme.color.black};
    font-weight: 700;
    text-transform: uppercase;
    margin-top: ${({ theme }) => theme.space.large};
    margin-bottom: ${({ theme }) => theme.space.medium};
    > svg {
        margin-left: ${({ theme }) => theme.space.medium};
    }
`
export const HeroDescription = styled.p`
    color: ${({ theme }) => theme.color.black};
    font-size: ${({ theme }) => theme.fontSize.regular};
    font-weight: 400;
    line-height: ${({ theme }) => theme.fontSize.medium};
    margin-bottom: ${({ theme }) => theme.space.medium};
`
export const HeroDetails = styled.div`
    display: block;
    font-weight: 500;
`

export const Image = styled.img`
    display: block;
`

export const InfoContainer = styled.div`
    display: flex;
`
export const Data = styled.div`
    display: block;
    margin-right: ${({ theme }) => theme.space.large};
    margin-bottom: ${({ theme }) => theme.space.regular};
    > p {
        margin-bottom: ${({ theme }) => theme.space.tiny};
    }

`
export const Paragraph = styled.p`
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: ${({ theme }) => theme.space.regular};
`

export const Title = styled.h4`
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.preLarge};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: ${({ theme }) => theme.space.large};
`

export const LastReleasedContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    column-gap: 48px;
    row-gap: 24px;
    margin: 0 auto;
    justify-content: center;
`