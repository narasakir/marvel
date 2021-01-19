import React from 'react'
import {
    Card,
    CardImage,
    CardContent,
    CardName
} from './LastReleasedCard.style'

export const LastReleasedCard = () => {
    return (
        <Card>
            <CardImage src='https://dummyimage.com/115x140/000/fff' />
            <CardContent>
                <CardName>Nome do Heroi</CardName>
            </CardContent>
        </Card>
    )
}