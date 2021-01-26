import styled from 'styled-components'
import HearthLiked from 'assets/icones/heart/hearth-liked.svg'
import HearthUnliked from 'assets/icones/heart/hearth-unliked.svg'

export const Card = styled.div`
    display: block;
    margin-bottom: ${({ theme }) => theme.space.medium};
`

export const CardImage = styled.img`
    width: 100%;
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.color.red};
`

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.space.regular} 0;
    align-items: center;
`

export const CardName = styled.h5`
    color: ${({ theme }) => theme.color.black};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.regular};
`

export const FavoriteIcon = styled.i`
    background: ${({ active }) => active 
        ? `url(${HearthLiked})` 
        : `url(${HearthUnliked})` } center no-repeat;
    display: block;
    width: 20px;
    height: 20px;
`