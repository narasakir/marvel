import React from 'react'
import {
    Card,
    CardImage,
    CardContent,
    CardName,
    FavoriteIcon
} from './HeroCard.style'

export const HeroCard = ({ data, onSetIsFavorite, isFavorite }) => {
    return (
        <Card>
            <CardImage 
                src={`${data.thumbnail.path}.${data.thumbnail.extension}`} 
                alt={`thumbnail ${data.name}`} 
                title={data.name}
            />
            <CardContent>
                <CardName to={`/hero/${data.id}`}>{data.name}</CardName>
                <FavoriteIcon active={isFavorite} onClick={onSetIsFavorite}/>
            </CardContent>
        </Card>
    )
}
