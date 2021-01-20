import { useHeroPageContextConsumer } from 'pages/HeroPage/_context'

export const useLastReleasedCardList = () => {
    const [{
        data
      }] = useHeroPageContextConsumer()

    return {
        cardList: data.comics.items
    }
}
