import React from 'react'
import {
    Card,
    CardImage,
    CardContent,
    CardName,
    FavoriteIcon
} from './HeroCard.style'

export const HeroCard = () => {
    return (
        <Card>
            <CardImage src='https://dummyimage.com/200x200/000/fff' />
            <CardContent>
                <CardName>Nome do Heroi</CardName>
                <FavoriteIcon />
            </CardContent>
        </Card>
    )
}
