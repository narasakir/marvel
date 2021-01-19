import { useContextConsumer } from 'context'

export const useHeroCardList = () => {
    const [{
        heroes: {
          data
        }
      }] = useContextConsumer()

    return {
        cardList: data.results
    }
}
