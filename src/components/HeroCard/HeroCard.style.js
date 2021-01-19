import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HearthLiked from 'assets/icones/heart/hearth-liked.svg'
import HearthUnliked from 'assets/icones/heart/hearth-unliked.svg'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 200px;
    margin-bottom: ${({ theme }) => theme.space.medium};
`

export const CardImage = styled.img`
    display: block;
    border-bottom: 2px solid ${({ theme }) => theme.color.red};
    width: 100%;
    height: 200px;
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;
`

export const CardName = styled(Link)`
    color: ${({ theme }) => theme.color.black};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.regular};
    text-decoration: none;
    transition: all ease 0.3s;
    display: block;
    width: 100%;
    padding: ${({ theme }) => theme.space.regular} 0;
    &:hover {
        color: ${({ theme }) => theme.color.red};
    }
`

export const FavoriteIcon = styled.i`
    background: ${({ active }) => active 
        ? `url(${HearthLiked})` 
        : `url(${HearthUnliked})` } center no-repeat;
    display: block;
    width: 23px;
    height: 20px;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover {
        background: url(${HearthLiked}) center no-repeat;
    }
`