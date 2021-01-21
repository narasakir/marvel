import React from 'react'
import { HeroCard } from 'components/HeroCard'
import { useHeroCardList } from './HeroCardList.hook'
import { useFilters } from 'hooks/useFilters'

export const HeroCardList = () => {
    const { cardList } = useHeroCardList()
    const { setIsFavorite, favorites, showOnlyFavorites } = useFilters()
    
    return showOnlyFavorites 
    ? cardList.filter(card => favorites.includes(card.id)).map(card => (
        <HeroCard data={card} key={card.id} isFavorite={favorites.includes(card.id)} onSetIsFavorite={() => setIsFavorite(card.id)} />
    )) 
    : cardList.map(card => (
        <HeroCard data={card} key={card.id} isFavorite={favorites.includes(card.id)} onSetIsFavorite={() => setIsFavorite(card.id)} />
    ))
}
