import React from 'react'
import { LastReleasedCard } from 'components/LastReleasedCard'
import { useLastReleasedCardList } from './LastReleasedCardList.hook'

export const LastReleasedCardList = () => {
    const { cardList } = useLastReleasedCardList()
    
    return cardList.map(card => (
        <LastReleasedCard data={card} />
    ))
}
