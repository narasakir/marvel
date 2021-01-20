import React from 'react'
import {
    Card,
    CardImage,
    CardContent,
    CardName
} from './LastReleasedCard.style'

export const LastReleasedCard = ({ data }) => {
    return (
        <Card>
            <CardImage src='https://dummyimage.com/115x140/000/fff' />
            <CardContent>
                <CardName>{data.name}</CardName>
            </CardContent>
        </Card>
    )
}