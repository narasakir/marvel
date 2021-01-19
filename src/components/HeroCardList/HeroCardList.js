import React from 'react'
import { HeroCard } from 'components/HeroCard'
import { useHeroCardList } from './HeroCardList.hook'

export const HeroCardList = () => {
    const { cardList } = useHeroCardList()
    
    return cardList.map(card => (
        <HeroCard data={card} />
    ))
}
